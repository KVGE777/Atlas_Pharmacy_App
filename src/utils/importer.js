import { DRUG_FAMILIES } from '../data/catalogData';

const IMPORT_FIELD_DEFS = [
  { key: 'sku', label: 'SKU Code', required: false, aliases: ['sku', 'itemcode', 'productcode', 'code', 'id', 'ndc'] },
  { key: 'genericName', label: 'Generic Molecule *', required: true, aliases: ['genericname', 'generic', 'molecule', 'activeingredient', 'drugname', 'inn', 'name'] },
  { key: 'brandName', label: 'Brand / Trade Name *', required: true, aliases: ['brandname', 'brand', 'tradename', 'product', 'productname', 'manufacturer'] },
  { key: 'category', label: 'Therapeutic Category', required: false, aliases: ['category', 'class', 'therapeuticclass', 'group', 'department'] },
  { key: 'strength', label: 'Strength / Dose *', required: true, aliases: ['strength', 'dose', 'dosage', 'concentration', 'potency', 'mg'] },
  { key: 'dosageForm', label: 'Dosage Form *', required: true, aliases: ['dosageform', 'form', 'formulation', 'type', 'presentation'] },
  { key: 'releaseType', label: 'Release Profile', required: false, aliases: ['releasetype', 'release', 'profile', 'delivery'] },
  { key: 'packSize', label: 'Pack Size / Contents *', required: true, aliases: ['packsize', 'pack', 'package', 'contents', 'uom', 'size'] },
  { key: 'unitsPerPack', label: 'Units Per Pack', required: false, aliases: ['unitsperpack', 'units', 'packunits', 'count', 'tabletsperpack'] },
  { key: 'batchNumber', label: 'Batch / Lot No.', required: false, aliases: ['batchnumber', 'batch', 'batchno', 'lot', 'lotnumber', 'lotno'] },
  { key: 'expiryDate', label: 'Expiry Date (YYYY-MM-DD)', required: false, aliases: ['expirydate', 'expiry', 'expdate', 'exp', 'expiration'] },
  { key: 'shelfLocation', label: 'Shelf / Bay Location', required: false, aliases: ['shelflocation', 'shelf', 'bay', 'location', 'bin', 'aisle'] },
  { key: 'stockQty', label: 'Stock Qty (Packs) *', required: true, aliases: ['stockqty', 'stock', 'qty', 'quantity', 'packs', 'onhand', 'addedqty', 'receivedqty'] },
  { key: 'reorderLevel', label: 'Reorder Par Level', required: false, aliases: ['reorderlevel', 'reorder', 'minstock', 'par', 'parlevel'] },
  { key: 'costPrice', label: 'Unit Cost Price (₦)', required: false, aliases: ['costprice', 'cost', 'unitcost', 'buyprice', 'wholesaleprice'] },
  { key: 'sellingPrice', label: 'Selling Price (₦) *', required: true, aliases: ['sellingprice', 'price', 'retailprice', 'unitprice', 'sellprice', 'mrp'] },
  { key: 'rxRequired', label: 'Rx Required (Rx/OTC)', required: false, aliases: ['rxrequired', 'rx', 'prescription', 'classification', 'schedule'] }
];

const SAMPLE_IMPORT_CSV = `SKU,GenericName,BrandName,Category,Strength,DosageForm,ReleaseType,PackSize,UnitsPerPack,BatchNumber,ExpiryDate,ShelfLocation,StockQty,ReorderLevel,CostPrice,SellingPrice,RxRequired
AMOX-500MG-11-1009,Amoxicillin,Amoxil (GSK),Antibiotics,500mg,Capsule,Immediate,10s Blister,10,BN26A410,2028-05-20,Bay A-03,45,15,3500,4900,Rx
AUGM-625MG-99-NEW1,Amoxicillin + Clavulanic Acid,Augmentin Duo (GSK),Antibiotics,625mg,Film-Coated Tablet,Immediate,14s Calendar Pack,14,BN27B901,2028-09-15,Bay B-04,60,15,13000,18000,Rx
PARA-1000MG-99-NEW2,Paracetamol (Acetaminophen),Panadol Advance Optizorb,Analgesics,1000mg,Film-Coated Tablet,Fast-Acting,20s Pack (2x10),20,BN27P332,2028-11-30,Bay C-02,120,20,1800,2600,OTC
INSU-100IU-99-NEW3,Insulin (Human / Analogue),Lantus Solostar (Sanofi),Antidiabetics,100IU/ml (3ml Pen),Pre-filled Pen,Basal 24h,5x Unit Tray,5,BN27L884,2027-12-10,Fridge F-01,25,8,62000,85000,Rx
AZIT-500MG-99-NEW4,Azithromycin Dihydrate,Zithromax Z-Pak (Pfizer),Antibiotics,500mg,Film-Coated Tablet,Once-Daily,6s Blister Pack,6,BN27Z118,2028-08-01,Bay A-09,80,15,9000,12400,Rx
OMEP-40MG-99-NEW5,Omeprazole,Losec MUPS (AstraZeneca),Gastrointestinal,40mg,Delayed-Release Capsule,Enteric MUPS,28s Calendar Pack,28,BN27M502,2028-04-18,Bay D-06,50,12,11500,15800,Rx`;

function parseDelimitedText(rawText) {
  if (!rawText || !rawText.trim()) return { headers: [], rows: [] };
  const text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
  const firstLine = text.split('\n')[0] || '';

  const tabCount = (firstLine.match(/\t/g) || []).length;
  const semiCount = (firstLine.match(/;/g) || []).length;
  const commaCount = (firstLine.match(/,/g) || []).length;
  let delimiter = ',';
  if (tabCount > commaCount && tabCount >= semiCount) delimiter = '\t';
  else if (semiCount > commaCount) delimiter = ';';

  const parsedLines = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const nextCh = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && nextCh === '"') {
        currentVal += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        currentVal += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        currentRow.push(currentVal.trim());
        currentVal = '';
      } else if (ch === '\n') {
        currentRow.push(currentVal.trim());
        if (currentRow.some((cell) => cell !== '')) {
          parsedLines.push(currentRow);
        }
        currentRow = [];
        currentVal = '';
      } else {
        currentVal += ch;
      }
    }
  }
  currentRow.push(currentVal.trim());
  if (currentRow.some((cell) => cell !== '')) {
    parsedLines.push(currentRow);
  }

  if (parsedLines.length < 2) return { headers: parsedLines[0] || [], rows: [] };

  const headers = parsedLines[0].map((h, idx) => h || `Column_${idx + 1}`);
  const rows = parsedLines.slice(1).map((cells) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = cells[idx] !== undefined ? cells[idx] : '';
    });
    return obj;
  });

  return { headers, rows };
}

function autoDetectColumnMap(headers) {
  const mapping = {};
  const normalizedHeaders = headers.map((h) => ({
    raw: h,
    clean: String(h).toLowerCase().replace(/[^a-z0-9]/g, '')
  }));

  IMPORT_FIELD_DEFS.forEach((field) => {
    const exactMatch = normalizedHeaders.find((nh) => field.aliases.includes(nh.clean));
    if (exactMatch) {
      mapping[field.key] = exactMatch.raw;
      return;
    }
    const partialMatch = normalizedHeaders.find((nh) =>
      field.aliases.some((alias) => nh.clean.includes(alias) || alias.includes(nh.clean))
    );
    mapping[field.key] = partialMatch ? partialMatch.raw : '';
  });

  return mapping;
}

function normalizeDateValue(rawDate) {
  if (!rawDate && rawDate !== 0) return '2028-06-30';
  if (typeof rawDate === 'number' && rawDate > 25000 && rawDate < 70000) {
    // Excel serial date conversion
    const utcDays = Math.floor(rawDate - 25569);
    const d = new Date(utcDays * 86400 * 1000);
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  }
  const str = String(rawDate).trim();
  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString().split('T')[0];
  }
  return '2028-06-30';
}

function normalizeImportedRow(rawObj, colMap, index, existingCatalog) {
  const getVal = (key) => {
    const colName = colMap[key];
    if (!colName) return '';
    return rawObj[colName] !== undefined && rawObj[colName] !== null ? String(rawObj[colName]).trim() : '';
  };

  const genericName = getVal('genericName') || 'Unspecified Molecule';
  const brandName = getVal('brandName') || 'Generic Apothecary Brand';
  const strength = getVal('strength') || 'Standard';
  const dosageForm = getVal('dosageForm') || 'Tablet';
  const packSize = getVal('packSize') || '10s Blister';
  const releaseType = getVal('releaseType') || 'Immediate';

  // Match LASA group from DRUG_FAMILIES if possible
  const matchedFamily = DRUG_FAMILIES.find(
    (fam) =>
      genericName.toLowerCase().includes(fam.generic.split(' ')[0].toLowerCase()) ||
      fam.generic.toLowerCase().includes(genericName.toLowerCase())
  );
  const category = getVal('category') || matchedFamily?.category || 'General Medicine';
  const lasaGroup = matchedFamily?.code || genericName.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 4) || 'CUST';

  const parsedUnitsMatch = packSize.match(/(\d+)/);
  const unitsPerPack = Math.max(
    1,
    parseInt(getVal('unitsPerPack'), 10) || (parsedUnitsMatch ? parseInt(parsedUnitsMatch[1], 10) : 10)
  );

  const stockQty = Math.max(0, parseInt(getVal('stockQty').replace(/[^0-9-]/g, ''), 10) || 0);
  const reorderLevel = Math.max(1, parseInt(getVal('reorderLevel').replace(/[^0-9]/g, ''), 10) || 15);
  const sellingPriceRaw = parseFloat(getVal('sellingPrice').replace(/[^0-9.]/g, '')) || 4500;
  const sellingPrice = Math.round(sellingPriceRaw);
  const costPriceRaw = parseFloat(getVal('costPrice').replace(/[^0-9.]/g, ''));
  const costPrice = !isNaN(costPriceRaw) && costPriceRaw > 0
    ? Math.round(costPriceRaw)
    : Math.round(sellingPrice * 0.72);

  const expiryDate = normalizeDateValue(getVal('expiryDate'));
  const today = new Date('2026-10-15T12:00:00Z');
  const daysUntilExpiry = Math.round((new Date(expiryDate).getTime() - today.getTime()) / 86400000);

  const batchNumber = getVal('batchNumber') || `BN26IMP${100 + index}`;
  const shelfLocation = getVal('shelfLocation') || 'Bay A-01';

  const rxRaw = getVal('rxRequired').toLowerCase();
  const rxRequired =
    rxRaw === 'rx' || rxRaw === 'true' || rxRaw === 'yes' || rxRaw === '1'
      ? true
      : rxRaw === 'otc' || rxRaw === 'false' || rxRaw === 'no' || rxRaw === '0'
      ? false
      : Boolean(matchedFamily?.rx);

  const rawSku = getVal('sku');
  const cleanStrength = strength.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 5);

  // Check if this row matches an existing SKU or exact variant in the catalog
  const existingMatch = existingCatalog.find(
    (item) =>
      (rawSku && item.sku.toLowerCase() === rawSku.toLowerCase()) ||
      (item.genericName.toLowerCase() === genericName.toLowerCase() &&
        item.brandName.toLowerCase() === brandName.toLowerCase() &&
        item.strength.toLowerCase() === strength.toLowerCase() &&
        item.packSize.toLowerCase() === packSize.toLowerCase())
  );

  const sku = rawSku || existingMatch?.sku || `${lasaGroup}-${cleanStrength}-IMP-${9000 + index}`;

  const warnings = [];
  if (!getVal('genericName')) warnings.push('Missing Generic Name');
  if (stockQty <= 0) warnings.push('Zero Stock Qty');
  if (daysUntilExpiry <= 0) warnings.push('Expired Batch');

  return {
    id: existingMatch ? existingMatch.id : `sku-imp-${Date.now()}-${index}`,
    sku,
    lasaGroup,
    genericName,
    brandName,
    category,
    strength,
    dosageForm,
    releaseType,
    packSize,
    unitsPerPack,
    batchNumber,
    expiryDate,
    daysUntilExpiry,
    shelfLocation,
    stockQty,
    reorderLevel,
    costPrice,
    sellingPrice,
    rxRequired,
    coldChain: Boolean(matchedFamily?.coldChain || shelfLocation.toLowerCase().includes('fridge')),
    controlled: Boolean(matchedFamily?.controlled || shelfLocation.toLowerCase().includes('vault')),
    searchIndex: `${sku} ${genericName} ${brandName} ${category} ${strength} ${dosageForm} ${releaseType} ${packSize} ${shelfLocation} ${batchNumber}`.toLowerCase(),
    _existingMatch: existingMatch || null,
    _warnings: warnings
  };
}

export { IMPORT_FIELD_DEFS, SAMPLE_IMPORT_CSV, parseDelimitedText, autoDetectColumnMap, normalizeDateValue, normalizeImportedRow };
