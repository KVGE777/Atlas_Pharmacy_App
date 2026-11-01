const ARCHITECTURE_FILES = [
  {
    path: 'package.json',
    folder: 'root',
    role: 'Project Dependencies & Vite Build Configuration',
    summary:
      'Defines the React 18, Tailwind CSS, and SheetJS (xlsx) dependencies required to run the multi-file PharmaCore Apothecary project locally.',
    code: `{
  "name": "pharmacore-apothecary-pos",
  "version": "2.4.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.4"
  }
}`
  },
  {
    path: 'src/styles/typographyAndAnimations.css',
    folder: 'src/styles',
    role: 'Google Fonts Typography Stack & SVG Keyframe Animations',
    summary:
      'Loads Outfit (geometric display headings), Fraunces (warm editorial serif numerals), Plus Jakarta Sans (friendly high-legibility UI sans), and JetBrains Mono (clinical codes), plus CSS keyframes for floating capsules, rocking pestles, sloshing syrups, and ECG waves.',
    code: `/* src/styles/typographyAndAnimations.css */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.font-display { font-family: 'Outfit', sans-serif; letter-spacing: -0.02em; }
.font-serif-editorial { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.02em; }
.font-sans-ui { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.01em; }
.font-mono-code { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }

@keyframes doodleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-3.5px) rotate(1.5deg); }
}
@keyframes doodlePestleRock {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(8deg); }
}
@keyframes doodleSlosh {
  0%, 100% { transform: translateY(0px) skewY(0deg); }
  50% { transform: translateY(-1px) skewY(2deg); }
}
.doodle-float { animation: doodleFloat 4s ease-in-out infinite; }
.doodle-pestle-rock { animation: doodlePestleRock 3.2s ease-in-out infinite; }
.doodle-slosh { animation: doodleSlosh 3.6s ease-in-out infinite; }`
  },
  {
    path: 'src/theme/typographyAndTheme.js',
    folder: 'src/theme',
    role: 'Strict 2–3 Color Apothecary Theme Engine & Naira Formatter',
    summary:
      'Controls the 2-to-3 color system: Base Canvas (Alabaster White / Obsidian Carbon), Deep Ink, and a single customizable Clinical Accent, plus the Nigerian Naira (₦) currency formatter.',
    code: `// src/theme/typographyAndTheme.js
export const ACCENT_THEMES = {
  teal: {
    id: 'teal',
    name: 'Clinical Teal',
    swatch: '#0D9488',
    btnClass: 'bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:text-slate-950',
    badgeClass: 'bg-[#0D9488]/10 text-[#0F766E] border-[#0D9488]/25 dark:bg-[#2DD4BF]/15 dark:text-[#2DD4BF]',
    textClass: 'text-[#0D9488] dark:text-[#2DD4BF]',
    barClass: 'bg-[#0D9488] dark:bg-[#2DD4BF]'
  },
  emerald: { id: 'emerald', name: 'Apothecary Emerald', swatch: '#059669' },
  cobalt: { id: 'cobalt', name: 'Cobalt Blue', swatch: '#2563EB' },
  vermilion: { id: 'vermilion', name: 'Swiss Coral Red', swatch: '#E11D48' },
  amber: { id: 'amber', name: 'Botanical Amber', swatch: '#D97706' },
  mono: { id: 'mono', name: 'Pure Monochrome', swatch: '#0F172A' }
};

export function formatNaira(amount) {
  const num = Number(amount) || 0;
  return \`₦\${Math.round(num).toLocaleString('en-NG')}\`;
}`
  },
  {
    path: 'src/components/PharmacyDoodles.jsx',
    folder: 'src/components',
    role: 'Animated Pharmacy Pictures & Hand-Drawn SVG Doodles',
    summary:
      'Exports HeroApothecaryBanner (floating capsule, rocking mortar & pestle, bubbling compounding flask, and live ECG heartbeat wave), DosageFormIcon, PackTypeDoodle, KpiDoodleIllustration, EmptyPosCounterIllustration, and DispensedStampDoodle.',
    code: `// src/components/PharmacyDoodles.jsx
import React from 'react';

export function DosageFormIcon({ form = '', className = 'w-6 h-6' }) {
  const f = form.toLowerCase();
  if (f.includes('capsule') || f.includes('softgel')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <g className="doodle-float">
          <rect x="6" y="11" width="20" height="10" rx="5" transform="rotate(-35 16 16)" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    );
  }
  // Additional animated SVG forms: Suspension, Vial/Pen, Inhaler, Gel, Scored Tablet
}

export function HeroApothecaryBanner({ theme, kpiStats, doodlesEnabled, setDoodlesEnabled, onQuickFilterClick }) { ... }
export function KpiDoodleIllustration({ type, className }) { ... }
export function EmptyPosCounterIllustration({ theme }) { ... }
export function DispensedStampDoodle({ theme }) { ... }`
  },
  {
    path: 'src/data/catalogGenerator2000.js',
    folder: 'src/data',
    role: '2,160+ SKU LASA-Aware Drug Variant Engine (Calibrated in Naira ₦)',
    summary:
      'Deterministically generates 2,160+ pharmacy SKUs across 30 core molecules with ISMP Tall-Man lettering metadata, strengths, forms, release profiles, pack contents, and Naira pricing calibrated with Augmentin 625mg at ₦18,000.',
    code: `// src/data/catalogGenerator2000.js
export const TALL_MAN_MAP = {
  Amoxicillin: { prefix: 'amoxi', tall: 'CILLIN', suffix: '' },
  'Amoxicillin + Clavulanic Acid': { prefix: 'amoxi', tall: 'CILLIN', suffix: ' + Clavulanic Acid' },
  'Paracetamol (Acetaminophen)': { prefix: 'para', tall: 'CETAMOL', suffix: ' (Acetaminophen)' },
  Ciprofloxacin: { prefix: 'cipro', tall: 'FLOXACIN', suffix: '' }
};

export const DRUG_FAMILIES = [
  { code: 'AMOX', generic: 'Amoxicillin', category: 'Antibiotics', rx: true, basePrice: 2800, ... },
  { code: 'AUGM', generic: 'Amoxicillin + Clavulanic Acid', category: 'Antibiotics', rx: true, basePrice: 9000, ... }
  // 30 Drug Families × 4 Brands × ~4.5 Strengths × 4 Pack Sizes = 2,160 Distinguishable SKUs
];

export function generateInitialCatalog() {
  // Generates 2,160 SKUs with pre-indexed search tokens for <3ms lookup
}`
  },
  {
    path: 'src/utils/excelCsvImporter.js',
    folder: 'src/utils',
    role: 'Excel (.xlsx / .xls) & CSV Inventory Import Engine',
    summary:
      'Parses binary Excel workbooks via SheetJS and RFC-4180 CSV/TSV files, auto-maps supplier headers to clinical variant fields, detects matching SKUs/batches for stock addition or overwrite, and previews staged additions.',
    code: `// src/utils/excelCsvImporter.js
import { DRUG_FAMILIES } from '../data/catalogGenerator2000';

export const IMPORT_FIELD_DEFS = [
  { key: 'sku', label: 'SKU Code', required: false, aliases: ['sku', 'itemcode', 'code'] },
  { key: 'genericName', label: 'Generic Molecule *', required: true, aliases: ['genericname', 'generic', 'molecule'] },
  { key: 'brandName', label: 'Brand / Trade Name *', required: true, aliases: ['brandname', 'brand', 'product'] },
  { key: 'strength', label: 'Strength / Dose *', required: true, aliases: ['strength', 'dose', 'mg'] },
  { key: 'dosageForm', label: 'Dosage Form *', required: true, aliases: ['dosageform', 'form'] },
  { key: 'packSize', label: 'Pack Size / Contents *', required: true, aliases: ['packsize', 'pack'] },
  { key: 'stockQty', label: 'Stock Qty (Packs) *', required: true, aliases: ['stockqty', 'stock', 'qty'] },
  { key: 'sellingPrice', label: 'Selling Price (₦) *', required: true, aliases: ['sellingprice', 'price'] }
];

export function parseDelimitedText(rawText) { ... }
export function autoDetectColumnMap(headers) { ... }
export function normalizeImportedRow(rawObj, colMap, index, existingCatalog) { ... }`
  },
  {
    path: 'src/pages/HomePage.jsx',
    folder: 'src/pages',
    role: 'Page 1: Home Overview (Statistics, Warnings, Reminders & Hotkeys)',
    summary:
      'Renders the 4 KPI summary cards with animated doodles, the 6-card Quick Hotkey workflow launcher, the Active Inventory Warnings feed, and the interactive Pharmacist Shift Reminders checklist.',
    code: `// src/pages/HomePage.jsx
import React from 'react';
import { HeroApothecaryBanner, KpiDoodleIllustration, DosageFormIcon } from '../components/PharmacyDoodles';
import { formatNaira } from '../theme/typographyAndTheme';

export default function HomePage({
  theme,
  kpiStats,
  doodlesEnabled,
  setDoodlesEnabled,
  catalog,
  reminders,
  setReminders,
  onNavigate
}) {
  // Renders Key Apothecary Statistics, Quick Hotkeys (1-6, N, I, /),
  // Active Stockout/Expiry Warnings, and Shift Reminders board.
}`
  },
  {
    path: 'src/pages/InventoryPage.jsx',
    folder: 'src/pages',
    role: 'Page 2: Inventory Manager (Cards, Table, Add, Edit, Delete & Import)',
    summary:
      'Manages all 2,160+ distinguishable drug variants with multi-token search, category/form/status filters, inline stock steppers, bulk selection deletion, CSV export, and LASA sibling comparison.',
    code: `// src/pages/InventoryPage.jsx
import React from 'react';
import { DosageFormIcon, PackTypeDoodle } from '../components/PharmacyDoodles';
import { formatNaira } from '../theme/typographyAndTheme';

export default function InventoryPage({
  theme,
  filteredInventory,
  paginatedInventory,
  catalogViewMode,
  setCatalogViewMode,
  adjustStock,
  onEditDrug,
  onDeleteDrug,
  onOpenImportModal
}) {
  // Switches between Visual Apothecary Bento Cards and High-Density Clinical Table
}`
  },
  {
    path: 'src/pages/PosDispensingPage.jsx',
    folder: 'src/pages',
    role: 'Page 3: Sales & POS Terminal + Invoices & Receipts Ledger',
    summary:
      'Provides the 2-column POS Dispensing Counter (with Whole-Pack vs. Loose Strip pro-rated pricing, Rx verification guardrails, and FEFO expiry checks) and the searchable Invoices & Receipts Ledger with 1-click Void & Refund.',
    code: `// src/pages/PosDispensingPage.jsx
import React from 'react';
import { DosageFormIcon, PackTypeDoodle, EmptyPosCounterIllustration } from '../components/PharmacyDoodles';
import { formatNaira } from '../theme/typographyAndTheme';

export default function PosDispensingPage({
  theme,
  posResults,
  cart,
  cartSummary,
  addToCart,
  updateCartQty,
  toggleCartLineMode,
  handleCompleteSale,
  salesHistory,
  handleVoidInvoice
}) {
  // Sub-tabs: 1. Dispensing Counter (POS) | 2. Invoices & Receipts Ledger
}`
  },
  {
    path: 'src/App.jsx',
    folder: 'src',
    role: 'Root Application Shell, Collapsible Sidebar & Global State',
    summary:
      'Coordinates the collapsible vertical navigation sidebar, global keyboard shortcuts, Naira catalog state, and modal controllers (Add/Edit SKU, LASA Matrix, Excel/CSV Import Studio, and Receipt Printer).',
    code: `// src/App.jsx
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ACCENT_THEMES, formatNaira } from './theme/typographyAndTheme';
import { generateInitialCatalog } from './data/catalogGenerator2000';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import PosDispensingPage from './pages/PosDispensingPage';

export default function App() {
  // Manages collapsible sidebar, activePage routing, and shared inventory/POS state
}`
  }
];

export default ARCHITECTURE_FILES;
export { ARCHITECTURE_FILES };
