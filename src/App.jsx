import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Search, Plus, Minus, ShoppingCart, AlertTriangle, X, Download, Printer, RefreshCw, Layers,
  ShieldAlert, Clock, ArrowUpDown, ChevronLeft, ChevronRight, Edit3, FolderGit2, Copy, Sun, Moon,
  Pill, CheckCircle2, Receipt, Boxes, LayoutGrid, List, Sparkles, PackagePlus, ArrowUpRight, Command,
  FileCheck2, Wand2, HomeIcon, Trash2, PanelLeftClose, PanelLeftOpen, Bell, Keyboard, Truck,
  SettingsIcon, RotateCcw, Menu, Upload, FileSpreadsheet
} from './components/icons';
import {
  formatNaira, TallManName, CLINICAL_CATEGORIES, generateInitialCatalog, DRUG_FAMILIES
} from './data/catalogData';
import { ACCENT_THEMES } from './theme/theme';
import { ARCHITECTURE_FILES } from './data/architectureDocs';
import { IMPORT_FIELD_DEFS, SAMPLE_IMPORT_CSV, parseDelimitedText, autoDetectColumnMap, normalizeImportedRow } from './utils/importer';
import {
  DosageFormIcon, PackTypeDoodle, KpiDoodleIllustration, HeroApothecaryBanner,
  EmptyPosCounterIllustration, DispensedStampDoodle
} from './components/pharmacyDoodles';
import { calculateInventoryMetrics, updateStock, quarantineExpiredStock } from './services/inventoryDatabase';
export default function App() {
  useEffect(() => {
    const linkId = 'pharmacore-google-fonts-v2';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    // Load SheetJS (xlsx) so binary .xlsx and .xls Excel files parse natively in the browser
    const xlsxScriptId = 'pharmacore-sheetjs-cdn';
    if (!document.getElementById(xlsxScriptId)) {
      const script = document.createElement('script');
      script.id = xlsxScriptId;
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [accentKey, setAccentKey] = useState('teal');
  const [doodlesEnabled, setDoodlesEnabled] = useState(true);
  const theme = ACCENT_THEMES[accentKey] || ACCENT_THEMES.teal;

  // Collapsible vertical sidebar & multi-page navigation state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'inventory' | 'pos' | 'suppliers' | 'safety' | 'codebase' | 'settings'
  const [selectedCodeFileIdx, setSelectedCodeFileIdx] = useState(0);
  const [posSubTab, setPosSubTab] = useState('terminal'); // 'terminal' | 'invoices'
  const [catalogViewMode, setCatalogViewMode] = useState('grid');

  const handleDownloadCodeFile = useCallback((fileObj) => {
    const filename = fileObj.path.split('/').pop() || 'module.js';
    const blob = new Blob([fileObj.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const handleDownloadAllProjectFiles = useCallback(() => {
    const bundleText = ARCHITECTURE_FILES.map(
      (f) =>
        `================================================================================\nFILE: ${f.path}\nROLE: ${f.role}\nSUMMARY: ${f.summary}\n================================================================================\n\n${f.code}\n\n`
    ).join('\n');
    const blob = new Blob([bundleText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pharmacore-multifile-project-bundle.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  // Pharmacy profile for invoices & receipts
  const [pharmacyProfile, setPharmacyProfile] = useState({
    name: 'A&O Pharmaceutical Company Ltd',
    licenseNumber: 'PCN-AO-2026-1015',
    pharmacistOnDuty: 'Superintendent Pharmacist (A&O)',
    phone: '+234 (0) 809-555-0192',
    address: 'Nigeria • Inventory Manifest (2026-10-15)'
  });

  const [catalog, setCatalog] = useState(() => generateInitialCatalog());

  // Inventory filters & delete confirmation state
  const [invSearch, setInvSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [supplierFilter, setSupplierFilter] = useState('ALL');
  const [formFilter, setFormFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [rxFilter, setRxFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('genericName');
  const [sortDir, setSortDir] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);

  const [compareFamilyCode, setCompareFamilyCode] = useState(null);
  const [editingDrug, setEditingDrug] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [drugToDelete, setDrugToDelete] = useState(null);
  const [selectedDrugIds, setSelectedDrugIds] = useState([]);

  // Excel (.xlsx/.xls) & CSV Inventory Import Studio state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importSourceTab, setImportSourceTab] = useState('upload'); // 'upload' | 'paste'
  const [importFileName, setImportFileName] = useState('');
  const [importSheetNames, setImportSheetNames] = useState([]);
  const [selectedSheetName, setSelectedSheetName] = useState('');
  const [importWorkbookRef, setImportWorkbookRef] = useState(null);
  const [importHeaders, setImportHeaders] = useState([]);
  const [importRawRows, setImportRawRows] = useState([]);
  const [importColumnMap, setImportColumnMap] = useState({});
  const [importDuplicateStrategy, setImportDuplicateStrategy] = useState('ADD_STOCK'); // 'ADD_STOCK' | 'OVERWRITE' | 'ALWAYS_NEW'
  const [importExcludedRows, setImportExcludedRows] = useState({});
  const [importPasteText, setImportPasteText] = useState('');
  const [showColumnMapper, setShowColumnMapper] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const fileInputRef = useRef(null);

  // Home Page Pharmacist Reminders & Daily Shift Tasks
  const [reminders, setReminders] = useState([
    {
      id: 'rem-1',
      title: 'Log Cold-Chain Fridge F-01 & F-02 temperature (target 2°C – 8°C)',
      time: '08:30 AM',
      priority: 'High',
      category: 'Cold Chain',
      done: false
    },
    {
      id: 'rem-2',
      title: 'Verify Controlled Substances Vault C-01 physical count (Pregabalin)',
      time: '11:00 AM',
      priority: 'High',
      category: 'Compliance',
      done: false
    },
    {
      id: 'rem-3',
      title: 'Counsel follow-up patient on Augmentin 625mg 7-day completion course',
      time: '02:15 PM',
      priority: 'Normal',
      category: 'Clinical',
      done: true
    },
    {
      id: 'rem-4',
      title: 'Approve wholesale restock Purchase Order #PO-2026-109 for Antibiotics',
      time: '04:30 PM',
      priority: 'Normal',
      category: 'Procurement',
      done: false
    }
  ]);
  const [newReminderText, setNewReminderText] = useState('');
  const [newReminderPriority, setNewReminderPriority] = useState('Normal');

  // Suppliers & Purchase Orders state
  const [purchaseOrders, setPurchaseOrders] = useState([
    {
      id: 'PO-AO-2026-109',
      supplier: 'SANTUS & GJ Pharmaceutical Distributors',
      createdDate: '2026-10-15',
      expectedDate: '2026-10-17',
      status: 'PENDING_DELIVERY',
      itemsCount: 38,
      estimatedCost: 485000,
      notes: 'Section 1 Zero-Stock Replenishment (Augmentin, Amatem X12, Benylin, Dalacin-C)'
    },
    {
      id: 'PO-AO-2026-108',
      supplier: 'PHARMATON & Shelflife Wholesale',
      createdDate: '2026-10-12',
      expectedDate: '2026-10-14',
      status: 'RECEIVED',
      itemsCount: 24,
      estimatedCost: 312000,
      notes: 'Ciprotab, Astymin, Amlodipine & Multivitamin restock'
    }
  ]);

  const [posSearch, setPosSearch] = useState('');
  const [posCategory, setPosCategory] = useState('ALL');
  const [invoiceSearch, setInvoiceSearch] = useState('');
  const [invoicePaymentFilter, setInvoicePaymentFilter] = useState('ALL');

  const [cart, setCart] = useState(() => {
    const initialCatalog = generateInitialCatalog();
    const item1 = initialCatalog.find((i) => i.sku === '141') || initialCatalog[0];
    const item2 = initialCatalog.find((i) => i.sku === '38') || initialCatalog[1];
    return [
      {
        lineKey: `${item1.id}__PACK`,
        drug: item1,
        dispenseMode: 'PACK',
        unitLabel: item1.packSize,
        unitPrice: item1.sellingPrice,
        packDeductionPerItem: 1,
        qty: 1
      },
      {
        lineKey: `${item2.id}__PACK`,
        drug: item2,
        dispenseMode: 'PACK',
        unitLabel: item2.packSize,
        unitPrice: item2.sellingPrice,
        packDeductionPerItem: 1,
        qty: 2
      }
    ];
  });
  const [rxVerified, setRxVerified] = useState(false);
  const [prescriberNote, setPrescriberNote] = useState('');
  const [patientName, setPatientName] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Card / POS');
  const [expiryOverrideConfirmed, setExpiryOverrideConfirmed] = useState(false);
  const [lastReceipt, setLastReceipt] = useState(null);

  const [salesHistory, setSalesHistory] = useState([
    {
      id: 'INV-2026-8841',
      timestamp: '2026-10-15 09:14',
      patientName: 'Chidi Nwosu',
      prescriberNote: 'Dr. Adeyemi (Rx #4419)',
      paymentMethod: 'Card / POS',
      status: 'PAID',
      itemsCount: 4,
      subtotal: 40400,
      discountAmount: 0,
      total: 40400,
      lines: [
        {
          sku: 'AUGM-625MG-11-1042',
          name: 'Amoxicillin + Clavulanic Acid (Augmentin)',
          variant: '625mg • Film-Coated Tablet • 10s Blister',
          mode: 'PACK',
          qty: 2,
          unitPrice: 18000,
          lineTotal: 36000
        },
        {
          sku: 'PARA-500MG-12-1089',
          name: 'Paracetamol (Panadol Extra)',
          variant: '500mg • Caplet • 10s Blister',
          mode: 'PACK',
          qty: 2,
          unitPrice: 2200,
          lineTotal: 4400
        }
      ]
    },
    {
      id: 'INV-2026-8842',
      timestamp: '2026-10-15 11:32',
      patientName: 'Amina Bello',
      prescriberNote: 'OTC Pharmacist Consult',
      paymentMethod: 'Transfer',
      status: 'PAID',
      itemsCount: 2,
      subtotal: 16350,
      discountAmount: 0,
      total: 16350,
      lines: [
        {
          sku: 'OMEP-20MG-11-1410',
          name: 'Omeprazole (Losec MUPS)',
          variant: '20mg • Delayed-Release Capsule • 28s Calendar Pack',
          mode: 'PACK',
          qty: 1,
          unitPrice: 13500,
          lineTotal: 13500
        },
        {
          sku: 'CETI-10MG-11-1620',
          name: 'Cetirizine (Zyrtec)',
          variant: '10mg • Film-Coated Tablet • 10s Blister',
          mode: 'PACK',
          qty: 1,
          unitPrice: 2850,
          lineTotal: 2850
        }
      ]
    }
  ]);

  const [toast, setToast] = useState(null);
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3400);
  }, []);

  const posSearchInputRef = useRef(null);
  const invSearchInputRef = useRef(null);

  const openNewDrugModal = useCallback(() => {
    setIsAddingNew(true);
    setEditingDrug({
      id: `sku-${Date.now()}`,
      sku: `APOTH-${Math.floor(1000 + Math.random() * 9000)}`,
      lasaGroup: 'CUSTOM',
      genericName: '',
      brandName: '',
      category: 'Antibiotics',
      strength: '500mg',
      dosageForm: 'Capsule',
      releaseType: 'Immediate',
      packSize: '10s Blister',
      unitsPerPack: 10,
      batchNumber: 'BN26X99',
      expiryDate: '2028-06-30',
      shelfLocation: 'Bay A-01',
      stockQty: 50,
      reorderLevel: 15,
      costPrice: 3200,
      sellingPrice: 4500,
      rxRequired: true
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isInputFocused =
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT';

      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      const isSlash = e.key === '/' && !isInputFocused;

      if (isCmdK || isSlash) {
        e.preventDefault();
        if (activePage === 'inventory') {
          invSearchInputRef.current?.focus();
        } else {
          setActivePage('pos');
          setPosSubTab('terminal');
          setTimeout(() => posSearchInputRef.current?.focus(), 60);
        }
        return;
      }

      if (!isInputFocused && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === '1') setActivePage('home');
        if (e.key === '2') setActivePage('inventory');
        if (e.key === '3') {
          setActivePage('pos');
          setPosSubTab('terminal');
        }
        if (e.key === '4') {
          setActivePage('pos');
          setPosSubTab('invoices');
        }
        if (e.key === '5') setActivePage('suppliers');
        if (e.key === '6') setActivePage('safety');
        if (e.key.toLowerCase() === 'n') {
          e.preventDefault();
          openNewDrugModal();
        }
        if (e.key.toLowerCase() === 'i') {
          e.preventDefault();
          setIsImportModalOpen(true);
        }
        if (e.key === '[') {
          setIsSidebarCollapsed((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, openNewDrugModal]);

  useEffect(() => {
    setCurrentPage(1);
  }, [invSearch, categoryFilter, supplierFilter, formFilter, statusFilter, rxFilter, pageSize]);


  const loadParsedDataIntoStaging = useCallback((headers, rows, sourceLabel) => {
    setImportHeaders(headers);
    setImportRawRows(rows);
    setImportColumnMap(autoDetectColumnMap(headers));
    setImportExcludedRows({});
    setImportFileName(sourceLabel);
  }, []);

  const extractSheetRows = useCallback(
    (workbook, sheetName, fileLabel) => {
      if (!window.XLSX || !workbook) return;
      const worksheet = workbook.Sheets[sheetName];
      if (!worksheet) return;
      const matrix = window.XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
      const nonEmptyRows = matrix.filter((r) => Array.isArray(r) && r.some((cell) => String(cell).trim() !== ''));
      if (nonEmptyRows.length === 0) {
        showToast('The selected Excel worksheet is empty.', 'error');
        return;
      }
      const headers = nonEmptyRows[0].map((h, i) => String(h || `Column_${i + 1}`).trim());
      const rows = nonEmptyRows.slice(1).map((r) => {
        const obj = {};
        headers.forEach((h, idx) => {
          obj[h] = r[idx] !== undefined ? r[idx] : '';
        });
        return obj;
      });
      loadParsedDataIntoStaging(headers, rows, `${fileLabel} (${sheetName})`);
      showToast(`Parsed ${rows.length} medication rows from "${sheetName}".`, 'success');
    },
    [loadParsedDataIntoStaging, showToast]
  );

  const handleImportFileSelect = useCallback(
    (file) => {
      if (!file) return;
      const ext = file.name.split('.').pop()?.toLowerCase() || '';

      if (ext === 'csv' || ext === 'tsv' || ext === 'txt') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result;
          if (typeof content === 'string') {
            const { headers, rows } = parseDelimitedText(content);
            if (rows.length === 0) {
              showToast('No valid data rows found in the CSV file.', 'error');
              return;
            }
            setImportSheetNames([]);
            setImportWorkbookRef(null);
            loadParsedDataIntoStaging(headers, rows, file.name);
            showToast(`Loaded ${rows.length} rows from ${file.name}`, 'success');
          }
        };
        reader.readAsText(file);
        return;
      }

      if (ext === 'xlsx' || ext === 'xls') {
        if (!window.XLSX) {
          showToast('Excel parser is initializing—please try again in a moment or upload a .csv file.', 'error');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = window.XLSX.read(data, { type: 'array' });
            const sheets = workbook.SheetNames || [];
            if (sheets.length === 0) {
              showToast('No worksheets found inside the Excel file.', 'error');
              return;
            }
            setImportWorkbookRef(workbook);
            setImportSheetNames(sheets);
            setSelectedSheetName(sheets[0]);
            extractSheetRows(workbook, sheets[0], file.name);
          } catch (err) {
            showToast('Could not read Excel workbook. Please verify the file format.', 'error');
          }
        };
        reader.readAsArrayBuffer(file);
        return;
      }

      showToast('Unsupported file extension. Please upload an .xlsx, .xls, .csv, or .tsv file.', 'error');
    },
    [extractSheetRows, loadParsedDataIntoStaging, showToast]
  );

  const handleLoadSampleManifest = useCallback(() => {
    const { headers, rows } = parseDelimitedText(SAMPLE_IMPORT_CSV);
    setImportSheetNames([]);
    setImportWorkbookRef(null);
    loadParsedDataIntoStaging(headers, rows, 'Sample_Supplier_Delivery_Manifest.csv');
    showToast('Loaded 6 sample supplier invoice rows (1 existing SKU restock + 5 new variants).', 'info');
  }, [loadParsedDataIntoStaging, showToast]);

  const handleDownloadTemplate = useCallback(() => {
    const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURI(SAMPLE_IMPORT_CSV);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'pharmacore_inventory_import_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloaded PharmaCore Excel/CSV import template.', 'success');
  }, [showToast]);

  const stagedImportItems = useMemo(() => {
    if (importRawRows.length === 0) return [];
    return importRawRows.map((raw, idx) => normalizeImportedRow(raw, importColumnMap, idx, catalog));
  }, [importRawRows, importColumnMap, catalog]);

  const handleCommitImportedRows = () => {
    const activeItems = stagedImportItems.filter((_, idx) => !importExcludedRows[idx]);
    if (activeItems.length === 0) {
      showToast('No rows selected to import.', 'error');
      return;
    }

    let addedNewCount = 0;
    let updatedExistingCount = 0;

    setCatalog((prevCatalog) => {
      const updatedCatalog = [...prevCatalog];
      const newEntries = [];

      activeItems.forEach((staged) => {
        const cleanItem = { ...staged };
        delete cleanItem._existingMatch;
        delete cleanItem._warnings;

        if (staged._existingMatch && importDuplicateStrategy !== 'ALWAYS_NEW') {
          const targetIdx = updatedCatalog.findIndex((c) => c.id === staged._existingMatch.id);
          if (targetIdx > -1) {
            const existing = updatedCatalog[targetIdx];
            const nextStock =
              importDuplicateStrategy === 'ADD_STOCK'
                ? existing.stockQty + cleanItem.stockQty
                : cleanItem.stockQty;
            updatedCatalog[targetIdx] = {
              ...existing,
              ...cleanItem,
              id: existing.id,
              sku: existing.sku,
              stockQty: nextStock
            };
            updatedExistingCount++;
            return;
          }
        }

        // Ensure unique ID and SKU when adding as a brand-new item
        const uniqueId = `sku-imp-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        const uniqueSku =
          importDuplicateStrategy === 'ALWAYS_NEW' && staged._existingMatch
            ? `${cleanItem.sku}-B${Math.floor(10 + Math.random() * 89)}`
            : cleanItem.sku;

        newEntries.push({
          ...cleanItem,
          id: uniqueId,
          sku: uniqueSku
        });
        addedNewCount++;
      });

      return [...newEntries, ...updatedCatalog];
    });

    setIsImportModalOpen(false);
    setImportRawRows([]);
    setImportHeaders([]);
    setImportFileName('');
    setActivePage('inventory');
    showToast(
      `Import Complete: ${addedNewCount} new variants registered & ${updatedExistingCount} existing SKUs updated.`,
      'success'
    );
  };

  const categories = useMemo(() => {
    return ['ALL', ...CLINICAL_CATEGORIES];
  }, []);

  const suppliersList = useMemo(() => {
    const set = new Set(catalog.map((d) => d.supplier).filter(Boolean));
    return ['ALL', ...Array.from(set).sort()];
  }, [catalog]);

  const dosageForms = useMemo(
    () => [
      'ALL',
      'Tablet / Sachet',
      'Capsule / Softgel',
      'Syrup / Suspension',
      'Cream / Ointment / Gel',
      'Injectable / Syringe',
      'Drops',
      'MDI Inhaler',
      'Lozenges',
      'IV Infusion',
      'Oral Sachet / Powder',
      'Medical Consumable / Device'
    ],
    []
  );

  const kpiStats = useMemo(() => {
    return calculateInventoryMetrics(catalog, salesHistory);
  }, [catalog, salesHistory]);

  const filteredInventory = useMemo(() => {
    const tokens = invSearch.trim().toLowerCase().split(/\s+/).filter(Boolean);

    const result = catalog.filter((item) => {
      if (tokens.length > 0) {
        for (let i = 0; i < tokens.length; i++) {
          if (!item.searchIndex.includes(tokens[i])) return false;
        }
      }
      if (categoryFilter !== 'ALL' && item.category !== categoryFilter) return false;
      if (supplierFilter !== 'ALL' && item.supplier !== supplierFilter) return false;
      if (formFilter !== 'ALL' && !item.dosageForm.toLowerCase().includes(formFilter.toLowerCase())) return false;
      if (rxFilter === 'RX' && !item.rxRequired) return false;
      if (rxFilter === 'OTC' && item.rxRequired) return false;

      if (statusFilter === 'IN_STOCK' && item.stockQty <= 0) return false;
      if (statusFilter === 'LOW_STOCK' && !(item.stockQty > 0 && item.stockQty <= item.reorderLevel)) return false;
      if (statusFilter === 'OUT_OF_STOCK' && item.stockQty !== 0) return false;
      if (statusFilter === 'EXPIRING_SOON' && !(item.daysUntilExpiry > 0 && item.daysUntilExpiry <= 90)) return false;
      if (statusFilter === 'EXPIRED' && item.daysUntilExpiry > 0) return false;

      return true;
    });

    result.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];
      if (typeof valA === 'string') {
        const cmp = valA.localeCompare(valB);
        return sortDir === 'asc' ? cmp : -cmp;
      }
      return sortDir === 'asc' ? valA - valB : valB - valA;
    });

    return result;
  }, [catalog, invSearch, categoryFilter, supplierFilter, formFilter, rxFilter, statusFilter, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filteredInventory.length / pageSize));
  const paginatedInventory = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredInventory.slice(start, start + pageSize);
  }, [filteredInventory, currentPage, pageSize]);

  const posResults = useMemo(() => {
    const tokens = posSearch.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches = [];
    for (let i = 0; i < catalog.length; i++) {
      const item = catalog[i];
      if (posCategory !== 'ALL' && item.category !== posCategory) continue;
      if (tokens.length > 0) {
        let allMatched = true;
        for (let t = 0; t < tokens.length; t++) {
          if (!item.searchIndex.includes(tokens[t])) {
            allMatched = false;
            break;
          }
        }
        if (!allMatched) continue;
      }
      matches.push(item);
      if (matches.length >= 36) break;
    }
    return matches;
  }, [catalog, posSearch, posCategory]);

  const filteredInvoices = useMemo(() => {
    const q = invoiceSearch.trim().toLowerCase();
    return salesHistory.filter((inv) => {
      if (invoicePaymentFilter !== 'ALL' && inv.paymentMethod !== invoicePaymentFilter) return false;
      if (!q) return true;
      const inHeader =
        inv.id.toLowerCase().includes(q) ||
        inv.patientName.toLowerCase().includes(q) ||
        inv.prescriberNote.toLowerCase().includes(q);
      const inLines = inv.lines.some(
        (l) => l.name.toLowerCase().includes(q) || l.sku.toLowerCase().includes(q)
      );
      return inHeader || inLines;
    });
  }, [salesHistory, invoiceSearch, invoicePaymentFilter]);

  const comparedFamilyItems = useMemo(() => {
    if (!compareFamilyCode) return [];
    return catalog.filter((item) => item.lasaGroup === compareFamilyCode);
  }, [catalog, compareFamilyCode]);

  const addToCart = useCallback(
    (drug, dispenseMode = 'PACK') => {
      if (drug.stockQty <= 0) {
        showToast(`Unable to dispense ${drug.brandName} (${drug.strength}) — Out of stock.`, 'error');
        return;
      }
      if (drug.daysUntilExpiry <= 0) {
        showToast(`QUARANTINE LOCK: Batch ${drug.batchNumber} is expired and blocked from dispensing.`, 'error');
        return;
      }

      setCart((prev) => {
        const canSplitUnits = drug.unitsPerPack >= 10;
        const effectiveMode = dispenseMode === 'UNIT' && canSplitUnits ? 'UNIT' : 'PACK';
        const lineKey = `${drug.id}__${effectiveMode}`;
        const existingIdx = prev.findIndex((item) => item.lineKey === lineKey);

        const unitLabel =
          effectiveMode === 'UNIT'
            ? drug.unitsPerPack >= 50
              ? '10s Sub-Blister'
              : 'Single Unit'
            : drug.packSize;

        const unitPrice =
          effectiveMode === 'UNIT'
            ? Math.max(
                100,
                Math.round(
                  ((drug.sellingPrice / (drug.unitsPerPack / (drug.unitsPerPack >= 50 ? 10 : 1))) * 1.08) / 50
                ) * 50
              )
            : drug.sellingPrice;

        const packDeductionPerItem =
          effectiveMode === 'UNIT'
            ? drug.unitsPerPack >= 50
              ? 10 / drug.unitsPerPack
              : 1 / drug.unitsPerPack
            : 1;

        if (existingIdx > -1) {
          const current = prev[existingIdx];
          const nextQty = current.qty + 1;
          if (nextQty * packDeductionPerItem > drug.stockQty) {
            showToast(`Max available stock reached (${drug.stockQty} packs).`, 'error');
            return prev;
          }
          const updated = [...prev];
          updated[existingIdx] = { ...current, qty: nextQty };
          return updated;
        }

        return [
          ...prev,
          {
            lineKey,
            drug,
            dispenseMode: effectiveMode,
            unitLabel,
            unitPrice,
            packDeductionPerItem,
            qty: 1
          }
        ];
      });
    },
    [showToast]
  );

  const updateCartQty = (lineKey, delta) => {
    setCart((prev) =>
      prev
        .map((line) => {
          if (line.lineKey !== lineKey) return line;
          const nextQty = line.qty + delta;
          if (nextQty <= 0) return null;
          if (nextQty * line.packDeductionPerItem > line.drug.stockQty) {
            showToast(`Maximum available stock reached (${line.drug.stockQty} packs).`, 'error');
            return line;
          }
          return { ...line, qty: nextQty };
        })
        .filter(Boolean)
    );
  };

  const toggleCartLineMode = (lineKey) => {
    setCart((prev) => {
      const target = prev.find((l) => l.lineKey === lineKey);
      if (!target || target.drug.unitsPerPack < 10) return prev;
      const newMode = target.dispenseMode === 'PACK' ? 'UNIT' : 'PACK';
      const filtered = prev.filter((l) => l.lineKey !== lineKey);
      const drug = target.drug;
      const unitLabel =
        newMode === 'UNIT'
          ? drug.unitsPerPack >= 50
            ? '10s Sub-Blister'
            : 'Single Unit'
          : drug.packSize;
      const unitPrice =
        newMode === 'UNIT'
          ? Math.max(
              100,
              Math.round(
                ((drug.sellingPrice / (drug.unitsPerPack / (drug.unitsPerPack >= 50 ? 10 : 1))) * 1.08) / 50
              ) * 50
            )
          : drug.sellingPrice;
      const packDeductionPerItem =
        newMode === 'UNIT'
          ? drug.unitsPerPack >= 50
            ? 10 / drug.unitsPerPack
            : 1 / drug.unitsPerPack
          : 1;

      return [
        ...filtered,
        {
          lineKey: `${drug.id}__${newMode}`,
          drug,
          dispenseMode: newMode,
          unitLabel,
          unitPrice,
          packDeductionPerItem,
          qty: 1
        }
      ];
    });
  };

  const cartSummary = useMemo(() => {
    let subtotal = 0;
    let hasRxItems = false;
    let hasNearExpiryItems = false;
    let nearExpiryNames = [];

    cart.forEach((line) => {
      subtotal += line.unitPrice * line.qty;
      if (line.drug.rxRequired) hasRxItems = true;
      if (line.drug.daysUntilExpiry <= 60) {
        hasNearExpiryItems = true;
        nearExpiryNames.push(`${line.drug.brandName} (${line.drug.daysUntilExpiry}d left)`);
      }
    });

    const discountAmount = Math.round(subtotal * (discountPercent / 100) * 100) / 100;
    const finalTotal = Math.max(0, Math.round((subtotal - discountAmount) * 100) / 100);

    return {
      subtotal: Math.round(subtotal * 100) / 100,
      discountAmount,
      finalTotal,
      hasRxItems,
      hasNearExpiryItems,
      nearExpiryNames
    };
  }, [cart, discountPercent]);

  const handleCompleteSale = () => {
    if (cart.length === 0) return;

    if (cartSummary.hasRxItems && !rxVerified) {
      showToast('Prescription Verification Required: Confirm Rx check before dispensing.', 'error');
      return;
    }

    if (cartSummary.hasNearExpiryItems && !expiryOverrideConfirmed) {
      showToast('Short-Dated Batch Alert: Confirm patient counseling before checkout.', 'error');
      return;
    }

    const deductionsMap = {};
    cart.forEach((line) => {
      const deductedPacks = Math.ceil(line.qty * line.packDeductionPerItem);
      deductionsMap[line.drug.id] = (deductionsMap[line.drug.id] || 0) + deductedPacks;
    });

    setCatalog((prev) =>
      prev.map((item) => {
        if (!deductionsMap[item.id]) return item;
        return {
          ...item,
          stockQty: Math.max(0, item.stockQty - deductionsMap[item.id])
        };
      })
    );

    const newReceipt = {
      id: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
      patientName: patientName.trim() || 'Walk-in Patient',
      prescriberNote: cartSummary.hasRxItems
        ? prescriberNote.trim() || 'Verified Prescription on File'
        : 'OTC Pharmacist Consult',
      paymentMethod,
      status: 'PAID',
      itemsCount: cart.reduce((acc, l) => acc + l.qty, 0),
      subtotal: cartSummary.subtotal,
      discountAmount: cartSummary.discountAmount,
      total: cartSummary.finalTotal,
      lines: cart.map((line) => ({
        drugId: line.drug.id,
        sku: line.drug.sku,
        name: `${line.drug.genericName} (${line.drug.brandName})`,
        variant: `${line.drug.strength} • ${line.drug.dosageForm} • ${line.unitLabel}`,
        batch: line.drug.batchNumber,
        expiry: line.drug.expiryDate,
        mode: line.dispenseMode,
        qty: line.qty,
        unitPrice: line.unitPrice,
        lineTotal: Math.round(line.unitPrice * line.qty * 100) / 100
      }))
    };

    setSalesHistory((prev) => [newReceipt, ...prev]);
    setLastReceipt(newReceipt);
    setCart([]);
    setRxVerified(false);
    setExpiryOverrideConfirmed(false);
    setPrescriberNote('');
    setPatientName('');
    setDiscountPercent(0);
    showToast(`Dispensed & logged invoice ${newReceipt.id}`, 'success');
  };

  const handleVoidInvoice = (invoiceId) => {
    const target = salesHistory.find((inv) => inv.id === invoiceId);
    if (!target || target.status === 'VOIDED') return;

    setSalesHistory((prev) =>
      prev.map((inv) => (inv.id === invoiceId ? { ...inv, status: 'VOIDED' } : inv))
    );

    // Restore stock for lines that have a matching SKU
    const restoreBySku = {};
    target.lines.forEach((line) => {
      restoreBySku[line.sku] = (restoreBySku[line.sku] || 0) + line.qty;
    });

    setCatalog((prev) =>
      prev.map((item) => {
        if (!restoreBySku[item.sku]) return item;
        return { ...item, stockQty: item.stockQty + restoreBySku[item.sku] };
      })
    );

    showToast(`Invoice ${invoiceId} voided and stock returned to shelves.`, 'info');
  };

  const adjustStock = (drugId, delta) => {
    setCatalog((prev) => updateStock(prev, drugId, delta));
  };

  const handleConfirmDeleteDrug = () => {
    if (!drugToDelete) return;
    setCatalog((prev) => prev.filter((item) => item.id !== drugToDelete.id));
    setCart((prev) => prev.filter((line) => line.drug.id !== drugToDelete.id));
    setSelectedDrugIds((prev) => prev.filter((id) => id !== drugToDelete.id));
    showToast(`Deleted SKU ${drugToDelete.sku} (${drugToDelete.brandName}) from inventory.`, 'info');
    setDrugToDelete(null);
  };

  const handleDeleteSelectedDrugs = () => {
    if (selectedDrugIds.length === 0) return;
    const setIds = new Set(selectedDrugIds);
    setCatalog((prev) => prev.filter((item) => !setIds.has(item.id)));
    setCart((prev) => prev.filter((line) => !setIds.has(line.drug.id)));
    showToast(`Removed ${selectedDrugIds.length} selected SKUs from catalog.`, 'info');
    setSelectedDrugIds([]);
  };

  const handleQuarantineExpiredBatches = () => {
    const expiredItems = catalog.filter((i) => i.daysUntilExpiry <= 0 && i.stockQty > 0);
    if (expiredItems.length === 0) {
      showToast('All expired batches are already quarantined at 0 stock.', 'info');
      return;
    }
    setCatalog((prev) => quarantineExpiredStock(prev));
    showToast(`Quarantined and zeroed stock on ${expiredItems.length} expired batches.`, 'success');
  };

  const handleSaveDrug = (e) => {
    e.preventDefault();
    if (!editingDrug) return;

    const today = new Date('2026-10-15T12:00:00Z');
    const expDate = new Date(editingDrug.expiryDate || '2027-12-31');
    const daysUntilExpiry = Math.round((expDate.getTime() - today.getTime()) / 86400000);

    const enriched = {
      ...editingDrug,
      stockQty: Number(editingDrug.stockQty) || 0,
      reorderLevel: Number(editingDrug.reorderLevel) || 10,
      unitsPerPack: Number(editingDrug.unitsPerPack) || 10,
      costPrice: Number(editingDrug.costPrice) || 1,
      sellingPrice: Number(editingDrug.sellingPrice) || 2,
      daysUntilExpiry,
      searchIndex: `${editingDrug.sku} ${editingDrug.genericName} ${editingDrug.brandName} ${editingDrug.category} ${editingDrug.strength} ${editingDrug.dosageForm} ${editingDrug.releaseType} ${editingDrug.packSize} ${editingDrug.shelfLocation} ${editingDrug.batchNumber}`.toLowerCase()
    };

    if (isAddingNew) {
      setCatalog((prev) => [enriched, ...prev]);
      showToast(`Registered new drug variant ${enriched.sku}`, 'success');
    } else {
      setCatalog((prev) => prev.map((item) => (item.id === enriched.id ? enriched : item)));
      showToast(`Saved changes to ${enriched.sku}`, 'success');
    }

    setEditingDrug(null);
    setIsAddingNew(false);
  };

  const handleBulkRestockLow = () => {
    let restockedCount = 0;
    setCatalog((prev) =>
      prev.map((item) => {
        if (item.stockQty <= item.reorderLevel) {
          restockedCount++;
          return { ...item, stockQty: item.reorderLevel + 35 };
        }
        return item;
      })
    );
    showToast(`Restocked ${restockedCount} low/out-of-stock SKUs to optimal par levels.`, 'success');
  };

  const handleGeneratePurchaseOrder = () => {
    const lowItems = catalog.filter((i) => i.stockQty <= i.reorderLevel);
    const estCost = lowItems.slice(0, 25).reduce((acc, i) => acc + i.costPrice * 30, 0);
    const newPo = {
      id: `PO-2026-${Math.floor(110 + Math.random() * 890)}`,
      supplier: 'PrimeMed Apothecary Wholesale',
      createdDate: '2026-10-15',
      expectedDate: '2026-10-18',
      status: 'PENDING_DELIVERY',
      itemsCount: Math.max(5, Math.min(40, lowItems.length)),
      estimatedCost: Math.round(estCost) || 1250000,
      notes: `Auto-generated replenishment order for ${lowItems.length} low-stock variants`
    };
    setPurchaseOrders((prev) => [newPo, ...prev]);
    showToast(`Generated Purchase Order ${newPo.id} for low-stock items.`, 'success');
  };

  const handleReceivePurchaseOrder = (poId) => {
    setPurchaseOrders((prev) =>
      prev.map((po) => (po.id === poId ? { ...po, status: 'RECEIVED' } : po))
    );
    handleBulkRestockLow();
  };

  const handleAddReminder = (e) => {
    e.preventDefault();
    if (!newReminderText.trim()) return;
    setReminders((prev) => [
      {
        id: `rem-${Date.now()}`,
        title: newReminderText.trim(),
        time: 'Today',
        priority: newReminderPriority,
        category: 'Pharmacist Note',
        done: false
      },
      ...prev
    ]);
    setNewReminderText('');
    showToast('Added shift reminder to Home board.', 'success');
  };

  const handleExportCSV = () => {
    const headers = [
      'SKU',
      'GenericName',
      'BrandName',
      'Category',
      'Strength',
      'DosageForm',
      'ReleaseType',
      'PackSize',
      'BatchNumber',
      'ExpiryDate',
      'ShelfLocation',
      'StockQty',
      'SellingPrice',
      'RxRequired'
    ];
    const rows = filteredInventory.slice(0, 500).map((item) =>
      [
        item.sku,
        `"${item.genericName}"`,
        `"${item.brandName}"`,
        item.category,
        `"${item.strength}"`,
        `"${item.dosageForm}"`,
        `"${item.releaseType}"`,
        `"${item.packSize}"`,
        item.batchNumber,
        item.expiryDate,
        `"${item.shelfLocation}"`,
        item.stockQty,
        item.sellingPrice,
        item.rxRequired ? 'Rx' : 'OTC'
      ].join(',')
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `pharmacore_catalog_${filteredInventory.length}_skus.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Exported CSV manifest (${Math.min(500, filteredInventory.length)} SKUs).`, 'success');
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortDir('asc');
    }
  };

  const NAV_ITEMS = [
    {
      id: 'home',
      label: 'Home Overview',
      subtitle: 'Stats, Warnings & Hotkeys',
      icon: HomeIcon,
      hotkey: '1',
      badge: reminders.filter((r) => !r.done).length || null
    },
    {
      id: 'inventory',
      label: 'Inventory Manager',
      subtitle: 'Add, Edit & Delete Stock',
      icon: Boxes,
      hotkey: '2',
      badge: kpiStats.totalSkus.toLocaleString()
    },
    {
      id: 'pos',
      label: 'Sales & POS',
      subtitle: 'Dispense, Invoices & Receipts',
      icon: ShoppingCart,
      hotkey: '3',
      badge: cart.length > 0 ? `${cart.length} in tray` : salesHistory.length
    },
    {
      id: 'suppliers',
      label: 'Suppliers & Orders',
      subtitle: 'Purchase Orders & Receiving',
      icon: Truck,
      hotkey: '5',
      badge: purchaseOrders.filter((p) => p.status === 'PENDING_DELIVERY').length || null
    },
    {
      id: 'safety',
      label: 'Expiry & LASA Audit',
      subtitle: 'FEFO Quarantine & Variants',
      icon: ShieldAlert,
      hotkey: '6',
      badge: kpiStats.expiringSoonCount + kpiStats.expiredCount
    },
    {
      id: 'codebase',
      label: 'Project Files (10)',
      subtitle: 'Separated Multi-File Code',
      icon: FolderGit2,
      hotkey: '7',
      badge: `${ARCHITECTURE_FILES.length} files`
    },
    {
      id: 'settings',
      label: 'Settings & Theme',
      subtitle: 'Palette & Pharmacy Profile',
      icon: SettingsIcon,
      hotkey: null,
      badge: null
    }
  ];

  const currentPageMeta = NAV_ITEMS.find((item) => item.id === activePage) || NAV_ITEMS[0];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <style>{`
        .font-sans-ui {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          letter-spacing: -0.01em;
        }
        .font-display {
          font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.02em;
        }
        .font-serif-editorial {
          font-family: 'Fraunces', Georgia, serif;
          letter-spacing: -0.02em;
        }
        .font-mono-code {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
          font-variant-numeric: tabular-nums;
        }
        @keyframes doodleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3.5px) rotate(1.5deg); }
        }
        @keyframes doodleFloatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2.5px); }
        }
        @keyframes doodlePestleRock {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes doodleSlosh {
          0%, 100% { transform: translateY(0px) skewY(0deg); }
          50% { transform: translateY(-1px) skewY(2deg); }
        }
        @keyframes doodleBubbleUp {
          0%, 100% { transform: translateY(0px) scale(0.95); opacity: 0.45; }
          50% { transform: translateY(-4px) scale(1.1); opacity: 0.95; }
        }
        @keyframes doodleTwinkle {
          0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.15) rotate(12deg); opacity: 1; }
        }
        @keyframes doodleDrip {
          0%, 100% { transform: translateY(0px); opacity: 0.85; }
          50% { transform: translateY(2.5px); opacity: 0.35; }
        }
        @keyframes doodlePuff {
          0%, 100% { transform: translateX(0px) scale(0.9); opacity: 0.4; }
          50% { transform: translateX(2.5px) scale(1.1); opacity: 0.95; }
        }
        @keyframes doodleBellRing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(4deg); }
          75% { transform: rotate(-4deg); }
        }
        @keyframes doodleEcgFlow {
          0% { stroke-dashoffset: 240; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -240; }
        }
        .doodle-float { animation: doodleFloat 4s ease-in-out infinite; }
        .doodle-float-slow { animation: doodleFloatSlow 5.2s ease-in-out infinite; }
        .doodle-pestle-rock { animation: doodlePestleRock 3.2s ease-in-out infinite; }
        .doodle-slosh { animation: doodleSlosh 3.6s ease-in-out infinite; }
        .doodle-bubble-up { animation: doodleBubbleUp 2.8s ease-in-out infinite; }
        .doodle-twinkle { animation: doodleTwinkle 3s ease-in-out infinite; transform-origin: center; }
        .doodle-pulse { animation: doodleBubbleUp 3.4s ease-in-out infinite; }
        .doodle-drip { animation: doodleDrip 2.4s ease-in-out infinite; }
        .doodle-puff { animation: doodlePuff 2.6s ease-in-out infinite; }
        .doodle-bell-ring { animation: doodleBellRing 3.5s ease-in-out infinite; transform-origin: 32px 16px; }
        .doodle-ecg-line { stroke-dasharray: 240; animation: doodleEcgFlow 7s linear infinite; }
      `}</style>

      <div className="min-h-screen flex font-sans-ui bg-[#FAF9F5] text-slate-900 dark:bg-[#09090B] dark:text-slate-100 antialiased selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-950 transition-colors duration-200">
        {/* Mobile Sidebar Backdrop */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs lg:hidden"
          />
        )}

        {/* COLLAPSIBLE VERTICAL SIDEBAR */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-50 h-screen shrink-0 flex flex-col justify-between border-r border-slate-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121216] transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? 'w-[84px]' : 'w-[276px]'
          } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          {/* Top Brand & Collapse Toggle */}
          <div>
            <div className="h-[76px] px-4 flex items-center justify-between border-b border-slate-200/80 dark:border-zinc-800/80">
              <button
                onClick={() => setActivePage('home')}
                className={`flex items-center gap-3 text-left overflow-hidden ${
                  isSidebarCollapsed ? 'justify-center w-full' : ''
                }`}
                title="PharmaCore Home"
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-colors ${theme.btnClass}`}
                >
                  <span className="font-serif-editorial italic font-bold text-2xl leading-none pr-0.5">Rx</span>
                </div>
                {!isSidebarCollapsed && (
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold tracking-tight text-lg text-slate-900 dark:text-white truncate">
                        PharmaCore
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium truncate">
                      {kpiStats.totalSkus.toLocaleString()} SKU Apothecary
                    </p>
                  </div>
                )}
              </button>

              {!isSidebarCollapsed && (
                <button
                  onClick={() => setIsSidebarCollapsed(true)}
                  className="hidden lg:flex p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-colors"
                  title="Collapse Sidebar ([)"
                >
                  <PanelLeftClose className="w-4 h-4" />
                </button>
              )}
            </div>

            {isSidebarCollapsed && (
              <div className="hidden lg:flex justify-center py-2.5 border-b border-slate-100 dark:border-zinc-800/60">
                <button
                  onClick={() => setIsSidebarCollapsed(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                  title="Expand Sidebar ([)"
                >
                  <PanelLeftOpen className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Vertical Navigation Links */}
            <div className="p-3 space-y-1.5">
              {!isSidebarCollapsed && (
                <div className="px-3 py-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                  Apothecary Workspace
                </div>
              )}
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    title={isSidebarCollapsed ? `${item.label} — ${item.subtitle}` : undefined}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-left transition-all duration-150 group ${
                      isSidebarCollapsed ? 'justify-center' : 'justify-between'
                    } ${
                      isActive
                        ? `${theme.btnClass} shadow-xs`
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="w-5 h-5 shrink-0" />
                      {!isSidebarCollapsed && (
                        <div className="min-w-0">
                          <div className="font-display font-bold text-sm leading-tight truncate">
                            {item.label}
                          </div>
                          <div
                            className={`text-[11px] truncate mt-0.5 ${
                              isActive
                                ? 'opacity-80'
                                : 'text-slate-400 dark:text-zinc-500 group-hover:text-slate-600 dark:group-hover:text-zinc-300'
                            }`}
                          >
                            {item.subtitle}
                          </div>
                        </div>
                      )}
                    </div>

                    {!isSidebarCollapsed && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge !== null && (
                          <span
                            className={`px-2 py-0.5 rounded-lg text-[10px] font-mono-code font-bold ${
                              isActive
                                ? 'bg-black/20 text-white dark:bg-black/25 dark:text-white'
                                : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer: Theme Palette, Dark Mode & Quick Receive */}
          <div className="p-3 border-t border-slate-200/80 dark:border-zinc-800/80 space-y-3 bg-slate-50/50 dark:bg-zinc-900/30">
            {!isSidebarCollapsed ? (
              <>
                <div className="px-2 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-display font-bold text-slate-500 dark:text-zinc-400">
                    <span>Clinical Accent</span>
                    <span className={theme.textClass}>{theme.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5 bg-white dark:bg-zinc-900 p-2 rounded-xl border border-slate-200/80 dark:border-zinc-800">
                    {Object.values(ACCENT_THEMES).map((pal) => (
                      <button
                        key={pal.id}
                        onClick={() => setAccentKey(pal.id)}
                        title={pal.name}
                        className={`w-5 h-5 rounded-full transition-all ${
                          accentKey === pal.id
                            ? 'scale-115 ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-zinc-950'
                            : 'opacity-65 hover:opacity-100 hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: pal.id === 'mono' ? (darkMode ? '#F8FAFC' : '#0F172A') : pal.swatch
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-display font-bold transition-colors"
                  >
                    {darkMode ? (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Alabaster</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-slate-600" />
                        <span>Obsidian</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setDoodlesEnabled(!doodlesEnabled)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-display font-bold transition-colors"
                    title="Toggle Animated Pharmacy Doodles"
                  >
                    <Wand2 className={`w-3.5 h-3.5 ${theme.textClass}`} />
                    <span>{doodlesEnabled ? 'Doodles ON' : 'Minimal'}</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  title="Toggle Alabaster / Obsidian Mode"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                </button>
                <button
                  onClick={openNewDrugModal}
                  className={`p-2.5 rounded-xl ${theme.btnClass}`}
                  title="Add New Drug SKU (N)"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </aside>

        {}
        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Sleek Uncrowded Top Workspace Bar */}
          <header className="sticky top-0 z-30 h-[76px] border-b border-slate-200/80 dark:border-zinc-800/90 bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <h1 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white truncate">
                    {currentPageMeta.label}
                  </h1>
                  <span className={`hidden sm:inline-flex text-[11px] font-mono-code font-bold px-2.5 py-0.5 rounded-full border ${theme.badgeClass}`}>
                    {currentPageMeta.subtitle}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 truncate">
                  {pharmacyProfile.name} • {pharmacyProfile.pharmacistOnDuty}
                </p>
              </div>
            </div>

            {/* Right Top Bar Quick Controls */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setActivePage('pos');
                  setPosSubTab('terminal');
                  setTimeout(() => posSearchInputRef.current?.focus(), 60);
                }}
                className="hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/90 dark:bg-zinc-900/80 hover:border-slate-400 text-xs text-slate-500 dark:text-zinc-400 transition-all"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Quick Drug Lookup...</span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono-code bg-white dark:bg-zinc-800 rounded border border-slate-200 dark:border-zinc-700">
                  /
                </kbd>
              </button>

              <button
                onClick={openNewDrugModal}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-xs font-display font-bold transition-colors shadow-2xs"
              >
                <PackagePlus className={`w-4 h-4 ${theme.textClass}`} />
                <span className="hidden sm:inline">Add Medication</span>
              </button>

              <button
                onClick={() => setIsImportModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-xs font-display font-bold transition-colors shadow-2xs"
                title="Import Inventory Additions from Excel (.xlsx, .xls) or .csv (Hotkey: I)"
              >
                <FileSpreadsheet className={`w-4 h-4 ${theme.textClass}`} />
                <span className="hidden sm:inline">Import Excel / CSV</span>
              </button>

              <button
                onClick={() => {
                  setActivePage('pos');
                  setPosSubTab('terminal');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-display font-bold shadow-xs transition-all ${theme.btnClass}`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>POS Tray</span>
                <span className="px-1.5 py-0.5 rounded-md bg-black/20 text-[11px] font-mono-code">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              </button>
            </div>
          </header>

          {toast && (
            <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-3.5 rounded-2xl shadow-xl border border-slate-700 dark:border-slate-200 flex items-center gap-3 text-xs font-semibold">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${theme.barClass}`} />
              <span className="flex-1 leading-snug">{toast.message}</span>
              <button onClick={() => setToast(null)} className="opacity-60 hover:opacity-100 p-0.5">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* PAGE CONTAINER WITH BREATHABLE PADDING */}
          <main className="flex-1 max-w-[1480px] w-full mx-auto px-4 sm:px-8 py-7">
            {/* =================================================================
                PAGE 1: HOME PAGE (STATISTICS, WARNINGS, REMINDERS & HOTKEYS)
               ================================================================= */}
            {activePage === 'home' && (
              <div className="space-y-8">
                <HeroApothecaryBanner
                  theme={theme}
                  kpiStats={kpiStats}
                  salesHistory={salesHistory}
                  doodlesEnabled={doodlesEnabled}
                  setDoodlesEnabled={setDoodlesEnabled}
                  onQuickFilterClick={(query) => {
                    setActivePage('pos');
                    setPosSubTab('terminal');
                    setPosSearch(query);
                  }}
                  onOpenPos={() => {
                    setActivePage('pos');
                    setPosSubTab('terminal');
                  }}
                  onOpenRestock={() => {
                    setStatusFilter('LOW_STOCK');
                    setActivePage('inventory');
                  }}
                />

                {/* Key Pharmacy Statistics */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                      1. A&amp;O Pharmaceutical Telemetry
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      12 Reorganized Clinical Categories • Live Naira Valuation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    <div
                      onClick={() => {
                        setStatusFilter('ALL');
                        setActivePage('inventory');
                      }}
                      className={`cursor-pointer bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 shadow-2xs flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 ${theme.borderHoverClass}`}
                    >
                      <div className="space-y-1.5">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                          Loaded Stock Items
                        </span>
                        <div className="font-serif-editorial text-4xl font-bold text-slate-900 dark:text-white">
                          {kpiStats.totalSkus.toLocaleString()}{' '}
                          <span className="text-lg font-normal italic">SKUs</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">
                          <span className="font-mono-code font-semibold">
                            {Math.round(kpiStats.totalUnitsInStock).toLocaleString()}
                          </span>{' '}
                          units in stock across 12 categories
                        </p>
                      </div>
                      <div className={`p-3 rounded-2xl border shrink-0 ${theme.badgeClass}`}>
                        <KpiDoodleIllustration type="catalog" className="w-12 h-12" />
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setActivePage('pos');
                        setPosSubTab('invoices');
                      }}
                      className={`cursor-pointer bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 shadow-2xs flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 ${theme.borderHoverClass}`}
                    >
                      <div className="space-y-1.5">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                          Retail Stock Valuation
                        </span>
                        <div className={`font-serif-editorial text-3xl sm:text-4xl font-bold ${theme.textClass}`}>
                          {formatNaira(kpiStats.totalInventoryValue)}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">
                          Cost Basis:{' '}
                          <span className="font-mono-code font-semibold text-slate-900 dark:text-white">
                            {formatNaira(kpiStats.totalCostValuation)}
                          </span>
                        </p>
                      </div>
                      <div className={`p-3 rounded-2xl border shrink-0 ${theme.badgeClass}`}>
                        <KpiDoodleIllustration type="valuation" className="w-12 h-12" />
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setStatusFilter('LOW_STOCK');
                        setActivePage('inventory');
                      }}
                      className={`cursor-pointer bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 shadow-2xs flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 ${theme.borderHoverClass}`}
                    >
                      <div className="space-y-1.5">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                          Low Stock &amp; Stockouts
                        </span>
                        <div className="font-serif-editorial text-4xl font-bold text-slate-900 dark:text-white">
                          {kpiStats.lowStockCount + kpiStats.outOfStockCount}{' '}
                          <span className="text-lg font-normal italic">alerts</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">
                          {kpiStats.outOfStockCount} Out of Stock • {kpiStats.lowStockCount} Low Par
                        </p>
                      </div>
                      <div className={`p-3 rounded-2xl border shrink-0 ${theme.badgeClass}`}>
                        <KpiDoodleIllustration type="reorder" className="w-12 h-12" />
                      </div>
                    </div>

                    <div
                      onClick={() => setActivePage('safety')}
                      className={`cursor-pointer bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 shadow-2xs flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 ${theme.borderHoverClass}`}
                    >
                      <div className="space-y-1.5">
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                          Expiry &amp; Quarantine
                        </span>
                        <div className="font-serif-editorial text-4xl font-bold text-slate-900 dark:text-white">
                          {kpiStats.expiringSoonCount + kpiStats.expiredCount}{' '}
                          <span className="text-lg font-normal italic">batches</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">
                          {kpiStats.expiringSoonCount} Expiring &le;60d • {kpiStats.expiredCount} Expired
                        </p>
                      </div>
                      <div className={`p-3 rounded-2xl border shrink-0 ${theme.badgeClass}`}>
                        <KpiDoodleIllustration type="expiry" className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Hotkeys & Fast-Action Launcher */}
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Keyboard className={`w-4 h-4 ${theme.textClass}`} />
                      <h2 className="font-display text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                        2. Quick Hotkeys &amp; Frequent Workflows
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Press shortcut keys anywhere or click a card to launch
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
                    {[
                      {
                        key: 'Key 3',
                        title: 'New POS Sale',
                        desc: 'Open Dispensing Counter',
                        action: () => {
                          setActivePage('pos');
                          setPosSubTab('terminal');
                        }
                      },
                      {
                        key: 'Key N',
                        title: 'Add New Drug SKU',
                        desc: 'Register new stock variant',
                        action: openNewDrugModal
                      },
                      {
                        key: 'Key I',
                        title: 'Import Excel / CSV',
                        desc: 'Bulk upload .xlsx or .csv stock',
                        action: () => setIsImportModalOpen(true)
                      },
                      {
                        key: 'Key 2',
                        title: 'Manage Inventory',
                        desc: 'Edit or delete 2,160+ SKUs',
                        action: () => setActivePage('inventory')
                      },
                      {
                        key: 'Key 4',
                        title: 'Invoices & Receipts',
                        desc: 'Print or void past sales',
                        action: () => {
                          setActivePage('pos');
                          setPosSubTab('invoices');
                        }
                      },
                      {
                        key: 'Key 5',
                        title: 'Restock Low Stock',
                        desc: '1-click par replenishment',
                        action: handleBulkRestockLow
                      }
                    ].map((hk) => (
                      <button
                        key={hk.title}
                        onClick={hk.action}
                        className={`p-4 rounded-3xl border border-slate-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121216] text-left transition-all hover:-translate-y-0.5 shadow-2xs flex flex-col justify-between gap-3 ${theme.borderHoverClass}`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <kbd
                            className={`px-2 py-0.5 rounded-lg text-[11px] font-mono-code font-bold border ${theme.badgeClass}`}
                          >
                            {hk.key}
                          </kbd>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                            {hk.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">
                            {hk.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                {}
                {/* Warnings & Pharmacist Shift Reminders Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Urgent Clinical Warnings */}
                  <div className="lg:col-span-7 bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                    <div className="p-5 sm:px-6 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <AlertTriangle className={`w-5 h-5 ${theme.textClass}`} />
                        <div>
                          <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                            3. Active Inventory Warnings &amp; Critical Alerts
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-zinc-400">
                            Items requiring immediate pharmacist quarantine or reorder
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePage('safety')}
                        className={`text-xs font-display font-bold hover:underline ${theme.textClass}`}
                      >
                        Open Safety Audit &rarr;
                      </button>
                    </div>

                    <div className="divide-y divide-slate-200/70 dark:divide-zinc-800/80 max-h-[420px] overflow-y-auto">
                      {catalog
                        .filter((i) => i.daysUntilExpiry <= 35 || i.stockQty === 0)
                        .slice(0, 10)
                        .map((item) => {
                          const isExpired = item.daysUntilExpiry <= 0;
                          const isOut = item.stockQty === 0;
                          return (
                            <div
                              key={item.id}
                              className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:bg-slate-50/70 dark:hover:bg-zinc-900/40"
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 mt-0.5 ${theme.badgeClass}`}
                                >
                                  <DosageFormIcon form={item.dosageForm} className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                                      {item.genericName}
                                    </span>
                                    <span className="text-slate-500">({item.brandName})</span>
                                    <span
                                      className={`px-2 py-0.5 rounded-md font-mono-code font-bold text-[10px] ${
                                        isExpired
                                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                                          : theme.badgeClass
                                      }`}
                                    >
                                      {isExpired
                                        ? `EXPIRED (${item.expiryDate})`
                                        : isOut
                                        ? 'STOCKOUT (0 PACKS)'
                                        : `EXPIRING IN ${item.daysUntilExpiry}D`}
                                    </span>
                                  </div>
                                  <div className="text-slate-500 dark:text-zinc-400 mt-1">
                                    {item.strength} • {item.dosageForm} • {item.packSize} •{' '}
                                    <span className="font-mono-code">{item.shelfLocation}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                {isOut ? (
                                  <button
                                    onClick={() => {
                                      adjustStock(item.id, 30);
                                      showToast(`Restocked +30 packs of ${item.brandName}`, 'success');
                                    }}
                                    className={`px-3 py-1.5 rounded-xl font-display font-bold ${theme.btnClass}`}
                                  >
                                    +30 Restock
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => {
                                      setEditingDrug(item);
                                      setIsAddingNew(false);
                                    }}
                                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 font-display font-bold hover:border-slate-900 dark:hover:border-white"
                                  >
                                    Inspect Batch
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Right: Pharmacist Shift Reminders & Checklist */}
                  <div className="lg:col-span-5 bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs flex flex-col">
                    <div className="p-5 sm:px-6 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Bell className={`w-5 h-5 ${theme.textClass}`} />
                        <div>
                          <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                            4. Pharmacist Shift Reminders
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-zinc-400">
                            Daily clinical tasks, cold-chain logs &amp; follow-ups
                          </p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold border ${theme.badgeClass}`}>
                        {reminders.filter((r) => !r.done).length} pending
                      </span>
                    </div>

                    <form
                      onSubmit={handleAddReminder}
                      className="p-4 border-b border-slate-200/70 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 flex items-center gap-2"
                    >
                      <input
                        type="text"
                        value={newReminderText}
                        onChange={(e) => setNewReminderText(e.target.value)}
                        placeholder="Add shift reminder or patient callback note..."
                        className="flex-1 px-3.5 py-2 text-xs font-medium bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none"
                      />
                      <select
                        value={newReminderPriority}
                        onChange={(e) => setNewReminderPriority(e.target.value)}
                        className="px-2.5 py-2 text-xs font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl"
                      >
                        <option value="Normal">Normal</option>
                        <option value="High">Urgent</option>
                      </select>
                      <button
                        type="submit"
                        className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold shrink-0 ${theme.btnClass}`}
                      >
                        Add
                      </button>
                    </form>

                    <div className="divide-y divide-slate-200/70 dark:divide-zinc-800/80 max-h-[340px] overflow-y-auto">
                      {reminders.map((rem) => (
                        <div
                          key={rem.id}
                          className={`p-4 flex items-start justify-between gap-3 text-xs transition-colors ${
                            rem.done ? 'opacity-50 bg-slate-50/40 dark:bg-zinc-900/20' : ''
                          }`}
                        >
                          <label className="flex items-start gap-3 cursor-pointer flex-1">
                            <input
                              type="checkbox"
                              checked={rem.done}
                              onChange={() =>
                                setReminders((prev) =>
                                  prev.map((r) => (r.id === rem.id ? { ...r, done: !r.done } : r))
                                )
                              }
                              className="w-4 h-4 mt-0.5 rounded accent-slate-900 dark:accent-white"
                            />
                            <div className="space-y-1">
                              <div
                                className={`font-display font-bold text-slate-900 dark:text-white leading-snug ${
                                  rem.done ? 'line-through' : ''
                                }`}
                              >
                                {rem.title}
                              </div>
                              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                                <span className="font-mono-code">{rem.time}</span>
                                <span>•</span>
                                <span>{rem.category}</span>
                                {rem.priority === 'High' && (
                                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono-code font-bold border ${theme.badgeClass}`}>
                                    URGENT
                                  </span>
                                )}
                              </div>
                            </div>
                          </label>
                          <button
                            onClick={() => setReminders((prev) => prev.filter((r) => r.id !== rem.id))}
                            className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            title="Delete Reminder"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================================
                PAGE 2: INVENTORY PAGE (MANAGE, ADD, EDIT, DELETE 2,160+ SKUS)
               ================================================================= */}
            {activePage === 'inventory' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 shadow-2xs space-y-5">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="font-display text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                          Apothecary Stock &amp; Variant Manager
                        </h2>
                        <span className={`text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-full border ${theme.badgeClass}`}>
                          {filteredInventory.length.toLocaleString()} / {kpiStats.totalSkus.toLocaleString()} SKUs
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                        Add, edit, restock, or delete individual medication variants across strength, form, and pack size.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {selectedDrugIds.length > 0 && (
                        <button
                          onClick={handleDeleteSelectedDrugs}
                          className="px-3.5 py-2 rounded-2xl border border-slate-900 dark:border-white bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-display font-bold flex items-center gap-1.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete Selected ({selectedDrugIds.length})</span>
                        </button>
                      )}

                      <button
                        onClick={openNewDrugModal}
                        className={`px-4 py-2 rounded-2xl text-xs font-display font-bold flex items-center gap-1.5 shadow-2xs ${theme.btnClass}`}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Medication</span>
                      </button>

                      <button
                        onClick={() => setIsImportModalOpen(true)}
                        className="px-4 py-2 rounded-2xl border border-slate-900 dark:border-zinc-200 bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-display font-bold flex items-center gap-1.5 shadow-2xs transition-all hover:opacity-90"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Import Excel / CSV</span>
                      </button>

                      <div className="flex items-center bg-slate-100 dark:bg-zinc-900 p-1 rounded-2xl border border-slate-200 dark:border-zinc-800">
                        <button
                          onClick={() => setCatalogViewMode('grid')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all ${
                            catalogViewMode === 'grid'
                              ? `${theme.btnClass} shadow-2xs`
                              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Cards</span>
                        </button>
                        <button
                          onClick={() => setCatalogViewMode('table')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-display font-bold transition-all ${
                            catalogViewMode === 'table'
                              ? `${theme.btnClass} shadow-2xs`
                              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <List className="w-3.5 h-3.5" />
                          <span>Table</span>
                        </button>
                      </div>

                      <button
                        onClick={handleBulkRestockLow}
                        className="px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-slate-400 text-xs font-display font-bold flex items-center gap-1.5 bg-white dark:bg-zinc-900 transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Restock Low ({kpiStats.lowStockCount + kpiStats.outOfStockCount})</span>
                      </button>

                      <button
                        onClick={handleExportCSV}
                        className="px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-slate-400 text-xs font-display font-bold flex items-center gap-1.5 bg-white dark:bg-zinc-900 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Filter Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                    <div className="sm:col-span-2 relative">
                      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        ref={invSearchInputRef}
                        type="text"
                        value={invSearch}
                        onChange={(e) => setInvSearch(e.target.value)}
                        placeholder="Search SKU (#141, P0000012), drug name, supplier (SANTUS, GJ)..."
                        className={`w-full pl-10 pr-8 py-2.5 text-xs font-medium bg-slate-50/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:outline-none ${theme.ringClass}`}
                      />
                      {invSearch && (
                        <button
                          onClick={() => setInvSearch('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="px-3 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c === 'ALL' ? 'All 12 Clinical Categories' : c}
                        </option>
                      ))}
                    </select>

                    <select
                      value={supplierFilter}
                      onChange={(e) => setSupplierFilter(e.target.value)}
                      className="px-3 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl"
                    >
                      {suppliersList.map((s) => (
                        <option key={s} value={s}>
                          {s === 'ALL' ? 'Supplier: All Distributors' : `Supplier: ${s}`}
                        </option>
                      ))}
                    </select>

                    <select
                      value={formFilter}
                      onChange={(e) => setFormFilter(e.target.value)}
                      className="px-3 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl"
                    >
                      {dosageForms.map((f) => (
                        <option key={f} value={f}>
                          Form: {f}
                        </option>
                      ))}
                    </select>

                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-2.5 text-xs font-semibold bg-slate-50/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl"
                    >
                      <option value="ALL">Status: All Items ({kpiStats.totalSkus})</option>
                      <option value="IN_STOCK">In Stock ({kpiStats.totalSkus - kpiStats.outOfStockCount})</option>
                      <option value="LOW_STOCK">Low Stock ({kpiStats.lowStockCount})</option>
                      <option value="OUT_OF_STOCK">Out of Stock (0 Qty: {kpiStats.outOfStockCount})</option>
                      <option value="EXPIRING_SOON">Expiring &le; 90d ({kpiStats.expiringSoonCount})</option>
                      <option value="EXPIRED">Expired ({kpiStats.expiredCount})</option>
                    </select>
                  </div>

                  {/* Quick Category Pill Strip */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-display font-bold whitespace-nowrap transition-all ${
                          categoryFilter === cat
                            ? theme.btnClass
                            : 'bg-slate-100/90 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {cat === 'ALL' ? 'All Categories' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {}
                {catalogViewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {paginatedInventory.map((item) => {
                      const isLow = item.stockQty > 0 && item.stockQty <= item.reorderLevel;
                      const isOut = item.stockQty === 0;
                      const isExp = item.daysUntilExpiry <= 0;
                      const isNearExp = item.daysUntilExpiry > 0 && item.daysUntilExpiry <= 60;
                      const stockPercent = Math.min(100, Math.round((item.stockQty / (item.reorderLevel * 4)) * 100));

                      return (
                        <div
                          key={item.id}
                          className={`group bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 ${theme.borderHoverClass}`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <div
                                className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105 ${theme.badgeClass}`}
                              >
                                <DosageFormIcon form={item.dosageForm} className="w-7 h-7" />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[11px] font-mono-code font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                                  {item.shelfLocation}
                                </span>
                                {item.rxRequired ? (
                                  <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-lg border border-slate-900 dark:border-zinc-200">
                                    Rx
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-mono-code font-medium px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500">
                                    OTC
                                  </span>
                                )}
                              </div>
                            </div>

                            <div>
                              <div className="text-[10px] font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                                {item.category} • {item.releaseType}
                              </div>
                              <h3 className="font-display text-lg font-extrabold text-slate-900 dark:text-white leading-snug mt-0.5">
                                <TallManName name={item.genericName} accentTextClass={theme.textClass} />
                              </h3>
                              <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
                                {item.brandName}
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span
                                className={`px-2.5 py-1 rounded-xl text-xs font-mono-code font-bold border ${theme.badgeClass}`}
                              >
                                {item.strength}
                              </span>
                              <span className="px-2.5 py-1 rounded-xl text-xs font-semibold border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200">
                                {item.dosageForm}
                              </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                                <PackTypeDoodle packSize={item.packSize} className="w-3.5 h-3.5" />
                                <span>{item.packSize}</span>
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800/70">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-slate-500 dark:text-zinc-400">
                                {isOut ? 'Out of Stock' : isLow ? 'Low Stock' : 'In Stock'}
                              </span>
                              <div className="flex items-center gap-1.5 font-mono-code">
                                <button
                                  onClick={() => adjustStock(item.id, -1)}
                                  className="w-5 h-5 rounded-md border border-slate-200 dark:border-zinc-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-zinc-800"
                                >
                                  -
                                </button>
                                <span className="font-bold text-slate-900 dark:text-white px-1">
                                  {item.stockQty} packs
                                </span>
                                <button
                                  onClick={() => adjustStock(item.id, 10)}
                                  className="px-1.5 h-5 rounded-md border border-slate-200 dark:border-zinc-700 text-[10px] hover:bg-slate-100 dark:hover:bg-zinc-800"
                                >
                                  +10
                                </button>
                              </div>
                            </div>

                            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  isOut ? 'w-0' : isLow ? 'bg-slate-900 dark:bg-white' : theme.barClass
                                }`}
                                style={{ width: `${stockPercent}%` }}
                              />
                            </div>

                            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400 dark:text-zinc-500 pt-0.5">
                              <span>{item.sku}</span>
                              <span
                                className={
                                  isExp || isNearExp ? 'font-bold underline text-slate-900 dark:text-white' : ''
                                }
                              >
                                Exp {item.expiryDate}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800/70">
                            <div>
                              <div className="font-serif-editorial text-xl font-bold text-slate-900 dark:text-white">
                                {formatNaira(item.sellingPrice)}
                              </div>
                              <div className="text-[10px] font-mono-code text-slate-400">
                                Cost {formatNaira(item.costPrice)}
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => setCompareFamilyCode(item.lasaGroup)}
                                className="px-2.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200 text-xs font-display font-bold transition-colors"
                                title="Compare Sibling Variants"
                              >
                                Variants
                              </button>
                              <button
                                onClick={() => {
                                  setIsAddingNew(false);
                                  setEditingDrug(item);
                                }}
                                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200 text-slate-600 dark:text-zinc-300"
                                title="Edit Medication SKU"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDrugToDelete(item)}
                                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                                title="Delete Medication SKU"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                disabled={isOut || isExp}
                                onClick={() => {
                                  addToCart(item, 'PACK');
                                  showToast(`Added ${item.brandName} (${item.strength}) to POS Tray.`);
                                }}
                                className={`px-2.5 py-2 rounded-xl text-xs font-display font-bold transition-all ${
                                  isOut || isExp
                                    ? 'bg-slate-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed'
                                    : theme.btnClass
                                }`}
                              >
                                + POS
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200/80 dark:border-zinc-800 text-[11px] font-display font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50/70 dark:bg-zinc-900/50">
                            <th className="py-3.5 px-4 w-8">
                              <input
                                type="checkbox"
                                checked={
                                  paginatedInventory.length > 0 &&
                                  paginatedInventory.every((i) => selectedDrugIds.includes(i.id))
                                }
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedDrugIds(paginatedInventory.map((i) => i.id));
                                  } else {
                                    setSelectedDrugIds([]);
                                  }
                                }}
                                className="w-3.5 h-3.5 rounded"
                              />
                            </th>
                            <th className="py-3.5 px-4">SKU &amp; Bay</th>
                            <th
                              className="py-3.5 px-4 cursor-pointer hover:text-slate-900 dark:hover:text-white"
                              onClick={() => toggleSort('genericName')}
                            >
                              <div className="flex items-center gap-1.5">
                                <span>Medication (ISMP Tall-Man)</span>
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th className="py-3.5 px-4">Distinguishable Variant Profile</th>
                            <th
                              className="py-3.5 px-4 cursor-pointer hover:text-slate-900 dark:hover:text-white"
                              onClick={() => toggleSort('daysUntilExpiry')}
                            >
                              <div className="flex items-center gap-1.5">
                                <span>Batch &amp; Expiry</span>
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th
                              className="py-3.5 px-4 cursor-pointer hover:text-slate-900 dark:hover:text-white"
                              onClick={() => toggleSort('stockQty')}
                            >
                              <div className="flex items-center gap-1.5">
                                <span>Stock Level</span>
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th
                              className="py-3.5 px-4 cursor-pointer hover:text-slate-900 dark:hover:text-white text-right"
                              onClick={() => toggleSort('sellingPrice')}
                            >
                              <div className="flex items-center justify-end gap-1.5">
                                <span>Price</span>
                                <ArrowUpDown className="w-3 h-3" />
                              </div>
                            </th>
                            <th className="py-3.5 px-4 text-right">Manage Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/70 dark:divide-zinc-800/80 text-xs">
                          {paginatedInventory.map((item) => {
                            const isLow = item.stockQty > 0 && item.stockQty <= item.reorderLevel;
                            const isOut = item.stockQty === 0;
                            const isNearExp = item.daysUntilExpiry > 0 && item.daysUntilExpiry <= 60;
                            const isExp = item.daysUntilExpiry <= 0;

                            return (
                              <tr
                                key={item.id}
                                className="hover:bg-slate-50/90 dark:hover:bg-zinc-900/40 transition-colors"
                              >
                                <td className="py-3.5 px-4">
                                  <input
                                    type="checkbox"
                                    checked={selectedDrugIds.includes(item.id)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedDrugIds((prev) => [...prev, item.id]);
                                      } else {
                                        setSelectedDrugIds((prev) => prev.filter((id) => id !== item.id));
                                      }
                                    }}
                                    className="w-3.5 h-3.5 rounded"
                                  />
                                </td>
                                <td className="py-3.5 px-4 whitespace-nowrap">
                                  <div className="font-mono-code font-semibold text-slate-900 dark:text-zinc-100">
                                    {item.sku}
                                  </div>
                                  <div className="text-[11px] font-medium text-slate-500">
                                    {item.shelfLocation}
                                  </div>
                                </td>
                                <td className="py-3.5 px-4">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${theme.badgeClass}`}
                                    >
                                      <DosageFormIcon form={item.dosageForm} className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <div className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                        <TallManName name={item.genericName} accentTextClass={theme.textClass} />
                                        {item.rxRequired ? (
                                          <span className="text-[10px] font-mono-code px-1.5 py-0.2 border border-slate-900 dark:border-zinc-200 rounded">
                                            Rx
                                          </span>
                                        ) : (
                                          <span className="text-[10px] font-mono-code px-1.5 py-0.2 bg-slate-100 dark:bg-zinc-800 text-slate-500 rounded">
                                            OTC
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-slate-500 dark:text-zinc-400 font-medium">
                                        {item.brandName} • {item.category}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3.5 px-4">
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <span
                                      className={`px-2.5 py-0.5 rounded-lg font-mono-code font-bold border ${theme.badgeClass}`}
                                    >
                                      {item.strength}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-lg font-semibold border border-slate-200 dark:border-zinc-700">
                                      {item.dosageForm}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg font-semibold bg-slate-100 dark:bg-zinc-800">
                                      <PackTypeDoodle packSize={item.packSize} className="w-3.5 h-3.5" />
                                      <span>{item.packSize}</span>
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3.5 px-4 font-mono-code whitespace-nowrap">
                                  <div className="font-medium">{item.batchNumber}</div>
                                  <div
                                    className={`text-[11px] ${
                                      isExp || isNearExp
                                        ? 'font-bold underline text-slate-900 dark:text-white'
                                        : 'text-slate-500'
                                    }`}
                                  >
                                    {item.expiryDate} ({item.daysUntilExpiry}d)
                                  </div>
                                </td>
                                <td className="py-3.5 px-4 font-mono-code whitespace-nowrap">
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      onClick={() => adjustStock(item.id, -1)}
                                      className="w-6 h-6 rounded-lg border border-slate-200 dark:border-zinc-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    >
                                      -
                                    </button>
                                    <span className={`w-10 text-center font-bold ${isOut || isLow ? 'underline' : ''}`}>
                                      {item.stockQty}
                                    </span>
                                    <button
                                      onClick={() => adjustStock(item.id, 10)}
                                      className="px-1.5 h-6 rounded-lg border border-slate-200 dark:border-zinc-700 text-[10px] hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    >
                                      +10
                                    </button>
                                  </div>
                                </td>
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <div className="font-serif-editorial font-bold text-base text-slate-900 dark:text-white">
                                    {formatNaira(item.sellingPrice)}
                                  </div>
                                  <div className="text-[10px] font-mono-code text-slate-400">
                                    Cost {formatNaira(item.costPrice)}
                                  </div>
                                </td>
                                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                  <div className="inline-flex items-center gap-1.5">
                                    <button
                                      onClick={() => setCompareFamilyCode(item.lasaGroup)}
                                      className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold hover:border-slate-900 dark:hover:border-zinc-200"
                                    >
                                      Variants
                                    </button>
                                    <button
                                      onClick={() => {
                                        setIsAddingNew(false);
                                        setEditingDrug(item);
                                      }}
                                      className="p-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200"
                                      title="Edit"
                                    >
                                      <Edit3 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() => setDrugToDelete(item)}
                                      className="p-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                                      title="Delete"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      disabled={isOut || isExp}
                                      onClick={() => {
                                        addToCart(item, 'PACK');
                                        showToast(`Added ${item.brandName} (${item.strength}) to POS.`);
                                      }}
                                      className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold ${
                                        isOut || isExp
                                          ? 'bg-slate-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed'
                                          : theme.btnClass
                                      }`}
                                    >
                                      + POS
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Pagination Bar */}
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-medium shadow-2xs">
                  <div className="flex items-center gap-3 text-slate-500 dark:text-zinc-400">
                    <span>
                      Showing{' '}
                      <strong className="font-mono-code text-slate-900 dark:text-white">
                        {Math.min(filteredInventory.length, (currentPage - 1) * pageSize + 1)}–
                        {Math.min(filteredInventory.length, currentPage * pageSize)}
                      </strong>{' '}
                      of{' '}
                      <strong className="font-mono-code text-slate-900 dark:text-white">
                        {filteredInventory.length.toLocaleString()}
                      </strong>{' '}
                      variants
                    </span>
                    <select
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                      className="px-2.5 py-1 border border-slate-200 dark:border-zinc-700 rounded-xl bg-slate-50 dark:bg-zinc-900 font-semibold"
                    >
                      <option value={12}>12 / page</option>
                      <option value={16}>16 / page</option>
                      <option value={32}>32 / page</option>
                      <option value={64}>64 / page</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage <= 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 disabled:opacity-40 flex items-center gap-1 font-display font-bold hover:bg-slate-50 dark:hover:bg-zinc-800"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <span className="px-3 py-1 font-mono-code font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage >= totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 disabled:opacity-40 flex items-center gap-1 font-display font-bold hover:bg-slate-50 dark:hover:bg-zinc-800"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================================
                PAGE 3: SALES & POS PAGE (DISPENSING + INVOICES & RECEIPTS)
               ================================================================= */}
            {activePage === 'pos' && (
              <div className="space-y-6">
                {/* Sub-Navigation Bar for POS vs Invoices & Receipts */}
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-2xl border border-slate-200/70 dark:border-zinc-800">
                    <button
                      onClick={() => setPosSubTab('terminal')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-display font-bold transition-all ${
                        posSubTab === 'terminal'
                          ? `${theme.btnClass} shadow-xs`
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>1. Dispensing Counter (POS)</span>
                      <span className="px-1.5 py-0.2 rounded bg-black/15 text-[10px] font-mono-code">
                        {cart.length}
                      </span>
                    </button>

                    <button
                      onClick={() => setPosSubTab('invoices')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-display font-bold transition-all ${
                        posSubTab === 'invoices'
                          ? `${theme.btnClass} shadow-xs`
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>2. Invoices &amp; Receipts Ledger</span>
                      <span className="px-1.5 py-0.2 rounded bg-black/15 text-[10px] font-mono-code">
                        {salesHistory.length}
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 mr-1.5">Active Session Revenue:</span>
                      <span className={`font-serif-editorial text-lg font-bold ${theme.textClass}`}>
                        {formatNaira(kpiStats.todayRevenue)}
                      </span>
                    </div>
                  </div>
                </div>

                {posSubTab === 'terminal' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-5 shadow-2xs space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                              Dispensing Lookup &amp; Variant Verification
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                              Search by generic molecule, brand, strength, form, or pack size across{' '}
                              <span className="font-mono-code font-semibold">
                                {kpiStats.totalSkus.toLocaleString()}
                              </span>{' '}
                              SKUs
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs">
                            {[
                              { label: 'Amox 500 Cap', q: 'amox 500 cap' },
                              { label: 'Augmentin 625', q: 'augmentin 625' },
                              { label: 'Metformin XR', q: 'metformin xr' },
                              { label: 'Insulin Pen', q: 'insulin pen' }
                            ].map((preset) => (
                              <button
                                key={preset.q}
                                onClick={() => setPosSearch(preset.q)}
                                className={`px-2.5 py-1 rounded-xl border text-[11px] font-display font-bold transition-all ${
                                  posSearch === preset.q
                                    ? theme.badgeClass
                                    : 'border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:border-slate-300'
                                }`}
                              >
                                {preset.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
                          <input
                            ref={posSearchInputRef}
                            type="text"
                            value={posSearch}
                            onChange={(e) => setPosSearch(e.target.value)}
                            placeholder="Type molecule + strength + form (e.g., 'amox 500 cap 100' or 'cipro 500')..."
                            className={`w-full pl-11 pr-24 py-3.5 text-sm font-medium bg-slate-50/70 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:outline-none focus:bg-white dark:focus:bg-zinc-900 transition-all ${theme.ringClass}`}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                            {posSearch ? (
                              <button
                                onClick={() => setPosSearch('')}
                                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-zinc-800"
                              >
                                Clear
                              </button>
                            ) : (
                              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono-code text-slate-400 bg-slate-100 dark:bg-zinc-800">
                                <Command className="w-3 h-3" /> K
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setPosCategory(cat)}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-display font-bold whitespace-nowrap transition-all ${
                                posCategory === cat
                                  ? theme.btnClass
                                  : 'bg-slate-100/80 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                        <div className="px-5 py-3.5 border-b border-slate-200/80 dark:border-zinc-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-900/40">
                          <span className="text-xs font-semibold text-slate-600 dark:text-zinc-400">
                            Showing{' '}
                            <span className="font-mono-code font-bold text-slate-900 dark:text-white">
                              {posResults.length}
                            </span>{' '}
                            Matching Variants
                          </span>
                          <span className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                            <Sparkles className={`w-3.5 h-3.5 ${theme.textClass}`} />
                            <span>Whole Pack or Loose Strip Dispensing</span>
                          </span>
                        </div>

                        <div className="divide-y divide-slate-200/70 dark:divide-zinc-800/80 max-h-[600px] overflow-y-auto">
                          {posResults.map((drug) => {
                            const isOut = drug.stockQty <= 0;
                            const isExpired = drug.daysUntilExpiry <= 0;
                            const canUnitDispense = drug.unitsPerPack >= 10;

                            return (
                              <div
                                key={drug.id}
                                className={`p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                                  isOut || isExpired
                                    ? 'opacity-50 bg-slate-50/40 dark:bg-zinc-900/20'
                                    : 'hover:bg-slate-50/90 dark:hover:bg-zinc-900/50'
                                }`}
                              >
                                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                                  <div
                                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 mt-0.5 ${theme.badgeClass}`}
                                  >
                                    <DosageFormIcon form={drug.dosageForm} className="w-7 h-7" />
                                  </div>

                                  <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                                        <TallManName name={drug.genericName} accentTextClass={theme.textClass} />
                                      </h3>
                                      <span className="text-xs font-medium text-slate-500">
                                        {drug.brandName}
                                      </span>
                                      {drug.rxRequired ? (
                                        <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded-md border border-slate-900 dark:border-zinc-200">
                                          Rx
                                        </span>
                                      ) : (
                                        <span className="text-[10px] font-mono-code font-medium uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                                          OTC
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-1.5">
                                      <span
                                        className={`px-2.5 py-0.5 rounded-lg text-xs font-mono-code font-bold border ${theme.badgeClass}`}
                                      >
                                        {drug.strength}
                                      </span>
                                      <span className="px-2.5 py-0.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-zinc-700">
                                        {drug.dosageForm}
                                      </span>
                                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-zinc-800">
                                        <PackTypeDoodle packSize={drug.packSize} className="w-3.5 h-3.5" />
                                        <span>{drug.packSize}</span>
                                      </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                                      <span className="font-semibold text-slate-700 dark:text-zinc-300">
                                        {drug.shelfLocation}
                                      </span>
                                      <span>•</span>
                                      <span className="font-mono-code text-[11px]">{drug.sku}</span>
                                      <span>•</span>
                                      <span>
                                        Stock: <strong className="font-mono-code">{drug.stockQty} packs</strong>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                                  <div className="font-serif-editorial text-xl font-bold text-slate-900 dark:text-white">
                                    {formatNaira(drug.sellingPrice)}
                                  </div>

                                  <div className="flex items-center gap-2">
                                    {canUnitDispense && !isOut && !isExpired && (
                                      <button
                                        onClick={() => addToCart(drug, 'UNIT')}
                                        className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-zinc-200 text-xs font-display font-bold"
                                      >
                                        + Strip
                                      </button>
                                    )}
                                    <button
                                      disabled={isOut || isExpired}
                                      onClick={() => addToCart(drug, 'PACK')}
                                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 ${
                                        isOut || isExpired
                                          ? 'bg-slate-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed'
                                          : theme.btnClass
                                      }`}
                                    >
                                      <Plus className="w-3.5 h-3.5" />
                                      <span>{isExpired ? 'Expired' : isOut ? 'Out' : 'Add Pack'}</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Active Dispensing Tray */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl shadow-xs flex flex-col sticky top-24 overflow-hidden">
                      <div className="p-5 border-b border-slate-200/80 dark:border-zinc-800/80 flex items-center justify-between bg-slate-50/40 dark:bg-zinc-900/30">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${theme.badgeClass}`}>
                            <ShoppingCart className="w-4 h-4" />
                          </div>
                          <div>
                            <h2 className="font-display font-bold text-base text-slate-900 dark:text-white">
                              Active Dispensing Tray
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-zinc-400">
                              {cart.length === 0
                                ? 'Select medications on the left'
                                : `${cart.reduce((a, b) => a + b.qty, 0)} units queued for checkout`}
                            </p>
                          </div>
                        </div>
                        {cart.length > 0 && (
                          <button
                            onClick={() => setCart([])}
                            className="text-xs font-display font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white px-2.5 py-1 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800"
                          >
                            Clear Tray
                          </button>
                        )}
                      </div>

                      <div className="divide-y divide-slate-200/70 dark:divide-zinc-800/80 max-h-[360px] overflow-y-auto">
                        {cart.length === 0 ? (
                          <EmptyPosCounterIllustration theme={theme} />
                        ) : (
                          cart.map((line) => (
                            <div key={line.lineKey} className="p-4 space-y-2.5">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${theme.badgeClass}`}
                                  >
                                    <DosageFormIcon form={line.drug.dosageForm} className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                      <span>{line.drug.genericName}</span>
                                      {line.drug.rxRequired && (
                                        <span className="text-[10px] font-mono-code font-bold px-1.5 py-0.2 border border-slate-900 dark:border-zinc-200 rounded">
                                          Rx
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {line.drug.brandName} • {line.drug.strength} • {line.unitLabel}
                                    </div>
                                  </div>
                                </div>

                                <div className="text-right">
                                  <div className="font-serif-editorial font-bold text-base text-slate-900 dark:text-white">
                                    {formatNaira(line.unitPrice * line.qty)}
                                  </div>
                                  <div className="text-[11px] font-mono-code text-slate-400">
                                    {formatNaira(line.unitPrice)} / ea
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between pl-12">
                                <div>
                                  {line.drug.unitsPerPack >= 10 && (
                                    <button
                                      onClick={() => toggleCartLineMode(line.lineKey)}
                                      className={`text-xs font-display font-bold hover:underline ${theme.textClass}`}
                                    >
                                      Switch to {line.dispenseMode === 'PACK' ? 'Loose Strip' : 'Whole Pack'}
                                    </button>
                                  )}
                                </div>

                                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl border border-slate-200/80 dark:border-zinc-800">
                                  <button
                                    onClick={() => updateCartQty(line.lineKey, -1)}
                                    className="w-6 h-6 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-8 text-center font-mono-code text-xs font-bold">
                                    {line.qty}
                                  </span>
                                  <button
                                    onClick={() => updateCartQty(line.lineKey, 1)}
                                    className="w-6 h-6 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      {cart.length > 0 && (
                        <div className="p-5 border-t border-slate-200/80 dark:border-zinc-800/80 space-y-4 bg-slate-50/60 dark:bg-zinc-900/40">
                          {cartSummary.hasRxItems && (
                            <div className="p-3.5 rounded-2xl border border-slate-900/80 dark:border-zinc-200/80 bg-white dark:bg-zinc-900 space-y-2">
                              <label className="flex items-center gap-2.5 text-xs font-display font-bold cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={rxVerified}
                                  onChange={(e) => setRxVerified(e.target.checked)}
                                  className="w-4 h-4 rounded accent-slate-900 dark:accent-white"
                                />
                                <FileCheck2 className={`w-4 h-4 ${theme.textClass}`} />
                                <span>Prescription Verified by Pharmacist (Rx Required)</span>
                              </label>
                              <input
                                type="text"
                                value={prescriberNote}
                                onChange={(e) => setPrescriberNote(e.target.value)}
                                placeholder="Prescriber Name & Rx Ref (e.g., Dr. Bello #RX-409)"
                                className="w-full px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl"
                              />
                            </div>
                          )}

                          {cartSummary.hasNearExpiryItems && (
                            <div className="p-3.5 rounded-2xl border border-slate-900 dark:border-zinc-200 bg-white dark:bg-zinc-900 space-y-1.5">
                              <div className="flex items-center gap-2 text-xs font-display font-bold">
                                <AlertTriangle className="w-4 h-4" />
                                <span>FEFO Short-Dated Batch (&le; 60 Days)</span>
                              </div>
                              <label className="flex items-center gap-2 text-xs font-semibold pt-1 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={expiryOverrideConfirmed}
                                  onChange={(e) => setExpiryOverrideConfirmed(e.target.checked)}
                                  className="w-3.5 h-3.5 rounded"
                                />
                                <span>Patient counseled on batch expiry date</span>
                              </label>
                            </div>
                          )}

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-display font-bold text-slate-500 mb-1">
                                Patient / Customer Name
                              </label>
                              <input
                                type="text"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                placeholder="Walk-in Patient"
                                className="w-full px-3 py-2 text-xs font-medium bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-display font-bold text-slate-500 mb-1">
                                Discount (%)
                              </label>
                              <input
                                type="number"
                                min="0"
                                max="50"
                                value={discountPercent}
                                onChange={(e) =>
                                  setDiscountPercent(Math.min(50, Math.max(0, Number(e.target.value))))
                                }
                                className="w-full px-3 py-2 text-xs font-mono-code font-semibold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            {['Card / POS', 'Cash', 'Transfer'].map((method) => (
                              <button
                                key={method}
                                type="button"
                                onClick={() => setPaymentMethod(method)}
                                className={`py-2 rounded-xl text-xs font-display font-bold border transition-all ${
                                  paymentMethod === method
                                    ? `${theme.btnClass} border-transparent`
                                    : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400'
                                }`}
                              >
                                {method}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-baseline justify-between pt-2 border-t border-slate-200/80 dark:border-zinc-800">
                            <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                              Total Due
                            </span>
                            <span className={`font-serif-editorial text-3xl font-bold ${theme.textClass}`}>
                              {formatNaira(cartSummary.finalTotal)}
                            </span>
                          </div>

                          <button
                            onClick={handleCompleteSale}
                            className={`w-full py-3.5 rounded-2xl text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${theme.btnClass}`}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Issue Invoice &amp; Print Receipt ({formatNaira(cartSummary.finalTotal)})</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* INVOICES & RECEIPTS LEDGER SUB-VIEW */
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                      <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={invoiceSearch}
                          onChange={(e) => setInvoiceSearch(e.target.value)}
                          placeholder="Search invoices by ID, patient, prescriber, or medication..."
                          className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        {['ALL', 'Card / POS', 'Cash', 'Transfer'].map((pm) => (
                          <button
                            key={pm}
                            onClick={() => setInvoicePaymentFilter(pm)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold ${
                              invoicePaymentFilter === pm
                                ? theme.btnClass
                                : 'bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400'
                            }`}
                          >
                            {pm}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {filteredInvoices.map((sale) => (
                        <div
                          key={sale.id}
                          className={`bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-5 space-y-3.5 shadow-2xs ${
                            sale.status === 'VOIDED' ? 'opacity-55' : ''
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-zinc-800 pb-3">
                            <div className="flex flex-wrap items-center gap-2.5 text-xs">
                              <span className={`px-2.5 py-1 rounded-lg font-mono-code font-bold border ${theme.badgeClass}`}>
                                {sale.id}
                              </span>
                              <span className="font-mono-code text-slate-500">{sale.timestamp}</span>
                              <span>•</span>
                              <span className="font-display font-bold text-slate-900 dark:text-white">
                                {sale.patientName}
                              </span>
                              <span>•</span>
                              <span className="text-slate-500 font-medium">{sale.prescriberNote}</span>
                              {sale.status === 'VOIDED' && (
                                <span className="px-2 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-mono-code text-[10px] font-bold">
                                  VOIDED &amp; REFUNDED
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2.5 text-xs">
                              <span className="px-2.5 py-1 border border-slate-200 dark:border-zinc-700 rounded-lg font-semibold">
                                {sale.paymentMethod}
                              </span>
                              <span className="font-serif-editorial text-xl font-bold text-slate-900 dark:text-white">
                                {formatNaira(sale.total)}
                              </span>
                              <button
                                onClick={() => setLastReceipt(sale)}
                                className={`px-3 py-1.5 rounded-xl font-display font-bold ${theme.btnClass}`}
                              >
                                Receipt / Invoice
                              </button>
                              {sale.status !== 'VOIDED' && (
                                <button
                                  onClick={() => handleVoidInvoice(sale.id)}
                                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-white font-display font-bold flex items-center gap-1"
                                  title="Void Invoice & Restore Stock"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Void</span>
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {sale.lines.map((line, idx) => (
                              <div
                                key={idx}
                                className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800 flex items-center justify-between text-xs"
                              >
                                <div>
                                  <div className="font-display font-bold text-slate-900 dark:text-white">
                                    {line.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                                    {line.variant}
                                  </div>
                                </div>
                                <div className="text-right font-mono-code">
                                  <div className="font-bold text-slate-900 dark:text-white">
                                    {line.qty}× @ {formatNaira(line.unitPrice)}
                                  </div>
                                  <div className={`text-[11px] font-bold ${theme.textClass}`}>
                                    {formatNaira(line.lineTotal)}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* =================================================================
                PAGE 4: SUPPLIERS & PURCHASE ORDERS PAGE
               ================================================================= */}
            {activePage === 'suppliers' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                      A&amp;O Pharmaceutical Suppliers &amp; Wholesale Distributors
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                      Extracted directly from Pages 40–78 of your PDF manifest (`SANTUS`, `GJ`, `PHARMATON`, `Shelflife`, `FIDSON`, `BLESSED NOEDYKE`, `CHRIS`, `ELIONA`, `GREENLIFE`).
                    </p>
                  </div>
                  <button
                    onClick={handleGeneratePurchaseOrder}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-display font-bold flex items-center gap-2 shadow-xs ${theme.btnClass}`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Auto-Generate PO for Low Stock ({kpiStats.lowStockCount + kpiStats.outOfStockCount})</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { name: 'SANTUS', specialty: 'Primary Wholesale • Syringes, Antibiotics & Antihypertensives', code: 'SUP-SANTUS' },
                    { name: 'GJ', specialty: 'Full-Line Distributor • Amatem, Augmentin, Creams & Drops', code: 'SUP-GJ' },
                    { name: 'PHARMATON', specialty: 'Branded Generics • Ciprotab, Astymin & Analgesics', code: 'SUP-PHARM' },
                    { name: 'Shelflife', specialty: 'Automated Pharmacy Replenishment • Amlodipine & Coatal', code: 'SUP-SHELF' },
                    { name: 'FIDSON', specialty: 'Direct Manufacturer • Astymin, Astyfer, Ciprotab & Infusions', code: 'SUP-FIDSON' },
                    { name: 'BLESSED NOEDYKE', specialty: 'Tonics, Antimalarials & Emvite Multivitamins', code: 'SUP-NOEDYKE' },
                    { name: 'CHRIS', specialty: 'Glucometer Strips, Clomid, Dextrose Infusions & Vitamins', code: 'SUP-CHRIS' },
                    { name: 'ELIONA', specialty: 'Amoxicillin, Amatem Softgel, Auglocef & Bonecal', code: 'SUP-ELIONA' },
                    { name: 'GREENLIFE', specialty: 'Ceftriaxone, Artemether & Antimalarial Specialties', code: 'SUP-GREEN' }
                  ].map((sup) => {
                    const supplierItems = catalog.filter((i) => i.supplier === sup.name);
                    const inStockItems = supplierItems.filter((i) => i.stockQty > 0).length;
                    return (
                      <div
                        key={sup.code}
                        className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-5 space-y-3 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono-code font-bold border ${theme.badgeClass}`}>
                            {sup.code}
                          </span>
                          <span className="text-xs font-mono-code font-bold text-slate-500">
                            {supplierItems.length} SKUs ({inStockItems} in stock)
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                            {sup.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">{sup.specialty}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                          <button
                            onClick={() => {
                              setSupplierFilter(sup.name);
                              setActivePage('inventory');
                            }}
                            className="font-display font-bold text-slate-600 dark:text-zinc-300 hover:underline"
                          >
                            View {supplierItems.length} Items
                          </button>
                          <button
                            onClick={handleGeneratePurchaseOrder}
                            className={`font-display font-bold hover:underline ${theme.textClass}`}
                          >
                            Draft PO &rarr;
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                  <div className="p-5 border-b border-slate-200/80 dark:border-zinc-800">
                    <h3 className="font-display font-bold text-base">Active &amp; Recent Purchase Orders</h3>
                  </div>
                  <div className="divide-y divide-slate-200/70 dark:divide-zinc-800">
                    {purchaseOrders.map((po) => (
                      <div
                        key={po.id}
                        className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className={`px-2.5 py-0.5 rounded-lg font-mono-code font-bold border ${theme.badgeClass}`}>
                              {po.id}
                            </span>
                            <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                              {po.supplier}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 font-mono-code text-[10px] font-bold">
                              {po.status}
                            </span>
                          </div>
                          <p className="text-slate-500">{po.notes}</p>
                          <div className="font-mono-code text-[11px] text-slate-400">
                            Created {po.createdDate} • Expected {po.expectedDate} • {po.itemsCount} SKU lines
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <div className="font-serif-editorial text-lg font-bold text-slate-900 dark:text-white">
                              {formatNaira(po.estimatedCost)}
                            </div>
                            <div className="text-[10px] text-slate-400">Wholesale Est.</div>
                          </div>
                          {po.status === 'PENDING_DELIVERY' && (
                            <button
                              onClick={() => handleReceivePurchaseOrder(po.id)}
                              className={`px-4 py-2 rounded-xl font-display font-bold ${theme.btnClass}`}
                            >
                              Receive Stock into Inventory
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* =================================================================
                PAGE 5: EXPIRY & LASA SAFETY AUDIT (`safety`)
               ================================================================= */}
            {activePage === 'safety' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                      FEFO Expiry Audit &amp; LASA Variant Guardrails
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                      Monitors expiration dates from Pages 118–156 of the A&amp;O Pharmaceutical PDF manifest and groups look-alike drug families.
                    </p>
                  </div>
                  <button
                    onClick={handleQuarantineExpiredBatches}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-display font-bold flex items-center gap-2 ${theme.btnClass}`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>Quarantine Expired Stock ({kpiStats.expiredCount})</span>
                  </button>
                </div>

                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                  <div className="p-5 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between">
                    <h3 className="font-display font-bold text-base">
                      Short-Dated &amp; Expired Batches in Section 1
                    </h3>
                    <span className="text-xs font-mono-code text-slate-500">
                      Reference Date: 2026-10-15
                    </span>
                  </div>
                  <div className="divide-y divide-slate-200/70 dark:divide-zinc-800 max-h-[460px] overflow-y-auto">
                    {catalog
                      .filter((i) => i.daysUntilExpiry <= 240)
                      .sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono-code font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800">
                                #{item.sku}
                              </span>
                              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                                {item.genericName}
                              </span>
                              <span className={`px-2 py-0.5 rounded font-mono-code font-bold text-[10px] border ${theme.badgeClass}`}>
                                Exp: {item.expiryDate} ({item.daysUntilExpiry}d)
                              </span>
                            </div>
                            <div className="text-slate-500">
                              {item.category} • Supplier: {item.supplier} • Stock: {item.stockQty} ({item.packSize})
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif-editorial font-bold text-base">
                              {formatNaira(item.sellingPrice)}
                            </span>
                            <button
                              onClick={() => {
                                setEditingDrug(item);
                                setIsAddingNew(false);
                              }}
                              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 font-display font-bold"
                            >
                              Update Batch
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* =================================================================
                PAGE 5.5: MULTI-FILE PROJECT EXPLORER & DOWNLOADER (`codebase`)
               ================================================================= */}
            {activePage === 'codebase' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-2xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold border ${theme.badgeClass}`}>
                        {ARCHITECTURE_FILES.length} Separated Modules
                      </span>
                      <h2 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                        Modular Multi-File Project Structure
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      Inspect, copy, or download each individual file below for your local Vite / React multi-file repository.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => {
                        const activeFile = ARCHITECTURE_FILES[selectedCodeFileIdx] || ARCHITECTURE_FILES[0];
                        handleDownloadCodeFile(activeFile);
                        showToast(`Downloaded ${activeFile.path}`);
                      }}
                      className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-white text-xs font-display font-bold flex items-center gap-2 bg-white dark:bg-zinc-900"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Selected File</span>
                    </button>

                    <button
                      onClick={() => {
                        handleDownloadAllProjectFiles();
                        showToast('Downloaded complete 10-file project bundle.');
                      }}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-display font-bold flex items-center gap-2 shadow-xs ${theme.btnClass}`}
                    >
                      <FolderGit2 className="w-4 h-4" />
                      <span>Download All 10 Files Bundle</span>
                    </button>
                  </div>
                </div>

                {/* IDE Split View: File Tree on Left, Code & Role on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4 bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                    <div className="p-4 border-b border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 flex items-center justify-between">
                      <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                        Project Directory Tree
                      </span>
                      <span className="text-[11px] font-mono-code text-slate-400">pharmacore-pos/</span>
                    </div>
                    <div className="divide-y divide-slate-200/60 dark:divide-zinc-800/70">
                      {ARCHITECTURE_FILES.map((file, idx) => {
                        const isSelected = selectedCodeFileIdx === idx;
                        return (
                          <button
                            key={file.path}
                            onClick={() => setSelectedCodeFileIdx(idx)}
                            className={`w-full p-4 text-left transition-all flex items-start justify-between gap-3 ${
                              isSelected
                                ? `${theme.softBgClass} border-l-4 border-slate-900 dark:border-white`
                                : 'hover:bg-slate-50 dark:hover:bg-zinc-900/50'
                            }`}
                          >
                            <div className="min-w-0 space-y-1">
                              <div className="font-mono-code font-bold text-xs text-slate-900 dark:text-white truncate">
                                {file.path}
                              </div>
                              <div className="text-[11px] font-display font-semibold text-slate-500 dark:text-zinc-400 line-clamp-1">
                                {file.role}
                              </div>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono-code shrink-0 border ${theme.badgeClass}`}>
                              {file.path.split('.').pop()}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active File Viewer */}
                  {(() => {
                    const activeFile = ARCHITECTURE_FILES[selectedCodeFileIdx] || ARCHITECTURE_FILES[0];
                    return (
                      <div className="lg:col-span-8 bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs">
                        <div className="p-5 border-b border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-0.5 rounded-lg font-mono-code text-xs font-bold border ${theme.badgeClass}`}>
                                {activeFile.path}
                              </span>
                              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                                {activeFile.role}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                              {activeFile.summary}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                navigator.clipboard?.writeText(activeFile.code);
                                showToast(`Copied ${activeFile.path} to clipboard.`);
                              }}
                              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold flex items-center gap-1.5 bg-white dark:bg-zinc-900"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy File</span>
                            </button>
                            <button
                              onClick={() => {
                                handleDownloadCodeFile(activeFile);
                                showToast(`Downloaded ${activeFile.path}`);
                              }}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 ${theme.btnClass}`}
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </button>
                          </div>
                        </div>

                        <pre className="p-5 bg-slate-950 text-slate-100 font-mono-code text-xs overflow-x-auto leading-relaxed max-h-[540px]">
                          {activeFile.code}
                        </pre>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* =================================================================
                PAGE 6: SETTINGS & MODULAR ARCHITECTURE PAGE
               ================================================================= */}
            {activePage === 'settings' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Pharmacy Profile & Receipt Header Settings */}
                  <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 space-y-4 shadow-2xs">
                    <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      Independent Pharmacy Profile &amp; Receipt Header
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                      <div className="sm:col-span-2">
                        <label className="block text-slate-500 mb-1 font-semibold">Pharmacy Title</label>
                        <input
                          type="text"
                          value={pharmacyProfile.name}
                          onChange={(e) => setPharmacyProfile({ ...pharmacyProfile, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-transparent font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-500 mb-1 font-semibold">Superintendent Pharmacist</label>
                        <input
                          type="text"
                          value={pharmacyProfile.pharmacistOnDuty}
                          onChange={(e) =>
                            setPharmacyProfile({ ...pharmacyProfile, pharmacistOnDuty: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-transparent font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-500 mb-1 font-semibold">License Reference</label>
                        <input
                          type="text"
                          value={pharmacyProfile.licenseNumber}
                          onChange={(e) =>
                            setPharmacyProfile({ ...pharmacyProfile, licenseNumber: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-transparent font-mono-code"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-slate-500 mb-1 font-semibold">Street Address</label>
                        <input
                          type="text"
                          value={pharmacyProfile.address}
                          onChange={(e) => setPharmacyProfile({ ...pharmacyProfile, address: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-transparent font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2-3 Color Theme Studio */}
                  <div className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 space-y-4 shadow-2xs">
                    <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      2–3 Color Apothecary Theme Studio
                    </h2>
                    <p className="text-xs text-slate-500">
                      Customize the base canvas (Alabaster White or Obsidian Carbon) and signature clinical accent.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.values(ACCENT_THEMES).map((pal) => (
                        <button
                          key={pal.id}
                          onClick={() => setAccentKey(pal.id)}
                          className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 text-xs font-display font-bold transition-all ${
                            accentKey === pal.id
                              ? `${theme.badgeClass} ring-2 ring-slate-400/40`
                              : 'border-slate-200 dark:border-zinc-800'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full shrink-0"
                            style={{
                              backgroundColor: pal.id === 'mono' ? (darkMode ? '#F8FAFC' : '#0F172A') : pal.swatch
                            }}
                          />
                          <span className="truncate">{pal.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modular Multi-File Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {ARCHITECTURE_FILES.map((file) => (
                    <div
                      key={file.path}
                      className="bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xs"
                    >
                      <div className="px-5 py-3.5 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between bg-slate-50/60 dark:bg-zinc-900/50">
                        <span className={`px-2.5 py-0.5 rounded-lg font-mono-code text-xs font-bold border ${theme.badgeClass}`}>
                          {file.path}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard?.writeText(file.code);
                            showToast(`Copied ${file.path} to clipboard.`);
                          }}
                          className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </button>
                      </div>
                      <div className="p-5 space-y-2.5">
                        <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                          {file.role}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                          {file.summary}
                        </p>
                        <pre className="p-3.5 rounded-2xl bg-slate-950 text-slate-100 font-mono-code text-[11px] overflow-x-auto leading-relaxed">
                          {file.code}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {}
        {/* SAFE DELETE MEDICATION CONFIRMATION MODAL */}
        {drugToDelete && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Delete Medication Variant?
                  </h3>
                  <p className="text-xs text-slate-500">
                    This action removes the SKU from your active pharmacy catalog.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs space-y-1">
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  {drugToDelete.genericName} ({drugToDelete.brandName})
                </div>
                <div className="text-slate-500">
                  {drugToDelete.strength} • {drugToDelete.dosageForm} • {drugToDelete.packSize}
                </div>
                <div className="font-mono-code text-[11px] text-slate-400">
                  SKU: {drugToDelete.sku} • Current Stock: {drugToDelete.stockQty} packs
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  onClick={() => setDrugToDelete(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDeleteDrug}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-display font-bold"
                >
                  Confirm Delete SKU
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EXCEL (.XLSX / .XLS) & CSV INVENTORY IMPORT STUDIO MODAL */}
        {isImportModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-5 sm:px-6 border-b border-slate-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60 dark:bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${theme.badgeClass}`}>
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase ${theme.solidBadgeClass}`}>
                        Spreadsheet Ingestion
                      </span>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                        Import Inventory Additions from Excel (.xlsx, .xls) or .CSV
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      Upload supplier delivery manifests, map columns automatically, and merge stock quantities or register new variants.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadTemplate}
                    className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:border-slate-900 dark:hover:border-white text-xs font-display font-bold flex items-center gap-1.5 bg-white dark:bg-zinc-900"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Template (.csv)</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleLoadSampleManifest}
                    className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 border ${theme.badgeClass}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Load Sample Delivery (6 Rows)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsImportModalOpen(false)}
                    className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
                {/* Source Mode Switcher & Duplicate Resolution Policy */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 w-fit">
                    <button
                      type="button"
                      onClick={() => setImportSourceTab('upload')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 transition-all ${
                        importSourceTab === 'upload'
                          ? `${theme.btnClass} shadow-2xs`
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>1. Upload Excel (.xlsx / .xls) or .CSV File</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setImportSourceTab('paste')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 transition-all ${
                        importSourceTab === 'paste'
                          ? `${theme.btnClass} shadow-2xs`
                          : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>2. Paste Cells from Excel / Sheets</span>
                    </button>
                  </div>

                  {/* Duplicate SKU Handling Strategy */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-display font-bold text-slate-500 dark:text-zinc-400">
                      When SKU or Variant Matches Existing Stock:
                    </span>
                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-900 p-1 rounded-2xl border border-slate-200 dark:border-zinc-800">
                      {[
                        { id: 'ADD_STOCK', label: '+ Add to Stock Qty' },
                        { id: 'OVERWRITE', label: 'Overwrite Stock' },
                        { id: 'ALWAYS_NEW', label: 'Create New Batch SKU' }
                      ].map((strat) => (
                        <button
                          key={strat.id}
                          type="button"
                          onClick={() => setImportDuplicateStrategy(strat.id)}
                          className={`px-3 py-1.5 rounded-xl font-display font-bold transition-all ${
                            importDuplicateStrategy === strat.id
                              ? `${theme.btnClass} shadow-2xs`
                              : 'text-slate-600 dark:text-zinc-400'
                          }`}
                        >
                          {strat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Upload Dropzone OR Paste Area */}
                {importSourceTab === 'upload' ? (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDraggingFile(true);
                    }}
                    onDragLeave={() => setIsDraggingFile(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDraggingFile(false);
                      const droppedFile = e.dataTransfer?.files?.[0];
                      if (droppedFile) handleImportFileSelect(droppedFile);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`cursor-pointer rounded-3xl border-2 border-dashed p-6 sm:p-8 text-center transition-all ${
                      isDraggingFile
                        ? `${theme.softBgClass} border-slate-900 dark:border-white`
                        : 'border-slate-300 dark:border-zinc-700 hover:border-slate-500 dark:hover:border-zinc-500 bg-slate-50/50 dark:bg-zinc-900/30'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".xlsx,.xls,.csv,.tsv,.txt"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImportFileSelect(file);
                        e.target.value = '';
                      }}
                      className="hidden"
                    />
                    <div className="max-w-md mx-auto space-y-2.5">
                      <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center border ${theme.badgeClass}`}>
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {importFileName
                          ? `Loaded File: ${importFileName}`
                          : 'Drag & drop your Excel (.xlsx, .xls) or .CSV file here, or click to browse'}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                        Supports multi-sheet Microsoft Excel workbooks (`.xlsx`, `.xls`), comma-separated (`.csv`), and tab-delimited (`.tsv`) supplier invoices.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 bg-slate-50/70 dark:bg-zinc-900/40 p-4 rounded-3xl border border-slate-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-bold text-slate-700 dark:text-zinc-300">
                        Copy rows (including header row) from Microsoft Excel or Google Sheets and paste below:
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setImportPasteText(SAMPLE_IMPORT_CSV);
                          const { headers, rows } = parseDelimitedText(SAMPLE_IMPORT_CSV);
                          loadParsedDataIntoStaging(headers, rows, 'Pasted_Clipboard_Data');
                        }}
                        className={`font-display font-bold hover:underline ${theme.textClass}`}
                      >
                        Insert Sample CSV Text
                      </button>
                    </div>
                    <textarea
                      rows={4}
                      value={importPasteText}
                      onChange={(e) => setImportPasteText(e.target.value)}
                      placeholder="GenericName,BrandName,Category,Strength,DosageForm,PackSize,StockQty,SellingPrice..."
                      className="w-full p-3.5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 font-mono-code text-xs focus:outline-none"
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          const { headers, rows } = parseDelimitedText(importPasteText);
                          if (rows.length === 0) {
                            showToast('Please paste at least one header line and one medication row.', 'error');
                            return;
                          }
                          loadParsedDataIntoStaging(headers, rows, 'Pasted_Excel_Rows');
                          showToast(`Parsed ${rows.length} rows from pasted text.`, 'success');
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-display font-bold ${theme.btnClass}`}
                      >
                        Parse Pasted Rows
                      </button>
                    </div>
                  </div>
                )}

                {/* Multi-Sheet Selector (if an Excel workbook with multiple sheets was uploaded) */}
                {importSheetNames.length > 1 && (
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs">
                    <span className="font-display font-bold text-slate-600 dark:text-zinc-300">
                      Select Excel Worksheet:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {importSheetNames.map((sName) => (
                        <button
                          key={sName}
                          type="button"
                          onClick={() => {
                            setSelectedSheetName(sName);
                            extractSheetRows(importWorkbookRef, sName, importFileName.split(' (')[0]);
                          }}
                          className={`px-3 py-1 rounded-xl font-display font-bold ${
                            selectedSheetName === sName
                              ? theme.btnClass
                              : 'bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-300'
                          }`}
                        >
                          {sName}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Column Auto-Mapping Inspector & Staged Preview */}
                {stagedImportItems.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                          Staged Inventory Preview ({stagedImportItems.filter((_, i) => !importExcludedRows[i]).length} of {stagedImportItems.length} rows selected)
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold border ${theme.badgeClass}`}>
                          {stagedImportItems.filter((r) => r._existingMatch).length} Existing SKU Matches •{' '}
                          {stagedImportItems.filter((r) => !r._existingMatch).length} Brand-New Variants
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowColumnMapper(!showColumnMapper)}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold hover:border-slate-900 dark:hover:border-white"
                      >
                        {showColumnMapper ? 'Hide Column Mapping' : `Customize Column Mapping (${importHeaders.length} cols detected)`}
                      </button>
                    </div>

                    {/* Collapsible Column Mapping Grid */}
                    {showColumnMapper && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        {IMPORT_FIELD_DEFS.map((field) => (
                          <div key={field.key}>
                            <label className="block text-[11px] font-display font-bold text-slate-500 dark:text-zinc-400 mb-1">
                              {field.label}
                            </label>
                            <select
                              value={importColumnMap[field.key] || ''}
                              onChange={(e) =>
                                setImportColumnMap((prev) => ({ ...prev, [field.key]: e.target.value }))
                              }
                              className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 font-medium"
                            >
                              <option value="">-- Auto / Default --</option>
                              {importHeaders.map((h) => (
                                <option key={h} value={h}>
                                  {h}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Staged Items Table */}
                    <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                      <div className="overflow-x-auto max-h-[320px]">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-[10px] font-display font-bold uppercase tracking-wider text-slate-400 sticky top-0 z-10">
                              <th className="py-2.5 px-3 w-8">Use</th>
                              <th className="py-2.5 px-3">Import Action</th>
                              <th className="py-2.5 px-3">Medication &amp; Brand</th>
                              <th className="py-2.5 px-3">Distinguishable Variant</th>
                              <th className="py-2.5 px-3">Batch &amp; Expiry</th>
                              <th className="py-2.5 px-3 text-right">Stock Impact</th>
                              <th className="py-2.5 px-3 text-right">Sell Price</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200/70 dark:divide-zinc-800">
                            {stagedImportItems.map((row, idx) => {
                              const isExcluded = Boolean(importExcludedRows[idx]);
                              const hasMatch = Boolean(row._existingMatch);
                              const existingQty = row._existingMatch?.stockQty || 0;
                              const resultingQty =
                                hasMatch && importDuplicateStrategy === 'ADD_STOCK'
                                  ? existingQty + row.stockQty
                                  : row.stockQty;

                              return (
                                <tr
                                  key={idx}
                                  className={`transition-colors ${
                                    isExcluded
                                      ? 'opacity-40 bg-slate-50/50 dark:bg-zinc-900/20'
                                      : 'hover:bg-slate-50/80 dark:hover:bg-zinc-900/40'
                                  }`}
                                >
                                  <td className="py-2.5 px-3">
                                    <input
                                      type="checkbox"
                                      checked={!isExcluded}
                                      onChange={() =>
                                        setImportExcludedRows((prev) => ({
                                          ...prev,
                                          [idx]: !prev[idx]
                                        }))
                                      }
                                      className="w-3.5 h-3.5 rounded"
                                    />
                                  </td>
                                  <td className="py-2.5 px-3 whitespace-nowrap">
                                    {hasMatch && importDuplicateStrategy !== 'ALWAYS_NEW' ? (
                                      <span className={`px-2 py-0.5 rounded-md font-mono-code font-bold text-[10px] border ${theme.badgeClass}`}>
                                        {importDuplicateStrategy === 'ADD_STOCK' ? '+ RESTOCK SKU' : 'OVERWRITE SKU'}
                                      </span>
                                    ) : (
                                      <span className="px-2 py-0.5 rounded-md font-mono-code font-bold text-[10px] bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                                        NEW VARIANT
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-2.5 px-3">
                                    <div className="font-display font-bold text-slate-900 dark:text-white">
                                      {row.genericName}
                                    </div>
                                    <div className="text-[11px] text-slate-500">
                                      {row.brandName} • <span className="font-mono-code">{row.sku}</span>
                                    </div>
                                  </td>
                                  <td className="py-2.5 px-3">
                                    <div className="flex flex-wrap items-center gap-1">
                                      <span className={`px-2 py-0.2 rounded font-mono-code font-bold border ${theme.badgeClass}`}>
                                        {row.strength}
                                      </span>
                                      <span className="px-2 py-0.2 rounded border border-slate-200 dark:border-zinc-700">
                                        {row.dosageForm}
                                      </span>
                                      <span className="px-2 py-0.2 rounded bg-slate-100 dark:bg-zinc-800">
                                        {row.packSize}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-2.5 px-3 font-mono-code whitespace-nowrap">
                                    <div>{row.batchNumber}</div>
                                    <div className="text-[10px] text-slate-500">
                                      Exp {row.expiryDate} ({row.shelfLocation})
                                    </div>
                                  </td>
                                  <td className="py-2.5 px-3 text-right font-mono-code whitespace-nowrap">
                                    {hasMatch && importDuplicateStrategy === 'ADD_STOCK' ? (
                                      <div>
                                        <span className="text-slate-400">{existingQty}</span> +{' '}
                                        <strong className={theme.textClass}>{row.stockQty}</strong> ={' '}
                                        <strong className="text-slate-900 dark:text-white">{resultingQty}</strong>
                                      </div>
                                    ) : (
                                      <strong className="text-slate-900 dark:text-white">{row.stockQty} packs</strong>
                                    )}
                                  </td>
                                  <td className="py-2.5 px-3 text-right font-mono-code font-bold whitespace-nowrap">
                                    {formatNaira(row.sellingPrice)}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-6 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500 dark:text-zinc-400">
                  Tip: Press <kbd className="px-1.5 py-0.5 rounded border border-slate-300 dark:border-zinc-700 font-mono-code text-[10px]">I</kbd> anywhere in the app to open this Excel/CSV Import Studio.
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsImportModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={stagedImportItems.filter((_, i) => !importExcludedRows[i]).length === 0}
                    onClick={handleCommitImportedRows}
                    className={`px-5 py-2.5 rounded-xl text-xs font-display font-bold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed ${theme.btnClass}`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      Commit {stagedImportItems.filter((_, i) => !importExcludedRows[i]).length} Rows to Apothecary Inventory
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {compareFamilyCode && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-50/60 dark:bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${theme.badgeClass}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase ${theme.solidBadgeClass}`}>
                        LASA Variant Matrix
                      </span>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        {comparedFamilyItems[0]?.genericName || compareFamilyCode} — {comparedFamilyItems.length} Distinguishable Variants
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Side-by-side comparison of animated dosage form doodles, strengths, release types, and pack contents.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setCompareFamilyCode(null)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {comparedFamilyItems.map((variant) => {
                  const isOut = variant.stockQty <= 0;
                  const isExp = variant.daysUntilExpiry <= 0;
                  return (
                    <div
                      key={variant.id}
                      className={`p-4 rounded-2xl border border-slate-200/90 dark:border-zinc-800 flex items-center justify-between gap-3 transition-all ${theme.borderHoverClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 mt-0.5 ${theme.badgeClass}`}>
                          <DosageFormIcon form={variant.dosageForm} className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                            {variant.brandName}
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className={`px-2 py-0.5 rounded-md text-xs font-mono-code font-bold border ${theme.badgeClass}`}>
                              {variant.strength}
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-xs font-semibold border border-slate-200 dark:border-zinc-700">
                              {variant.dosageForm}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-zinc-800">
                              <PackTypeDoodle packSize={variant.packSize} className="w-3 h-3" />
                              <span>{variant.packSize}</span>
                            </span>
                          </div>
                          <div className="text-[11px] font-mono-code text-slate-400">
                            {variant.shelfLocation} • {variant.sku} • {variant.stockQty} packs
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 space-y-1.5">
                        <div className="font-serif-editorial font-bold text-lg text-slate-900 dark:text-white">
                          {formatNaira(variant.sellingPrice)}
                        </div>
                        <button
                          disabled={isOut || isExp}
                          onClick={() => {
                            addToCart(variant, 'PACK');
                            setCompareFamilyCode(null);
                            setActivePage('pos');
                            setPosSubTab('terminal');
                            showToast(`Selected ${variant.brandName} (${variant.strength} • ${variant.packSize})`);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold ${
                            isOut || isExp ? 'bg-slate-100 dark:bg-zinc-800 text-slate-400 cursor-not-allowed' : theme.btnClass
                          }`}
                        >
                          {isOut ? 'Out' : 'Dispense'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {editingDrug && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <form
              onSubmit={handleSaveDrug}
              className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-3.5">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    {isAddingNew ? 'Register New Medication Variant' : `Edit Variant — ${editingDrug.sku}`}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Configure distinguishable clinical attributes, batch expiry, and Naira (₦) pricing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingDrug(null)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Generic Molecule Name *</label>
                  <input
                    required
                    type="text"
                    value={editingDrug.genericName}
                    onChange={(e) => setEditingDrug({ ...editingDrug, genericName: e.target.value })}
                    placeholder="e.g., Amoxicillin + Clavulanic Acid"
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Brand / Manufacturer *</label>
                  <input
                    required
                    type="text"
                    value={editingDrug.brandName}
                    onChange={(e) => setEditingDrug({ ...editingDrug, brandName: e.target.value })}
                    placeholder="e.g., Augmentin (GSK)"
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Therapeutic Category</label>
                  <input
                    type="text"
                    value={editingDrug.category}
                    onChange={(e) => setEditingDrug({ ...editingDrug, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Strength / Concentration *</label>
                  <input
                    required
                    type="text"
                    value={editingDrug.strength}
                    onChange={(e) => setEditingDrug({ ...editingDrug, strength: e.target.value })}
                    placeholder="e.g., 625mg"
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Dosage Form *</label>
                  <input
                    required
                    type="text"
                    value={editingDrug.dosageForm}
                    onChange={(e) => setEditingDrug({ ...editingDrug, dosageForm: e.target.value })}
                    placeholder="e.g., Film-Coated Tablet"
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Pack Size / Contents *</label>
                  <input
                    required
                    type="text"
                    value={editingDrug.packSize}
                    onChange={(e) => setEditingDrug({ ...editingDrug, packSize: e.target.value })}
                    placeholder="e.g., 14s Calendar Pack"
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Batch / Lot Number</label>
                  <input
                    type="text"
                    value={editingDrug.batchNumber}
                    onChange={(e) => setEditingDrug({ ...editingDrug, batchNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Expiry Date</label>
                  <input
                    type="date"
                    value={editingDrug.expiryDate}
                    onChange={(e) => setEditingDrug({ ...editingDrug, expiryDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Shelf / Bay Location</label>
                  <input
                    type="text"
                    value={editingDrug.shelfLocation}
                    onChange={(e) => setEditingDrug({ ...editingDrug, shelfLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Stock Quantity (Packs)</label>
                  <input
                    type="number"
                    value={editingDrug.stockQty}
                    onChange={(e) => setEditingDrug({ ...editingDrug, stockQty: e.target.value })}
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Cost Price (₦)</label>
                  <input
                    type="number"
                    step="50"
                    value={editingDrug.costPrice}
                    onChange={(e) => setEditingDrug({ ...editingDrug, costPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1 font-semibold">Selling Price (₦)</label>
                  <input
                    type="number"
                    step="50"
                    value={editingDrug.sellingPrice}
                    onChange={(e) => setEditingDrug({ ...editingDrug, sellingPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 font-mono-code border border-slate-200 dark:border-zinc-700 rounded-xl bg-transparent"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs font-semibold pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingDrug.rxRequired}
                  onChange={(e) => setEditingDrug({ ...editingDrug, rxRequired: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <span>Prescription Required (Rx Only Medication)</span>
              </label>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setEditingDrug(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold"
                >
                  Cancel
                </button>
                <button type="submit" className={`px-5 py-2.5 rounded-xl text-xs font-display font-bold ${theme.btnClass}`}>
                  Save Drug Variant
                </button>
              </div>
            </form>
          </div>
        )}

        {lastReceipt && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-zinc-800 pb-3">
                <div>
                  <span className={`text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded ${theme.badgeClass}`}>
                    Verified Dispensing Record
                  </span>
                  <h3 className="font-serif-editorial text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    PharmaCore Apothecary
                  </h3>
                  <p className="text-xs text-slate-500">Official Patient Receipt &amp; Label Manifest</p>
                </div>
                <button
                  onClick={() => setLastReceipt(null)}
                  className="p-1.5 rounded-xl border border-slate-200 dark:border-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <DispensedStampDoodle theme={theme} />

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Receipt Reference</span>
                  <span className="font-mono-code font-bold">{lastReceipt.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Timestamp</span>
                  <span className="font-mono-code">{lastReceipt.timestamp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient</span>
                  <span className="font-display font-bold">{lastReceipt.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Rx Verification</span>
                  <span className="font-medium">{lastReceipt.prescriberNote}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Tender</span>
                  <span className="font-semibold">{lastReceipt.paymentMethod}</span>
                </div>
              </div>

              <div className="border-t border-b border-dashed border-slate-200 dark:border-zinc-700 py-3.5 space-y-3">
                {lastReceipt.lines.map((line, i) => (
                  <div key={i} className="space-y-0.5 text-xs">
                    <div className="flex justify-between font-display font-bold text-slate-900 dark:text-white">
                      <span>{line.name}</span>
                      <span className="font-mono-code">{formatNaira(line.lineTotal)}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {line.variant} • <span className="font-mono-code">{line.qty}× @ {formatNaira(line.unitPrice)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">Total Paid</span>
                <span className={`font-serif-editorial text-3xl font-bold ${theme.textClass}`}>
                  {formatNaira(lastReceipt.total)}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2.5">
                <button
                  onClick={() => window.print()}
                  className={`flex-1 py-2.5 rounded-2xl text-xs font-display font-bold flex items-center justify-center gap-2 ${theme.btnClass}`}
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt &amp; Labels</span>
                </button>
                <button
                  onClick={() => setLastReceipt(null)}
                  className="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-zinc-700 text-xs font-display font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
