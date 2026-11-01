import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

function SvgIcon({ className = 'w-4 h-4', children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const Search = (props) => (<SvgIcon {...props}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></SvgIcon>);
const Plus = (props) => (<SvgIcon {...props}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></SvgIcon>);
const Minus = (props) => (<SvgIcon {...props}><line x1="5" y1="12" x2="19" y2="12" /></SvgIcon>);
const ShoppingCart = (props) => (<SvgIcon {...props}><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></SvgIcon>);
const AlertTriangle = (props) => (<SvgIcon {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></SvgIcon>);
const X = (props) => (<SvgIcon {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></SvgIcon>);
const Download = (props) => (<SvgIcon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></SvgIcon>);
const Printer = (props) => (<SvgIcon {...props}><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></SvgIcon>);
const RefreshCw = (props) => (<SvgIcon {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></SvgIcon>);
const Layers = (props) => (<SvgIcon {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></SvgIcon>);
const ShieldAlert = (props) => (<SvgIcon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></SvgIcon>);
const Clock = (props) => (<SvgIcon {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></SvgIcon>);
const ArrowUpDown = (props) => (<SvgIcon {...props}><path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path d="M7 4v16" /></SvgIcon>);
const ChevronLeft = (props) => (<SvgIcon {...props}><polyline points="15 18 9 12 15 6" /></SvgIcon>);
const ChevronRight = (props) => (<SvgIcon {...props}><polyline points="9 18 15 12 9 6" /></SvgIcon>);
const Edit3 = (props) => (<SvgIcon {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></SvgIcon>);
const FolderGit2 = (props) => (<SvgIcon {...props}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /><circle cx="12" cy="13" r="2" /><path d="M14 13h3" /><path d="M7 13h3" /></SvgIcon>);
const Copy = (props) => (<SvgIcon {...props}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></SvgIcon>);
const Sun = (props) => (<SvgIcon {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></SvgIcon>);
const Moon = (props) => (<SvgIcon {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></SvgIcon>);
const Pill = (props) => (<SvgIcon {...props}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></SvgIcon>);
const CheckCircle2 = (props) => (<SvgIcon {...props}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></SvgIcon>);
const Receipt = (props) => (<SvgIcon {...props}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5v-11" /></SvgIcon>);
const Boxes = (props) => (<SvgIcon {...props}><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /></SvgIcon>);
const LayoutGrid = (props) => (<SvgIcon {...props}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></SvgIcon>);
const List = (props) => (<SvgIcon {...props}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></SvgIcon>);
const Sparkles = (props) => (<SvgIcon {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /></SvgIcon>);
const PackagePlus = (props) => (<SvgIcon {...props}><path d="M16 16h6" /><path d="M19 13v6" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" /></SvgIcon>);
const ArrowUpRight = (props) => (<SvgIcon {...props}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></SvgIcon>);
const Command = (props) => (<SvgIcon {...props}><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></SvgIcon>);
const FileCheck2 = (props) => (<SvgIcon {...props}><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" /><polyline points="14 2 14 8 20 8" /><path d="m3 15 2 2 4-4" /></SvgIcon>);
const Wand2 = (props) => (<SvgIcon {...props}><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M7 8H3" /></SvgIcon>);
const HomeIcon = (props) => (<SvgIcon {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></SvgIcon>);
const Trash2 = (props) => (<SvgIcon {...props}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></SvgIcon>);
const PanelLeftClose = (props) => (<SvgIcon {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="m16 15-3-3 3-3" /></SvgIcon>);
const PanelLeftOpen = (props) => (<SvgIcon {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="m14 9 3 3-3 3" /></SvgIcon>);
const Bell = (props) => (<SvgIcon {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></SvgIcon>);
const Keyboard = (props) => (<SvgIcon {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M6 8h.001" /><path d="M10 8h.001" /><path d="M14 8h.001" /><path d="M18 8h.001" /><path d="M8 12h.001" /><path d="M12 12h.001" /><path d="M16 12h.001" /><path d="M7 16h10" /></SvgIcon>);
const Truck = (props) => (<SvgIcon {...props}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></SvgIcon>);
const SettingsIcon = (props) => (<SvgIcon {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></SvgIcon>);
const RotateCcw = (props) => (<SvgIcon {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></SvgIcon>);
const Menu = (props) => (<SvgIcon {...props}><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></SvgIcon>);
const Upload = (props) => (<SvgIcon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></SvgIcon>);
const FileSpreadsheet = (props) => (<SvgIcon {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></SvgIcon>);

/**
 * ============================================================================
 * MODULE 1: 2-3 COLOR APOTHECARY THEME ENGINE (`src/theme/typographyAndTheme.js`)
 * ============================================================================
 * Strictly enforces a 2-to-3 color clinical palette:
 * 1. Base Surface: Alabaster White (#FAF9F5 / #FFFFFF) or Obsidian Carbon (#09090B / #121216)
 * 2. Contrast Ink: Deep Slate (#0F172A) or Crisp Snow (#F8FAFC)
 * 3. Signature Clinical Accent: User-selectable apothecary accent with soft opacity tints
 */
const ACCENT_THEMES = {
  teal: {
    id: 'teal',
    name: 'Clinical Teal',
    swatch: '#0D9488',
    btnClass: 'bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#2DD4BF] dark:hover:bg-[#14B8A6] dark:text-slate-950',
    badgeClass: 'bg-[#0D9488]/10 text-[#0F766E] border-[#0D9488]/25 dark:bg-[#2DD4BF]/15 dark:text-[#2DD4BF] dark:border-[#2DD4BF]/30',
    solidBadgeClass: 'bg-[#0D9488] text-white dark:bg-[#2DD4BF] dark:text-slate-950',
    textClass: 'text-[#0D9488] dark:text-[#2DD4BF]',
    softBgClass: 'bg-[#0D9488]/[0.06] dark:bg-[#2DD4BF]/[0.07]',
    borderHoverClass: 'hover:border-[#0D9488]/50 dark:hover:border-[#2DD4BF]/50',
    barClass: 'bg-[#0D9488] dark:bg-[#2DD4BF]',
    ringClass: 'focus:ring-2 focus:ring-[#0D9488]/25 focus:border-[#0D9488] dark:focus:border-[#2DD4BF]'
  },
  emerald: {
    id: 'emerald',
    name: 'Apothecary Emerald',
    swatch: '#059669',
    btnClass: 'bg-[#059669] hover:bg-[#047857] text-white dark:bg-[#34D399] dark:hover:bg-[#10B981] dark:text-slate-950',
    badgeClass: 'bg-[#059669]/10 text-[#047857] border-[#059669]/25 dark:bg-[#34D399]/15 dark:text-[#34D399] dark:border-[#34D399]/30',
    solidBadgeClass: 'bg-[#059669] text-white dark:bg-[#34D399] dark:text-slate-950',
    textClass: 'text-[#059669] dark:text-[#34D399]',
    softBgClass: 'bg-[#059669]/[0.06] dark:bg-[#34D399]/[0.07]',
    borderHoverClass: 'hover:border-[#059669]/50 dark:hover:border-[#34D399]/50',
    barClass: 'bg-[#059669] dark:bg-[#34D399]',
    ringClass: 'focus:ring-2 focus:ring-[#059669]/25 focus:border-[#059669] dark:focus:border-[#34D399]'
  },
  cobalt: {
    id: 'cobalt',
    name: 'Cobalt Blue',
    swatch: '#2563EB',
    btnClass: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] dark:text-slate-950',
    badgeClass: 'bg-[#2563EB]/10 text-[#1D4ED8] border-[#2563EB]/25 dark:bg-[#60A5FA]/15 dark:text-[#60A5FA] dark:border-[#60A5FA]/30',
    solidBadgeClass: 'bg-[#2563EB] text-white dark:bg-[#60A5FA] dark:text-slate-950',
    textClass: 'text-[#2563EB] dark:text-[#60A5FA]',
    softBgClass: 'bg-[#2563EB]/[0.06] dark:bg-[#60A5FA]/[0.07]',
    borderHoverClass: 'hover:border-[#2563EB]/50 dark:hover:border-[#60A5FA]/50',
    barClass: 'bg-[#2563EB] dark:bg-[#60A5FA]',
    ringClass: 'focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] dark:focus:border-[#60A5FA]'
  },
  vermilion: {
    id: 'vermilion',
    name: 'Swiss Coral Red',
    swatch: '#E11D48',
    btnClass: 'bg-[#E11D48] hover:bg-[#BE123C] text-white dark:bg-[#FB7185] dark:hover:bg-[#F43F5E] dark:text-slate-950',
    badgeClass: 'bg-[#E11D48]/10 text-[#BE123C] border-[#E11D48]/25 dark:bg-[#FB7185]/15 dark:text-[#FB7185] dark:border-[#FB7185]/30',
    solidBadgeClass: 'bg-[#E11D48] text-white dark:bg-[#FB7185] dark:text-slate-950',
    textClass: 'text-[#E11D48] dark:text-[#FB7185]',
    softBgClass: 'bg-[#E11D48]/[0.06] dark:bg-[#FB7185]/[0.07]',
    borderHoverClass: 'hover:border-[#E11D48]/50 dark:hover:border-[#FB7185]/50',
    barClass: 'bg-[#E11D48] dark:bg-[#FB7185]',
    ringClass: 'focus:ring-2 focus:ring-[#E11D48]/25 focus:border-[#E11D48] dark:focus:border-[#FB7185]'
  },
  amber: {
    id: 'amber',
    name: 'Botanical Amber',
    swatch: '#D97706',
    btnClass: 'bg-[#D97706] hover:bg-[#B45309] text-white dark:bg-[#FBBF24] dark:hover:bg-[#F59E0B] dark:text-slate-950',
    badgeClass: 'bg-[#D97706]/10 text-[#B45309] border-[#D97706]/25 dark:bg-[#FBBF24]/15 dark:text-[#FBBF24] dark:border-[#FBBF24]/30',
    solidBadgeClass: 'bg-[#D97706] text-white dark:bg-[#FBBF24] dark:text-slate-950',
    textClass: 'text-[#D97706] dark:text-[#FBBF24]',
    softBgClass: 'bg-[#D97706]/[0.06] dark:bg-[#FBBF24]/[0.07]',
    borderHoverClass: 'hover:border-[#D97706]/50 dark:hover:border-[#FBBF24]/50',
    barClass: 'bg-[#D97706] dark:bg-[#FBBF24]',
    ringClass: 'focus:ring-2 focus:ring-[#D97706]/25 focus:border-[#D97706] dark:focus:border-[#FBBF24]'
  },
  mono: {
    id: 'mono',
    name: 'Pure Monochrome',
    swatch: '#0F172A',
    btnClass: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950',
    badgeClass: 'bg-slate-900/10 text-slate-900 border-slate-900/25 dark:bg-white/15 dark:text-white dark:border-white/30',
    solidBadgeClass: 'bg-slate-900 text-white dark:bg-white dark:text-slate-950',
    textClass: 'text-slate-900 dark:text-white',
    softBgClass: 'bg-slate-900/[0.04] dark:bg-white/[0.05]',
    borderHoverClass: 'hover:border-slate-900/50 dark:hover:border-white/50',
    barClass: 'bg-slate-900 dark:bg-white',
    ringClass: 'focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 dark:focus:border-white'
  }
};

/**
 * ============================================================================
 * MODULE 2: ANIMATED PHARMACY PICTURES & HAND-DRAWN SVG DOODLES
 * (`src/components/PharmacyDoodles.jsx`)
 * ============================================================================
 */
function DosageFormIcon({ form = '', className = 'w-6 h-6' }) {
  const f = form.toLowerCase();

  if (f.includes('capsule') || f.includes('softgel')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
        <g className="doodle-float">
          <rect x="6" y="11" width="20" height="10" rx="5" transform="rotate(-35 16 16)" stroke="currentColor" strokeWidth="2" />
          <path d="M16 9.9L21.7 5.9C24.0 4.3 27.1 4.9 28.7 7.1C30.3 9.4 29.7 12.5 27.5 14.1L21.7 18.1L16 9.9Z" fill="currentColor" fillOpacity="0.24" />
          <path d="M13.2 12.0L18.8 20.0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10.5 17.5L13.5 15.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
        </g>
        <circle cx="7" cy="8" r="1.3" fill="currentColor" className="doodle-pulse" />
        <path d="M25 22V25M23.5 23.5H26.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="doodle-twinkle" />
      </svg>
    );
  }

  if (f.includes('suspension') || f.includes('syrup') || f.includes('solution') || f.includes('drops')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
        <g className="doodle-float-slow">
          <rect x="11.5" y="3.5" width="9" height="3" rx="1" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
          <path d="M13 6.5V9.5L8.5 13.5V25.5C8.5 26.88 9.62 28 11 28H21C22.38 28 23.5 26.88 23.5 25.5V13.5L19 9.5V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 19.5C11.5 18.2 13.8 20.8 16 19.5C18.2 18.2 20.5 20.5 22.5 19.5V25C22.5 26.1 21.6 27 20.5 27H11.5C10.4 27 9.5 26.1 9.5 25V19.5Z" fill="currentColor" fillOpacity="0.25" className="doodle-slosh" />
          <path d="M16 13.5V17.5M14 15.5H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <circle cx="26.5" cy="9" r="1.4" stroke="currentColor" strokeWidth="1.3" className="doodle-bubble-up" />
      </svg>
    );
  }

  if (f.includes('vial') || f.includes('injection') || f.includes('pen') || f.includes('infusion') || f.includes('ampoule')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
        <g className="doodle-float">
          <path d="M23 4L28 9M25.5 6.5L22 10M18 7L25 14L13 26H6V19L18 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11L21 18L13 26H6V19L14 11Z" fill="currentColor" fillOpacity="0.22" />
          <path d="M12 15L14.5 17.5M9.5 17.5L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 26L3 29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <circle cx="3" cy="29.5" r="1.6" fill="currentColor" className="doodle-drip" />
      </svg>
    );
  }

  if (f.includes('inhaler') || f.includes('respules') || f.includes('diskus')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
        <g className="doodle-float-slow">
          <rect x="9.5" y="3.5" width="7" height="3.5" rx="1" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 7H18V17L23.5 19.5V26.5H8V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <rect x="10" y="9.5" width="6" height="6.5" rx="1" fill="currentColor" fillOpacity="0.18" />
        </g>
        <g className="doodle-puff">
          <circle cx="26.5" cy="21.5" r="1.4" fill="currentColor" fillOpacity="0.6" />
          <circle cx="29" cy="19" r="1.1" fill="currentColor" fillOpacity="0.4" />
          <circle cx="28.5" cy="24" r="1" fill="currentColor" fillOpacity="0.4" />
        </g>
      </svg>
    );
  }

  if (f.includes('gel') || f.includes('sachet') || f.includes('suppository') || f.includes('granules')) {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
        <g className="doodle-float">
          <path d="M6 9L19 6L22 19L9 25L6 9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.16" />
          <path d="M20.5 12.5L24.5 11.5L25.5 15.5L21.5 16.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M13 13V17M11 15H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <path d="M26.5 13.5C28 12 29.5 15 30.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="doodle-pulse" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className={`${className} overflow-visible`} aria-hidden="true">
      <g className="doodle-float-slow">
        <circle cx="15" cy="17" r="9.5" stroke="currentColor" strokeWidth="2" />
        <path d="M15 7.5A9.5 9.5 0 0 1 24.5 17L15 17Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M9.5 22.5L20.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <circle cx="24" cy="7.5" r="1.5" fill="currentColor" fillOpacity="0.65" className="doodle-bubble-up" />
      <circle cx="27" cy="11.5" r="1" fill="currentColor" fillOpacity="0.45" className="doodle-pulse" />
      <circle cx="7" cy="8.5" r="1.1" fill="currentColor" fillOpacity="0.4" className="doodle-twinkle" />
    </svg>
  );
}

function PackTypeDoodle({ packSize = '', className = 'w-3.5 h-3.5' }) {
  const p = String(packSize).toLowerCase();
  if (p.includes('bottle') || p.includes('syrup') || p.includes('suspension') || p.includes('liquid')) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
        <rect x="7" y="2" width="6" height="2.5" rx="0.8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7.5L7.5 4.5H12.5L14 7.5V16.5C14 17.3 13.3 18 12.5 18H7.5C6.7 18 6 17.3 6 16.5V7.5Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      </svg>
    );
  }
  if (p.includes('tube') || p.includes('jar') || p.includes('tin')) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
        <path d="M5 4H15L13.5 15.5H6.5L5 4Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <rect x="7.5" y="15.5" width="5" height="2.5" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (p.includes('ampoule') || p.includes('vial')) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
        <path d="M8.5 2.5H11.5V5.5L13.5 8V16.5C13.5 17.3 12.8 18 12 18H8C7.2 18 6.5 17.3 6.5 16.5V8L8.5 5.5V2.5Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
      <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
      <circle cx="12.5" cy="7.5" r="1.4" fill="currentColor" />
      <circle cx="7.5" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="12.5" cy="12.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function KpiDoodleIllustration({ type = 'catalog', className = 'w-12 h-12' }) {
  if (type === 'valuation') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <g className="doodle-float-slow">
          <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.14" />
          <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2" />
          <text x="24" y="30" textAnchor="middle" fill="currentColor" className="font-serif-editorial font-bold text-[18px]">₦</text>
        </g>
        <path d="M39 9V15M36 12H42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="doodle-twinkle" />
      </svg>
    );
  }
  if (type === 'reorder') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <g className="doodle-bell-ring">
          <path d="M14 28V21C14 15.5 18.5 11 24 11C29.5 11 34 15.5 34 21V28L38 32H10L14 28Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.16" />
          <path d="M21 36C21.8 37.8 23 38.5 24 38.5C25 38.5 26.2 37.8 27 36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        <circle cx="36" cy="12" r="3" fill="currentColor" className="doodle-pulse" />
      </svg>
    );
  }
  if (type === 'expiry') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <g className="doodle-float">
          <path d="M15 10H33M15 38H33M17 10C17 18 24 21 24 24C24 27 17 30 17 38H31C31 30 24 27 24 24C24 21 31 18 31 10H17Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.14" />
        </g>
        <circle cx="24" cy="33" r="2.2" fill="currentColor" className="doodle-drip" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <g className="doodle-float">
        <rect x="10" y="18" width="28" height="13" rx="6.5" transform="rotate(-28 24 24)" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
        <path d="M21 15.5L27 27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="13" cy="13" r="2" fill="currentColor" className="doodle-bubble-up" />
      <path d="M36 31V37M33 34H39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="doodle-twinkle" />
    </svg>
  );
}

function HeroApothecaryBanner({
  theme,
  kpiStats,
  salesHistory = [],
  doodlesEnabled,
  setDoodlesEnabled,
  onQuickFilterClick,
  onOpenPos,
  onOpenRestock
}) {
  const paidSales = salesHistory.filter((s) => s.status !== 'VOIDED');
  const posCardTotal = paidSales
    .filter((s) => s.paymentMethod === 'Card / POS')
    .reduce((acc, s) => acc + s.total, 0);
  const transferTotal = paidSales
    .filter((s) => s.paymentMethod === 'Transfer')
    .reduce((acc, s) => acc + s.total, 0);
  const cashTotal = paidSales
    .filter((s) => s.paymentMethod === 'Cash')
    .reduce((acc, s) => acc + s.total, 0);

  return (
    <div className="space-y-4">
      {/* Practical Daily Shift & Cash Register Status Bar */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121216] p-4 sm:px-6 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className={`px-3 py-1.5 rounded-xl text-xs font-display font-bold border flex items-center gap-2 ${theme.badgeClass}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${theme.barClass}`} />
            <span>Shift Register Open</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-zinc-300 font-medium">
            Today&apos;s Till:{' '}
            <strong className="font-mono-code font-bold text-slate-900 dark:text-white">
              {formatNaira(kpiStats.todayRevenue)}
            </strong>{' '}
            <span className="text-slate-400">({paidSales.length} sales)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono-code text-slate-500 dark:text-zinc-400 border-l border-slate-200 dark:border-zinc-800 pl-3">
            <span>POS: {formatNaira(posCardTotal)}</span>
            <span>•</span>
            <span>Transfer: {formatNaira(transferTotal)}</span>
            <span>•</span>
            <span>Cash: {formatNaira(cashTotal)}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl text-[11px] font-mono-code font-semibold bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 border border-slate-200/70 dark:border-zinc-800">
            Fridge F-01: 4.2°C (Optimal)
          </span>
          <button
            onClick={onOpenRestock}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-slate-400 text-xs font-display font-bold text-slate-700 dark:text-zinc-200 transition-colors"
          >
            Low Stock ({kpiStats.lowStockCount + kpiStats.outOfStockCount})
          </button>
          <button
            onClick={onOpenPos}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-display font-bold flex items-center gap-1.5 shadow-2xs ${theme.btnClass}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>New Sale</span>
          </button>
        </div>
      </div>

      {/* Main Apothecary Quick-Dispense Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121216] p-5 sm:p-6 shadow-xs transition-all">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${theme.badgeClass}`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>A&amp;O Pharmaceutical Company Ltd</span>
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">
                Quick Counter Dispensing &amp; Stock Lookup
              </span>
              <button
                onClick={() => setDoodlesEnabled(!doodlesEnabled)}
                className="ml-auto sm:ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-[11px] font-semibold text-slate-600 dark:text-zinc-300 hover:border-slate-400 transition-all"
                title="Toggle Animated Pharmacy Doodles"
              >
                <Wand2 className={`w-3 h-3 ${theme.textClass}`} />
                <span>{doodlesEnabled ? 'Playful Doodles: ON' : 'Compact Clinical Mode'}</span>
              </button>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Fast-Moving Dispensary &amp;{' '}
              <span className={`font-serif-editorial italic font-normal text-3xl sm:text-4xl ${theme.textClass}`}>
                {kpiStats.totalSkus.toLocaleString()} active
              </span>{' '}
              medications.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Tap any fast-moving medication below to jump straight to the{' '}
              <strong className="font-semibold text-slate-900 dark:text-zinc-200">
                POS Dispensing Counter
              </strong>{' '}
              with live Naira pricing, pack/sachet splits, and FEFO expiry checks.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { label: 'Augmentin 625mg', query: 'augmentin', form: 'Tablet', accented: true },
                { label: 'Amatem Softgel', query: 'amatem', form: 'Capsule', accented: false },
                { label: 'Lonart-DS', query: 'lonart', form: 'Tablet', accented: false },
                { label: 'Panadol Extra', query: 'panadol', form: 'Tablet', accented: false },
                { label: 'Ventolin Inhaler', query: 'ventolin', form: 'Inhaler', accented: false },
                { label: 'Amlodipine', query: 'amlodipine', form: 'Tablet', accented: false }
              ].map((chip) => (
                <button
                  key={chip.query}
                  onClick={() => onQuickFilterClick(chip.query)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    chip.accented
                      ? theme.badgeClass
                      : 'border-slate-200 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80 hover:border-slate-400'
                  }`}
                >
                  <DosageFormIcon form={chip.form} className="w-4 h-4" />
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>

          {doodlesEnabled && (
            <div className={`relative shrink-0 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 px-4 py-3 ${theme.softBgClass} ${theme.textClass} flex items-center justify-center`}>
              <svg viewBox="0 0 340 128" fill="none" className="w-full max-w-[330px] h-[116px] overflow-visible" aria-label="Animated Pharmacy Apothecary Illustration">
                <path
                  d="M8 98 H75 L86 76 L96 112 L108 60 L120 106 L130 90 L142 98 H332"
                  stroke="currentColor"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="doodle-ecg-line"
                />
                <g className="doodle-float">
                  <rect x="22" y="32" width="54" height="26" rx="13" transform="rotate(-28 49 45)" stroke="currentColor" strokeWidth="2.4" fill="currentColor" fillOpacity="0.08" />
                  <path d="M46 31.5L63 22.3C69.3 18.9 77.2 21.2 80.6 27.5C84.0 33.8 81.7 41.7 75.4 45.1L58.4 54.3L46 31.5Z" fill="currentColor" fillOpacity="0.28" />
                  <path d="M40 36L52 58" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M31 46L39 41.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="88" cy="64" r="14" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.14" />
                  <path d="M80 72L96 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
                <circle cx="26" cy="20" r="3" fill="currentColor" fillOpacity="0.5" className="doodle-bubble-up" />
                <circle cx="96" cy="24" r="2.2" fill="currentColor" fillOpacity="0.4" className="doodle-pulse" />
                <path d="M68 12V20M64 16H72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="doodle-twinkle" />
                <g transform="translate(135, 16)">
                  <path d="M22 32C14 22 18 10 29 12C29 22 26 28 22 32Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" className="doodle-float-slow" />
                  <g className="doodle-pestle-rock" style={{ transformOrigin: '48px 38px' }}>
                    <path d="M54 6L66 13L50 42L40 37L54 6Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.26" />
                  </g>
                  <path d="M14 38H74L67 62C64.5 70 57 75 48 75H40C31 75 23.5 70 21 62L14 38Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
                  <path d="M28 80H60" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  <text x="36" y="61" fill="currentColor" className="font-serif-editorial italic font-bold text-[20px]">Rx</text>
                </g>
                <g transform="translate(245, 18)" className="doodle-float-slow">
                  <path d="M32 10H48M36 10V24L18 62C16 66 19 71 24 71H56C61 71 64 66 62 62L44 24V10" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 50C31 46 37 54 44 50C49 47 53 51 56 50L61 61C62.5 64.5 60 69 56 69H24C20 69 17.5 64.5 19 61L24 50Z" fill="currentColor" fillOpacity="0.26" className="doodle-slosh" />
                  <circle cx="38" cy="40" r="2.5" fill="currentColor" className="doodle-bubble-up" />
                  <circle cx="44" cy="30" r="1.8" fill="currentColor" className="doodle-pulse" />
                  <path d="M68 18V26M64 22H72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="doodle-twinkle" />
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyPosCounterIllustration({ theme }) {
  return (
    <div className="p-8 text-center space-y-4">
      <div className={`mx-auto w-56 h-40 rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 flex items-center justify-center ${theme.softBgClass} ${theme.textClass}`}>
        <svg viewBox="0 0 220 150" fill="none" className="w-48 h-36 overflow-visible" aria-hidden="true">
          <g className="doodle-float" transform="translate(22, 18)">
            <rect x="0" y="0" width="74" height="94" rx="10" stroke="currentColor" strokeWidth="2.3" fill="currentColor" fillOpacity="0.1" />
            <rect x="18" y="-6" width="38" height="12" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
            <text x="14" y="34" fill="currentColor" className="font-serif-editorial italic font-bold text-[22px]">Rx</text>
            <path d="M14 48H58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <path d="M14 60H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <path d="M14 76C22 68 28 82 36 73C42 67 48 77 58 72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="doodle-ecg-line" />
          </g>
          <g transform="translate(116, 20)">
            <g className="doodle-float-slow">
              <path d="M36 4L48 16L26 38L16 36L14 26L36 4Z" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.22" />
            </g>
            <circle cx="15" cy="46" r="2.8" fill="currentColor" className="doodle-drip" />
            <path d="M4 58H48V98C48 104.6 42.6 110 36 110H16C9.4 110 4 104.6 4 98V58Z" stroke="currentColor" strokeWidth="2.3" fill="currentColor" fillOpacity="0.12" />
            <path d="M6 84C14 80 22 88 30 84C36 81 42 86 46 84V97C46 103 41 108 35 108H17C11 108 6 103 6 97V84Z" fill="currentColor" fillOpacity="0.28" className="doodle-slosh" />
          </g>
          <circle cx="108" cy="24" r="2.5" fill="currentColor" className="doodle-pulse" />
          <path d="M188 32V40M184 36H192" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="doodle-twinkle" />
        </svg>
      </div>
      <div className="space-y-1.5">
        <p className="font-display text-base font-bold text-slate-800 dark:text-zinc-200">
          Apothecary Counter Ready for Dispensing
        </p>
        <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
          Select any medication variant on the left to verify its strength, dosage form doodle, and dispense whole packs or loose blister strips.
        </p>
      </div>
    </div>
  );
}

function DispensedStampDoodle({ theme }) {
  return (
    <div className={`relative flex items-center justify-center py-2 ${theme.textClass}`}>
      <svg viewBox="0 0 220 72" fill="none" className="w-56 h-18 overflow-visible" aria-hidden="true">
        <g className="doodle-float">
          <rect x="14" y="18" width="16" height="8" rx="4" transform="rotate(-30 22 22)" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.25" />
          <circle cx="198" cy="20" r="6" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
          <path d="M194 24L202 16" stroke="currentColor" strokeWidth="1.5" />
        </g>
        <path d="M38 10V18M34 14H42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="doodle-twinkle" />
        <path d="M178 48V56M174 52H182" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="doodle-twinkle" />
        <g transform="rotate(-4 110 36)">
          <rect x="48" y="12" width="124" height="46" rx="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" fill="currentColor" fillOpacity="0.1" />
          <rect x="53" y="17" width="114" height="36" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <text x="110" y="34" textAnchor="middle" fill="currentColor" className="font-display font-extrabold text-[11px] tracking-widest uppercase">
            PHARMACIST VERIFIED
          </text>
          <text x="110" y="47" textAnchor="middle" fill="currentColor" className="font-mono-code font-bold text-[10px]">
            ★ RX DISPENSED ★
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * ============================================================================
 * MODULE 3: A&O PHARMACEUTICAL COMPANY LTD — CATEGORY TAXONOMY & SECTION 1 DATA
 * (`src/data/aoInventorySection1.js`)
 * ============================================================================
 * Reorganizes raw PDF categories into 12 clean clinical departments and loads
 * Section 1 (Pages 1–13: Items #1 to #577) with exact Naira Cost, Retail Price,
 * Current Stock, Supplier, and Expiration Date from `inventory-2026-10-15.pdf`.
 */
const CLINICAL_CATEGORIES = [
  'Antibiotics & Anti-Infectives',
  'Antimalarials & Antiparasitics',
  'Analgesics, Anti-Inflammatory & Muscle',
  'Cardiovascular & Antihypertensives',
  'Antidiabetics',
  'Vitamins, Multivitamins & Supplements',
  'Gastrointestinal, Anti-Ulcer & Antacids',
  'Respiratory, Cough & Antiallergy',
  'Dermatologicals, Creams & Antiseptics',
  'Ophthalmic & Otic (Eye / Ear Drops)',
  'Consumables, Syringes & Medical Devices',
  'Reproductive, Contraceptives & Wellness'
];

const RAW_CATEGORY_TO_CLINICAL = {
  Antibiotics: 'Antibiotics & Anti-Infectives',
  Antiviral: 'Antibiotics & Anti-Infectives',
  Antimalaria: 'Antimalarials & Antiparasitics',
  'Anti helminthic': 'Antimalarials & Antiparasitics',
  Analgesics: 'Analgesics, Anti-Inflammatory & Muscle',
  'Anti inflammatory': 'Analgesics, Anti-Inflammatory & Muscle',
  'Muscle Relaxant': 'Analgesics, Anti-Inflammatory & Muscle',
  Balm: 'Analgesics, Anti-Inflammatory & Muscle',
  Sedative: 'Analgesics, Anti-Inflammatory & Muscle',
  Antihypertensive: 'Cardiovascular & Antihypertensives',
  Hypercholesterolemia: 'Cardiovascular & Antihypertensives',
  Antidiabetics: 'Antidiabetics',
  Supplements: 'Vitamins, Multivitamins & Supplements',
  Multivitamin: 'Vitamins, Multivitamins & Supplements',
  Vitamin: 'Vitamins, Multivitamins & Supplements',
  'Anti-ulcer': 'Gastrointestinal, Anti-Ulcer & Antacids',
  Antacid: 'Gastrointestinal, Anti-Ulcer & Antacids',
  GIT: 'Gastrointestinal, Anti-Ulcer & Antacids',
  'Anti colic': 'Gastrointestinal, Anti-Ulcer & Antacids',
  Antispasmodic: 'Gastrointestinal, Anti-Ulcer & Antacids',
  Probiotic: 'Gastrointestinal, Anti-Ulcer & Antacids',
  Electrolyte: 'Gastrointestinal, Anti-Ulcer & Antacids',
  Antidote: 'Gastrointestinal, Anti-Ulcer & Antacids',
  'Cough Syrup': 'Respiratory, Cough & Antiallergy',
  Antiallergy: 'Respiratory, Cough & Antiallergy',
  Inhaler: 'Respiratory, Cough & Antiallergy',
  Decongestant: 'Respiratory, Cough & Antiallergy',
  Lozenges: 'Respiratory, Cough & Antiallergy',
  Cream: 'Dermatologicals, Creams & Antiseptics',
  Ointment: 'Dermatologicals, Creams & Antiseptics',
  Gel: 'Dermatologicals, Creams & Antiseptics',
  Lotion: 'Dermatologicals, Creams & Antiseptics',
  Antiseptic: 'Dermatologicals, Creams & Antiseptics',
  Antifungal: 'Dermatologicals, Creams & Antiseptics',
  Soap: 'Dermatologicals, Creams & Antiseptics',
  Powder: 'Dermatologicals, Creams & Antiseptics',
  'Eye drops': 'Ophthalmic & Otic (Eye / Ear Drops)',
  'Ear drops': 'Ophthalmic & Otic (Eye / Ear Drops)',
  Drops: 'Ophthalmic & Otic (Eye / Ear Drops)',
  Syringe: 'Consumables, Syringes & Medical Devices',
  Consumables: 'Consumables, Syringes & Medical Devices',
  Machine: 'Consumables, Syringes & Medical Devices',
  Test: 'Consumables, Syringes & Medical Devices',
  Injectables: 'Antibiotics & Anti-Infectives',
  Infusion: 'Consumables, Syringes & Medical Devices',
  Contraceptive: 'Reproductive, Contraceptives & Wellness',
  Condom: 'Reproductive, Contraceptives & Wellness',
  'Prostate drug': 'Reproductive, Contraceptives & Wellness',
  Detoxifier: 'Reproductive, Contraceptives & Wellness',
  Insecticide: 'Reproductive, Contraceptives & Wellness'
};

function formatNaira(amount) {
  const num = Number(amount) || 0;
  if (num > 0 && num < 10 && num % 1 !== 0) {
    return `₦${num.toFixed(2)}`;
  }
  return `₦${Math.round(num).toLocaleString('en-NG')}`;
}

function TallManName({ name = '', accentTextClass = '' }) {
  if (!name) return null;
  const parts = String(name).trim().split(/\s+/);
  const firstWord = parts[0] || '';
  const rest = parts.slice(1).join(' ');
  if (firstWord.length >= 5) {
    const prefix = firstWord.slice(0, 3);
    const tall = firstWord.slice(3);
    return (
      <span>
        {prefix}
        <span className={`font-extrabold tracking-wide ${accentTextClass}`}>{tall}</span>
        {rest ? ` ${rest}` : ''}
      </span>
    );
  }
  return <span>{name}</span>;
}

// Compact tuple format: [sku, itemName, rawCategory, unitType, costPrice, sellPrice, stockQty, supplier, expiryDate, lowThreshold]
const SECTION_1_PDF_ITEMS = [
  // PAGE 1 (46 items)
  ['1', '10ML SYRINGE', 'Syringe', 'Single Unit', 54, 100, 53, 'SANTUS', '2028-12-30', 1],
  ['2', '2ML SYRINGE', 'Syringe', 'Single Unit', 35, 50, 325, 'SANTUS', '2028-12-30', 10],
  ['4', '5ML SYRINGE', 'Consumables', 'Single Unit', 37, 70, 370, 'SANTUS', '2028-12-30', 10],
  ['7-1752569', '7-SEAS COD LIVER OIL', 'Supplements', 'Bottle', 4800, 6800, 0, 'System', '2027-12-30', 2],
  ['6', 'ABF CREAM', 'Cream', 'Tube', 526, 800, 4, 'GJ', '2027-12-30', 2],
  ['7', 'ABIDEC DROPS', 'Multivitamin', 'Drops Bottle', 2350, 3400, 3, 'GJ', '2027-12-30', 2],
  ['8', 'ABONIKI BALM', 'Balm', 'Jar', 895, 1200, 11, 'SANTUS', '2027-12-30', 3],
  ['2-1752571', 'ACEL PLUS TABLETS', 'Analgesics', 'Tablets', 650, 950, 0, 'PHARMATON', '2027-10-30', 2],
  ['12', 'ACEPOL SYRUP', 'Analgesics', 'Syrup Bottle', 550, 800, 1, 'SANTUS', '2027-10-30', 2],
  ['P0000012', 'ACER (LEVOFLOXACIN)', 'Antibiotics', 'Pack 1', 1200, 2200, 9, 'GJ', '2028-04-30', 2],
  ['13', 'ACNEAWAY CREAM', 'Cream', 'Tube', 625, 900, 1, 'ELBE', '2027-11-30', 1],
  ['14', 'ACTIFED SYRUP', 'Cough Syrup', 'Syrup Bottle', 1300, 1800, 0, 'WELLNESS', '2027-08-30', 2],
  ['15', 'ACTIFED TABLET', 'Antiallergy', 'Sachet 1.0', 250, 350, 0, 'System', '2027-09-30', 2],
  ['16', 'ACTIVATED CHARCOAL', 'GIT', 'Bottle / Pack', 1300, 1900, 2, 'CHRIS', '2028-06-30', 1],
  ['17', 'ACYCOR PLUS', 'Analgesics', 'Sachet 1.0', 800, 1200, 1, 'GJ', '2027-12-30', 1],
  ['18', 'ADAY KIT', 'Antibiotics', 'Pack 1', 2050, 3200, 0, 'GJ', '2027-10-30', 2],
  ['19', 'ADDYZOA CAPSULES', 'Supplements', 'Pack 1', 6950, 9800, 0, 'System', '2027-12-30', 1],
  ['20', 'AEROLINE INHALER', 'Inhaler', 'MDI Inhaler', 2800, 4000, 0, 'SANTUS', '2027-10-30', 2],
  ['21', 'AFRAB IBUPROFEN SYRUP', 'Analgesics', 'Syrup Bottle', 791, 1200, 5, 'Medquest', '2027-10-30', 2],
  ['22', 'AFRABVITE SYRUP (BIG)', 'Multivitamin', 'Syrup Bottle', 680, 1000, 4, 'PHARMATON', '2027-10-30', 1],
  ['23', 'AFRABVITE SYRUP (SMALL)', 'Multivitamin', 'Syrup Bottle', 620, 900, 0, 'PHARMATON', '2027-08-30', 1],
  ['24', 'AFTER 5 ANALGESIC', 'Analgesics', 'Sachet 1.0', 103, 150, 1, 'ORANGE DRUGS', '2027-08-30', 5],
  ['3-1757447', 'AJ WELLNESS CLASSIC', 'Supplements', 'Sachet 1.0', 1500, 2300, 0, 'GJ', '2028-01-30', 2],
  ['P0000042', 'AJ WELLNESS EXTRA', 'Supplements', 'Sachet 1.0', 1685, 2400, 3, 'Shelflife', '2027-08-30', 2],
  ['6-1754679', 'ALABUKUN POWDER', 'Analgesics', 'Sachet 1.0', 295, 400, 32, 'GJ', '2028-12-30', 10],
  ['26', 'ALBEN-G SUSPENSION', 'Anti helminthic', 'Suspension', 319, 500, 3, 'Shelflife', '2027-09-30', 2],
  ['27', 'ALBEROL TABLET', 'Anti helminthic', 'Tablet 1.0', 170, 400, 46, 'GJ', '2028-04-30', 10],
  ['28', 'ALDACTONE TABLET', 'Antihypertensive', 'Sachet 1.0', 700, 1600, 0, 'SANTUS', '2027-11-30', 2],
  ['7-1758219', 'ALDOCURE TABLET', 'Antihypertensive', 'Sachet 1.0', 625, 900, 28, 'SANTUS', '2028-05-30', 5],
  ['29', 'ALDOMET TABLET', 'Antihypertensive', 'Sachet 1.0', 1300, 1900, 8, 'GJ', '2028-03-30', 3],
  ['30', 'ALEFER-QS TONIC', 'Multivitamin', 'Bottle', 520, 1000, 0, 'BLESSED NOEDYKE', '2027-10-30', 2],
  ['31', 'ALGAFEN SUSPENSION', 'Analgesics', 'Suspension', 280, 400, 0, 'PHARMATON', '2027-09-30', 2],
  ['32', 'ALGAFEN TABLET', 'Analgesics', 'Sachet 1.0', 70, 200, 0, 'System', '2027-09-30', 5],
  ['33', 'ALISAR CREAM (REG)', 'Cream', 'Tube', 1650, 2400, 0, 'SANTUS', '2027-12-30', 1],
  ['34', 'ALISAR CREAM (FORTE)', 'Cream', 'Tube', 2000, 3000, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['35', 'ALLERGIN SYRUP', 'Antiallergy', 'Syrup Bottle', 649, 950, 1, 'Shelflife', '2027-10-30', 2],
  ['P0000033', 'ALLOPURINOL TABLET', 'Analgesics', 'Sachet 1.0', 750, 1200, 2, 'SANTUS', '2028-02-28', 2],
  ['4-1782231', 'ALPHABETICAL PACK', 'Supplements', 'Pack 1', 10500, 15000, 2, 'SANTUS', '2028-06-30', 1],
  ['36', 'ALPHABETICAL TABLET', 'Supplements', 'Tablet 1.0', 340, 500, 0, 'System', '2028-06-30', 5],
  ['37', 'AMALAR TABLET', 'Antimalaria', 'Pack 1', 396, 600, 52, 'Shelflife', '2028-08-30', 10],
  ['38', 'AMATEM SOFTGEL FORTE', 'Antimalaria', 'Pack 1', 2100, 3200, 73, 'ELBE', '2028-10-30', 15],
  ['5-1766578', 'AMATEM TABLET', 'Antimalaria', 'Pack 1', 1300, 1900, 3, 'GJ', '2028-04-30', 5],
  ['39', 'AMATEM X6', 'Antimalaria', 'Pack 1', 1050, 1500, 5, 'GJ', '2028-04-30', 5],
  ['40', 'AMATEM X12', 'Antimalaria', 'Pack 1', 1430, 2100, 0, 'SANTUS', '2028-04-30', 5],
  ['41', 'AMATEM X18', 'Antimalaria', 'Pack 1', 1600, 2300, 1, 'PHARMATON', '2028-05-30', 5],
  ['42', 'AMCLAVIN 625MG', 'Antibiotics', 'Pack 1', 2100, 3200, 0, 'SANTUS', '2027-11-30', 2],

  // PAGE 2 (47 items)
  ['9-1761654', 'AMINOGLYCOSIDE INJ', 'Antibiotics', 'Vial 1', 2950, 4300, 2, 'GJ', '2027-09-30', 1],
  ['43', 'AMINOPHYLLINE INJ', 'Injectables', 'Ampoule 1', 92, 150, 8, 'SANTUS', '2027-09-30', 2],
  ['3-1756983', 'AMITRIPTYLINE 25MG', 'Analgesics', 'Sachet 1.0', 600, 1000, 0, 'SANTUS', '2027-11-30', 2],
  ['44', 'AMITRIPTYLINE 50MG', 'Analgesics', 'Sachet 1.0', 685, 1000, 7, 'SANTUS', '2028-01-30', 2],
  ['P0000036', 'AMLODIPINE 5MG (PFIZER/GEN)', 'Antihypertensive', 'Sachet 1.0', 665, 1000, 6, 'GJ', '2028-03-30', 2],
  ['51', 'AMLODIPINE 5MG SACHET', 'Antihypertensive', 'Sachet 1.0', 190, 300, 0, 'PHARMATON', '2028-02-28', 5],
  ['45', 'AMLODIPINE 10MG (700)', 'Antihypertensive', 'Sachet 1.0', 700, 1000, 45, 'GJ', '2028-06-30', 5],
  ['46', 'AMLODIPINE 10MG (415)', 'Antihypertensive', 'Sachet 1.0', 415, 600, 20, 'Shelflife', '2028-05-30', 5],
  ['52', 'AMLODIPINE 10MG (1050)', 'Antihypertensive', 'Sachet 1.0', 1050, 1550, 10, 'CHRIS', '2028-06-30', 3],
  ['47', 'AMLODIPINE 10MG (1185)', 'Antihypertensive', 'Sachet 1.0', 1185, 1700, 3, 'Shelflife', '2028-04-30', 2],
  ['53', 'AMLODIPINE 5MG (200)', 'Antihypertensive', 'Sachet 1.0', 200, 350, 41, 'CHRIS', '2028-07-30', 5],
  ['48', 'AMLODIPINE 5MG (240)', 'Antihypertensive', 'Sachet 1.0', 240, 350, 0, 'GJ', '2027-10-30', 5],
  ['50', 'AMLODIPINE 10MG (425)', 'Antihypertensive', 'Sachet 1.0', 425, 600, 0, 'SANTUS', '2027-12-30', 3],
  ['49', 'AMLODIPINE 5MG (300)', 'Antihypertensive', 'Sachet 1.0', 300, 450, 16, 'SANTUS', '2028-03-30', 5],
  ['54', 'AMLONG 10MG TABLET', 'Antihypertensive', 'Sachet 1.0', 392, 600, 5, 'Shelflife', '2028-04-30', 2],
  ['55', 'AMLONG 5MG TABLET', 'Antihypertensive', 'Sachet 1.0', 335, 500, 0, 'SANTUS', '2027-11-30', 2],
  ['56', 'AMLOZAAR TABLET', 'Antihypertensive', 'Sachet 1.0', 1600, 2250, 0, 'SANTUS', '2027-12-30', 2],
  ['57', 'AMOCLAV 625MG', 'Antibiotics', 'Pack 1', 2300, 3300, 1, 'GJ', '2027-12-30', 2],
  ['58', 'AMOKSICLAV 625MG', 'Antibiotics', 'Pack 1', 3750, 7000, 0, 'GJ', '2027-12-30', 2],
  ['59', 'AMOXICILLIN 250MG CAP', 'Antibiotics', 'Sachet 1.0', 285, 400, 9, 'GJ', '2028-03-30', 5],
  ['61', 'AMOXICILLIN 500MG CAP', 'Antibiotics', 'Sachet 1.0', 415, 700, 58, 'ELIONA', '2028-08-30', 10],
  ['60', 'AMOXICILLIN SYRUP', 'Antibiotics', 'Suspension', 675, 1000, 0, 'GJ', '2027-10-30', 3],
  ['62', 'AMOXICILLIN INJ 500MG', 'Injectables', 'Vial 1', 360, 650, 10, 'SANTUS', '2028-02-28', 3],
  ['63', 'AMOXICILLIN DISPERSIBLE', 'Antibiotics', 'Pack 1', 850, 1300, 2, 'GJ', '2027-07-30', 2],
  ['64', 'AMOXIL CAPSULE (GSK PACK)', 'Antibiotics', 'Sachet 1.0', 1800, 2700, 12, 'GJ', '2028-05-30', 3],
  ['65', 'AMOXIL CAPSULE SACHET', 'Antibiotics', 'Sachet 1.0', 450, 1700, 0, 'SANTUS', '2027-11-30', 3],
  ['66', 'AMOXIL SUSPENSION', 'Antibiotics', 'Suspension', 3800, 5500, 3, 'PHARMATON', '2028-01-30', 2],
  ['67', 'AMPICILLIN 250MG CAP', 'Antibiotics', 'Sachet 1.0', 280, 400, 55, 'SANTUS', '2028-06-30', 10],
  ['69', 'AMPICLOX 500MG SACHET', 'Antibiotics', 'Sachet 1.0', 380, 600, 116, 'GJ', '2028-09-30', 15],
  ['70', 'AMPICLOX PACK (BEECHAM)', 'Antibiotics', 'Sachet 1.0', 2180, 3500, 23, 'Medquest', '2028-07-30', 5],
  ['71', 'AMPICLOX SYRUP (GSK)', 'Antibiotics', 'Suspension', 4500, 6300, 1, 'SANTUS', '2027-11-30', 2],
  ['72', 'AMPICLOX DROP / NEONATAL', 'Antibiotics', 'Suspension', 4190, 6000, 1, 'SANTUS', '2027-11-30', 2],
  ['73', 'AMUROX SUSPENSION', 'Antibiotics', 'Suspension', 2200, 3200, 0, 'SANTUS', '2027-10-30', 2],
  ['74', 'ANACIN TABLET', 'Analgesics', 'Tablet 1.0', 22, 50, 17, 'GJ', '2028-03-30', 10],
  ['0-1763144', 'ANDON B.P MACHINE', 'Machine', 'Digital Unit', 30000, 43000, 1, 'CHRIS', '2030-12-30', 1],
  ['75', 'ANDREW LIVER SALT', 'Antacid', 'Sachet 1.0', 280, 500, 40, 'GJ', '2028-06-30', 10],
  ['5-1782998', 'ANEROID SPHYGMOMANOMETER', 'Machine', 'Clinical Unit', 11000, 15900, 2, 'GJ', '2030-12-30', 1],
  ['5-1774382', 'ANOMEX CREAM / OINTMENT', 'Ointment', 'Tube', 1150, 1500, 7, 'System', '2028-04-30', 2],
  ['76', 'ANOROL TABLET', 'Analgesics', 'Sachet 1.0', 600, 900, 23, 'SANTUS', '2028-05-30', 5],
  ['77', 'ANTALGEX-T TABLET', 'Analgesics', 'Pack 1', 1980, 2800, 0, 'SANTUS', '2027-10-30', 2],
  ['78', 'ANTALLERGIC EYE DROPS', 'Eye drops', 'Drops Bottle', 1550, 2500, 2, 'Medquest', '2027-12-30', 1],
  ['79', 'ANTIMALARIAL COMBO', 'Antimalaria', 'Sachet 1.0', 190, 250, 0, 'System', '2027-09-30', 5],
  ['80', 'ANUDOL SUPPOSITORY', 'Analgesics', 'Pack 1', 350, 500, 6, 'GJ', '2028-02-28', 2],
  ['81', 'ANUSOL SUPPOSITORY', 'Analgesics', 'Pack 1', 625, 900, 0, 'CHRIS', '2027-11-30', 2],
  ['82', 'APETABON SYRUP', 'Multivitamin', 'Syrup Bottle', 1800, 2200, 0, 'System', '2027-12-30', 2],
  ['83', 'APETAFAST SYRUP', 'Multivitamin', 'Syrup Bottle', 1760, 2500, 0, 'GJ', '2027-12-30', 2],
  ['84', 'APETAMIN VITAMIN SYRUP', 'Vitamin', 'Syrup Bottle', 7100, 10300, 1, 'PHARMATON', '2028-03-30', 1],

  // PAGE 3 (47 items)
  ['85', 'APHASULF CREAM', 'Cream', 'Tube', 767, 1500, 3, 'Emeka-Market', '2028-04-30', 1],
  ['8-1761826', 'APPLE CIDER VINEGAR GUMMY', 'Supplements', 'Bottle', 8800, 12500, 0, 'GJ', '2028-01-30', 1],
  ['9-1776510', 'APPLE CIDER TABLET', 'Supplements', 'Tablet 1.0', 132, 200, 48, 'N/F REP', '2028-08-30', 10],
  ['86', 'AQUACEF SUSPENSION', 'Antibiotics', 'Suspension', 2400, 3600, 1, 'GJ', '2028-08-30', 2],
  ['87', 'AQUACEF TABLET', 'Antibiotics', 'Pack 1', 2600, 4000, 0, 'GJ', '2027-12-30', 2],
  ['88', 'AQUACLAV 375MG', 'Antibiotics', 'Pack 1', 2420, 3500, 6, 'SANTUS', '2028-05-30', 2],
  ['89', 'AQUACLAV 625MG', 'Antibiotics', 'Pack 1', 2900, 4500, 4, 'SANTUS', '2028-08-30', 2],
  ['90', 'AQUACLAV SACHET', 'Antibiotics', 'Sachet 1.0', 1440, 2100, 3, 'SANTUS', '2028-08-30', 2],
  ['91', 'AQUACLAV SUSPENSION', 'Antibiotics', 'Suspension', 1800, 2700, 8, 'SANTUS', '2027-05-30', 2],
  ['92', 'AQUAFIX SUSPENSION', 'Antibiotics', 'Suspension', 1870, 2800, 0, 'GJ', '2027-06-30', 1],
  ['1-1768475', 'AQUAMAL SUSPENSION', 'Antimalaria', 'Suspension', 500, 800, 0, 'CHRIS', '2027-09-30', 2],
  ['1-1768475B', 'AQUAMAL FORTE', 'Antimalaria', 'Pack 1', 550, 1000, 5, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['93', 'AQUAMAL TABLET', 'Antimalaria', 'Pack 1', 500, 1000, 0, 'GJ', '2027-12-30', 2],
  ['3-1754743', 'AQUAMUL MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 620, 900, 2, 'GJ', '2028-01-30', 2],
  ['P0000005', 'AQUART TABLET', 'Antimalaria', 'Pack 1', 1200, 1800, 0, 'GJ', '2027-11-30', 2],
  ['95', 'AQUASULF CREAM', 'Cream', 'Tube', 850, 1400, 0, 'ELIONA', '2027-12-30', 2],
  ['2-1772134', 'ARBITEL-H TABLET', 'Antihypertensive', 'Sachet 1.0', 1685, 2400, 0, 'SANTUS', '2028-03-30', 2],
  ['96', 'ARCHYVITE SYRUP', 'Multivitamin', 'Syrup Bottle', 170, 250, 0, 'CIKASON', '2027-10-30', 2],
  ['97', 'ARENAX DISPERSIBLE', 'Antimalaria', 'Pack 1', 392, 700, 18, 'SANTUS', '2028-06-30', 5],
  ['98', 'ARENAX PLUS FORTE', 'Antimalaria', 'Pack 1', 980, 1500, 0, 'SANTUS', '2027-11-30', 2],
  ['99', 'ARENAX PLUS SACHET', 'Antimalaria', 'Sachet 1.0', 800, 1300, 7, 'GJ', '2028-04-30', 2],
  ['100', 'ARENAX TABLET', 'Antimalaria', 'Pack 1', 500, 800, 3, 'ELBE', '2028-02-28', 2],
  ['101', 'ARISTOBET EYE DROPS', 'Eye drops', 'Drops Bottle', 2030, 2900, 3, 'SANTUS', '2028-01-30', 1],
  ['102', 'ARISTOCROM EYE DROPS', 'Eye drops', 'Drops Bottle', 2200, 3100, 2, 'GJ', '2028-02-28', 1],
  ['3-1767960', 'ARTELUM TABLET', 'Antimalaria', 'Pack 1', 730, 1200, 0, 'SANTUS', '2027-10-30', 2],
  ['103', 'ARTELUM FORTE', 'Antimalaria', 'Pack 1', 1000, 1500, 0, 'SANTUS', '2027-10-30', 2],
  ['104', 'ARTEMELUM SUSPENSION', 'Antimalaria', 'Suspension', 980, 1500, 0, 'SANTUS', '2027-10-30', 2],
  ['107', 'ARTEMETHER INJ 80MG', 'Injectables', 'Ampoule 1', 100, 150, 0, 'GREENLIFE', '2027-11-30', 5],
  ['109', 'ARTEMETHER AMP', 'Antimalaria', 'Ampoule 1', 100, 150, 45, 'GJ', '2028-06-30', 10],
  ['P0000034', 'ARTEMETHER LUMEFANTRINE', 'Antimalaria', 'Pack 1', 1100, 1700, 4, 'SANTUS', '2028-04-30', 2],
  ['110', 'ARTEQUICK TABLET', 'Antimalaria', 'Pack 1', 2800, 4200, 4, 'PHARMATON', '2028-05-30', 2],
  ['8-1767953', 'ARTESUNATE INJ 60MG', 'Injectables', 'Vial 1', 900, 1450, 5, 'SANTUS', '2028-04-30', 2],
  ['111', 'ARTESUNATE INJ 120MG', 'Injectables', 'Vial 1', 770, 1100, 3, 'SANTUS', '2028-03-30', 2],
  ['112', 'ARTHOCARE CAPSULE', 'Supplements', 'Pack 1', 9660, 13200, 0, 'SANTUS', '2028-01-30', 1],
  ['113', 'ARTHRITIS FORMULA', 'Analgesics', 'Sachet 1.0', 550, 1000, 0, 'System', '2027-12-30', 2],
  ['114', 'ARTHRITIS FORTE', 'Analgesics', 'Sachet 1.0', 1000, 1400, 0, 'PHARMATON', '2027-12-30', 2],
  ['115', 'ARTHROTEC 75MG', 'Analgesics', 'Sachet 1.0', 2200, 3200, 7, 'CHRIS', '2028-07-30', 2],
  ['116', 'ASCENID TABLET', 'Anti helminthic', 'Tablet 1.0', 460, 700, 0, 'SANTUS', '2027-11-30', 2],
  ['117', 'ASCOBITON SYRUP', 'Vitamin', 'Syrup Bottle', 250, 450, 0, 'CHRIS', '2027-10-30', 2],
  ['P0000044', 'ASCOCHEW VITAMIN C (PACK)', 'Supplements', 'Pack 1', 2000, 2900, 2, 'GJ', '2028-04-30', 1],
  ['119', 'ASCOCHEW FORTE', 'Supplements', 'Pack 1', 1280, 1800, 2, 'GJ', '2028-04-30', 1],
  ['120', 'ASCOCHEW ORANGE X100', 'Vitamin', 'Pack 1', 630, 950, 1, 'GJ', '2028-03-30', 1],
  ['121', 'ASCOCHEW STRAWBERRY', 'Vitamin', 'Pack 1', 630, 900, 0, 'GJ', '2027-12-30', 1],
  ['122', 'ASCOMED VITAMIN C', 'Vitamin', 'Bottle', 990, 1400, 9, 'SANTUS', '2028-06-30', 2],
  ['123', 'ASCORBION TABLET', 'Vitamin', 'Pack 1', 650, 1000, 5, 'GJ', '2028-05-30', 2],
  ['124', 'ASCOREX SYRUP', 'Cough Syrup', 'Syrup Bottle', 650, 1200, 500, 'BLESSED NOEDYKE', '2028-09-30', 10],
  ['7-1773311', 'ASHWAGANDHA CAPSULES', 'Supplements', 'Bottle', 5000, 9000, 0, 'ELIONA', '2028-04-30', 1],

  // PAGE 4 (47 items)
  ['125', 'ASMALIN INHALER', 'Inhaler', 'MDI Inhaler', 2800, 4000, 0, 'GJ', '2028-12-30', 1],
  ['126', 'ASMALYN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 570, 900, 4, 'GJ', '2026-06-30', 1],
  ['127', 'ASMANOL TABLET', 'Antiallergy', 'Sachet 1.0', 920, 1300, 3, 'SANTUS', '2028-02-28', 2],
  ['3-1778498', 'ASOMEX 2.5MG TABLET', 'Antihypertensive', 'Sachet 1.0', 1300, 1850, 2, 'GJ', '2028-04-30', 2],
  ['9-1764759', 'ASTHMAZOL INHALER', 'Antiallergy', 'MDI Inhaler', 2800, 4000, 3, 'ELIONA', '2028-05-30', 1],
  ['128', 'ASTYFER CAPSULE', 'Vitamin', 'Sachet 1.0', 2000, 2800, 6, 'FIDSON', '2028-08-30', 2],
  ['129', 'ASTYFER TONIC (BIG)', 'Vitamin', 'Syrup Bottle', 3950, 5600, 9, 'GJ', '2028-08-30', 2],
  ['0-1756463', 'ASTYFER TONIC (SMALL)', 'Vitamin', 'Syrup Bottle', 2625, 3700, 0, 'GJ', '2028-04-30', 2],
  ['130', 'ASTYMIN CAPSULE', 'Multivitamin', 'Sachet 1.0', 1950, 2800, 7, 'FIDSON', '2027-12-30', 2],
  ['132', 'ASTYMIN SYRUP (BIG)', 'Multivitamin', 'Syrup Bottle', 3950, 5600, 11, 'FIDSON', '2027-10-30', 2],
  ['0-1760095', 'ASTYMIN TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 2650, 3800, 0, 'GJ', '2028-03-30', 2],
  ['133', 'ATADYN SYRUP', 'Antiallergy', 'Syrup Bottle', 1646, 2400, 2, 'GJ', '2029-03-30', 1],
  ['184', 'ATENOLOL 50MG', 'Antihypertensive', 'Sachet 1.0', 250, 500, 2, 'PHARMATON', '2028-04-30', 2],
  ['134', 'ATENOLOL 100MG', 'Antihypertensive', 'Sachet 1.0', 525, 800, 4, 'SANTUS', '2028-05-30', 2],
  ['135', 'ATORVASTATIN 10MG', 'Antihypertensive', 'Sachet 1.0', 600, 900, 4, 'PHARMATON', '2028-06-30', 2],
  ['136', 'ATORVASTATIN 20MG (PFIZER/KRKA)', 'Antihypertensive', 'Pack 1', 1800, 2600, 0, 'GJ', '2028-04-30', 2],
  ['1-1777376', 'ATORVASTATIN 10MG SACHET', 'Antihypertensive', 'Sachet 1.0', 500, 750, 1, 'SANTUS', '2028-03-30', 2],
  ['137', 'ATORVASTATIN 20MG SACHET', 'Antihypertensive', 'Sachet 1.0', 600, 1000, 7, 'SANTUS', '2028-07-30', 2],
  ['138', 'ATORVASTATIN 40MG PACK', 'Antihypertensive', 'Pack 1', 2500, 3800, 0, 'PHARMATON', '2028-02-28', 1],
  ['139', 'ATORVASTATIN 20MG (500)', 'Antihypertensive', 'Sachet 1.0', 500, 800, 0, 'GJ', '2027-12-30', 2],
  ['140', 'AUGLOCEF 500MG', 'Antibiotics', 'Pack 1', 3300, 5000, 0, 'ELIONA', '2027-12-30', 1],
  ['8-1753817', 'AUGLOCEF 250MG', 'Antibiotics', 'Pack 1', 2700, 4000, 0, 'ELIONA', '2027-12-30', 1],
  ['9-1783619', 'AUGMEC 375MG', 'Antibiotics', 'Sachet 1.0', 1125, 1800, 6, 'Shelflife', '2028-06-30', 2],
  ['5-1778269', 'AUGMEC 625MG', 'Antibiotics', 'Pack 1', 1850, 3000, 1, 'GJ', '2028-04-30', 2],
  ['7-1780569', 'AUGMEC TABLET FORTE', 'Antibiotics', 'Pack 1', 2700, 4000, 0, 'GJ', '2027-12-30', 2],
  ['141', 'AUGMENTIN 625MG (GSK)', 'Antibiotics', 'Pack 1', 13000, 18200, 1, 'SANTUS', '2028-09-30', 2],
  ['142', 'AUGMENTIN SUSPENSION 228MG', 'Antibiotics', 'Suspension', 8000, 8000, 0, 'GJ', '2027-11-30', 1],
  ['143', 'AUGMENTIN 457MG / DUO', 'Antibiotics', 'Pack 1', 9700, 13800, 1, 'GJ', '2028-06-30', 1],
  ['P0000010', 'AVIPOL SUSPENSION', 'Analgesics', 'Suspension', 670, 1000, 8, 'GJ', '2028-04-30', 2],
  ['144', 'AVROAPET TABLET', 'Multivitamin', 'Sachet 1.0', 400, 600, 2, 'SANTUS', '2028-02-28', 2],
  ['145', 'AVROAPET SYRUP', 'Multivitamin', 'Syrup Bottle', 993, 1500, 5, 'Shelflife', '2028-05-30', 2],
  ['146', 'AVROCID SUSPENSION', 'Anti-ulcer', 'Suspension', 1702, 2400, 2, 'Shelflife', '2028-03-30', 2],
  ['147', 'AVROCOF SYRUP', 'Cough Syrup', 'Syrup Bottle', 500, 750, 0, 'GJ', '2027-10-30', 2],
  ['148', 'AVROLIN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 550, 1000, 0, 'SANTUS', '2027-11-30', 2],
  ['9-1760091', 'AVROMULTIVITE SYRUP', 'Multivitamin', 'Syrup Bottle', 670, 1000, 4, 'GJ', '2028-04-30', 2],
  ['149', 'AXITIN 228 SUSPENSION', 'Antibiotics', 'Suspension', 950, 1500, 0, 'PHARMATON', '2027-10-30', 1],
  ['150', 'AZILIDE TABLET 500MG', 'Antibiotics', 'Pack 1', 1916, 2900, 3, 'SANTUS', '2028-06-30', 2],
  ['151', 'AZITHROMYCIN 500MG (PACK)', 'Antibiotics', 'Pack 1', 1800, 2600, 0, 'GJ', '2028-02-28', 2],
  ['7-1757934', 'AZITHROMYCIN 500MG TAB (280)', 'Antibiotics', 'Tablet 1.0', 280, 500, 0, 'GJ', '2028-01-30', 5],
  ['1656', 'AZITHROMYCIN 250MG TAB', 'Antibiotics', 'Tablet 1.0', 155, 250, 0, 'PHARMATON', '2028-01-30', 5],
  ['153', 'AZITHROMYCIN 500MG TAB (200)', 'Antibiotics', 'Tablet 1.0', 200, 350, 100, 'GJ', '2028-08-30', 15],
  ['154', 'AZITHROMYCIN 500MG TAB (225)', 'Antibiotics', 'Tablet 1.0', 225, 400, 172, 'Idumota', '2028-09-30', 15],
  ['155', 'AZITHROMYCIN SUSPENSION', 'Antibiotics', 'Suspension', 1597, 2300, 11, 'SANTUS', '2028-06-30', 3],
  ['156', 'AZITHROMYCIN 200MG/5ML', 'Antibiotics', 'Suspension', 1550, 2200, 0, 'GREENLIFE', '2027-11-30', 2],
  ['157', 'AZMETRIN FORTE', 'Antimalaria', 'Pack 1', 1270, 1850, 0, 'GJ', '2027-12-30', 2],
  ['158', 'AZMETRIN SACHET', 'Antimalaria', 'Sachet 1.0', 400, 1000, 0, 'GJ', '2027-12-30', 2],
  ['3-1757934', 'AZOTEK 250MG PACK', 'Antibiotics', 'Pack 1', 1300, 2000, 0, 'Theo Rep', '2028-01-30', 2],

  // PAGE 5 (47 items)
  ['169', 'B-COMPLEX INJ (VIAL)', 'Injectables', 'Vial 1', 180, 300, 34, 'SANTUS', '2028-05-30', 5],
  ['170', 'B-COMPLEX AMP', 'Vitamin', 'Ampoule 1', 45, 100, 8, 'SANTUS', '2028-03-30', 5],
  ['171', 'B-COMPLEX SYRUP (470)', 'Vitamin', 'Syrup Bottle', 470, 700, 0, 'GJ', '2027-10-30', 2],
  ['172', 'B-COMPLEX SYRUP (450)', 'Vitamin', 'Syrup Bottle', 450, 700, 6, 'GJ', '2028-02-28', 2],
  ['175', 'B-COMPLEX LOOSE TABLET', 'Vitamin', 'Tablet 1.0', 2.05, 3.3, 2222, 'GJ', '2028-10-30', 50],
  ['160', 'B.P. MACHINE (AUTOMATIC)', 'Machine', 'Digital Unit', 6500, 12000, 2, 'System', '2030-02-28', 1],
  ['163', 'BABY MENTHOL RUB', 'Ointment', 'Jar', 670, 900, 13, 'SANTUS', '2028-04-30', 2],
  ['164', 'BABY ZINC DISPERSIBLE', 'Supplements', 'Sachet 1.0', 99, 300, 8, 'SANTUS', '2028-03-30', 5],
  ['3-1761652', 'BABYCCAN SYRUP', 'Analgesics', 'Syrup Bottle', 950, 1350, 2, 'CHRIS', '2027-02-28', 1],
  ['7-1772100', 'BABYCCAN DROPS', 'Analgesics', 'Drops Bottle', 625, 900, 0, 'SANTUS', '2027-02-28', 1],
  ['166', 'BABYREX SYRUP', 'Cough Syrup', 'Syrup Bottle', 450, 700, 27, 'GJ', '2028-06-30', 5],
  ['167', 'BACK-UP CONTRACEPTIVE', 'Contraceptive', 'Tablet 1.0', 985, 1500, 10, 'GJ', '2028-08-30', 2],
  ['3-1782135', 'BACTACEF SUSPENSION', 'Antibiotics', 'Suspension', 2700, 4200, 5, 'Theo Rep', '2028-02-20', 1],
  ['9-1762430', 'BACTROX OINTMENT', 'Ointment', 'Tube', 2000, 2900, 0, 'SANTUS', '2027-10-30', 1],
  ['8-1779479', 'BARBEE COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 3700, 5000, 0, 'GJ', '2027-10-30', 1],
  ['176', 'BECOMBION SYRUP', 'Vitamin', 'Syrup Bottle', 1300, 1850, 3, 'SANTUS', '2028-01-30', 1],
  ['177', 'BECOMBION FORTE', 'Vitamin', 'Sachet 1.0', 760, 1100, 1, 'SANTUS', '2027-12-30', 1],
  ['178', 'BECOMPLEX PACK', 'Vitamin', 'Pack 1', 450, 700, 5, 'GJ', '2028-04-30', 2],
  ['174', 'BECOMPLEX FORTE', 'Vitamin', 'Pack 1', 685, 1000, 7, 'GJ', '2028-05-30', 2],
  ['179', 'BEEHIVE COUGH BALSAM', 'Cough Syrup', 'Syrup Bottle', 5100, 7000, 0, 'GJ', '2027-10-30', 1],
  ['180', 'BEETHER INJECTION', 'Antimalaria', 'Ampoule 1', 1500, 2500, 0, 'GJ', '2027-06-30', 1],
  ['4-1760010', 'BENYLIN DRY COUGH', 'Cough Syrup', 'Syrup Bottle', 4380, 6200, 0, 'SANTUS', '2027-11-30', 2],
  ['8-1767964', 'BENYLIN ORIGINAL', 'Cough Syrup', 'Syrup Bottle', 4300, 6200, 0, 'SANTUS', '2027-11-30', 2],
  ['9-1762428', 'BENYLIN PAEDIATRIC', 'Cough Syrup', 'Syrup Bottle', 4400, 6200, 2, 'SANTUS', '2028-04-30', 2],
  ['181', 'BENZYL BENZOATE (BIG)', 'Antiseptic', 'Lotion Bottle', 900, 1300, 0, 'System', '2027-12-30', 2],
  ['5-1776777', 'BENZYL BENZOATE (SMALL)', 'Antiseptic', 'Lotion Bottle', 640, 1000, 2, 'PHARMATON', '2028-03-30', 2],
  ['3-1782999', 'BETADRON OINTMENT', 'Ointment', 'Tube', 630, 1000, 10, 'GJ', '2028-07-30', 2],
  ['183', 'BETADRON EYE DROPS', 'Eye drops', 'Drops Bottle', 1150, 1700, 3, 'Medquest', '2028-02-28', 1],
  ['4-1783339', 'BETAFIL 50MG', 'Antihypertensive', 'Sachet 1.0', 475, 750, 0, 'PHARMATON', '2027-12-30', 2],
  ['185', 'BETAMAN CAPSULE', 'Supplements', 'Sachet 1.0', 3600, 5500, 4, 'GJ', '2028-06-30', 1],
  ['186', 'BETAMETHASONE CREAM', 'Cream', 'Tube', 580, 900, 1, 'GJ', '2028-01-30', 2],
  ['P0000047', 'BETASOL CREAM', 'Cream', 'Tube', 600, 900, 3, 'SHALINA', '2028-03-30', 2],
  ['187', 'BETAWOMAN CAPSULE', 'Supplements', 'Sachet 1.0', 3600, 5250, 5, 'GJ', '2028-06-30', 1],
  ['188', 'BETROSIL CREAM', 'Cream', 'Tube', 1050, 1500, 0, 'GJ', '2027-11-30', 1],
  ['189', 'BG CLAV SUSPENSION', 'Antibiotics', 'Suspension', 1700, 2400, 0, 'GJ', '2027-11-30', 1],
  ['190', 'BG CREAM', 'Cream', 'Tube', 800, 1200, 6, 'GJ', '2028-05-30', 2],
  ['191', 'BIOCINE CAPSULE', 'Antibiotics', 'Sachet 1.0', 1575, 2200, 1, 'GJ', '2028-02-28', 1],
  ['192', 'BIOCINE SUSPENSION', 'Antibiotics', 'Suspension', 2650, 3900, 2, 'PHARMATON', '2028-04-30', 1],
  ['193', 'BIOCOTEN CREAM (BIG)', 'Cream', 'Tube', 1220, 1750, 0, 'SANTUS', '2027-11-30', 1],
  ['0-1765553', 'BIOCOTEN CREAM (REG)', 'Cream', 'Tube', 980, 1400, 3, 'PHARMATON', '2028-03-30', 1],
  ['194', 'BIOFLOR PROBIOTIC', 'Anti-ulcer', 'Sachet 1.0', 340, 500, 0, 'PHARMATON', '2027-12-30', 2],
  ['195', 'BIOPENTIN TABLET', 'Analgesics', 'Tablet 1.0', 195, 150, 0, 'SANTUS', '2027-12-30', 2],
  ['8-1767961', 'BIOPHAGE 500MG (PACK)', 'Antidiabetics', 'Sachet 1.0', 850, 1300, 3, 'SANTUS', '2028-05-30', 2],
  ['196', 'BIOPHAGE SACHET', 'Antidiabetics', 'Sachet 1.0', 250, 400, 31, 'GJ', '2028-08-30', 5],
  ['9-1781984', 'BIOSEA COD LIVER OIL (BIG)', 'Supplements', 'Syrup Bottle', 9000, 12600, 1, 'GJ', '2028-06-30', 1],
  ['198', 'BIOSEA COD LIVER OIL (REG)', 'Supplements', 'Syrup Bottle', 5550, 7700, 3, 'Medquest', '2028-06-30', 1],
  ['199', 'BIOVIT SYRUP', 'Multivitamin', 'Syrup Bottle', 550, 850, 0, 'GJ', '2027-11-30', 2],

  // PAGE 6 (47 items)
  ['200', 'BISACODYL 5MG', 'GIT', 'Sachet 1.0', 100, 150, 22, 'GJ', '2028-04-30', 5],
  ['201', 'BISOPROLOL 5MG (900)', 'Antihypertensive', 'Sachet 1.0', 900, 1500, 0, 'SANTUS', '2028-03-30', 2],
  ['202', 'BISOPROLOL 2.5MG SACHET', 'Antihypertensive', 'Sachet 1.0', 450, 700, 19, 'Shelflife', '2028-06-30', 3],
  ['203', 'BISOPROLOL 5MG (820)', 'Antihypertensive', 'Sachet 1.0', 820, 1200, 3, 'SANTUS', '2028-04-30', 2],
  ['204', 'BISOPROLOL 5MG (750)', 'Antihypertensive', 'Sachet 1.0', 750, 1200, 0, 'SANTUS', '2027-12-30', 2],
  ['205', 'BKB TABLET', 'Analgesics', 'Sachet 1.0', 120, 200, 13, 'GJ', '2028-05-30', 3],
  ['206', 'BLESSED MOTHER TONIC', 'Multivitamin', 'Syrup Bottle', 700, 1500, 0, 'BLESSED NOEDYKE', '2027-10-30', 1],
  ['207', 'BLOOD GLUCOSE STRIP / TEST', 'Test', 'Test Strip', 240, 575, 36, 'CHRIS', '2028-04-30', 5],
  ['208', 'BLOOM VITAMIN C', 'Vitamin', 'Tablet 1.0', 1.5, 2.5, 0, 'CHRIS', '2027-12-30', 50],
  ['210', 'BLUE SEAL VASELINE (BIG)', 'Gel', 'Jar', 2700, 3700, 3, 'Emeka-Market', '2029-01-30', 1],
  ['211', 'BLUE SEAL VASELINE (SMALL)', 'Gel', 'Jar', 640, 850, 0, 'Emeka-Market', '2028-12-30', 2],
  ['7-1773345', 'BLUESEAL OINTMENT (MED)', 'Ointment', 'Jar', 1400, 1850, 1, 'Emeka-Market', '2028-10-30', 1],
  ['9-1781783', 'BLUESEAL JELLY (JUMBO)', 'Ointment', 'Jar', 5600, 7500, 1, 'Emeka-Market', '2028-10-30', 1],
  ['212', 'BNC INSECTICIDE', 'Insecticide', 'Aerosol Can', 1880, 2600, 0, 'System', '2028-06-30', 1],
  ['213', 'BONABABE SYRUP', 'Analgesics', 'Syrup Bottle', 410, 600, 10, 'SANTUS', '2028-05-30', 2],
  ['214', 'BONADOL EXTRA', 'Analgesics', 'Sachet 1.0', 110, 200, 16, 'PHARMATON', '2028-06-30', 5],
  ['215', 'BONADOL PARACETAMOL', 'Analgesics', 'Sachet 1.0', 90, 150, 62, 'PHARMATON', '2028-08-30', 10],
  ['216', 'BONDOMET TABLET', 'Antihypertensive', 'Sachet 1.0', 660, 1000, 84, 'SANTUS', '2028-09-30', 10],
  ['217', 'BONDURETIC TABLET', 'Antihypertensive', 'Sachet 1.0', 149, 250, 10, 'SANTUS', '2028-04-30', 3],
  ['3-1775465', 'BONECAL VITAMIN D', 'Supplements', 'Sachet 1.0', 1650, 2400, 11, 'ELIONA', '2028-07-30', 2],
  ['218', 'BONEFLEX TABLET', 'Supplements', 'Sachet 1.0', 1594, 2300, 8, 'SANTUS', '2028-06-30', 2],
  ['219', 'BONEFLEX FORTE', 'Supplements', 'Pack 1', 2334, 3300, 0, 'GJ', '2027-12-30', 1],
  ['220', 'BONJELA TEETHING GEL', 'Gel', 'Tube', 500, 700, 0, 'PHARMATON', '2027-11-30', 2],
  ['222', 'BOSKA TABLET', 'Analgesics', 'Sachet 1.0', 470, 700, 3, 'GJ', '2028-03-30', 3],
  ['4-1778502', 'BOTIGO MENTHOL OINTMENT', 'Ointment', 'Tube', 2000, 3000, 0, 'System', '2028-01-30', 1],
  ['223', 'BOTTLED WATER (EVA/NESTLE)', 'Consumables', 'Bottle', 110, 200, 102, 'HEALTHY CHILD', '2027-10-30', 20],
  ['224', 'BRETT MOUTHWASH', 'Antiseptic', 'Bottle', 1550, 2200, 2, 'SANTUS', '2028-04-30', 1],
  ['225', 'BRIMOPRESS EYE DROPS', 'Eye drops', 'Drops Bottle', 4200, 6000, 0, 'GJ', '2027-12-30', 1],
  ['226', 'BROMEX PLUS COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 860, 1300, 2, 'Shelflife', '2028-03-30', 2],
  ['227', 'BRONCHOLYTE SYRUP', 'Cough Syrup', 'Syrup Bottle', 690, 1000, 2, 'SANTUS', '2028-02-28', 2],
  ['228', 'BROZELIN SYRUP', 'Cough Syrup', 'Syrup Bottle', 960, 1350, 0, 'SANTUS', '2027-10-30', 2],
  ['229', 'BRUSTAN-N SYRUP', 'Analgesics', 'Syrup Bottle', 1075, 1600, 0, 'SANTUS', '2027-11-30', 2],
  ['230', 'BRUSTAN-N TABLET (PACK)', 'Analgesics', 'Pack 1', 920, 1300, 1, 'GJ', '2028-02-28', 2],
  ['231', 'BRUSTAN-N SACHET', 'Analgesics', 'Pack 1', 480, 700, 0, 'PHARMATON', '2027-11-30', 2],
  ['233', 'BUNTO CAPSULE', 'Multivitamin', 'Sachet 1.0', 550, 900, 9, 'SANTUS', '2028-05-30', 2],
  ['232', 'BUNTO SYRUP (BIG)', 'Multivitamin', 'Syrup Bottle', 3450, 5000, 6, 'GJ', '2028-06-30', 2],
  ['234', 'BUNTO TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 550, 800, 4, 'SANTUS', '2028-04-30', 2],
  ['235', 'BUNTO TONIC (MEDIUM)', 'Multivitamin', 'Syrup Bottle', 1050, 1600, 7, 'SANTUS', '2028-05-30', 2],
  ['238', 'CA-C 1000 SANDOZ', 'Supplements', 'Tube 10s', 5500, 8300, 2, 'SANTUS', '2028-04-30', 1],
  ['3-1776257', 'CACATIN ANTISEPTIC', 'Antiseptic', 'Bottle', 700, 1000, 1, 'Emeka-Market', '2028-02-28', 1],
  ['239', 'CACATIN CREAM', 'Cream', 'Tube', 127, 200, 7, 'Emeka-Market', '2028-04-30', 2],
  ['2-1783160', 'CAFERGOT TABLET', 'Analgesics', 'Tablet 1.0', 350, 500, 20, 'GJ', '2028-06-30', 5],
  ['241', 'CAL D3 CAPSULE', 'Supplements', 'Sachet 1.0', 225, 500, 0, 'CHRIS', '2027-12-30', 2],
  ['242', 'CAL D3 PLUS', 'Supplements', 'Sachet 1.0', 475, 800, 18, 'SANTUS', '2028-07-30', 3],
  ['243', 'CALAMINE LOTION (420)', 'Lotion', 'Bottle', 420, 650, 0, 'SANTUS', '2028-01-30', 2],
  ['244', 'CALAMINE LOTION (560)', 'Lotion', 'Bottle', 560, 850, 8, 'GJ', '2028-06-30', 2],
  ['8-1777374', 'CALAMINE LOTION (490)', 'Lotion', 'Bottle', 490, 700, 1, 'PHARMATON', '2028-03-30', 2],

  // PAGE 7 (47 items)
  ['245', 'CALAMINE LOTION (STD)', 'Lotion', 'Bottle', 450, 750, 4, 'HEALTHY CHILD', '2028-06-30', 1],
  ['246', 'CALCIMAX SYRUP / PACK', 'Supplements', 'Sachet 1.0', 1400, 2000, 1, 'CHRIS', '2028-04-30', 1],
  ['247', 'CALCIMAX FORTE', 'Supplements', 'Pack 1', 920, 1300, 2, 'GJ', '2028-05-30', 1],
  ['248', 'CALCIMAX SACHET', 'Supplements', 'Sachet 1.0', 295, 500, 53, 'GJ', '2028-09-30', 10],
  ['249', 'CALCITAB SACHET', 'Supplements', 'Sachet 1.0', 119, 200, 6, 'Shelflife', '2028-03-30', 3],
  ['250', 'CALCITONE SYRUP', 'Vitamin', 'Syrup Bottle', 1000, 1400, 10, 'GJ', '2028-06-30', 2],
  ['252', 'CALCIUM SANDOZ / PACK', 'Supplements', 'Pack 1', 1050, 1600, 0, 'FIDSON', '2027-05-30', 1],
  ['253', 'CALCIUM LOOSE TABLET', 'Supplements', 'Tablet 1.0', 5.3, 7.9, 2009, 'GJ', '2028-08-30', 50],
  ['254', 'CALGOVIT SYRUP', 'Vitamin', 'Syrup Bottle', 3600, 5000, 0, 'GJ', '2026-06-30', 1],
  ['255', 'CAMOSUNATE CHILDREN', 'Antimalaria', 'Pack 1', 950, 1400, 2, 'GJ', '2028-04-30', 2],
  ['256', 'CAMOSUNATE ADULT', 'Antimalaria', 'Pack 1', 1830, 2700, 2, 'GJ', '2028-05-30', 2],
  ['257', 'CAMOSUNATE JUNIOR', 'Antimalaria', 'Pack 1', 1050, 1600, 27, 'SANTUS', '2027-09-30', 5],
  ['258', 'CAMOSUNATE POWDER', 'Antimalaria', 'Pack 1', 1130, 1700, 17, 'SANTUS', '2028-07-30', 3],
  ['260', 'CANDID-V6 VAGINAL TAB', 'Antifungal', 'Pack 1', 1600, 2300, 0, 'System', '2028-06-30', 1],
  ['261', 'CANNON EXTRA', 'Analgesics', 'Sachet 1.0', 350, 500, 2, 'ORANGE DRUGS', '2028-04-30', 2],
  ['8-1765544', 'CANNON PARACETAMOL', 'Analgesics', 'Tablet 1.0', 30, 100, 3, 'ORANGE DRUGS', '2028-04-30', 5],
  ['262', 'CANNULA BLUE (22G)', 'Consumables', 'Single Unit', 140, 250, 3, 'SANTUS', '2028-08-30', 5],
  ['263', 'CANNULA GREEN (18G)', 'Consumables', 'Single Unit', 170, 250, 4, 'System', '2028-08-30', 5],
  ['264', 'CANNULA PINK (20G)', 'Consumables', 'Single Unit', 150, 250, 12, 'SANTUS', '2028-08-30', 5],
  ['265', 'CANNULA YELLOW (24G)', 'Consumables', 'Single Unit', 155, 250, 4, 'SANTUS', '2028-08-30', 5],
  ['266', 'CANTAB V-6', 'Antifungal', 'Pack 1', 700, 1200, 0, 'GJ', '2027-11-30', 1],
  ['267', 'CARDIOTAB 5MG', 'Antihypertensive', 'Sachet 1.0', 1285, 1900, 9, 'SANTUS', '2028-06-30', 2],
  ['P0000001', 'CARDIOTAB 10MG', 'Antihypertensive', 'Sachet 1.0', 1285, 1800, 0, 'SANTUS', '2028-03-30', 2],
  ['3-1766079', 'CARDIOTAB PLUS', 'Antihypertensive', 'Sachet 1.0', 1334, 2000, 5, 'GJ', '2028-05-30', 2],
  ['268', 'CARDIOTAB FORTE', 'Antihypertensive', 'Sachet 1.0', 1285, 1800, 4, 'SANTUS', '2028-05-30', 2],
  ['269', 'CAREON 20MG', 'Supplements', 'Sachet 1.0', 850, 1200, 0, 'GJ', '2027-12-30', 1],
  ['270', 'CAREON TONIC', 'Supplements', 'Syrup Bottle', 2200, 3500, 0, 'SANTUS', '2027-12-30', 1],
  ['2-1776251', 'CARVEDILOL 6.25MG', 'Antihypertensive', 'Sachet 1.0', 650, 1000, 1, 'SANTUS', '2028-02-28', 2],
  ['272', 'CARVEDILOL 12.5MG', 'Antihypertensive', 'Sachet 1.0', 725, 1050, 0, 'SANTUS', '2027-12-30', 2],
  ['274', 'CASTOR OIL (SMALL)', 'GIT', 'Bottle', 2300, 3700, 0, 'SANTUS', '2027-12-30', 1],
  ['273', 'CASTOR OIL (BIG)', 'GIT', 'Bottle', 5350, 6700, 2, 'GJ', '2028-06-30', 1],
  ['275', 'CATAFLAM 50MG SACHET', 'Analgesics', 'Sachet 1.0', 680, 1000, 0, 'ELIONA', '2027-12-30', 2],
  ['2-1764517', 'CATAREST EYE DROPS', 'Eye drops', 'Drops Bottle', 2600, 3700, 3, 'SANTUS', '2028-04-30', 1],
  ['276', 'CATRIN POWDER', 'Antiseptic', 'Powder', 300, 500, 0, 'System', '2027-10-30', 1],
  ['4-1780396', 'CATTAFED SYRUP', 'Cough Syrup', 'Syrup Bottle', 485, 800, 3, 'GJ', '2028-03-30', 2],
  ['277', 'CEFDOXIME SUSPENSION', 'Antibiotics', 'Suspension', 2800, 4200, 5, 'GJ', '2028-06-30', 1],
  ['278', 'CEFDOXIME TABLET', 'Antibiotics', 'Pack 1', 3450, 5000, 1, 'GJ', '2028-05-30', 1],
  ['1527', 'CEFEST (CEFIXIME 200MG)', 'Antibiotics', 'Pack 1', 1550, 2600, 3, 'Theo Rep', '2028-04-30', 2],
  ['7-1783161', 'CEFEST (CEFIXIME 400MG)', 'Antibiotics', 'Pack 1', 2300, 3800, 8, 'Theo Rep', '2028-07-30', 2],
  ['3-1767900', 'CEFIXIME TABLET', 'Antibiotics', 'Pack 1', 2150, 3000, 1, 'GREENLIFE', '2028-03-30', 2],
  ['279', 'CEFLONAC TABLET', 'Analgesics', 'Sachet 1.0', 650, 1000, 24, 'SANTUS', '2028-08-30', 5],
  ['280', 'CEFTRIAXONE 1G INJ (880)', 'Injectables', 'Pack 1', 880, 1400, 10, 'GREENLIFE', '2028-06-30', 5],
  ['4-1759003', 'CEFTRIAXONE 1G INJ (700)', 'Injectables', 'Vial 1', 700, 1000, 0, 'GJ', '2027-12-30', 5],
  ['283', 'CEFTRIAXONE 1G INJ (585)', 'Injectables', 'Vial 1', 585, 1000, 3, 'GREENLIFE', '2028-04-30', 3],
  ['P0000040', 'CEFULVIN (GRISEOFULVIN)', 'Antifungal', 'Pack 1', 1602, 2300, 2, 'Shelflife', '2028-04-30', 1],
  ['5-1780569', 'CEFUROXIME 250MG', 'Antibiotics', 'Pack 1', 1450, 2500, 2, 'SANTUS', '2028-04-30', 2],
  ['284', 'CEFUROXIME 500MG (2300)', 'Antibiotics', 'Pack 1', 2300, 3200, 0, 'SANTUS', '2027-12-30', 2],

  // PAGE 8 (47 items)
  ['285', 'CEFUROXIME 500MG (FIDSON)', 'Antibiotics', 'Pack 1', 2700, 3800, 0, 'FIDSON', '2028-12-30', 1],
  ['286', 'CEFUROXIME SUSPENSION', 'Antibiotics', 'Suspension', 1650, 2600, 2, 'GJ', '2028-03-30', 1],
  ['1122', 'CEFUROXIME 500MG (SANTUS)', 'Antibiotics', 'Pack 1', 2070, 3000, 2, 'SANTUS', '2028-04-30', 2],
  ['288', 'CELEBREX 200MG', 'Analgesics', 'Pack 1', 5350, 7500, 0, 'SANTUS', '2027-11-30', 1],
  ['P0000004', 'CELECOXIB 200MG SACHET', 'Analgesics', 'Sachet 1.0', 950, 1500, 8, 'SANTUS', '2028-05-30', 3],
  ['P0000046', 'CEMCEE ANTIMALARIAL', 'Antimalaria', 'Pack 1', 390, 1000, 26, 'CP COOP', '2028-08-30', 5],
  ['290', 'CENOCIDE TABLET', 'Anti helminthic', 'Tablet 1.0', 13, 50, 205, 'SANTUS', '2028-09-30', 20],
  ['291', 'CENOX 500MG', 'Antibiotics', 'Pack 1', 945, 1400, 0, 'SANTUS', '2027-11-30', 2],
  ['292', 'CENOX TN TABLET', 'Antibiotics', 'Sachet 1.0', 600, 1000, 0, 'PHARMATON', '2027-11-30', 2],
  ['293', 'CENOX X10 CIPROFLOXACIN', 'Antibiotics', 'Sachet 1.0', 840, 1300, 1, 'GJ', '2028-02-28', 2],
  ['294', 'CENPAIN NIGHT', 'Analgesics', 'Sachet 1.0', 245, 400, 27, 'SANTUS', '2028-06-30', 5],
  ['4-1778499', 'CET-10 TABLET (CETIRIZINE)', 'Antiallergy', 'Sachet 1.0', 250, 400, 22, 'Shelflife', '2028-06-30', 5],
  ['299', 'CET-Z SYRUP', 'Antiallergy', 'Syrup Bottle', 950, 1500, 1, 'SANTUS', '2028-01-30', 2],
  ['300', 'CET-Z TABLET', 'Antiallergy', 'Sachet 1.0', 310, 500, 31, 'PHARMATON', '2028-07-30', 5],
  ['298', 'CETIDYN SYRUP', 'Antiallergy', 'Syrup Bottle', 710, 1300, 8, 'SANTUS', '2028-04-30', 2],
  ['301', 'CFXCLAV 375MG', 'Antibiotics', 'Pack 1', 3500, 5200, 0, 'GJ', '2027-11-30', 1],
  ['302', 'CHEMADOL PARACETAMOL', 'Analgesics', 'Syrup Bottle', 400, 600, 5, 'CP COOP', '2028-04-30', 2],
  ['303', 'CHEMIRON CAPSULE (292)', 'Multivitamin', 'Sachet 1.0', 292, 500, 16, 'PHARMATON', '2028-06-30', 5],
  ['541', 'CHEMIRON SACHET (110)', 'Multivitamin', 'Sachet 1.0', 110, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['305', 'CHEMIRON TONIC (BIG)', 'Multivitamin', 'Syrup Bottle', 3175, 4600, 1, 'SANTUS', '2028-03-30', 1],
  ['306', 'CHEMIRON TONIC (MEDIUM)', 'Multivitamin', 'Syrup Bottle', 1220, 1800, 4, 'GJ', '2028-05-30', 2],
  ['304', 'CHEMIRON TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 650, 950, 2, 'GJ', '2028-04-30', 2],
  ['307', 'CHEMIRON FOLIC', 'Vitamin', 'Sachet 1.0', 390, 600, 4, 'GJ', '2028-04-30', 2],
  ['308', 'CHEMOCEF TABLET', 'Antibiotics', 'Pack 1', 1700, 2500, 1, 'SANTUS', '2028-02-28', 1],
  ['309', 'CHLORAMPHENICOL CAPSULE', 'Antibiotics', 'Sachet 1.0', 400, 600, 37, 'SANTUS', '2028-08-30', 5],
  ['7-1760775', 'CHLORAMPHENICOL EYE DROPS', 'Eye drops', 'Drops Bottle', 330, 600, 0, 'GJ', '2027-10-30', 3],
  ['310', 'CHLORAMPHENICOL EAR/EYE OINT', 'Gel', 'Tube', 550, 900, 8, 'SANTUS', '2028-04-30', 2],
  ['311', 'CHLORAMPHENICOL INJ 1G', 'Injectables', 'Vial 1', 780, 1100, 17, 'SANTUS', '2028-06-30', 3],
  ['312', 'CHLOROQUINE AMP INJ', 'Injectables', 'Ampoule 1', 300, 420, 6, 'SANTUS', '2028-03-30', 2],
  ['313', 'CHLOROQUINE VIAL INJ', 'Injectables', 'Vial 1', 750, 1200, 6, 'SANTUS', '2028-04-30', 2],
  ['314', 'CHLOROQUINE SYRUP', 'Antimalaria', 'Syrup Bottle', 520, 800, 0, 'GJ', '2027-10-30', 2],
  ['315', 'CHLOROQUINE TABLET', 'Antimalaria', 'Sachet 1.0', 200, 350, 0, 'System', '2027-10-30', 2],
  ['316', 'CHLORPHENIRAMINE SYRUP', 'Antiallergy', 'Syrup Bottle', 450, 650, 0, 'GJ', '2027-11-30', 2],
  ['317', 'CHLORXY-G GEL', 'Antiseptic', 'Tube', 690, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['318', 'CHYMOTRIPSIN SACHET (277)', 'Anti inflammatory', 'Sachet 1.0', 277, 500, 13, 'SANTUS', '2028-05-30', 3],
  ['319', 'CHYMOTRYPSIN SACHET (284)', 'Supplements', 'Sachet 1.0', 284, 400, 0, 'GJ', '2027-12-30', 3],
  ['320', 'CHYMOTRYPSIN FORTE (285)', 'Anti inflammatory', 'Sachet 1.0', 285, 400, 0, 'PHARMATON', '2027-12-30', 3],
  ['3-1760775', 'CHYMOTRYPSIN TAB', 'Supplements', 'Sachet 1.0', 277, 400, 9, 'SANTUS', '2028-05-30', 3],
  ['321', 'CIKLAVIT SYRUP', 'Supplements', 'Syrup Bottle', 2500, 3600, 0, 'GJ', '2027-11-30', 1],
  ['322', 'CIMETIDINE TABLET (PACK)', 'Anti-ulcer', 'Pack 1', 930, 1300, 0, 'SANTUS', '2027-11-30', 2],
  ['3-1780397', 'CIMETIDINE AMP INJ', 'Injectables', 'Ampoule 1', 73, 150, 9, 'GJ', '2028-04-30', 3],
  ['1-1756123', 'CIMETIDINE SACHET', 'Anti-ulcer', 'Sachet 1.0', 490, 800, 3, 'SANTUS', '2028-03-30', 2],
  ['325', 'CIPRO 500MG TABLET', 'Antibiotics', 'Sachet 1.0', 450, 800, 0, 'SANTUS', '2027-12-30', 3],
  ['326', 'CIPROBON 500MG', 'Antibiotics', 'Sachet 1.0', 570, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['327', 'CIPROCET 500MG', 'Antibiotics', 'Sachet 1.0', 500, 750, 0, 'PHARMATON', '2027-12-30', 2],
  ['328', 'CIPROFLOXACIN IV INFUSION', 'Infusion', '100ml Bottle', 380, 600, 30, 'FIDSON', '2028-08-30', 5],
  ['330', 'CIPROFLOXACIN 500MG TAB', 'Antibiotics', 'Sachet 1.0', 461, 1000, 21, 'Shelflife', '2028-07-30', 5],

  // PAGE 9 (47 items)
  ['9-1760777', 'CIPROPTIC EYE DROPS', 'Eye drops', 'Drops Bottle', 570, 900, 1, 'GJ', '2026-09-30', 1],
  ['9-1763675', 'CIPROTAB EYE DROPS', 'Eye drops', 'Drops Bottle', 570, 900, 1, 'GJ', '2027-12-30', 1],
  ['331', 'CIPROTAB 500MG (X10 PACK)', 'Antibiotics', 'Pack 1', 3400, 4600, 20, 'PHARMATON', '2028-12-30', 5],
  ['332', 'CIPROTAB 500MG (X14 PACK)', 'Antibiotics', 'Pack 1', 4350, 6000, 4, 'FIDSON', '2028-12-30', 2],
  ['1-1764962', 'CIPROTAB X10 SACHET', 'Antibiotics', 'Sachet 1.0', 3500, 4700, 0, 'FIDSON', '2028-09-30', 2],
  ['333', 'CIPROTAB-TN', 'Antibiotics', 'Pack 1', 3410, 5000, 4, 'SANTUS', '2028-06-30', 1],
  ['336', 'CITRAMIN VITAMIN C (ORANGE)', 'Vitamin', 'Pack 1', 700, 1000, 0, 'GJ', '2027-11-30', 2],
  ['337', 'CITRAMIN VITAMIN C (WHITE)', 'Vitamin', 'Pack 1', 740, 1100, 6, 'GJ', '2028-05-30', 2],
  ['338', 'CJB INSECTICIDE (BIG)', 'Insecticide', 'Aerosol Can', 1350, 1800, 0, 'System', '2028-06-30', 1],
  ['339', 'CJB INSECTICIDE (SMALL)', 'Insecticide', 'Aerosol Can', 900, 1200, 0, 'System', '2028-06-30', 1],
  ['342', 'CLAM-TONIC', 'Multivitamin', 'Syrup Bottle', 280, 400, 0, 'PHARMATON', '2027-10-30', 2],
  ['340', 'CLAMIDE TABLET (GLIBENCLAMIDE)', 'Antidiabetics', 'Sachet 1.0', 250, 400, 9, 'GJ', '2028-04-30', 3],
  ['343', 'CLANOSTEN CREAM', 'Antifungal', 'Tube', 720, 1300, 0, 'GJ', '2027-11-30', 1],
  ['344', 'CLARITHROMYCIN 500MG PACK', 'Antibiotics', 'Pack 1', 2850, 4200, 5, 'SANTUS', '2028-06-30', 2],
  ['345', 'CLARITHROMYCIN SACHET', 'Antibiotics', 'Sachet 1.0', 1800, 2700, 8, 'SANTUS', '2028-06-30', 2],
  ['347', 'CLAVULIN SUSPENSION', 'Antibiotics', 'Suspension', 1500, 2200, 0, 'SANTUS', '2027-11-30', 1],
  ['348', 'CLAVULIST 625MG', 'Antibiotics', 'Pack 1', 2100, 3000, 0, 'GJ', '2027-12-30', 1],
  ['349', 'CLEARCUFF SYRUP (ADULT)', 'Cough Syrup', 'Syrup Bottle', 500, 750, 4, 'SANTUS', '2028-04-30', 2],
  ['350', 'CLEARCUFF SYRUP (PAED)', 'Cough Syrup', 'Syrup Bottle', 470, 700, 1, 'GJ', '2028-02-28', 2],
  ['351', 'CLIN-CAP CREAM', 'Cream', 'Tube', 880, 1300, 9, 'SANTUS', '2028-06-30', 2],
  ['352', 'CLIN-CAP GEL', 'Gel', 'Tube', 990, 1400, 6, 'SANTUS', '2028-06-30', 2],
  ['353', 'CLINDAMYCIN 150MG CAP', 'Antibiotics', 'Sachet 1.0', 1050, 2500, 3, 'SANTUS', '2028-04-30', 2],
  ['354', 'CLINDAMYCIN 300MG CAP', 'Antibiotics', 'Sachet 1.0', 1100, 1600, 0, 'CIKASON', '2027-12-30', 2],
  ['4-1758194', 'CLINIVAL-V GEL', 'Antifungal', 'Tube', 2500, 3700, 0, 'CHRIS', '2027-12-30', 1],
  ['355', 'CLOFENAC 50MG SACHET', 'Analgesics', 'Sachet 1.0', 370, 600, 0, 'GJ', '2027-12-30', 3],
  ['356', 'CLOFENAC SR 100MG', 'Analgesics', 'Sachet 1.0', 850, 1200, 0, 'SANTUS', '2027-12-30', 2],
  ['357', 'CLOMID TABLET (FERTILITY)', 'Supplements', 'Pack 1', 10500, 15000, 1, 'CHRIS', '2028-06-30', 1],
  ['5-1780570', 'CLOMIPHENE 50MG', 'Supplements', 'Sachet 1.0', 660, 2000, 1, 'SANTUS', '2028-04-30', 1],
  ['358', 'CLOPIDOGREL 75MG (400)', 'Antihypertensive', 'Sachet 1.0', 400, 600, 29, 'CP COOP', '2028-08-30', 5],
  ['359', 'CLOPIDOGREL 75MG (620)', 'Antihypertensive', 'Sachet 1.0', 620, 900, 0, 'GJ', '2027-12-30', 2],
  ['360', 'CLOPIDOGREL 75MG (SANTUS)', 'Antihypertensive', 'Sachet 1.0', 400, 600, 8, 'SANTUS', '2028-05-30', 3],
  ['361', 'CLOSE-UP TOOTHPASTE', 'Consumables', 'Tube', 350, 500, 0, 'System', '2028-06-30', 2],
  ['362', 'CLOSOBEL CREAM', 'Cream', 'Tube', 550, 900, 0, 'ELIONA', '2027-12-30', 2],
  ['P0000045', 'CLOVIGAL VAGINAL TAB', 'Antifungal', 'Pack 1', 1099, 1700, 5, 'CP COOP', '2028-05-30', 2],
  ['363', 'CO-AMOXICLAV 375MG', 'Antibiotics', 'Pack 1', 1250, 1900, 0, 'NEMEITH', '2027-11-30', 2],
  ['364', 'CO-AMOXICLAV SUSPENSION', 'Antibiotics', 'Suspension', 1050, 1500, 0, 'SANTUS', '2027-11-30', 2],
  ['365', 'CO-AMOXICLAV 625MG', 'Antibiotics', 'Pack 1', 1300, 2000, 0, 'BLESSED NOEDYKE', '2027-11-30', 2],
  ['374', 'CO-CODAMOL 8/500MG', 'Analgesics', 'Sachet 1.0', 2500, 3600, 5, 'CHRIS', '2028-06-30', 2],
  ['366', 'COARTEM 20/120MG (DISP)', 'Antimalaria', 'Pack 1', 500, 1000, 0, 'SFH', '2027-12-30', 3],
  ['367', 'COARTEM 80/480MG (NOVARTIS)', 'Antimalaria', 'Pack 1', 5800, 8100, 0, 'GJ', '2028-03-30', 1],
  ['368', 'COARTEM 80/480MG (STD)', 'Antimalaria', 'Pack 1', 1650, 2350, 0, 'BLESSED NOEDYKE', '2028-01-30', 2],
  ['369', 'COARTEM 40/240MG', 'Antimalaria', 'Pack 1', 700, 1000, 0, 'GJ', '2027-12-30', 2],
  ['P0000023', 'COATAL FORTE (SACHET)', 'Antimalaria', 'Pack 1', 752, 1300, 1, 'Shelflife', '2028-04-30', 2],
  ['370', 'COATAL FORTE (PACK)', 'Antimalaria', 'Pack 1', 1600, 2300, 0, 'PHARMATON', '2027-12-30', 2],
  ['P0000022', 'COATAL TABLET', 'Antimalaria', 'Pack 1', 638, 1200, 4, 'Shelflife', '2028-05-30', 2],
  ['375', 'COD LIVER OIL CAPSULE (500)', 'Supplements', 'Sachet 1.0', 500, 800, 4, 'CHRIS', '2028-05-30', 2],
  ['593', 'COD LIVER OIL SACHET (305)', 'Supplements', 'Sachet 1.0', 305, 500, 0, 'GJ', '2027-12-30', 2],

  // PAGE 10 (47 items)
  ['376', 'COD LIVER OIL SYRUP', 'Supplements', 'Syrup Bottle', 3950, 5600, 0, 'GJ', '2027-12-30', 1],
  ['377', 'CODATEM MULTIVITAMIN', 'Multivitamin', 'Syrup Bottle', 1350, 2000, 13, 'STEVENS', '2028-07-30', 2],
  ['378', 'CODIOLAD TABLET', 'Antihypertensive', 'Sachet 1.0', 2060, 3200, 6, 'CP COOP', '2028-06-30', 2],
  ['379', 'CODOLIN EXPECTORANT', 'Cough Syrup', 'Syrup Bottle', 510, 800, 2, 'SANTUS', '2028-03-30', 2],
  ['380', 'CODPLUS CAPSULE', 'Supplements', 'Sachet 1.0', 600, 950, 0, 'GJ', '2027-11-30', 2],
  ['1161', 'COF-N-COLD SYRUP (550)', 'Cough Syrup', 'Syrup Bottle', 550, 800, 0, 'BLESSED NOEDYKE', '2027-11-30', 2],
  ['387', 'COF-N-COLD SYRUP (450)', 'Cough Syrup', 'Syrup Bottle', 450, 700, 3, 'GJ', '2028-02-28', 2],
  ['6-1760096', 'COFEX CHEST SYRUP', 'Cough Syrup', 'Syrup Bottle', 850, 1200, 1, 'GJ', '2028-01-30', 2],
  ['381', 'COFEX SYRUP', 'Cough Syrup', 'Syrup Bottle', 600, 850, 0, 'GJ', '2027-11-30', 2],
  ['4-1762457', 'COFLAX SYRUP', 'Cough Syrup', 'Syrup Bottle', 730, 1000, 0, 'GJ', '2027-11-30', 2],
  ['382', 'COFLIN EXPECTORANT', 'Cough Syrup', 'Syrup Bottle', 500, 800, 15, 'GJ', '2028-09-30', 3],
  ['383', 'COFLIN LINCTUS', 'Cough Syrup', 'Syrup Bottle', 1650, 2400, 13, 'SANTUS', '2028-03-30', 2],
  ['384', 'COFLIN LOZENGES', 'Lozenges', 'Sachet 1.0', 480, 700, 5, 'SANTUS', '2028-01-30', 2],
  ['385', 'COFMIX JUNIOR SYRUP', 'Cough Syrup', 'Syrup Bottle', 580, 850, 5, 'GJ', '2027-08-30', 2],
  ['386', 'COFMIX ADULT SYRUP', 'Cough Syrup', 'Syrup Bottle', 580, 900, 7, 'SANTUS', '2028-04-30', 2],
  ['388', 'COFTA LOZENGES', 'Lozenges', 'Sachet 1.0', 190, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['389', 'COFTA COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 920, 1400, 0, 'SANTUS', '2027-12-30', 2],
  ['390', 'COGNITOL MEMORY TAB', 'Supplements', 'Pack 1', 2800, 4200, 3, 'PHARMATON', '2028-06-30', 1],
  ['0-1757447', 'COL-COL CAPSULE', 'Antiallergy', 'Sachet 1.0', 265, 400, 5, 'GJ', '2028-04-30', 2],
  ['391', 'COLGATE TOOTHPASTE', 'Consumables', 'Tube', 960, 1500, 0, 'System', '2028-06-30', 2],
  ['392', 'COLIBEL DROPS', 'GIT', 'Drops Bottle', 2050, 3200, 5, 'GJ', '2028-05-30', 1],
  ['393', 'COLIPAN SUSPENSION', 'Anti colic', 'Suspension', 660, 950, 2, 'SANTUS', '2028-03-30', 1],
  ['394', 'COLLAGEN CAPSULE (UNIT)', 'Supplements', 'Capsule 1', 135, 200, 0, 'GJ', '2028-01-30', 10],
  ['395', 'COLLAGEN BOTTLE (7500)', 'Supplements', 'Bottle', 7500, 12000, 0, 'System', '2028-01-30', 1],
  ['396', 'COLLAGEN ULTRA (9600)', 'Supplements', 'Bottle', 9600, 14000, 0, 'System', '2028-01-30', 1],
  ['397', 'COLZA COUGH SACHET', 'Cough Syrup', 'Sachet 1.0', 147, 200, 2, 'ORANGE DRUGS', '2028-02-28', 5],
  ['399', 'COMBIFEM CONTRACEPTIVE', 'Contraceptive', 'Pack 1', 500, 800, 1, 'SFH', '2028-04-30', 2],
  ['400', 'COMBIWORM TABLET', 'Anti helminthic', 'Sachet 1.0', 250, 500, 0, 'BLESSED NOEDYKE', '2027-12-30', 3],
  ['401', 'COMPLAN MILK', 'Supplements', 'Tin / Pack', 3800, 4750, 0, 'System', '2027-11-30', 1],
  ['402', 'CONTAFAM TABLET', 'Antiallergy', 'Sachet 1.0', 110, 200, 0, 'System', '2027-11-30', 3],
  ['403', 'CONTIFLO 0.4MG (TAMSULOSIN)', 'Prostate drug', 'Sachet 1.0', 1200, 1800, 0, 'System', '2027-12-30', 1],
  ['404', 'COQ10 & OMEGA-3', 'Supplements', 'Sachet 1.0', 2890, 4200, 4, 'GJ', '2028-06-30', 1],
  ['P0000030', 'COTTON BALLS', 'Consumables', 'Pack 1', 230, 400, 10, 'SANTUS', '2029-12-30', 3],
  ['408', 'COTTON BUDS', 'Consumables', 'Pack 1', 70, 200, 7, 'System', '2029-12-30', 5],
  ['409', 'COTTON WOOL (165)', 'Consumables', 'Roll', 165, 250, 0, 'System', '2029-12-30', 3],
  ['410', 'COTTON WOOL (150)', 'Consumables', 'Roll', 150, 250, 0, 'System', '2029-12-30', 3],
  ['411', 'COTTON WOOL (SMALL)', 'Consumables', 'Roll', 80, 150, 39, 'Emeka-Market', '2029-12-30', 10],
  ['7-1756238', 'COTTON WOOL (MED)', 'Consumables', 'Roll', 160, 250, 0, 'Emeka-Market', '2029-12-30', 5],
  ['412', 'CRANBERRY EXTRACT', 'Supplements', 'Bottle', 9190, 13000, 0, 'System', '2028-04-30', 1],
  ['414', 'CREPE BANDAGE (BIG)', 'Consumables', 'Roll', 490, 750, 9, 'SANTUS', '2029-12-30', 3],
  ['415', 'CREPE BANDAGE (MEDIUM)', 'Consumables', 'Roll', 410, 600, 11, 'SANTUS', '2029-12-30', 3],
  ['416', 'CREPE BANDAGE (SMALL)', 'Consumables', 'Roll', 270, 400, 5, 'SANTUS', '2029-12-30', 3],
  ['417', 'CRYSTAL PENICILLIN INJ', 'Injectables', 'Vial 1', 300, 450, 6, 'PHARMATON', '2028-05-30', 2],
  ['419', 'CUREFENAC 50MG', 'Analgesics', 'Pack 1', 150, 250, 22, 'SANTUS', '2028-07-30', 5],
  ['420', 'CYPMAL EYE DROPS', 'Eye drops', 'Drops Bottle', 1400, 2400, 7, 'GJ', '2028-06-30', 2],
  ['422', 'CYPRIGOLD TABLET', 'Antiallergy', 'Sachet 1.0', 325, 500, 14, 'GJ', '2028-06-30', 3],
  ['421', 'CYPRIGOLD SYRUP (600)', 'Multivitamin', 'Syrup Bottle', 600, 850, 5, 'GJ', '2028-05-30', 2],

  // PAGE 11 (47 items)
  ['423', 'CYPRIGOLD SYRUP (BIG)', 'Multivitamin', 'Syrup Bottle', 1150, 1650, 5, 'GJ', '2028-01-30', 1],
  ['424', 'CYPRIVIT SYRUP (SMALL)', 'Multivitamin', 'Syrup Bottle', 600, 900, 10, 'GJ', '2028-05-30', 2],
  ['425', 'CYPRIVIT SYRUP (BIG)', 'Multivitamin', 'Syrup Bottle', 1170, 1700, 3, 'SANTUS', '2028-04-30', 1],
  ['763', 'CYPRODINE MULTIVITAMIN', 'Multivitamin', 'Syrup Bottle', 13000, 18000, 0, 'CHRIS', '2027-12-30', 1],
  ['426', 'CYPRON CAPSULE', 'Multivitamin', 'Sachet 1.0', 650, 950, 2, 'GJ', '2028-03-30', 1],
  ['427', 'CYSTER M SUPPLEMENT', 'Supplements', 'Sachet 1.0', 2350, 3500, 0, 'REALS', '2027-12-30', 1],
  ['428', 'CYTOTEC TABLET (MISOPROSTOL)', 'Anti-ulcer', 'Tablet 1.0', 350, 650, 0, 'SANTUS', '2027-11-30', 2],
  ['497', 'D-KOFF SYRUP', 'Cough Syrup', 'Syrup Bottle', 800, 1200, 2, 'GJ', '2028-02-28', 1],
  ['429', 'DABIC (MELOXICAM)', 'Analgesics', 'Sachet 1.0', 1150, 1600, 1, 'SANTUS', '2028-03-30', 1],
  ['430', 'DAFLON 1000MG', 'Antihypertensive', 'Pack 1', 9000, 12700, 0, 'GJ', '2028-01-30', 1],
  ['431', 'DAFLON 500MG SACHET', 'Supplements', 'Sachet 1.0', 5000, 7300, 1, 'CHRIS', '2028-05-30', 1],
  ['432', 'DAKTACORT CREAM', 'Cream', 'Tube', 1500, 2100, 0, 'System', '2026-08-30', 1],
  ['434', 'DALACIN-C 150MG SACHET', 'Antibiotics', 'Sachet 1.0', 2722, 4000, 0, 'SANTUS', '2027-12-30', 1],
  ['433', 'DALACIN-C 300MG PACK', 'Antibiotics', 'Pack 1', 8000, 11200, 0, 'SANTUS', '2027-12-30', 1],
  ['436', 'DANA-CPM SYRUP', 'Antiallergy', 'Syrup Bottle', 370, 600, 0, 'SANTUS', '2027-10-30', 1],
  ['435', 'DANACID TABLET', 'Antacid', 'Sachet 1.0', 160, 300, 143, 'GJ', '2028-09-30', 20],
  ['437', 'DAONIL 5MG (GLIBENCLAMIDE)', 'Antidiabetics', 'Sachet 1.0', 1200, 1700, 10, 'SANTUS', '2028-06-30', 2],
  ['439', 'DARAVIT A-Z', 'Multivitamin', 'Sachet 1.0', 1350, 2000, 0, 'ELBE', '2027-12-30', 1],
  ['441', 'DARAVIT FORTE (768)', 'Multivitamin', 'Sachet 1.0', 768, 1100, 0, 'GJ', '2027-12-30', 2],
  ['442', 'DARAVIT FORTE PACK', 'Supplements', 'Pack 1', 1560, 2200, 9, 'Shelflife', '2028-05-30', 2],
  ['443', 'DARAVIT JOINT', 'Supplements', 'Pack 1', 2450, 3500, 3, 'GJ', '2028-04-30', 1],
  ['445', 'DARAVIT OMEGA (1134)', 'Supplements', 'Sachet 1.0', 1134, 1700, 0, 'ELBE', '2027-12-30', 1],
  ['446', 'DARAVIT OMEGA (1050)', 'Supplements', 'Sachet 1.0', 1050, 1600, 0, 'SANTUS', '2027-12-30', 1],
  ['447', 'DARAVIT OMEGA PACK', 'Supplements', 'Pack 1', 1750, 2500, 9, 'GJ', '2028-06-30', 2],
  ['448', 'DARAVIT PLUS', 'Supplements', 'Pack 1', 1800, 2500, 6, 'SANTUS', '2028-05-30', 2],
  ['444', 'DARAVIT REGULAR', 'Multivitamin', 'Sachet 1.0', 1050, 1600, 6, 'GJ', '2028-05-30', 2],
  ['449', 'DARAVIT WOMAN SACHET', 'Supplements', 'Sachet 1.0', 1800, 2800, 4, 'GJ', '2028-04-30', 1],
  ['438', 'DARAVIT WOMAN PACK', 'Supplements', 'Pack 1', 6150, 9000, 4, 'SANTUS', '2028-06-30', 1],
  ['453', 'DAY-BY-DAY TONIC (500)', 'Multivitamin', 'Sachet 1.0', 500, 700, 0, 'PHARMATON', '2027-10-30', 2],
  ['455', 'DAY-BY-DAY TONIC (800)', 'Multivitamin', 'Sachet 1.0', 800, 1300, 0, 'PHARMATON', '2027-10-30', 2],
  ['456', 'DE-DION BLOOD TONIC (BIG)', 'Supplements', 'Syrup Bottle', 3600, 5200, 13, 'GJ', '2028-07-30', 2],
  ['457', 'DE-DION SYRUP (SMALL)', 'Supplements', 'Syrup Bottle', 2200, 3200, 3, 'Medquest', '2028-04-30', 1],
  ['458', 'DEEP HEAT SPRAY / RUB', 'Analgesics', 'Spray / Tube', 5200, 7000, 0, 'GJ', '2027-12-30', 1],
  ['459', 'DELE COTTON WOOL (940)', 'Consumables', 'Roll', 940, 1400, 0, 'SANTUS', '2029-12-30', 2],
  ['460', 'DELE COTTON WOOL (150)', 'Consumables', 'Roll', 150, 250, 0, 'SANTUS', '2029-12-30', 5],
  ['461', 'DELE COTTON WOOL (JUMBO)', 'Consumables', 'Roll', 2190, 3200, 2, 'SANTUS', '2029-12-30', 1],
  ['462', 'DELE COTTON WOOL (280)', 'Consumables', 'Roll', 280, 400, 0, 'SANTUS', '2029-12-30', 3],
  ['463', 'DELE COTTON WOOL (LARGE)', 'Consumables', 'Roll', 2850, 4500, 0, 'PHARMATON', '2029-12-30', 1],
  ['464', 'DELE COTTON WOOL (MED)', 'Consumables', 'Roll', 465, 700, 0, 'SANTUS', '2029-12-30', 2],
  ['467', 'DEQUADIN LOZENGES', 'Lozenges', 'Sachet 1.0', 35, 50, 7, 'SANTUS', '2028-04-30', 5],
  ['468', 'DERMACOL CREAM', 'Cream', 'Tube', 400, 700, 0, 'GREENLIFE', '2027-11-30', 2],
  ['469', 'DERMAZIN CREAM (STD)', 'Cream', 'Tube', 3000, 4200, 0, 'System', '2027-12-30', 1],
  ['470', 'DERMAZIN CREAM (BIG)', 'Cream', 'Tube', 4300, 6000, 0, 'GJ', '2027-12-30', 1],
  ['472', 'DETONIC SYRUP', 'Multivitamin', 'Syrup Bottle', 965, 1400, 0, 'SANTUS', '2027-11-30', 2],
  ['473', 'DETTOL LIQUID ANTISEPTIC', 'Antiseptic', 'Bottle', 1500, 2300, 0, 'OJEZ', '2028-06-30', 2],
  ['9-1761337', 'DEXAMETHASONE TABLET', 'Antiallergy', 'Tablet 1.0', 650, 1100, 2, 'BLESSED NOEDYKE', '2028-03-30', 2],
  ['476', 'DEXAMETHASONE AMP INJ', 'Injectables', 'Ampoule 1', 32, 100, 37, 'SANTUS', '2028-08-30', 10],

  // PAGE 12 (47 items)
  ['477', 'DEXORANGE SYRUP', 'Supplements', 'Syrup Bottle', 2793, 4300, 2, 'GJ', '2028-02-28', 1],
  ['479', 'DEXTROSE SALINE INFUSION (550)', 'Infusion', '500ml Bottle', 550, 850, 6, 'CHRIS', '2028-06-30', 2],
  ['478', 'DEXTROSE WATER INFUSION (570)', 'Infusion', '500ml Bottle', 570, 850, 7, 'CHRIS', '2028-06-30', 2],
  ['480', 'DHA EMULSION', 'Supplements', 'Syrup Bottle', 5200, 7300, 1, 'GJ', '2028-04-30', 1],
  ['481', 'DHA PLUS SYRUP', 'Supplements', 'Syrup Bottle', 3500, 4900, 0, 'System', '2027-11-30', 1],
  ['7-1760817', 'DHA SYRUP', 'Supplements', 'Syrup Bottle', 4350, 6200, 0, 'GJ', '2027-12-30', 1],
  ['2-1781696', 'DIA-K TABLET', 'Supplements', 'Sachet 1.0', 2960, 4500, 10, 'N/F REP', '2028-06-30', 2],
  ['482', 'DIABETMIN XR 500MG', 'Antidiabetics', 'Sachet 1.0', 480, 700, 13, 'GJ', '2028-06-30', 8],
  ['483', 'DIAMET TABLET (METFORMIN)', 'Antidiabetics', 'Sachet 1.0', 275, 500, 2, 'PHARMATON', '2028-06-30', 2],
  ['484', 'DIASTOP SUSPENSION', 'GIT', 'Suspension', 630, 900, 1, 'System', '2028-02-28', 2],
  ['485', 'DIATAB (GLIBENCLAMIDE)', 'Antidiabetics', 'Sachet 1.0', 105, 250, 41, 'SANTUS', '2028-08-30', 10],
  ['486', 'DIAZEPAM 5MG (100)', 'Sedative', 'Tablet 1.0', 100, 150, 0, 'PHARMATON', '2027-12-30', 2],
  ['487', 'DIAZEPAM 5MG (67)', 'Sedative', 'Tablet 1.0', 67, 100, 0, 'PHARMATON', '2027-12-30', 2],
  ['493', 'DICLO-P TABLET', 'Analgesics', 'Sachet 1.0', 90, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['488', 'DICLOFENAC EYE DROPS', 'Eye drops', 'Drops Bottle', 1150, 1750, 4, 'PHARMATON', '2028-05-30', 1],
  ['489', 'DICLOFENAC AMP INJ 75MG', 'Injectables', 'Ampoule 1', 40, 100, 23, 'GJ', '2028-02-28', 5],
  ['490', 'DICLOFENAC POTASSIUM 50MG', 'Analgesics', 'Sachet 1.0', 72, 200, 56, 'CP COOP', '2028-08-30', 10],
  ['491', 'DICLOMOL GEL', 'Gel', 'Tube', 800, 1200, 6, 'GJ', '2028-04-30', 2],
  ['492', 'DICLOMOL TABLET', 'Analgesics', 'Sachet 1.0', 380, 600, 17, 'SANTUS', '2028-06-30', 5],
  ['494', 'DIFLUCAN 150MG (PFIZER)', 'Antifungal', 'Pack 1', 4900, 7200, 2, 'SANTUS', '2028-05-30', 1],
  ['P0000011', 'DIGICLAV 625MG', 'Antibiotics', 'Pack 1', 2900, 4500, 2, 'GJ', '2028-04-30', 1],
  ['495', 'DIPHTHERIA / TETANUS TOXOID', 'Injectables', 'Vial 1', 800, 1300, 0, 'BLESSED NOEDYKE', '2027-10-30', 1],
  ['5-1768476', 'DISPOSABLE GLOVES BOX', 'Consumables', 'Box 100s', 1700, 2500, 0, 'GJ', '2028-12-30', 1],
  ['6-1767955', 'DITALIN GEL', 'Gel', 'Tube', 760, 1100, 0, 'SANTUS', '2027-11-30', 1],
  ['498', 'DOFEC GEL', 'Gel', 'Tube', 450, 700, 0, 'ELIONA', '2027-11-30', 1],
  ['499', 'DOLO META B (610)', 'Analgesics', 'Sachet 1.0', 610, 900, 16, 'ELIONA', '2028-06-30', 3],
  ['500', 'DOLO-META B (425)', 'Analgesics', 'Sachet 1.0', 425, 600, 0, 'GJ', '2027-12-30', 3],
  ['501', 'DOPATAB 250MG (METHYLDOPA)', 'Antihypertensive', 'Sachet 1.0', 900, 1300, 32, 'GJ', '2028-08-30', 5],
  ['502', 'DORBAXIN TABLET', 'Analgesics', 'Sachet 1.0', 900, 1300, 0, 'GJ', '2027-12-30', 2],
  ['8-1778929', 'DOVE BEAUTY SOAP', 'Soap', 'Bar', 1375, 1900, 6, 'Emeka-Market', '2028-12-30', 2],
  ['504', 'DOXYCAP 100MG', 'Antibiotics', 'Sachet 1.0', 660, 1200, 22, 'SANTUS', '2028-07-30', 5],
  ['505', 'DOXYCYCLINE 100MG (180)', 'Antibiotics', 'Sachet 1.0', 180, 300, 16, 'SANTUS', '2028-06-30', 5],
  ['506', 'DOXYCYCLINE 100MG (195)', 'Antibiotics', 'Sachet 1.0', 195, 300, 0, 'SANTUS', '2027-12-30', 5],
  ['508', 'DR ALADDIN SYRUP', 'Antiallergy', 'Syrup Bottle', 1150, 1700, 9, 'GJ', '2028-05-30', 2],
  ['7-1770751', 'DR FIZZO ANTACID SACHET', 'Antacid', 'Sachet 1.0', 200, 350, 36, 'REALS', '2028-08-30', 10],
  ['7-1782231', 'DR FIZZO LIQUID PACK', 'Antacid', 'Pack 1', 10000, 14800, 0, 'GJ', '2027-12-30', 1],
  ['509', 'DR JESSY EYE SUPPLEMENT', 'Supplements', 'Sachet 1.0', 1063, 1500, 0, 'CHRIS', '2027-12-30', 1],
  ['510', 'DR JESSY VITAMIN C (650)', 'Vitamin', 'Sachet 1.0', 650, 1000, 20, 'CHRIS', '2028-07-30', 5],
  ['511', 'DR JESSY VITAMIN C (600)', 'Vitamin', 'Sachet 1.0', 600, 1000, 0, 'SANTUS', '2027-12-30', 3],
  ['513', 'DR SILVA BITTERS', 'Detoxifier', 'Bottle', 2800, 4200, 0, 'System', '2027-12-30', 1],
  ['514', 'DRUJELA ORAL GEL', 'Gel', 'Tube', 559, 900, 10, 'CP COOP', '2028-06-30', 2],
  ['519', 'DRULATAN EYE DROPS', 'Eye drops', 'Drops Bottle', 5400, 7400, 0, 'PHARMATON', '2027-12-30', 1],
  ['516', 'DRUMAZIN CREAM', 'Cream', 'Tube', 1500, 2200, 0, 'CHRIS', '2027-12-30', 1],
  ['517', 'DRUMELLON EYE DROPS', 'Eye drops', 'Drops Bottle', 1330, 2000, 7, 'OJEZ', '2028-05-30', 2],
  ['518', 'DRUNALOC CREAM', 'Cream', 'Tube', 830, 1300, 0, 'GJ', '2027-12-30', 1],
  ['520', 'DRUPHAGAN EYE DROPS', 'Eye drops', 'Drops Bottle', 2750, 4000, 1, 'SANTUS', '2028-03-30', 1],
  ['522', 'DUODART CAPSULE', 'Prostate drug', 'Bottle 30s', 6800, 9700, 0, 'System', '2027-12-30', 1],

  // PAGE 13 (47 items)
  ['523', 'DUOSTAM TABLET', 'Prostate drug', 'Sachet 1.0', 1867, 2800, 15, 'GJ', '2028-06-30', 3],
  ['524', 'DUPHASTON 10MG TABLET', 'Contraceptive', 'Tablet 1.0', 510, 750, 20, 'SANTUS', '2028-06-30', 5],
  ['527', 'DUREX FEEL CONDOM', 'Condom', 'Pack 1', 950, 1500, 8, 'System', '2028-10-30', 3],
  ['528', 'DUSTING POWDER (BIG)', 'Powder', 'Tin', 1740, 2400, 5, 'SANTUS', '2028-06-30', 1],
  ['529', 'DUSTING POWDER (SMALL)', 'Powder', 'Tin', 870, 1250, 3, 'SANTUS', '2028-01-30', 1],
  ['530', 'DYNAMOGEN AMP', 'Supplements', 'Ampoule 1', 368, 600, 95, 'GJ', '2028-08-30', 10],
  ['531', 'DYNEWELL SYRUP (ADULT)', 'Supplements', 'Syrup Bottle', 2500, 4000, 0, 'CHRIS', '2027-11-30', 1],
  ['532', 'DYNEWELL SYRUP (PAED)', 'Supplements', 'Syrup Bottle', 2500, 3600, 2, 'CHRIS', '2028-03-30', 1],
  ['533', 'EASADOL SUSPENSION', 'Analgesics', 'Suspension', 420, 600, 0, 'SANTUS', '2027-11-30', 2],
  ['534', 'EASADOL TABLET', 'Analgesics', 'Sachet 1.0', 155, 300, 23, 'SANTUS', '2028-10-30', 5],
  ['536', 'EBU-200 TABLET (IBUPROFEN)', 'Analgesics', 'Sachet 1.0', 140, 200, 0, 'GJ', '2027-12-30', 5],
  ['537', 'ECOFLOCIN TABLET', 'Antibiotics', 'Pack 1', 1150, 2000, 2, 'GJ', '2028-02-28', 1],
  ['7-1773655', 'ECOSLIM CAPSULE', 'Supplements', 'Pack 1', 10000, 14300, 1, 'GJ', '2028-04-30', 1],
  ['538', 'EFAMOL CAPSULE', 'Multivitamin', 'Sachet 1.0', 5100, 7100, 0, 'PHARMATON', '2027-12-30', 1],
  ['539', 'ELA-VIT-E CAPSULE', 'Vitamin', 'Sachet 1.0', 500, 800, 0, 'ELIONA', '2027-12-30', 2],
  ['P0000049', 'ELBOW GLOVES (GYNAE)', 'Consumables', 'Pair', 800, 1200, 6, 'SANTUS', '2029-12-30', 2],
  ['542', 'ELECTROBION ORS', 'Electrolyte', 'Sachet 1.0', 200, 300, 9, 'SANTUS', '2028-06-30', 5],
  ['P0000039', 'ELECTRORUSH DRINK', 'Electrolyte', 'Bottle', 800, 1200, 5, 'Shelflife', '2028-05-30', 2],
  ['543', 'ELICATRIN TABLET', 'Antimalaria', 'Pack 1', 350, 600, 0, 'SANTUS', '2027-12-30', 2],
  ['551', 'EM-B-PLEX SYRUP', 'Vitamin', 'Syrup Bottle', 823, 1200, 5, 'SANTUS', '2028-05-30', 2],
  ['552', 'EM-B-PLEX TABLET', 'Vitamin', 'Sachet 1.0', 600, 850, 1, 'CHRIS', '2028-02-28', 2],
  ['568', 'EM-VIT-C DROPS (EMZOR)', 'Vitamin', 'Drops Bottle', 790, 1200, 1, 'ELIONA', '2028-02-28', 2],
  ['569', 'EM-VIT-C SYRUP (EMZOR)', 'Vitamin', 'Syrup Bottle', 721, 1200, 9, 'GJ', '2028-06-30', 3],
  ['545', 'EMAL (ARTEETHER INJ)', 'Antimalaria', 'Ampoule 1', 4700, 7000, 1, 'FIDSON', '2028-03-30', 1],
  ['548', 'EMBAETHER INJ', 'Antimalaria', 'Ampoule 1', 1000, 2000, 0, 'SANTUS', '2027-12-30', 1],
  ['550', 'EMBASSY INHALER', 'Inhaler', 'MDI Inhaler', 920, 1300, 0, 'SANTUS', '2027-12-30', 1],
  ['553', 'EMCAP EXTRA (EMZOR)', 'Analgesics', 'Sachet 1.0', 220, 400, 24, 'SANTUS', '2028-07-30', 5],
  ['554', 'EMCAP PARACETAMOL CAPLET', 'Analgesics', 'Sachet 1.0', 170, 250, 7, 'SANTUS', '2028-05-30', 5],
  ['555', 'EMCAP SUSPENSION', 'Analgesics', 'Suspension', 240, 350, 0, 'PHARMATON', '2027-11-30', 2],
  ['556', 'EMCILLIN SUSPENSION (EMZOR)', 'Antibiotics', 'Suspension', 1158, 1650, 2, 'SANTUS', '2028-03-30', 2],
  ['557', 'EMGYL 200MG (METRONIDAZOLE)', 'Antibiotics', 'Sachet 1.0', 40, 100, 0, 'SANTUS', '2027-12-30', 5],
  ['558', 'EMGYL 400MG (METRONIDAZOLE)', 'Antibiotics', 'Sachet 1.0', 140, 200, 0, 'PHARMATON', '2027-12-30', 5],
  ['559', 'EMGYL SUSPENSION (EMZOR)', 'Antibiotics', 'Suspension', 710, 1000, 3, 'SANTUS', '2028-04-30', 2],
  ['561', 'EMMOX SUSPENSION (EMZOR)', 'Antibiotics', 'Suspension', 1260, 1800, 6, 'SANTUS', '2028-05-30', 2],
  ['1-1770629', 'EMMOX-250MG CAPSULE', 'Antibiotics', 'Sachet 1.0', 600, 900, 1, 'BLESSED NOEDYKE', '2028-02-28', 2],
  ['9-1770979', 'EMPILL WOMEN', 'Supplements', 'Sachet 1.0', 3650, 5200, 1, 'GJ', '2028-03-30', 1],
  ['562', 'EMPRIN TABLET (ASPIRIN)', 'Antihypertensive', 'Sachet 1.0', 53, 100, 9, 'SANTUS', '2028-05-30', 5],
  ['563', 'EMPROFEN SUSPENSION', 'Analgesics', 'Suspension', 1150, 1700, 3, 'SANTUS', '2028-04-30', 2],
  ['564', 'EMTRIM SUSPENSION', 'Antibiotics', 'Suspension', 660, 1000, 2, 'SANTUS', '2028-03-30', 2],
  ['565', 'EMTRIM TABLET (CO-TRIMOXAZOLE)', 'Antibiotics', 'Sachet 1.0', 270, 400, 89, 'PHARMATON', '2028-09-30', 10],
  ['566', 'EMTRISIL SUSPENSION', 'Antacid', 'Suspension', 520, 750, 0, 'SANTUS', '2027-12-30', 2],
  ['570', 'EMVITE SYRUP (EMZOR)', 'Multivitamin', 'Syrup Bottle', 820, 1200, 2, 'SANTUS', '2028-04-30', 2],
  ['571', 'EMVITE LOOSE TABLET', 'Multivitamin', 'Tablet 1.0', 5, 7, 1077, 'BLESSED NOEDYKE', '2028-10-30', 50],
  ['572', 'EMVITE X100 PACK', 'Multivitamin', 'Pack 1', 900, 1300, 3, 'BLESSED NOEDYKE', '2028-05-30', 2],
  ['575', 'EMZOBREX SYRUP', 'Cough Syrup', 'Syrup Bottle', 1500, 2200, 0, 'CHRIS', '2027-11-30', 1],
  ['576', 'EMZOCLOX SACHET', 'Antibiotics', 'Sachet 1.0', 965, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['577', 'EMZOCLOX CAPSULE PACK', 'Antibiotics', 'Pack 1', 1045, 1600, 1, 'SANTUS', '2028-03-30', 2],

  // PAGE 14 (47 items)
  ['578', 'EMZOCLOX PACK (PHARMATON)', 'Antibiotics', 'Pack 1', 1600, 2400, 0, 'PHARMATON', '2027-12-30', 2],
  ['579', 'EMZOLYN COUGH SYRUP (ADULT)', 'Cough Syrup', 'Syrup Bottle', 1100, 1700, 7, 'SANTUS', '2028-06-30', 2],
  ['580', 'EMZOLYN EXPECTORANT', 'Cough Syrup', 'Syrup Bottle', 900, 1400, 19, 'SANTUS', '2028-08-30', 5],
  ['581', 'EMZOLYN PAEDIATRIC SYRUP', 'Cough Syrup', 'Syrup Bottle', 770, 1200, 1, 'SANTUS', '2028-03-30', 2],
  ['582', 'EMZOLYTE ORS', 'Electrolyte', 'Sachet 1.0', 100, 200, 0, 'PHARMATON', '2027-12-30', 5],
  ['1269', 'EMZOR PARACETAMOL PACK', 'Analgesics', 'Pack 1', 660, 950, 3, 'SANTUS', '2028-05-30', 3],
  ['1-1764521', 'EMZOR PARACETAMOL DROPS', 'Analgesics', 'Drops Bottle', 380, 550, 1, 'SANTUS', '2028-02-28', 2],
  ['583', 'EMZOR PARACETAMOL SYRUP', 'Analgesics', 'Syrup Bottle', 600, 900, 1, 'SANTUS', '2028-02-28', 3],
  ['584', 'EMZOR PCM CAPLET PACK', 'Analgesics', 'Pack 1', 600, 1000, 17, 'GJ', '2028-08-30', 5],
  ['585', 'EMZOR PARACETAMOL SACHET', 'Analgesics', 'Sachet 1.0', 132, 200, 306, 'SANTUS', '2028-10-30', 50],
  ['586', 'EMZORON TONIC', 'Multivitamin', 'Syrup Bottle', 1360, 1950, 0, 'SANTUS', '2027-12-30', 2],
  ['587', 'ENAT 400 (VITAMIN E)', 'Supplements', 'Sachet 1.0', 2900, 4000, 1, 'GJ', '2028-06-30', 1],
  ['588', 'ENDIX-G CREAM', 'Cream', 'Tube', 1150, 1700, 1, 'GJ', '2028-04-30', 2],
  ['589', 'ENERKAL CAPSULE', 'Supplements', 'Sachet 1.0', 1050, 1600, 0, 'REMMY', '2027-12-30', 2],
  ['590', 'EPIDERM CREAM (SMALL)', 'Cream', 'Tube', 400, 600, 12, 'SHALINA', '2028-07-30', 3],
  ['591', 'EPIDERM CREAM (BIG)', 'Cream', 'Tube', 680, 950, 0, 'SANTUS', '2027-12-30', 2],
  ['7-1760357', 'EPIDERM LOTION', 'Antifungal', 'Lotion Bottle', 850, 1200, 4, 'SHALINA', '2028-05-30', 2],
  ['592', 'EPIGESIC TABLET', 'Analgesics', 'Sachet 1.0', 1450, 2000, 0, 'GJ', '2027-12-30', 2],
  ['594', 'EPOEJA CAPSULE', 'Supplements', 'Sachet 1.0', 530, 800, 5, 'GJ', '2028-04-30', 2],
  ['595', 'EPOEJA PLUS', 'Supplements', 'Pack 1', 2500, 3500, 0, 'CHRIS', '2027-12-30', 1],
  ['596', 'EPROXEN TABLET', 'Analgesics', 'Tablet 1.0', 313, 450, 0, 'GJ', '2027-12-30', 2],
  ['597', 'EPSOM SALT', 'Antispasmodic', 'Sachet 1.0', 238, 350, 39, 'GJ', '2028-10-30', 10],
  ['598', 'ERGOMETRINE INJ', 'Injectables', 'Ampoule 1', 100, 150, 0, 'System', '2027-11-30', 2],
  ['599', 'ERNEST GRIPE WATER', 'Anti colic', 'Syrup Bottle', 1380, 2000, 0, 'GJ', '2027-12-30', 2],
  ['602', 'ERYFAST SUSPENSION', 'Antibiotics', 'Suspension', 1250, 1750, 0, 'PHARMATON', '2027-11-30', 2],
  ['600', 'ERYKAL TABLET', 'Antibiotics', 'Sachet 1.0', 750, 1100, 0, 'PHARMATON', '2027-11-30', 2],
  ['601', 'ERYTHROMYCIN SACHET', 'Antibiotics', 'Sachet 1.0', 1200, 1750, 0, 'SANTUS', '2027-12-30', 2],
  ['3-1767956', 'ERYTHROFAST TABLET', 'Antibiotics', 'Sachet 1.0', 1000, 1500, 0, 'SANTUS', '2027-12-30', 2],
  ['603', 'ERYTHROKID SUSPENSION', 'Antibiotics', 'Suspension', 1757, 2500, 9, 'GJ', '2028-06-30', 2],
  ['604', 'ERYTHROMYCIN 500MG (1050)', 'Antibiotics', 'Sachet 1.0', 1050, 1500, 0, 'PHARMATON', '2027-12-30', 2],
  ['605', 'ERYTHROMYCIN 500MG (1000)', 'Antibiotics', 'Sachet 1.0', 1000, 1500, 7, 'GJ', '2028-05-30', 2],
  ['606', 'ERYTHROMYCIN 250MG', 'Antibiotics', 'Sachet 1.0', 700, 1200, 3, 'GJ', '2028-04-30', 2],
  ['8-1754822', 'ERYTHROMYCIN PACK', 'Antibiotics', 'Pack 1', 1000, 1500, 0, 'SANTUS', '2027-12-30', 2],
  ['607', 'ESOMEPRAZOLE 40MG', 'Anti-ulcer', 'Sachet 1.0', 1170, 1800, 0, 'GJ', '2027-12-30', 2],
  ['608', 'ESOMEPRAZOLE 20MG', 'Anti-ulcer', 'Sachet 1.0', 750, 1200, 4, 'GJ', '2028-05-30', 2],
  ['609', 'ESPEN TABLET', 'Analgesics', 'Sachet 1.0', 90, 150, 0, 'PHARMATON', '2027-12-30', 5],
  ['0-1760093', 'ESSENTIAL FORTE CAPSULE', 'Multivitamin', 'Sachet 1.0', 1850, 2700, 0, 'GJ', '2027-12-30', 2],
  ['610', 'ETHICLOX CAPSULE', 'Antibiotics', 'Sachet 1.0', 1375, 2000, 4, 'OJEZ', '2028-05-30', 2],
  ['611', 'EUSOL LOTION (BIG)', 'Antiseptic', 'Lotion Bottle', 420, 600, 0, 'GJ', '2028-01-30', 2],
  ['612', 'EUSOL SOLUTION (SMALL)', 'Antiseptic', 'Bottle', 330, 600, 3, 'GJ', '2028-04-30', 2],
  ['613', 'EVE BOOM SUPPLEMENT', 'Supplements', 'Pack 1', 5500, 8000, 3, 'HEALTHY CHILD', '2028-06-30', 1],
  ['1-1765793', "EVE'S DESIRE", 'Supplements', 'Bottle', 15780, 22300, 0, 'N/F REP', '2028-01-30', 1],
  ['614', 'EVENING PRIMROSE PACK', 'Supplements', 'Pack 1', 7000, 10500, 0, 'GJ', '2027-12-30', 1],
  ['617', 'EVENING PRIMROSE (1334)', 'Supplements', 'Sachet 1.0', 1334, 2000, 5, 'SANTUS', '2028-05-30', 2],
  ['616', 'EVENING PRIMROSE SACHET', 'Supplements', 'Sachet 1.0', 900, 1500, 14, 'GJ', '2028-07-30', 3],
  ['618', 'EVIKT (LEVAMISOLE)', 'Anti helminthic', 'Tablet 1.0', 10, 50, 118, 'GJ', '2028-10-30', 20],
  ['2-1780486', 'EXAMINATION GLOVES BOX', 'Consumables', 'Box 100s', 3800, 5500, 1, 'GJ', '2029-12-30', 1],

  // PAGE 15 (47 items)
  ['620', 'EXDRYL ADULT SYRUP', 'Cough Syrup', 'Syrup Bottle', 400, 700, 0, 'GJ', '2027-11-30', 2],
  ['4-1758969', 'EXDRYL JUNIOR SYRUP', 'Cough Syrup', 'Syrup Bottle', 400, 700, 4, 'GJ', '2028-04-30', 2],
  ['621', 'EXIPLON SYRUP (ADULT)', 'Cough Syrup', 'Syrup Bottle', 450, 700, 6, 'GJ', '2028-05-30', 2],
  ['622', 'EXIPLON SYRUP (PAED)', 'Cough Syrup', 'Syrup Bottle', 400, 600, 2, 'GJ', '2028-03-30', 2],
  ['623', 'EXTINEAL CREAM', 'Cream', 'Tube', 600, 950, 0, 'ELIONA', '2027-12-30', 2],
  ['624', 'EXTRA VIRGIN OLIVE OIL', 'Supplements', 'Bottle', 3850, 5400, 0, 'SANTUS', '2028-06-30', 1],
  ['626', 'EYEMOLOL EYE DROPS', 'Eye drops', 'Drops Bottle', 450, 1000, 1, 'GJ', '2028-02-28', 1],
  ['627', 'EYEXINE EYE DROPS', 'Eye drops', 'Drops Bottle', 1900, 3000, 0, 'GJ', '2027-12-30', 1],
  ['628', 'FACE MASK (SURGICAL)', 'Consumables', 'Single Unit', 25, 100, 288, 'GJ', '2029-12-30', 20],
  ['630', 'FAMAGYL SUSPENSION', 'Antibiotics', 'Suspension', 400, 600, 0, 'System', '2027-10-30', 2],
  ['631', 'FASTUM GEL', 'Gel', 'Tube', 2200, 3250, 0, 'System', '2027-12-30', 1],
  ['632', 'FEED FINE TABLET', 'Multivitamin', 'Sachet 1.0', 200, 300, 0, 'GJ', '2027-12-30', 3],
  ['633', 'FEED FINE SYRUP', 'Multivitamin', 'Syrup Bottle', 400, 600, 0, 'SANTUS', '2027-12-30', 2],
  ['634', 'FELVIN (PIROXICAM 20MG)', 'Analgesics', 'Sachet 1.0', 140, 300, 188, 'GJ', '2028-09-30', 20],
  ['637', 'FEROBIN PLUS SYRUP', 'Multivitamin', 'Syrup Bottle', 2300, 3500, 10, 'GJ', '2028-07-30', 3],
  ['638', 'FEROBIN-PLUS CAPSULE', 'Multivitamin', 'Sachet 1.0', 450, 700, 2, 'GJ', '2028-04-30', 2],
  ['639', 'FEROGLOBIN CAPSULE', 'Multivitamin', 'Sachet 1.0', 4265, 6000, 4, 'SANTUS', '2028-06-30', 2],
  ['640', 'FEROGLOBIN LIQUID TONIC', 'Multivitamin', 'Syrup Bottle', 9000, 12800, 1, 'PHARMATON', '2028-05-30', 1],
  ['635', 'FERROGUD CAPSULE', 'Supplements', 'Sachet 1.0', 1900, 2700, 0, 'Uptown care', '2027-12-30', 1],
  ['642', 'FERROLAB-12 SACHET', 'Multivitamin', 'Sachet 1.0', 275, 400, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['643', 'FERROTONE SYRUP', 'Multivitamin', 'Syrup Bottle', 800, 1200, 0, 'SANTUS', '2027-12-30', 2],
  ['644', 'FERROUS SULPHATE LOOSE TAB', 'Vitamin', 'Tablet 1.0', 1.7, 3.3, 1082, 'SANTUS', '2028-10-30', 50],
  ['645', 'FESULF TABLET SACHET', 'Supplements', 'Sachet 1.0', 245, 400, 18, 'GJ', '2028-07-30', 5],
  ['646', 'FESULF X100 PACK', 'Vitamin', 'Pack 1', 450, 700, 4, 'SANTUS', '2028-05-30', 2],
  ['3-1760210', 'FEVICID CREAM', 'Cream', 'Tube', 620, 950, 0, 'GJ', '2027-12-30', 2],
  ['647', 'FEXET TABLET (FEXOFENADINE)', 'Antiallergy', 'Tablet 1.0', 264, 380, 0, 'SANTUS', '2027-12-30', 2],
  ['P0000038', 'FIDSON VITAMIN C SYRUP', 'Vitamin', 'Syrup Bottle', 494, 800, 5, 'Shelflife', '2028-05-30', 2],
  ['649', 'FIESTA (HOT) CONDOM', 'Condom', 'Pack 1', 240, 350, 0, 'System', '2028-06-30', 2],
  ['650', 'FIESTA (PRO) CONDOM', 'Condom', 'Pack 1', 415, 600, 0, 'System', '2028-06-30', 2],
  ['651', 'FIESTA (STRAWBERRY) CONDOM', 'Condom', 'Pack 1', 420, 600, 0, 'System', '2028-06-30', 2],
  ['654', 'FIESTA (EXTRA) CONDOM', 'Condom', 'Pack 1', 350, 600, 0, 'DKT', '2028-06-30', 2],
  ['655', 'FIJK FLUSHING HERBAL', 'Detoxifier', 'Bottle', 650, 900, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['656', 'FIMIN SYRUP', 'Analgesics', 'Syrup Bottle', 970, 1500, 4, 'SANTUS', '2028-05-30', 2],
  ['1523', 'FINASIL (TERBINAFINE) CREAM', 'Cream', 'Tube', 760, 1200, 2, 'SANTUS', '2028-04-30', 1],
  ['0-1775729', 'FINASIL ANTIFUNGAL SPRAY', 'Antifungal', 'Spray', 3000, 4300, 1, 'SANTUS', '2028-05-30', 1],
  ['657', 'FIRE CONDOM', 'Condom', 'Pack 1', 580, 900, 0, 'GJ', '2028-06-30', 2],
  ['658', 'FLAGYL SUSPENSION', 'Antibiotics', 'Suspension', 600, 900, 0, 'System', '2027-11-30', 2],
  ['659', 'FLAGYL TABLET', 'Antibiotics', 'Sachet 1.0', 195, 300, 0, 'PHARMATON', '2027-12-30', 5],
  ['660', 'FLAT TUMMY TEA', 'Detoxifier', 'Pack 1', 188, 250, 0, 'System', '2028-01-30', 1],
  ['661', 'FLEMING 1G TABLET', 'Antibiotics', 'Pack 1', 7100, 10000, 0, 'ELIONA', '2028-01-30', 1],
  ['662', 'FLEMING 228.5MG SUSPENSION', 'Antibiotics', 'Suspension', 3100, 4600, 0, 'GJ', '2027-12-30', 1],
  ['663', 'FLEMING 457MG SUSPENSION', 'Antibiotics', 'Suspension', 4500, 6800, 2, 'GJ', '2028-05-30', 1],
  ['664', 'FLEMING 625MG PACK', 'Antibiotics', 'Pack 1', 5300, 7800, 2, 'GJ', '2028-06-30', 1],
  ['665', 'FLEX CONDOM', 'Condom', 'Pack 1', 600, 900, 7, 'SFH', '2028-08-30', 3],
  ['666', 'FLORANORM PROBIOTIC', 'Probiotic', 'Sachet 1.0', 980, 1400, 50, 'GJ', '2028-09-30', 10],
  ['668', 'FLOWEL-PLUS (TAMSULOSIN)', 'Prostate drug', 'Sachet 1.0', 2686, 3900, 6, 'SANTUS', '2028-06-30', 2],
  ['P0000028', 'FLU-COF CAPSULE', 'Antiallergy', 'Sachet 1.0', 220, 400, 27, 'ELIONA', '2028-07-30', 5],

  // PAGE 16 (47 items)
  ['680', 'FLU-J SYRUP', 'Antiallergy', 'Syrup Bottle', 670, 1200, 3, 'GJ', '2028-04-30', 2],
  ['681', 'FLU-J TABLET', 'Antiallergy', 'Sachet 1.0', 70, 200, 21, 'GJ', '2028-06-30', 5],
  ['670', 'FLUCAMED 150MG CAP', 'Antifungal', 'Capsule 1', 194, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['671', 'FLUCAMED SUSPENSION', 'Antifungal', 'Suspension', 580, 900, 4, 'SANTUS', '2028-04-30', 2],
  ['672', 'FLUCAMED 200MG', 'Antifungal', 'Pack 1', 1350, 1900, 0, 'GJ', '2027-12-30', 1],
  ['673', 'FLUCAMED FORTE', 'Antifungal', 'Pack 1', 1450, 2000, 2, 'SANTUS', '2028-04-30', 1],
  ['674', 'FLUCONAZOLE 150MG (70)', 'Antifungal', 'Tablet 1.0', 70, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['675', 'FLUCONAZOLE 150MG (100)', 'Antifungal', 'Tablet 1.0', 100, 200, 33, 'GJ', '2028-08-30', 10],
  ['5-1779366', 'FLUCONAZOLE 200MG', 'Antifungal', 'Pack 1', 440, 700, 0, 'SANTUS', '2027-12-30', 2],
  ['676', 'FLUCONAZOLE PACK', 'Antifungal', 'Pack 1', 1300, 2000, 7, 'SANTUS', '2028-06-30', 2],
  ['2-1754822', 'FLUCONAZOLE 50MG (83)', 'Antifungal', 'Tablet 1.0', 83, 200, 0, 'GJ', '2027-12-30', 5],
  ['2-1754821', 'FLUCONAZOLE 150MG (75)', 'Antifungal', 'Tablet 1.0', 75, 200, 25, 'GJ', '2028-07-30', 5],
  ['677', 'FLUCONAZOLE SUSPENSION', 'Antifungal', 'Suspension', 1000, 1500, 0, 'GJ', '2027-12-30', 1],
  ['679', 'FLUCORDAL SYRUP', 'Antiallergy', 'Syrup Bottle', 2200, 3200, 2, 'GJ', '2028-04-30', 1],
  ['2-1773654', 'FLUMOX 500MG PACK', 'Antibiotics', 'Pack 1', 6550, 9200, 2, 'GJ', '2028-06-30', 1],
  ['682', 'FLUMOX SUSPENSION', 'Antibiotics', 'Suspension', 5500, 8500, 0, 'System', '2027-12-30', 1],
  ['683', 'FOLIC ACID PACK (560)', 'Vitamin', 'Pack 1', 560, 850, 11, 'GJ', '2028-06-30', 3],
  ['684', 'FOLIC ACID SACHET (650)', 'Vitamin', 'Sachet 1.0', 650, 1000, 12, 'PHARMATON', '2028-06-30', 3],
  ['685', 'FOLIC ACID LOOSE TAB', 'Vitamin', 'Tablet 1.0', 2, 3.3, 3598, 'SANTUS', '2028-11-30', 100],
  ['686', 'FOLIMOP SYRUP', 'Vitamin', 'Syrup Bottle', 660, 950, 11, 'GJ', '2028-06-30', 3],
  ['687', 'FORPAIN TABLET', 'Analgesics', 'Sachet 1.0', 210, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['689', 'FRUSEMIDE 40MG TABLET', 'Antihypertensive', 'Sachet 1.0', 110, 200, 13, 'GJ', '2028-05-30', 5],
  ['690', 'FULL STRENGTH DEXTROSE', 'Infusion', '500ml Bottle', 570, 850, 2, 'PHARMATON', '2028-04-30', 2],
  ['691', 'FUNBACT-A TRIPLE CREAM', 'Cream', 'Tube', 690, 1000, 43, 'GREENLIFE', '2028-09-30', 10],
  ['692', 'FUNGUSOL CREAM', 'Antifungal', 'Tube', 935, 1300, 1, 'SANTUS', '2028-03-30', 2],
  ['693', 'FUNGUSOL LOTION', 'Antifungal', 'Lotion Bottle', 980, 1400, 3, 'SANTUS', '2028-04-30', 2],
  ['694', 'FUNGUSOL OINTMENT', 'Antifungal', 'Tube', 990, 1400, 2, 'SANTUS', '2028-04-30', 2],
  ['695', 'FUNGUSOL POWDER', 'Antifungal', 'Powder', 910, 1300, 2, 'PHARMATON', '2028-04-30', 2],
  ['3-1758969B', 'FYNDAD 500MG', 'Supplements', 'Sachet 1.0', 2050, 3000, 3, 'Uptown care', '2028-05-30', 1],
  ['696', 'FYNDAD TABLET', 'Supplements', 'Sachet 1.0', 1925, 3000, 6, 'GJ', '2028-06-30', 2],
  ['3-1758969', 'FYNMUM 500MG', 'Supplements', 'Sachet 1.0', 2050, 3200, 3, 'GJ', '2028-05-30', 1],
  ['697', 'FYNMUM SACHET', 'Supplements', 'Sachet 1.0', 2000, 3000, 2, 'GJ', '2028-05-30', 1],
  ['703', 'G-AMINO TONIC', 'Multivitamin', 'Syrup Bottle', 1800, 2600, 0, 'GREENLIFE', '2027-12-30', 1],
  ['712', 'G-CLAV 625MG', 'Antibiotics', 'Pack 1', 2400, 3500, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['713', 'G-CLAV SUSPENSION', 'Antibiotics', 'Suspension', 2150, 3200, 0, 'SANTUS', '2027-12-30', 1],
  ['714', 'G-DERM CREAM', 'Cream', 'Tube', 740, 1100, 13, 'GREENLIFE', '2028-07-30', 3],
  ['727', 'G-FLOX 400MG', 'Antibiotics', 'Pack 1', 1700, 2800, 7, 'GREENLIFE', '2028-06-30', 2],
  ['753', 'G-ORAL PLUS LOZENGES', 'Lozenges', 'Pack 1', 550, 800, 4, 'PHARMATON', '2028-05-30', 2],
  ['754', 'G-ORAL X3 SACHET', 'Lozenges', 'Sachet 1.0', 183, 300, 31, 'SANTUS', '2028-08-30', 5],
  ['698', 'GABAPENTIN 100MG', 'Analgesics', 'Sachet 1.0', 450, 1000, 0, 'PHARMATON', '2027-12-30', 2],
  ['699', 'GABAPENTIN 300MG', 'Analgesics', 'Sachet 1.0', 1080, 1600, 5, 'SANTUS', '2028-05-30', 2],
  ['700', 'GALCIPRO-500MG', 'Antibiotics', 'Pack 1', 1400, 2300, 4, 'SANTUS', '2028-05-30', 2],
  ['702', 'GALWAYS INHALER', 'Inhaler', 'MDI Inhaler', 900, 1300, 0, 'GJ', '2027-12-30', 1],
  ['705', 'GARYFLOX TABLET', 'Antibiotics', 'Sachet 1.0', 595, 1000, 0, 'GJ', '2027-12-30', 2],
  ['706', 'GASCOL SUSPENSION', 'Antacid', 'Suspension', 1700, 2500, 8, 'GJ', '2028-06-30', 2],
  ['707', 'GAUZE BANDAGE (BIG)', 'Consumables', 'Roll', 171, 250, 11, 'SANTUS', '2029-12-30', 3],
  ['708', 'GAUZE BANDAGE (SMALL)', 'Consumables', 'Roll', 125, 200, 1, 'GJ', '2029-12-30', 3],

  // PAGE 17 (47 items)
  ['709', 'GAVISCON LIQUID (BIG)', 'Antacid', 'Suspension', 10500, 14800, 1, 'SANTUS', '2028-05-30', 1],
  ['710', 'GAVISCON LIQUID (REG)', 'Antacid', 'Suspension', 8800, 12300, 1, 'SANTUS', '2028-05-30', 1],
  ['711', 'GBOMORO HERBAL SYRUP', 'Analgesics', 'Syrup Bottle', 2200, 3200, 4, 'GJ', '2028-06-30', 2],
  ['715', 'GECIP TABLET (CIPROFLOXACIN)', 'Antibiotics', 'Sachet 1.0', 723, 1200, 10, 'Shelflife', '2028-06-30', 3],
  ['716', 'GECROL SUSPENSION (BIG)', 'Anti-ulcer', 'Suspension', 790, 1200, 4, 'SANTUS', '2028-05-30', 2],
  ['717', 'GECROL SUSPENSION (SMALL)', 'Antacid', 'Suspension', 500, 750, 5, 'GJ', '2028-05-30', 2],
  ['718', 'GENTALAB EYE DROPS', 'Eye drops', 'Drops Bottle', 318, 500, 14, 'SANTUS', '2028-07-30', 3],
  ['719', 'GENTALEK INJECTION', 'Injectables', 'Ampoule 1', 900, 1300, 3, 'GJ', '2028-04-30', 2],
  ['720', 'GENTAMICIN AMP INJ', 'Injectables', 'Ampoule 1', 51, 100, 118, 'GREENLIFE', '2028-09-30', 20],
  ['721', 'GENTAMICIN OINTMENT', 'Ointment', 'Tube', 530, 800, 6, 'SANTUS', '2028-06-30', 2],
  ['722', 'GESTID SUSPENSION (BIG)', 'Anti-ulcer', 'Suspension', 2000, 2900, 9, 'SANTUS', '2028-07-30', 2],
  ['723', 'GESTID SUSPENSION (SMALL)', 'Anti-ulcer', 'Suspension', 1120, 1600, 3, 'GJ', '2028-04-30', 2],
  ['724', 'GESTID TABLET SACHET', 'Anti-ulcer', 'Sachet 1.0', 200, 300, 1, 'PHARMATON', '2028-02-28', 5],
  ['P0000016', 'GETRYL (GLIMEPIRIDE)', 'Antidiabetics', 'Sachet 1.0', 1250, 1900, 6, 'GJ', '2028-06-30', 2],
  ['725', 'GETZOME (OMEPRAZOLE 20MG)', 'Anti-ulcer', 'Sachet 1.0', 550, 800, 19, 'GJ', '2028-08-30', 5],
  ['726', 'GETZOME SACHET (475)', 'Anti-ulcer', 'Sachet 1.0', 475, 700, 0, 'GJ', '2027-12-30', 3],
  ['728', 'GG COLD CAPSULE', 'Antiallergy', 'Sachet 1.0', 170, 300, 62, 'GJ', '2028-09-30', 10],
  ['729', 'GINOFORCE CAPSULE', 'Supplements', 'Sachet 1.0', 200, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['730', 'GINOVERA MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 410, 600, 6, 'SANTUS', '2028-05-30', 2],
  ['731', 'GINSOMIN CAPSULE (PACK)', 'Supplements', 'Sachet 1.0', 2550, 3500, 5, 'GJ', '2028-06-30', 2],
  ['732', 'GINSOMIN SACHET', 'Supplements', 'Sachet 1.0', 2000, 3000, 0, 'GJ', '2027-12-30', 2],
  ['733', 'GIVING SET (INFUSION SET)', 'Consumables', 'Single Unit', 155, 250, 46, 'SANTUS', '2029-12-30', 10],
  ['734', 'GIXIM TABLET (CEFIXIME)', 'Antibiotics', 'Pack 1', 2050, 3000, 0, 'GREENLIFE', '2027-12-30', 2],
  ['735', 'GJL ARTEETHER INJ', 'Injectables', 'Ampoule 1', 750, 1500, 3, 'GJ', '2028-04-30', 2],
  ['736', 'GKD BALM', 'Balm', 'Jar', 380, 600, 0, 'GJ', '2028-01-30', 2],
  ['737', 'GLANIL 5MG (GLIBENCLAMIDE)', 'Antidiabetics', 'Sachet 1.0', 338, 500, 26, 'GJ', '2028-07-30', 5],
  ['P0000017', 'GLEPID (GLIMEPIRIDE)', 'Antidiabetics', 'Sachet 1.0', 570, 900, 6, 'GJ', '2028-05-30', 2],
  ['738', 'GLOCOD 300MG', 'Supplements', 'Sachet 1.0', 350, 500, 0, 'GJ', '2027-12-30', 2],
  ['739', 'GLOCOD COD LIVER OIL', 'Supplements', 'Sachet 1.0', 600, 900, 0, 'System', '2027-12-30', 2],
  ['740', 'GLODERM CREAM', 'Cream', 'Tube', 230, 350, 0, 'GJ', '2027-12-30', 2],
  ['9-1780484', 'GLUCOCARE TABLET', 'Antidiabetics', 'Sachet 1.0', 1750, 2800, 1, 'GJ', '2028-04-30', 1],
  ['9-1763643', 'GLUCOMETER KIT', 'Machine', 'Clinical Unit', 18500, 25000, 0, 'SANTUS', '2030-12-30', 1],
  ['8-1767961B', 'GLUCOPHAGE XR 1000MG', 'Antidiabetics', 'Sachet 1.0', 4310, 6050, 1, 'GJ', '2028-05-30', 1],
  ['741', 'GLUCOPHAGE 500MG', 'Antidiabetics', 'Sachet 1.0', 1950, 2800, 10, 'SANTUS', '2028-07-30', 3],
  ['742', 'GLUCOSE D (260)', 'Supplements', 'Sachet 1.0', 260, 400, 19, 'GJ', '2028-06-30', 5],
  ['743', 'GLUCOSE D (100)', 'Supplements', 'Sachet 1.0', 100, 150, 38, 'GJ', '2028-08-30', 10],
  ['744', 'GLUCOSE TEST STRIP', 'Test', 'Single Strip', 152, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['745', 'GLUCOSE-D (BIG TIN)', 'Supplements', 'Tin', 1950, 2650, 0, 'SANTUS', '2028-03-30', 1],
  ['746', 'GLUCOSE-D (MED TIN)', 'Supplements', 'Tin', 1270, 1800, 1, 'SANTUS', '2028-04-30', 1],
  ['747', 'GLUFORMIN 500MG (METFORMIN)', 'Antidiabetics', 'Sachet 1.0', 150, 250, 13, 'GJ', '2028-06-30', 5],
  ['748', 'GLUTA BERRY', 'Supplements', 'Bottle', 820, 1200, 0, 'SANTUS', '2027-12-30', 1],
  ['749', 'GLYCERINE BORAX', 'Antiseptic', 'Bottle', 400, 600, 10, 'GJ', '2028-06-30', 2],
  ['6-1767379', 'GLYFORMIN TABLET', 'Antidiabetics', 'Sachet 1.0', 250, 400, 5, 'SANTUS', '2028-05-30', 2],
  ['750', 'GOKO CLEANSER HERBAL', 'Detoxifier', 'Bottle', 525, 750, 2, 'SFH', '2028-03-30', 2],
  ['751', 'GOLD CIRCLE CONDOM (363)', 'Consumables', 'Pack 1', 363, 600, 3, 'GJ', '2028-09-30', 5],
  ['752', 'GOLD CIRCLE CONDOM (445)', 'Consumables', 'Pack 1', 445, 700, 0, 'System', '2028-06-30', 5],
  ['3-1778500', 'GOMAXINE ANTIMALARIAL', 'Antimalaria', 'Pack 1', 280, 500, 0, 'GJ', '2027-12-30', 2],

  // PAGE 18 (47 items)
  ['755', 'GOYA OLIVE OIL (BIG)', 'Supplements', 'Bottle', 2250, 3000, 0, 'System', '2028-06-30', 1],
  ['6-1766260', 'GOYA OLIVE OIL (SMALL)', 'Supplements', 'Bottle', 960, 1400, 11, 'GJ', '2028-08-30', 3],
  ['757', 'GREENLIN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 750, 1200, 0, 'SANTUS', '2027-12-30', 2],
  ['758', 'GRIPE WATER (WOODWARDS)', 'Anti colic', 'Syrup Bottle', 1805, 2600, 3, 'CHRIS', '2028-05-30', 2],
  ['759', 'GRIPE WATER (LOCAL)', 'Anti colic', 'Syrup Bottle', 500, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['760', 'GRIPE WATER (1230)', 'Anti colic', 'Syrup Bottle', 1230, 1750, 5, 'GJ', '2028-06-30', 2],
  ['761', 'GRISEOFULVIN 500MG (85)', 'Antifungal', 'Tablet 1.0', 85, 130, 10, 'PHARMATON', '2028-05-30', 5],
  ['762', 'GRISEOFULVIN 500MG (95)', 'Antifungal', 'Tablet 1.0', 95, 140, 20, 'GJ', '2028-06-30', 5],
  ['764', 'GUSTEEZE TABLET', 'Antacid', 'Sachet 1.0', 650, 900, 0, 'Seagreen', '2027-12-30', 2],
  ['1156', 'GVITHER-P ANTIMALARIAL', 'Antimalaria', 'Pack 1', 1200, 2000, 1, 'SANTUS', '2028-04-30', 2],
  ['765', 'GYNAECOSID TABLET', 'Contraceptive', 'Sachet 1.0', 650, 1200, 0, 'GJ', '2027-12-30', 1],
  ['766', 'GYNO-TIOCONAZOLE PACK', 'Antifungal', 'Pack 1', 2950, 4200, 0, 'GJ', '2027-12-30', 1],
  ['0-1760097', 'GYNOTAB VAGINAL TAB', 'Antifungal', 'Pack 1', 650, 1200, 0, 'GJ', '2027-12-30', 2],
  ['767', 'H/P COLLAGEN CAPSULE', 'Supplements', 'Capsule 1', 83, 200, 309, 'GJ', '2028-09-30', 30],
  ['768', 'H/P EVENING PRIMROSE BOTTLE', 'Supplements', 'Bottle', 8250, 12000, 2, 'GJ', '2028-07-30', 1],
  ['769', 'H/P EVENING PRIMROSE SACHET', 'Supplements', 'Sachet 1.0', 1450, 2200, 6, 'GJ', '2028-07-30', 2],
  ['770', 'H/P EYE AND VISION', 'Supplements', 'Sachet 1.0', 1000, 1500, 3, 'GJ', '2028-05-30', 1],
  ['4-1778496', 'H/P GINKGO BILOBA', 'Supplements', 'Sachet 1.0', 700, 1200, 7, 'GJ', '2028-06-30', 2],
  ['P0000007', 'H/P MYO-INOSITOL', 'Supplements', 'Bottle', 10500, 16500, 2, 'GJ', '2028-06-30', 1],
  ['771', 'H/P OMEGA-3 BOTTLE', 'Supplements', 'Bottle', 6300, 10000, 1, 'GJ', '2028-06-30', 1],
  ['772', 'H/P OMEGA-3 SACHET', 'Supplements', 'Sachet 1.0', 850, 1300, 0, 'PHARMATON', '2027-12-30', 2],
  ['773', 'H/P PROBIOTIC CAPSULE', 'Supplements', 'Capsule 1', 107, 200, 114, 'GJ', '2028-08-30', 20],
  ['774', 'H/P VC-1000 SACHET', 'Vitamin', 'Sachet 1.0', 700, 1000, 0, 'GJ', '2027-12-30', 2],
  ['775', 'H/P VC-1000 BOTTLE', 'Vitamin', 'Bottle', 6000, 8800, 2, 'GJ', '2028-06-30', 1],
  ['1599', 'H/P VITAMIN E CAPSULE', 'Supplements', 'Capsule 1', 65, 100, 202, 'GJ', '2028-09-30', 20],
  ['776', 'H/P VITAMIN C TABLET', 'Vitamin', 'Tablet 1.0', 65, 100, 18, 'GJ', '2028-05-30', 5],
  ['777', 'H/P VITAMIN D3 BOTTLE', 'Supplements', 'Bottle', 6000, 9000, 2, 'GJ', '2028-06-30', 1],
  ['778', 'H/P VITAMIN D3 SACHET', 'Supplements', 'Sachet 1.0', 800, 1300, 6, 'CHRIS', '2028-06-30', 2],
  ['780', 'HALF STRENGTH DARROW', 'Infusion', '500ml Bottle', 570, 850, 2, 'SANTUS', '2028-05-30', 2],
  ['781', 'HAVAX FORTE ANTIMALARIAL', 'Antimalaria', 'Pack 1', 770, 1300, 18, 'System', '2028-08-30', 5],
  ['784', 'HAVAX X24', 'Antimalaria', 'Pack 1', 350, 500, 0, 'GJ', '2027-12-30', 2],
  ['785', 'HB 12 FORTE SYRUP', 'Multivitamin', 'Syrup Bottle', 4750, 6500, 0, 'CHRIS', '2027-12-30', 1],
  ['787', 'HB 12 NIGHT', 'Multivitamin', 'Syrup Bottle', 5000, 7000, 1, 'GJ', '2028-04-30', 1],
  ['788', 'HB 12 PLUS SACHET', 'Supplements', 'Sachet 1.0', 850, 1300, 0, 'GJ', '2027-12-30', 2],
  ['789', 'HB 12 PLUS SYRUP', 'Multivitamin', 'Syrup Bottle', 3500, 4900, 1, 'BLESSED NOEDYKE', '2028-04-30', 1],
  ['786', 'HB-12 KIDS SYRUP', 'Multivitamin', 'Syrup Bottle', 3000, 4300, 0, 'SANTUS', '2027-12-30', 1],
  ['790', 'HB12 TONIC', 'Multivitamin', 'Syrup Bottle', 2350, 3400, 0, 'Theo Rep', '2027-12-30', 1],
  ['791', 'HB12 ULTRA SYRUP', 'Multivitamin', 'Syrup Bottle', 3200, 4800, 1, 'SANTUS', '2028-04-30', 1],
  ['8-1767958', 'HEALTHY KIDZ SYRUP', 'Supplements', 'Syrup Bottle', 3750, 5500, 0, 'PHARMATON', '2027-12-30', 1],
  ['793', 'HEMOFORTE SYRUP (1950)', 'Multivitamin', 'Syrup Bottle', 1950, 2800, 0, 'SHALINA', '2027-12-30', 1],
  ['795', 'HEMOFORTE CAPSULE', 'Multivitamin', 'Sachet 1.0', 700, 1000, 4, 'SHALINA', '2028-05-30', 2],
  ['794', 'HEMOFORTE SYRUP (1850)', 'Multivitamin', 'Syrup Bottle', 1850, 2700, 0, 'System', '2027-12-30', 1],
  ['8-1777888', 'HERBAL BALM', 'Balm', 'Jar', 400, 600, 1, 'System', '2028-04-30', 2],
  ['798', 'HERBAL PAINKILLER', 'Analgesics', 'Sachet 1.0', 135, 200, 0, 'System', '2027-12-30', 3],
  ['799', 'HERBASIP TEA', 'Detoxifier', 'Pack 1', 100, 150, 0, 'System', '2027-12-30', 2],
  ['800', 'HERITAGE BITTERS', 'Detoxifier', 'Bottle', 8000, 8000, 9, 'HERITAGE', '2028-08-30', 2],
  ['801', 'HEXEDENE MOUTHWASH', 'Antiseptic', 'Bottle', 1900, 2800, 5, 'CHRIS', '2028-06-30', 2],

  // PAGE 19 (47 items)
  ['2-1780489', 'HIV-HCV-HBSAG RAPID TEST', 'Test', 'Test Kit', 3350, 4800, 1, 'GJ', '2028-04-30', 1],
  ['803', 'HONYCOV COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 1650, 2500, 7, 'HEALTHY CHILD', '2028-06-30', 2],
  ['804', 'HOT WATER BOTTLE', 'Consumables', 'Clinical Unit', 2200, 3200, 2, 'GJ', '2030-12-30', 1],
  ['805', 'HS-12 SYRUP', 'Supplements', 'Syrup Bottle', 5950, 8400, 1, 'PHARMATON', '2028-04-30', 1],
  ['807', 'HYDRAC-P TABLET', 'Analgesics', 'Sachet 1.0', 342, 500, 27, 'Shelflife', '2028-08-30', 5],
  ['808', 'HYDREX TABLET (HCTZ)', 'Antihypertensive', 'Sachet 1.0', 120, 200, 27, 'GJ', '2028-08-30', 5],
  ['809', 'HYDROCORTISONE CREAM', 'Cream', 'Tube', 1020, 1450, 8, 'GJ', '2028-06-30', 2],
  ['810', 'HYDROCORTISONE VIAL INJ', 'Injectables', 'Vial 1', 400, 600, 0, 'SANTUS', '2027-12-30', 2],
  ['811', 'HYDROGEN PEROXIDE', 'Antiseptic', 'Bottle', 390, 700, 19, 'SANTUS', '2028-09-30', 5],
  ['5-1776452', 'HYOSCINE TABLET (BUSCOPAN)', 'GIT', 'Sachet 1.0', 300, 500, 1, 'GJ', '2028-03-30', 2],
  ['813', 'HYOSCINE AMP INJ', 'Injectables', 'Ampoule 1', 88, 150, 10, 'SANTUS', '2028-05-30', 3],
  ['7-1760818', 'I-ZINE EYE DROPS', 'Eye drops', 'Drops Bottle', 2300, 3250, 2, 'GJ', '2028-04-30', 1],
  ['814', 'IBEX CAPSULE', 'Analgesics', 'Sachet 1.0', 550, 900, 0, 'SANTUS', '2027-12-30', 2],
  ['815', 'IBUCAP COLD SYRUP', 'Cough Syrup', 'Syrup Bottle', 778, 1200, 5, 'CP COOP', '2028-05-30', 2],
  ['816', 'IBUCAP COLD SACHET', 'Antiallergy', 'Sachet 1.0', 250, 400, 6, 'SHALINA', '2028-05-30', 2],
  ['817', 'IBUCAP FORTE CAPSULE', 'Analgesics', 'Sachet 1.0', 470, 700, 9, 'GJ', '2028-06-30', 3],
  ['818', 'IBUCAP REGULAR CAPSULE', 'Analgesics', 'Sachet 1.0', 350, 500, 69, 'PHARMATON', '2028-09-30', 15],
  ['819', 'IBUDOL CAPSULE', 'Analgesics', 'Sachet 1.0', 200, 300, 0, 'ELBE', '2027-12-30', 3],
  ['820', 'IBUGA H3 CAPSULE', 'Supplements', 'Sachet 1.0', 250, 400, 0, 'System', '2027-12-30', 2],
  ['7-1764702', 'IBULOCK PLUS', 'Analgesics', 'Sachet 1.0', 375, 600, 0, 'SHALINA', '2027-12-30', 2],
  ['821', 'IBUMED SYRUP', 'Analgesics', 'Syrup Bottle', 450, 650, 0, 'STERLING', '2027-12-30', 2],
  ['822', 'IBUPAIN SYRUP', 'Analgesics', 'Syrup Bottle', 521, 800, 1, 'GJ', '2028-03-30', 2],
  ['823', 'IBUPROFEN SACHET (135)', 'Analgesics', 'Sachet 1.0', 135, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['824', 'IBUPROFEN PACK (180)', 'Analgesics', 'Pack 1', 180, 300, 0, 'SANTUS', '2027-12-30', 5],
  ['825', 'IBUTEN 200MG PACK', 'Analgesics', 'Pack 1', 130, 200, 3, 'GJ', '2028-04-30', 3],
  ['826', 'IBUTEN 400MG PACK', 'Analgesics', 'Pack 1', 150, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['827', 'IICARE CAPSULE', 'Supplements', 'Pack 1', 3340, 4650, 0, 'SANTUS', '2027-12-30', 1],
  ['828', 'IMMUNACE TABLET', 'Supplements', 'Pack 1', 5400, 7400, 0, 'GJ', '2027-12-30', 1],
  ['829', 'IMMUNAL SYRUP', 'Supplements', 'Syrup Bottle', 1200, 1700, 0, 'GJ', '2027-12-30', 1],
  ['830', 'IMMUNBOOST SYRUP', 'Vitamin', 'Syrup Bottle', 3400, 4800, 0, 'GJ', '2027-12-30', 1],
  ['831', 'IMMUNBOOST BOTTLE (12800)', 'Supplements', 'Bottle', 12800, 19700, 2, 'System', '2028-06-30', 1],
  ['9-1769279', 'IMMUNBOOST ULTRA (18000)', 'Supplements', 'Bottle', 18000, 25500, 0, 'CHRIS', '2028-03-30', 1],
  ['832', 'IMMUNBOOST SACHET (4100)', 'Supplements', 'Pack 1', 4100, 5800, 1, 'GJ', '2028-04-30', 1],
  ['834', 'IMMUNBOOST EFFERVESCENT', 'Vitamin', 'Tube', 7200, 10500, 2, 'SANTUS', '2028-06-30', 1],
  ['833', 'IMMUNBST PACK (6800)', 'Supplements', 'Pack 1', 6800, 9500, 0, 'System', '2027-12-30', 1],
  ['2-1770891', 'IMMUNE SUPPORT SACHET', 'Supplements', 'Sachet 1.0', 495, 1000, 9, 'System', '2028-06-30', 2],
  ['835', 'IMODIUM CAPSULE', 'GIT', 'Pack 1', 2750, 4900, 0, 'System', '2027-12-30', 1],
  ['3-1758219', 'INBU 200MG PACK', 'Analgesics', 'Pack 1', 130, 200, 3, 'GJ', '2028-04-30', 3],
  ['9-1783593', 'INBU 400MG PACK', 'Analgesics', 'Pack 1', 175, 300, 21, 'PHARMATON', '2028-08-30', 5],
  ['837', 'INDICONTRIN TABLET', 'Analgesics', 'Pack 1', 2100, 2900, 0, 'PHARMATON', '2027-12-30', 1],
  ['838', 'INDOMETHACIN CAPSULE', 'Analgesics', 'Sachet 1.0', 120, 200, 42, 'SANTUS', '2028-08-30', 10],
  ['840', 'IRON DEXTRAN INJECTION', 'Injectables', 'Ampoule 1', 330, 500, 9, 'SANTUS', '2028-05-30', 2],
  ['841', 'IRU ANTISEPTIC', 'Consumables', 'Bottle', 2210, 3500, 15, 'MULTISTREAM', '2028-09-30', 3],
  ['842', 'ITACARE (ITRACONAZOLE)', 'Antifungal', 'Sachet 1.0', 2434, 3500, 0, 'SANTUS', '2027-12-30', 1],
  ['9-1761072', 'IVYBETANEO EYE DROPS', 'Drops', 'Drops Bottle', 1150, 1650, 1, 'GJ', '2028-03-30', 1],
  ['843', 'IVYCROM EYE DROPS', 'Eye drops', 'Drops Bottle', 2380, 3400, 2, 'SANTUS', '2028-04-30', 1],
  ['844', 'IVYFLUR EYE DROPS', 'Eye drops', 'Drops Bottle', 2500, 3500, 0, 'SANTUS', '2027-12-30', 1],

  // PAGE 20 (47 items)
  ['845', 'IVYMOICEL EYE DROPS', 'Eye drops', 'Drops Bottle', 2420, 3400, 0, 'SANTUS', '2027-12-30', 1],
  ['846', 'IVYSINE EYE DROPS', 'Eye drops', 'Drops Bottle', 1850, 2600, 0, 'SANTUS', '2027-12-30', 1],
  ['847', 'IVYTIMOL EYE DROPS', 'Eye drops', 'Drops Bottle', 2400, 3350, 1, 'CHRIS', '2028-03-30', 1],
  ['848', 'IVYXOLOL EYE DROPS', 'Eye drops', 'Drops Bottle', 2670, 3800, 2, 'SANTUS', '2028-04-30', 1],
  ['849', 'J-10 ANTISEPTIC LIQUID', 'Antiseptic', 'Bottle', 1250, 2000, 0, 'System', '2028-01-30', 1],
  ['850', 'JAWACLOX SACHET', 'Antibiotics', 'Sachet 1.0', 950, 1600, 2, 'ELIONA', '2028-03-30', 2],
  ['851', 'JAWACLOX PACK', 'Antibiotics', 'Pack 1', 1500, 2200, 2, 'GJ', '2028-04-30', 2],
  ['P0000026', 'JAWAGYL SUSPENSION', 'Antibiotics', 'Suspension', 548, 800, 3, 'Shelflife', '2028-04-30', 2],
  ['853', 'JAWAMOX SUSPENSION', 'Antibiotics', 'Suspension', 1400, 2000, 3, 'BLESSED NOEDYKE', '2028-05-30', 2],
  ['854', 'JAWARON CAPSULE', 'Multivitamin', 'Sachet 1.0', 560, 900, 14, 'GJ', '2028-07-30', 3],
  ['856', 'JAWARON TONIC (BIG)', 'Multivitamin', 'Syrup Bottle', 3400, 4800, 0, 'GJ', '2027-12-30', 1],
  ['855', 'JAWARON TONIC (SMALL)', 'Vitamin', 'Syrup Bottle', 1150, 1700, 3, 'SANTUS', '2028-04-30', 2],
  ['858', 'JAWASIL SUSPENSION', 'Anti-ulcer', 'Suspension', 1320, 1900, 1, 'GJ', '2028-03-30', 1],
  ['0-1758195', 'JAWAVITE SYRUP', 'Vitamin', 'Syrup Bottle', 600, 900, 0, 'CHRIS', '2027-12-30', 2],
  ['859', 'JEONOL TABLET', 'Antiallergy', 'Sachet 1.0', 145, 250, 31, 'GJ', '2028-08-30', 5],
  ['861', 'JIGSIMUR HERBAL DRINK', 'Detoxifier', 'Bottle', 17500, 20000, 0, 'JIGSIMUR', '2028-01-30', 1],
  ['862', 'JINJA HERBAL EXTRACTS (BIG)', 'Detoxifier', 'Bottle', 12920, 16500, 7, 'MULTISTREAM', '2028-08-30', 2],
  ['863', 'JINJA HERBAL EXTRACTS (SMALL)', 'Detoxifier', 'Bottle', 6400, 8500, 6, 'MULTISTREAM', '2028-08-30', 2],
  ['864', 'JOBELYN CAPSULE SACHET', 'Supplements', 'Sachet 1.0', 1450, 2100, 7, 'SANTUS', '2028-06-30', 2],
  ['1-1768676', 'JOBELYN FORTE', 'Supplements', 'Pack 1', 3000, 4500, 2, 'SANTUS', '2028-05-30', 1],
  ['865', 'JOINT & BONE CARE', 'Supplements', 'Pack 1', 1900, 2700, 0, 'GJ', '2027-12-30', 1],
  ['866', 'JOINT RENEW CAPSULE', 'Supplements', 'Pack 1', 1950, 2800, 0, 'ELIONA', '2027-12-30', 1],
  ['1-1763633', 'JOINTACE FORTE', 'Supplements', 'Sachet 1.0', 4000, 5600, 0, 'GJ', '2027-12-30', 1],
  ['1575', 'JOLTAN-PLUS TABLET', 'Antihypertensive', 'Tablets', 2997, 4200, 0, 'SANTUS', '2027-12-30', 1],
  ['867', 'JUCOPAN TABLET', 'Antispasmodic', 'Sachet 1.0', 130, 300, 24, 'SANTUS', '2028-07-30', 5],
  ['1223', 'JUHEL ORS SACHET', 'Electrolyte', 'Sachet 1.0', 169, 300, 2, 'SANTUS', '2028-04-30', 5],
  ['899', 'K-Y LUBRICATING GEL', 'Consumables', 'Tube', 1500, 2300, 0, 'PHARMATON', '2028-01-30', 1],
  ['868', 'KACHAM TABLET', 'Analgesics', 'Sachet 1.0', 430, 650, 7, 'GJ', '2028-05-30', 2],
  ['869', 'KALTHER FORTE', 'Antimalaria', 'Pack 1', 650, 1000, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['870', 'KALTHER SUSPENSION', 'Antimalaria', 'Suspension', 500, 1000, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['871', 'KARAOLE ANALGESIC', 'Analgesics', 'Sachet 1.0', 140, 200, 27, 'SANTUS', '2028-08-30', 5],
  ['872', 'KEEP-ON TONIC', 'Multivitamin', 'Syrup Bottle', 4100, 5800, 2, 'SANTUS', '2028-05-30', 1],
  ['873', 'KENOP 625MG', 'Antibiotics', 'Pack 1', 1100, 1800, 0, 'System', '2027-12-30', 1],
  ['874', 'KETAZOL TABLET', 'Antifungal', 'Sachet 1.0', 620, 900, 0, 'System', '2027-12-30', 2],
  ['1-1756548', 'KETHA TABLET', 'Antihypertensive', 'Sachet 1.0', 750, 1200, 45, 'ELIONA', '2028-09-30', 10],
  ['875', 'KETINEAL CREAM', 'Cream', 'Tube', 680, 1000, 7, 'GJ', '2028-06-30', 2],
  ['876', 'KETOCONAZOLE CREAM (690)', 'Cream', 'Tube', 690, 1000, 0, 'PHARMATON', '2027-12-30', 2],
  ['877', 'KETOCONAZOLE TAB (375)', 'Antifungal', 'Sachet 1.0', 375, 800, 9, 'SANTUS', '2028-06-30', 3],
  ['878', 'KETOCONAZOLE TAB (880)', 'Antifungal', 'Pack 1', 880, 1300, 0, 'System', '2027-12-30', 2],
  ['880', 'KETOCONAZOLE TAB (850)', 'Antifungal', 'Pack 1', 850, 1500, 8, 'CHRIS', '2028-06-30', 2],
  ['881', 'KETOCONAZOLE SACHET (475)', 'Antifungal', 'Sachet 1.0', 475, 800, 10, 'SANTUS', '2028-06-30', 3],
  ['2-1772107', 'KETOCONAZOLE SACHET (400)', 'Antifungal', 'Sachet 1.0', 400, 800, 6, 'GJ', '2028-05-30', 3],
  ['1-1764268', 'KETOCOXEN TABLET', 'Antifungal', 'Pack 1', 2500, 3500, 0, 'GJ', '2027-12-30', 1],
  ['882', 'KETOFUNG PACK', 'Antifungal', 'Pack 1', 1100, 1700, 11, 'GJ', '2028-07-30', 3],
  ['883', 'KETOFUNG SACHET', 'Antifungal', 'Sachet 1.0', 850, 1300, 0, 'GJ', '2027-12-30', 2],
  ['884', 'KETOVAIL CREAM', 'Antifungal', 'Tube', 1250, 1800, 0, 'SANTUS', '2027-12-30', 1],
  ['5-1775325', 'KIDDYMIN SYRUP', 'Multivitamin', 'Syrup Bottle', 5800, 9500, 2, 'Uptown care', '2028-06-30', 1],

  // PAGE 21 (47 items)
  ['0-1773311', 'KIDS GUMMY MULTIVITAMIN', 'Supplements', 'Bottle', 5000, 9000, 1, 'ELIONA', '2028-05-30', 1],
  ['3-1756031', 'KINBREX CAPSULE', 'Analgesics', 'Pack 1', 1400, 2100, 3, 'GJ', '2028-05-30', 2],
  ['885', 'KING CAPSULE', 'Multivitamin', 'Sachet 1.0', 310, 500, 0, 'GJ', '2027-12-30', 2],
  ['886', 'KING TONIC', 'Multivitamin', 'Syrup Bottle', 850, 1200, 0, 'GJ', '2027-12-30', 2],
  ['9-1781898', 'KIPTRACK SUPPLEMENT', 'Supplements', 'Pack 1', 10000, 14000, 3, 'CHRIS', '2028-06-30', 1],
  ['887', 'KISS CONDOM', 'Consumables', 'Pack 1', 300, 500, 58, 'Idumota', '2028-10-30', 10],
  ['3-1774641', 'KLARACT CREAM', 'Cream', 'Tube', 1800, 2800, 0, 'OSWORTH', '2027-12-30', 1],
  ['7-1760096', 'KLEVOX 1G TABLET', 'Antibiotics', 'Pack 1', 3400, 5000, 0, 'GJ', '2027-12-30', 1],
  ['9-1760096', 'KLEVOX 625MG TABLET', 'Antibiotics', 'Pack 1', 2800, 4000, 0, 'GJ', '2027-12-30', 1],
  ['888', 'KLINFAST FORTE', 'Antifungal', 'Pack 1', 2700, 4400, 3, 'PHARMATON', '2028-05-30', 1],
  ['889', 'KLINFAST SUPPOSITORY', 'Antifungal', 'Pack 1', 2100, 3200, 3, 'SANTUS', '2028-05-30', 1],
  ['890', 'KLOVINAL VAGINAL TAB', 'Antifungal', 'Pack 1', 4000, 6200, 8, 'SANTUS', '2028-07-30', 2],
  ['891', 'KOACT 625MG', 'Antibiotics', 'Pack 1', 2700, 4000, 0, 'ELIONA', '2027-12-30', 1],
  ['892', 'KOLD TIME INHALER', 'Inhaler', 'MDI Inhaler', 909, 1300, 8, 'SANTUS', '2028-06-30', 2],
  ['893', 'KOLD TIME TABLET', 'Antiallergy', 'Sachet 1.0', 170, 350, 0, 'ELIONA', '2027-12-30', 3],
  ['894', 'KOMIX SACHET', 'Cough Syrup', 'Sachet 1.0', 140, 200, 8, 'System', '2028-05-30', 5],
  ['895', 'KOTASE TABLET', 'Anti inflammatory', 'Sachet 1.0', 850, 1300, 4, 'GJ', '2028-05-30', 2],
  ['896', 'KOYONOL TABLET', 'Antiallergy', 'Sachet 1.0', 85, 200, 32, 'SANTUS', '2028-08-30', 5],
  ['2-1780486B', 'KRISACID TABLET', 'Antacid', 'Sachet 1.0', 80, 200, 16, 'GJ', '2028-06-30', 5],
  ['9-1780430', 'KRISHAT ANTIMALARIAL', 'Antimalaria', 'Pack 1', 400, 1000, 0, 'GJ', '2027-12-30', 2],
  ['897', 'KRISHAT COUGH / COLD', 'Supplements', 'Sachet 1.0', 475, 800, 2, 'GJ', '2028-04-30', 2],
  ['3-1780400', 'KRISHAT MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 325, 700, 9, 'GJ', '2028-06-30', 3],
  ['94', 'KRISHAT SUSPENSION', 'Antimalaria', 'Suspension', 1200, 1800, 12, 'GJ', '2028-07-30', 3],
  ['898', 'KRUSHER TABLET', 'Analgesics', 'Sachet 1.0', 440, 700, 4, 'GJ', '2028-05-30', 2],
  ['915', 'L-GLUTATHIONE CAPSULE', 'Supplements', 'Bottle', 5000, 9500, 1, 'Idumota', '2028-05-30', 1],
  ['8-1780579', 'LA VITAMINE CAPSULE', 'Supplements', 'Sachet 1.0', 710, 1100, 20, 'SANTUS', '2028-08-30', 5],
  ['901', 'LABETALOL 100MG', 'Antihypertensive', 'Sachet 1.0', 3400, 5000, 3, 'PHARMATON', '2028-05-30', 1],
  ['902', 'LABIC RELIEF TABLET', 'Analgesics', 'Sachet 1.0', 520, 800, 5, 'CHRIS', '2028-05-30', 2],
  ['903', 'LABOCOF TABLET', 'Cough Syrup', 'Sachet 1.0', 140, 300, 2, 'PHARMATON', '2028-03-30', 2],
  ['904', 'LACLOX CAPSULE', 'Antibiotics', 'Sachet 1.0', 600, 1200, 2, 'GJ', '2028-04-30', 2],
  ['6-1768474', "LADY'S OWN TONIC", 'Multivitamin', 'Syrup Bottle', 870, 1300, 3, 'GJ', '2028-05-30', 2],
  ['68', 'LAMPICIN CAPSULE', 'Antibiotics', 'Sachet 1.0', 374, 900, 0, 'Shelflife', '2027-12-30', 2],
  ['0-1755949', 'LANCETS (BLOOD LANCET)', 'Consumables', 'Single Unit', 15, 25, 67, 'CHRIS', '2029-12-30', 20],
  ['906', 'LARIS FORTE', 'Antimalaria', 'Pack 1', 760, 1300, 1, 'ORANGE DRUGS', '2028-03-30', 2],
  ['907', 'LARITIN TABLET', 'Antiallergy', 'Sachet 1.0', 275, 500, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['515', 'LATANOPROST EYE DROPS', 'Eye drops', 'Drops Bottle', 5300, 7600, 0, 'GJ', '2027-12-30', 1],
  ['908', 'LATEX GLOVES PAIR', 'Consumables', 'Pair', 45, 100, 92, 'SANTUS', '2029-12-30', 20],
  ['909', 'LAXOMAG SUSPENSION', 'Antacid', 'Suspension', 2000, 3000, 1, 'GJ', '2028-04-30', 1],
  ['910', 'LEVOFEM CONTRACEPTIVE', 'Contraceptive', 'Pack 1', 515, 800, 14, 'SANTUS', '2028-07-30', 3],
  ['P0000006', 'LEVOFLOXACIN 500MG (1320)', 'Antibiotics', 'Pack 1', 1320, 2000, 0, 'GJ', '2027-12-30', 2],
  ['911', 'LEVOFLOXACIN INFUSION', 'Infusion', '100ml Bottle', 1000, 1500, 5, 'SANTUS', '2028-06-30', 2],
  ['912', 'LEVOFLOXACIN 500MG (650)', 'Antibiotics', 'Sachet 1.0', 650, 1300, 16, 'SANTUS', '2028-07-30', 3],
  ['913', 'LEVOXIN TABLET', 'Antibiotics', 'Pack 1', 3159, 4500, 3, 'Shelflife', '2028-05-30', 1],
  ['7-1778499', 'LIBRE PLUS', 'Analgesics', 'Pack 1', 3300, 4700, 3, 'GJ', '2028-05-30', 1],
  ['916', 'LIBRE TABLET', 'Muscle Relaxant', 'Pack 1', 1450, 2000, 6, 'SANTUS', '2028-06-30', 2],
  ['917', 'LIFESTYLES CONDOM', 'Condom', 'Pack 1', 450, 700, 0, 'SFH', '2028-06-30', 2],
  ['919', 'LINCOMYCIN 500MG (950)', 'Antibiotics', 'Sachet 1.0', 950, 1500, 0, 'GJ', '2027-12-30', 2],

  // PAGE 22 (47 items)
  ['920', 'LINCOMYCIN PACK (900)', 'Antibiotics', 'Pack 1', 900, 1400, 1, 'GJ', '2028-03-30', 2],
  ['921', 'LINCOMYCIN PACK (750)', 'Antibiotics', 'Pack 1', 750, 1400, 18, 'PHARMATON', '2028-08-30', 5],
  ['923', 'LIQUID IRON (SMALL)', 'Vitamin', 'Syrup Bottle', 686, 1000, 3, 'GJ', '2028-05-30', 2],
  ['924', 'LIQUID IRON (BIG)', 'Multivitamin', 'Syrup Bottle', 1000, 1500, 9, 'GJ', '2028-06-30', 2],
  ['927', 'LISINOPRIL 10MG (275)', 'Antihypertensive', 'Sachet 1.0', 275, 400, 0, 'OJEZ', '2027-12-30', 3],
  ['926', 'LISINOPRIL 5MG (200)', 'Antihypertensive', 'Sachet 1.0', 200, 400, 0, 'SANTUS', '2027-12-30', 3],
  ['9-1762368', 'LISINOPRIL 5MG (225)', 'Antihypertensive', 'Sachet 1.0', 225, 400, 0, 'SANTUS', '2027-12-30', 3],
  ['928', 'LISINOPRIL 10MG (560)', 'Antihypertensive', 'Sachet 1.0', 560, 850, 32, 'PHARMATON', '2028-08-30', 5],
  ['930', 'LISINOPRIL 5MG (REMMY)', 'Antihypertensive', 'Sachet 1.0', 225, 500, 2, 'REMMY', '2028-04-30', 2],
  ['929', 'LISINOPRIL 10MG (500)', 'Antihypertensive', 'Sachet 1.0', 500, 700, 9, 'Shelflife', '2028-06-30', 3],
  ['931', 'LISINOPRIL 20MG (1189)', 'Antihypertensive', 'Sachet 1.0', 1189, 1700, 3, 'SANTUS', '2028-05-30', 2],
  ['932', 'LISINOPRIL 10MG (465)', 'Antihypertensive', 'Sachet 1.0', 465, 700, 4, 'PHARMATON', '2028-05-30', 2],
  ['933', 'LISINOPRIL 5MG (210)', 'Antihypertensive', 'Sachet 1.0', 210, 350, 2, 'SANTUS', '2028-04-30', 2],
  ['934', 'LISINOPRIL 10MG (310)', 'Antihypertensive', 'Sachet 1.0', 310, 450, 0, 'SANTUS', '2027-12-30', 2],
  ['935', 'LITTLE REX COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 360, 700, 5, 'HEALTHY CHILD', '2028-05-30', 2],
  ['936', 'LIVETHER 80MG INJ', 'Antimalaria', 'Ampoule 1', 500, 1200, 22, 'REMMY', '2028-08-30', 5],
  ['938', 'LIVOLIN FORTE CAPSULE', 'Supplements', 'Sachet 1.0', 2800, 4000, 3, 'GJ', '2028-05-30', 1],
  ['939', 'LIXYPED SYRUP', 'Cough Syrup', 'Syrup Bottle', 550, 900, 0, 'CHRIS', '2027-12-30', 2],
  ['940', 'LODIUM CAPSULE (LOPERAMIDE)', 'GIT', 'Sachet 1.0', 245, 400, 41, 'PHARMATON', '2028-09-30', 10],
  ['941', 'LOFNAC (DICLOFENAC)', 'Analgesics', 'Sachet 1.0', 220, 400, 0, 'PHARMATON', '2027-12-30', 3],
  ['942', 'LOFNAC 100MG SR', 'Analgesics', 'Sachet 1.0', 190, 300, 19, 'SANTUS', '2028-07-30', 5],
  ['943', 'LOFNAC GEL', 'Analgesics', 'Tube', 638, 900, 45, 'GJ', '2028-09-30', 10],
  ['944', 'LOFNAC-PLUS TABLET', 'Analgesics', 'Sachet 1.0', 250, 400, 47, 'GREENLIFE', '2028-09-30', 10],
  ['945', 'LOKMAL DISPERSIBLE', 'Antimalaria', 'Pack 1', 500, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['946', 'LOKMAL QS PACK', 'Antimalaria', 'Pack 1', 1273, 1900, 7, 'Shelflife', '2028-06-30', 2],
  ['947', 'LOKMAL SUSPENSION', 'Antimalaria', 'Suspension', 550, 850, 0, 'System', '2027-12-30', 2],
  ['P0000013', 'LONART DISPERSIBLE', 'Antimalaria', 'Pack 1', 750, 1200, 21, 'GREENLIFE', '2028-08-30', 5],
  ['948', 'LONART SUSPENSION', 'Antimalaria', 'Suspension', 2000, 2900, 0, 'GREENLIFE', '2027-12-30', 2],
  ['949', 'LONART X12', 'Antimalaria', 'Pack 1', 430, 650, 0, 'GREENLIFE', '2027-12-30', 2],
  ['950', 'LONART X18', 'Antimalaria', 'Pack 1', 495, 800, 0, 'PHARMATON', '2027-12-30', 2],
  ['951', 'LONART X24', 'Antimalaria', 'Pack 1', 769, 1200, 6, 'Shelflife', '2028-06-30', 2],
  ['952', 'LONART-DS FORTE', 'Antimalaria', 'Pack 1', 2178, 3200, 17, 'GJ', '2028-08-30', 5],
  ['953', 'LOPERAMIDE SACHET (100)', 'GIT', 'Sachet 1.0', 100, 300, 7, 'SANTUS', '2028-05-30', 3],
  ['954', 'LOPERAMIDE SACHET (50)', 'Antispasmodic', 'Sachet 1.0', 50, 200, 10, 'SANTUS', '2028-05-30', 3],
  ['955', 'LORATADINE TAB (270)', 'Antiallergy', 'Sachet 1.0', 270, 400, 0, 'GJ', '2027-12-30', 3],
  ['956', 'LORATADINE SYRUP', 'Antiallergy', 'Syrup Bottle', 660, 1000, 5, 'SANTUS', '2028-05-30', 2],
  ['957', 'LORATADINE SACHET (80)', 'Antiallergy', 'Sachet 1.0', 80, 300, 3, 'GJ', '2028-04-30', 3],
  ['959', 'LORATADINE SACHET (235)', 'Antiallergy', 'Sachet 1.0', 235, 500, 1, 'GJ', '2028-03-30', 3],
  ['958', 'LORATADINE SACHET (120)', 'Antiallergy', 'Sachet 1.0', 120, 300, 22, 'GJ', '2028-08-30', 5],
  ['963', 'LORATYN TABLET', 'Antiallergy', 'Sachet 1.0', 690, 1200, 2, 'GJ', '2028-04-30', 2],
  ['964', 'LOSARTAN 50MG (795)', 'Antihypertensive', 'Sachet 1.0', 795, 1200, 14, 'SANTUS', '2028-07-30', 3],
  ['3-1765305', 'LOSARTAN 50MG (700)', 'Antihypertensive', 'Sachet 1.0', 700, 1100, 0, 'SANTUS', '2027-12-30', 2],
  ['965', 'LOSARTAN 50MG (540)', 'Antihypertensive', 'Sachet 1.0', 540, 800, 1, 'SANTUS', '2028-03-30', 2],
  ['4-1760213', 'LOSARTAN 25MG (415)', 'Antihypertensive', 'Sachet 1.0', 415, 700, 4, 'GJ', '2028-05-30', 2],
  ['966', 'LOSARTAN 50MG (525)', 'Antihypertensive', 'Sachet 1.0', 525, 750, 0, 'SANTUS', '2027-12-30', 2],
  ['967', 'LOSARTAN 50MG (634)', 'Antihypertensive', 'Sachet 1.0', 634, 900, 1, 'PHARMATON', '2028-03-30', 2],
  ['7-1772640', 'LOSARTAN 50MG (550)', 'Antihypertensive', 'Sachet 1.0', 550, 900, 7, 'SANTUS', '2028-06-30', 2],

  // PAGE 23 (47 items)
  ['5-1772111', 'LOSARTAN 100MG (1725)', 'Antihypertensive', 'Sachet 1.0', 1725, 2500, 2, 'SANTUS', '2028-05-30', 2],
  ['2-1772112', 'LOSARTAN PLUS (2185)', 'Antihypertensive', 'Sachet 1.0', 2185, 3100, 1, 'SANTUS', '2028-04-30', 1],
  ['968', 'LOSARTAN 50MG (625)', 'Antihypertensive', 'Sachet 1.0', 625, 900, 12, 'SANTUS', '2028-07-30', 3],
  ['969', 'LOUIS INHALER', 'Inhaler', 'Nasal Stick', 300, 500, 1, 'GJ', '2028-03-30', 2],
  ['972', 'LOXAGYL 400MG', 'Antibiotics', 'Sachet 1.0', 150, 300, 237, 'SANTUS', '2028-10-30', 30],
  ['970', 'LOXAGYL SUSPENSION', 'Antibiotics', 'Suspension', 600, 900, 6, 'GJ', '2028-06-30', 2],
  ['971', 'LOXAGYL 200MG TABLET', 'Antibiotics', 'Sachet 1.0', 110, 200, 40, 'SANTUS', '2028-08-30', 10],
  ['974', 'LUBRICA GEL (2300)', 'Gel', 'Tube', 2300, 3300, 0, 'SFH', '2027-12-30', 1],
  ['975', 'LUBRICA GEL PACK', 'Gel', 'Tube', 2300, 3300, 0, 'System', '2027-12-30', 1],
  ['2-1774637', 'LUBRIMAX GEL', 'Gel', 'Tube', 1200, 2000, 13, 'PHARMATON', '2028-07-30', 3],
  ['976', 'LUCOZADE BOOST', 'Supplements', 'Bottle', 900, 1250, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['977', 'LUMAPIL FORTE', 'Antimalaria', 'Pack 1', 480, 700, 0, 'WELLNESS', '2027-12-30', 2],
  ['978', 'LUMAREAL ANTIMALARIAL', 'Antimalaria', 'Pack 1', 600, 1200, 0, 'WELLNESS', '2027-12-30', 2],
  ['981', 'LUMERAX FORTE', 'Antimalaria', 'Pack 1', 500, 1000, 0, 'ELIONA', '2027-12-30', 2],
  ['982', 'LUMIN CAPSULE', 'Antimalaria', 'Pack 1', 650, 1000, 15, 'Theo Rep', '2028-07-30', 3],
  ['P0000041', 'LUTER TABLET', 'Antimalaria', 'Pack 1', 1746, 2500, 2, 'Shelflife', '2028-04-30', 1],
  ['0-1760299', 'LYCOFER SYRUP', 'Multivitamin', 'Syrup Bottle', 2900, 4000, 0, 'SANTUS', '2027-12-30', 1],
  ['983', 'LYNCIPRO 500MG', 'Antibiotics', 'Pack 1', 2300, 3300, 0, 'GJ', '2027-12-30', 1],
  ['984', 'LYRICA 75MG (PREGABALIN)', 'Analgesics', 'Pack 1', 4100, 11000, 0, 'SANTUS', '2027-12-30', 1],
  ['0-1768479', 'M/P COQ10 CAPSULE', 'Supplements', 'Capsule 1', 175, 300, 115, 'GJ', '2028-09-30', 20],
  ['8-1773654', 'M/P COQ10 BOTTLE', 'Supplements', 'Bottle', 7000, 10500, 0, 'GJ', '2028-01-30', 1],
  ['991', 'M/P MAGNESIUM CAPSULE', 'Supplements', 'Capsule 1', 100, 200, 117, 'GJ', '2028-09-30', 20],
  ['992', 'M/P OMEGA-3 BOTTLE', 'Supplements', 'Sachet 1.0', 6700, 10000, 1, 'GJ', '2028-05-30', 1],
  ['P0000031', 'M/P VITAMIN D3 BOTTLE', 'Supplements', 'Bottle', 6400, 9300, 1, 'PHARMATON', '2028-05-30', 1],
  ['4-1773655', 'M/P VITAMIN C BOTTLE', 'Vitamin', 'Bottle', 6500, 10000, 0, 'GJ', '2027-12-30', 1],
  ['P0000032', 'M/P VITAMIN SACHET', 'Supplements', 'Sachet 1.0', 730, 1200, 0, 'PHARMATON', '2027-12-30', 2],
  ['993', 'M/P VITAMIN E BOTTLE', 'Supplements', 'Bottle', 6500, 9500, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['994', 'M/P ZINC SACHET', 'Supplements', 'Sachet 1.0', 850, 1300, 5, 'PHARMATON', '2028-05-30', 2],
  ['995', 'M/P ZINC TABLET (64)', 'Supplements', 'Tablet 1.0', 64, 100, 0, 'GJ', '2027-12-30', 10],
  ['996', 'M/P ZINC TABLET (77)', 'Supplements', 'Tablet 1.0', 77, 130, 198, 'GJ', '2028-09-30', 20],
  ['985', 'M&B CIPROFLOXACIN PACK', 'Antibiotics', 'Pack 1', 670, 1500, 1, 'SANTUS', '2028-03-30', 2],
  ['986', 'M&B CIPROFLOXACIN SACHET', 'Antibiotics', 'Sachet 1.0', 530, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['987', 'M&B IBUPROFEN', 'Analgesics', 'Pack 1', 690, 1000, 5, 'GJ', '2028-05-30', 2],
  ['988', 'M&B NIFEDIPINE 20MG', 'Antihypertensive', 'Sachet 1.0', 1300, 1900, 12, 'SANTUS', '2028-07-30', 3],
  ['989', 'M&B PARACETAMOL SYRUP', 'Analgesics', 'Syrup Bottle', 550, 800, 17, 'SANTUS', '2028-07-30', 5],
  ['990', 'M&B PARACETAMOL SACHET', 'Analgesics', 'Sachet 1.0', 136, 300, 331, 'SANTUS', '2028-10-30', 30],
  ['997', 'MACLEANS TOOTHPASTE', 'Consumables', 'Tube', 936, 1300, 4, 'Medquest', '2028-08-30', 2],
  ['0-1760301', 'MAGNAVIT MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 800, 1200, 3, 'GJ', '2028-04-30', 2],
  ['998', 'MAGNESIUM CAPSULE (138)', 'Supplements', 'Capsule 1', 138, 200, 0, 'System', '2027-12-30', 5],
  ['5-1771677', 'MAGNESIUM CAPSULE (186)', 'Supplements', 'Capsule 1', 186, 300, 1, 'System', '2028-03-30', 5],
  ['1000', 'MAGNESIUM TABLET (120)', 'Supplements', 'Tablet 1.0', 120, 200, 27, 'System', '2028-07-30', 5],
  ['3-1781607', 'MALARIA RAPID TEST KIT', 'Test', 'Test Kit', 500, 2000, 19, 'ELIONA', '2028-08-30', 5],
  ['0-1775730', 'MALDOX DISPERSIBLE', 'Antimalaria', 'Pack 1', 375, 600, 5, 'SANTUS', '2028-05-30', 2],
  ['1003', 'MALDOX SUSPENSION', 'Antimalaria', 'Suspension', 700, 1000, 3, 'SANTUS', '2028-04-30', 2],
  ['1004', 'MALDOX TABLET', 'Antimalaria', 'Pack 1', 550, 800, 17, 'SANTUS', '2028-07-30', 5],
  ['1005', 'MALETHER ANTIMALARIAL', 'Antimalaria', 'Pack 1', 420, 700, 0, 'CIKASON', '2027-12-30', 2],
  ['8-1759004', 'MALUTHER PACK', 'Antimalaria', 'Pack 1', 1370, 2000, 0, 'GJ', '2027-12-30', 2],

  // PAGE 24 (47 items)
  ['1006', 'MAMALAIT GRANULES', 'Supplements', 'Tin / Pack', 3000, 4200, 2, 'REALS', '2028-05-30', 1],
  ['3-1783160', 'MAMASTE SUPPLEMENT', 'Supplements', 'Pack 1', 4350, 6400, 1, 'GJ', '2028-04-30', 1],
  ['1007', 'MAMAZIN TABLET', 'Supplements', 'Sachet 1.0', 275, 400, 0, 'GJ', '2027-12-30', 2],
  ['1008', 'MANG TABLET', 'Supplements', 'Sachet 1.0', 142, 300, 0, 'System', '2027-12-30', 2],
  ['1009', 'MANIX CAPSULE', 'Supplements', 'Pack 1', 2450, 4500, 0, 'SANTUS', '2027-12-30', 1],
  ['1010', 'MARCGESIC TABLET', 'Analgesics', 'Sachet 1.0', 540, 800, 29, 'PHARMATON', '2028-08-30', 5],
  ['P0000018', 'MARCNOL TABLET', 'Antihypertensive', 'Sachet 1.0', 1250, 2000, 3, 'GJ', '2028-05-30', 2],
  ['4-1760010B', 'MAXI TEARS EYE DROPS', 'Eye drops', 'Drops Bottle', 2850, 4000, 0, 'SANTUS', '2027-12-30', 1],
  ['0-1760211', 'MAXIMUM STRENGTH SUPPLEMENT', 'Supplements', 'Pack 1', 3500, 6000, 0, 'HEALTHY CHILD', '2027-12-30', 1],
  ['1011', 'MAXIQUIN PACK', 'Antimalaria', 'Pack 1', 680, 1000, 7, 'GJ', '2028-06-30', 2],
  ['1012', 'MAXIQUIN SACHET', 'Antimalaria', 'Sachet 1.0', 400, 700, 25, 'SANTUS', '2028-08-30', 5],
  ['5-1778500', 'MAXIRON TONIC / SACHET', 'Vitamin', 'Sachet 1.0', 300, 500, 2, 'GJ', '2028-04-30', 2],
  ['1013', 'MCA CHLORAMPHENICOL EAR DROPS', 'Ear drops', 'Drops Bottle', 390, 600, 0, 'SANTUS', '2027-12-30', 2],
  ['1014', 'MCA CHLORAMPHENICOL EYE DROPS', 'Eye drops', 'Drops Bottle', 410, 600, 3, 'SANTUS', '2028-04-30', 2],
  ['9-1764589', 'MECONERV FORTE', 'Supplements', 'Sachet 1.0', 2250, 3200, 1, 'SANTUS', '2028-04-30', 1],
  ['1015', 'MECTIZAN (IVERMECTIN)', 'Anti helminthic', 'Tablet 1.0', 30, 75, 97, 'CHRIS', '2028-09-30', 20],
  ['1016', 'MEDERAX TABLET', 'GIT', 'Sachet 1.0', 120, 300, 4, 'CHRIS', '2028-04-30', 2],
  ['1018', 'MEDIK-55 ANALGESIC', 'Analgesics', 'Sachet 1.0', 465, 700, 3, 'SANTUS', '2028-04-30', 3],
  ['9-1782997', 'MEFENAMIC ACID 500MG', 'Analgesics', 'Sachet 1.0', 480, 800, 10, 'GJ', '2028-06-30', 3],
  ['1020', 'MEKO INHALER', 'Inhaler', 'MDI Inhaler', 150, 250, 0, 'System', '2027-12-30', 1],
  ['1021', 'MELOTEARS EYE DROPS', 'Eye drops', 'Drops Bottle', 2750, 4000, 1, 'GJ', '2028-04-30', 1],
  ['1022', 'MELOXICAM 15MG', 'Analgesics', 'Sachet 1.0', 850, 1300, 0, 'GJ', '2027-12-30', 2],
  ['1023', 'MENOPACE ORIGINAL', 'Supplements', 'Pack 1', 5600, 8000, 0, 'ELIONA', '2027-12-30', 1],
  ['1024', 'MENTHODEX COUGH SYRUP (BIG)', 'Cough Syrup', 'Syrup Bottle', 8250, 11600, 1, 'SANTUS', '2028-05-30', 1],
  ['1025', 'MENTHODEX SYRUP (REG)', 'Cough Syrup', 'Syrup Bottle', 5350, 7500, 1, 'GJ', '2028-05-30', 1],
  ['0-1758223', 'MEPIRYL 2MG (GLIMEPIRIDE)', 'Antidiabetics', 'Sachet 1.0', 600, 900, 6, 'SANTUS', '2028-06-30', 2],
  ['1-1765310', 'MEPIRYL 4MG (GLIMEPIRIDE)', 'Antidiabetics', 'Sachet 1.0', 1100, 1600, 6, 'SANTUS', '2028-06-30', 2],
  ['1026', 'MEPISAN CREAM', 'Cream', 'Tube', 730, 1200, 5, 'GJ', '2028-05-30', 2],
  ['1027', 'MEPRASIL 20MG (OMEPRAZOLE)', 'Anti-ulcer', 'Sachet 1.0', 600, 900, 20, 'GJ', '2028-08-30', 5],
  ['1029', 'MEROXIM (CEFTRIAXONE)', 'Antibiotics', 'Pack 1', 1960, 2900, 2, 'SANTUS', '2028-04-30', 1],
  ['1030', 'MESOFIN TABLET', 'Antimalaria', 'Pack 1', 480, 700, 0, 'System', '2027-12-30', 2],
  ['1031', 'METAGLOM (METFORMIN)', 'Antidiabetics', 'Sachet 1.0', 350, 700, 24, 'ELIONA', '2028-08-30', 5],
  ['1033', 'METFORMIN 500MG SACHET', 'Antidiabetics', 'Sachet 1.0', 150, 300, 0, 'REALS', '2027-12-30', 5],
  ['1034', 'METHYLATED SPIRIT (435)', 'Antiseptic', 'Bottle', 435, 650, 0, 'SANTUS', '2028-06-30', 3],
  ['1037', 'METHYLATED SPIRIT (250)', 'Antiseptic', 'Bottle', 250, 400, 4, 'CHRIS', '2028-06-30', 3],
  ['1035', 'METHYLATED SPIRIT (290)', 'Antiseptic', 'Bottle', 290, 450, 2, 'PHARMATON', '2028-06-30', 3],
  ['1036', 'METHYLATED SPIRIT (400)', 'Antiseptic', 'Bottle', 400, 600, 0, 'CHRIS', '2028-06-30', 3],
  ['9-1757442', 'METHYLATED SPIRIT (BIG)', 'Antiseptic', 'Bottle', 400, 600, 0, 'GJ', '2028-06-30', 2],
  ['1038', 'METOCLOPRAMIDE TABLET', 'GIT', 'Sachet 1.0', 40, 100, 10, 'Shelflife', '2028-06-30', 5],
  ['1039', 'METRONE TABLET', 'Antibiotics', 'Sachet 1.0', 125, 200, 0, 'BLESSED NOEDYKE', '2027-12-30', 3],
  ['1040', 'METRONIDAZOLE IV INFUSION', 'Infusion', '100ml Bottle', 415, 600, 4, 'FIDSON', '2028-06-30', 2],
  ['1043', 'MEVIGON TABLET', 'Antiallergy', 'Sachet 1.0', 385, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['1044', 'MICOZOL CREAM', 'Antifungal', 'Tube', 800, 1200, 0, 'System', '2027-12-30', 1],
  ['1045', 'MICROPIRIN 75MG (ASPIRIN)', 'Antihypertensive', 'Pack 1', 450, 650, 0, 'GJ', '2027-12-30', 2],
  ['1046', 'MILKTEETH GEL', 'Gel', 'Tube', 220, 350, 0, 'System', '2027-12-30', 2],
  ['1047', 'MIM TONIC 300ML', 'Multivitamin', 'Syrup Bottle', 1450, 2000, 5, 'SANTUS', '2028-06-30', 2],
  ['1048', 'MIM CAPSULE', 'Multivitamin', 'Sachet 1.0', 256, 400, 2, 'GJ', '2028-04-30', 2],

  // PAGE 25 (46 items)
  ['1049', 'MIM DROPS', 'Vitamin', 'Drops Bottle', 800, 1200, 0, 'CHRIS', '2027-12-30', 2],
  ['1050', 'MIM TONIC 100ML', 'Multivitamin', 'Syrup Bottle', 655, 1000, 1, 'GJ', '2028-03-30', 2],
  ['1051', 'MIMGLOBIN TONIC', 'Multivitamin', 'Syrup Bottle', 2950, 4300, 0, 'ORANGE DRUGS', '2027-12-30', 1],
  ['1052', 'MINTACID TABLET', 'Antacid', 'Sachet 1.0', 85, 150, 0, 'GJ', '2027-12-30', 5],
  ['1053', 'MIRAFIX (CEFIXIME)', 'Antibiotics', 'Pack 1', 3290, 4700, 0, 'GJ', '2027-12-30', 1],
  ['1054', 'MISO-FEM (MISOPROSTOL)', 'Anti-ulcer', 'Sachet 1.0', 1000, 3000, 0, 'GJ', '2027-12-30', 2],
  ['3-1756473', 'MISOCLEAR PACK', 'Anti-ulcer', 'Pack 1', 2270, 3500, 1, 'GJ', '2028-04-30', 1],
  ['1055', 'MIXAGRIP COLD CAPLET', 'Antiallergy', 'Sachet 1.0', 344, 500, 8, 'ORANGE DRUGS', '2028-06-30', 3],
  ['1056', 'MIXANAL TABLET', 'Analgesics', 'Sachet 1.0', 208, 300, 0, 'GJ', '2027-12-30', 3],
  ['1057', 'MOKO BICARBONATE', 'Anti-ulcer', 'Bottle', 400, 600, 2, 'GJ', '2028-04-30', 2],
  ['1058', 'MOKO GENTIAN VIOLET', 'Antiseptic', 'Bottle', 440, 700, 16, 'PHARMATON', '2028-08-30', 5],
  ['1059', 'MOKO IODINE TINCTURE', 'Antiseptic', 'Bottle', 590, 900, 10, 'GJ', '2028-07-30', 3],
  ['1060', 'MOKO LIQUID QUININE', 'Antimalaria', 'Bottle', 1490, 2100, 3, 'SANTUS', '2028-05-30', 2],
  ['1061', 'MOKO METHYLATED SPIRIT', 'Antiseptic', 'Bottle', 1100, 1600, 11, 'SANTUS', '2028-07-30', 3],
  ['1062', 'MOKO MIST MAGNESIUM (820)', 'Antacid', 'Suspension', 820, 1300, 4, 'SANTUS', '2028-05-30', 2],
  ['1063', 'MOKO MIST POT CITRATE', 'Anti-ulcer', 'Liquid', 686, 1000, 29, 'GJ', '2028-08-30', 5],
  ['1064', 'MOKO MIST KAOLIN', 'GIT', 'Suspension', 1000, 1500, 2, 'PHARMATON', '2028-04-30', 2],
  ['1065', 'MOKO QUININE MIXTURE', 'Antimalaria', 'Bottle', 1750, 2500, 1, 'GJ', '2028-03-30', 1],
  ['1066', 'MONOMIN TONIC (BIG)', 'Multivitamin', 'Syrup Bottle', 1320, 1900, 1, 'PHARMATON', '2028-03-30', 1],
  ['1067', 'MONOMIN TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 630, 900, 3, 'GJ', '2028-04-30', 2],
  ['1068', 'MONTIGET 10MG PACK', 'Antiallergy', 'Pack 1', 1100, 1550, 0, 'SANTUS', '2027-12-30', 2],
  ['1069', 'MONTIGET SACHET', 'Antiallergy', 'Sachet 1.0', 140, 200, 18, 'SANTUS', '2028-07-30', 5],
  ['1070', 'MONTRAL TABLET', 'Antiallergy', 'Pack 1', 2450, 3450, 0, 'PHARMATON', '2027-12-30', 1],
  ['1071', 'MOSQUITO NET', 'Consumables', 'Single Unit', 2600, 3600, 0, 'PHARMATON', '2029-12-30', 1],
  ['1072', 'MOTILIUM TABLET', 'GIT', 'Tablet 1.0', 47, 70, 0, 'GJ', '2027-12-30', 5],
  ['1073', 'MOXIE PARACETAMOL', 'Analgesics', 'Pack 1', 1800, 2600, 1, 'GJ', '2028-03-30', 1],
  ['1074', 'MOXIE VITAMIN C', 'Vitamin', 'Pack 1', 1700, 2400, 2, 'GJ', '2028-04-30', 1],
  ['3-1768476', 'MOXIFLOXACIN EYE DROPS', 'Eye drops', 'Drops Bottle', 3000, 4200, 1, 'System', '2028-04-30', 1],
  ['3-1759344', 'MR GECKO INSECTICIDE (BIG)', 'Insecticide', 'Aerosol Can', 1750, 2500, 5, 'System', '2028-08-30', 2],
  ['3-1759344B', 'MR GECKO INSECTICIDE (REG)', 'Insecticide', 'Aerosol Can', 1400, 1900, 3, 'System', '2028-08-30', 2],
  ['1075', 'MUCUS EXPECTORANT', 'Cough Syrup', 'Syrup Bottle', 1400, 2500, 0, 'SANTUS', '2027-12-30', 1],
  ['1076', 'MULTIVITAMIN SYRUP (255)', 'Multivitamin', 'Syrup Bottle', 255, 500, 4, 'GJ', '2028-05-30', 2],
  ['1077', 'MULTIVITE SYRUP (780)', 'Multivitamin', 'Syrup Bottle', 780, 1200, 4, 'GJ', '2028-05-30', 2],
  ['1078', 'MUPIDERM OINTMENT', 'Ointment', 'Tube', 3200, 4700, 4, 'SANTUS', '2028-06-30', 2],
  ['1079', 'MUPIROCIN CREAM', 'Cream', 'Tube', 1745, 2600, 0, 'Medquest', '2027-12-30', 1],
  ['1080', 'MYCOTEN CREAM', 'Cream', 'Tube', 900, 1300, 15, 'GJ', '2028-08-30', 3],
  ['1083', 'MYCOTEN VAGINAL PACK (1950)', 'Antifungal', 'Pack 1', 1950, 3000, 5, 'GJ', '2028-06-30', 2],
  ['1081', 'MYCOTEN VAGINAL TAB (1650)', 'Antifungal', 'Pack 1', 1650, 2500, 5, 'Medquest', '2028-06-30', 2],
  ['1082', 'MYCOTEN VAGINAL TAB (1631)', 'Antifungal', 'Pack 1', 1631, 2500, 1, 'GJ', '2028-04-30', 2],
  ['1084', 'MYCOTEN-V PACK', 'Antifungal', 'Pack 1', 1950, 3000, 2, 'N/F REP', '2028-05-30', 1],
  ['9-1763676', 'N/F ADAM MULTIVITAMIN', 'Supplements', 'Bottle', 19530, 27500, 0, 'N/F REP', '2028-01-30', 1],
  ['7-1760775B', 'N/F BEAUTY CAPSULE', 'Supplements', 'Capsule 1', 137, 200, 257, 'GJ', '2028-09-30', 20],
  ['1085', 'N/F COQ10 TABLET', 'Supplements', 'Tablet 1.0', 320, 450, 46, 'N/F REP', '2028-08-30', 10],
  ['9-1781982', 'N/F COQ10 CAPSULE (930)', 'Supplements', 'Capsule 1', 930, 1300, 30, 'SANTUS', '2028-08-30', 5],
  ['1086', 'N/F EVENING PRIMROSE BOTTLE', 'Supplements', 'Bottle', 15700, 22000, 0, 'GJ', '2028-01-30', 1],
  ['1087', 'N/F EVENING PRIMROSE SACHET', 'Supplements', 'Sachet 1.0', 2710, 3800, 0, 'SANTUS', '2027-12-30', 1],
  ['1088', 'N/F EYE CARE BOTTLE', 'Supplements', 'Bottle', 8900, 11900, 0, 'N/F REP', '2027-12-30', 1],

  // PAGE 26 (47 items)
  ['1089', 'N/F EYEBRIGHT CAPSULE', 'Supplements', 'Capsule 1', 97, 150, 0, 'GJ', '2027-12-30', 10],
  ['9-1757501', 'N/F FOLATE TABLET', 'Supplements', 'Tablet 1.0', 65, 100, 117, 'GJ', '2028-08-30', 20],
  ['1091', 'N/F IMMUNE DEFENCE', 'Supplements', 'Sachet 1.0', 2720, 3850, 0, 'GJ', '2027-12-30', 1],
  ['9-1781983', 'N/F MAGNESIUM CAP (291)', 'Supplements', 'Capsule 1', 291, 500, 120, 'N/F REP', '2028-09-30', 20],
  ['9-1769285', 'N/F MAGNESIUM TAB (325)', 'Supplements', 'Tablet 1.0', 325, 500, 252, 'N/F REP', '2028-10-30', 30],
  ['1092', 'N/F MAGNESIUM TAB (284)', 'Supplements', 'Tablet 1.0', 284, 400, 61, 'N/F REP', '2028-08-30', 10],
  ['1093', 'N/F MAGNESIUM TAB (113)', 'Supplements', 'Tablet 1.0', 113, 200, 95, 'GJ', '2028-08-30', 15],
  ['1019', 'N/F MEGA MULTIVITAMIN', 'Supplements', 'Sachet 1.0', 1482, 2200, 12, 'N/F REP', '2028-07-30', 3],
  ['8-1776283', 'N/F MELATONIN (235)', 'Supplements', 'Tablet 1.0', 235, 350, 66, 'N/F REP', '2028-08-30', 10],
  ['1094', 'N/F MELATONIN (134)', 'Supplements', 'Tablet 1.0', 134, 200, 0, 'GJ', '2027-12-30', 10],
  ['6-1772703', 'N/F MEMORY SUPPORT', 'Supplements', 'Tablet 1.0', 317, 450, 0, 'N/F REP', '2027-12-30', 5],
  ['6-1768478', 'N/F MYO-INOSITOL TAB', 'Supplements', 'Tablet 1.0', 246, 350, 109, 'GJ', '2028-09-30', 20],
  ['P0000027', 'N/F NAC (N-ACETYLCYSTEINE)', 'Supplements', 'Capsule 1', 248, 400, 299, 'N/F REP', '2028-10-30', 30],
  ['1095', 'N/F PROBIOTIC CAPSULE', 'Supplements', 'Capsule 1', 247, 350, 90, 'N/F REP', '2028-08-30', 15],
  ['1096', 'N/F SUPER E (VITAMIN E)', 'Supplements', 'Bottle', 5650, 7400, 0, 'SANTUS', '2027-12-30', 1],
  ['P0000003', 'N/F VITAMIN C (136)', 'Vitamin', 'Tablet 1.0', 136, 200, 85, 'N/F REP', '2028-08-30', 15],
  ['9-1776510B', 'N/F VITAMIN C (87)', 'Vitamin', 'Tablet 1.0', 87, 140, 218, 'N/F REP', '2028-09-30', 20],
  ['3-1776508', 'N/F VITAMIN C SACHET', 'Vitamin', 'Sachet 1.0', 1592, 2200, 6, 'N/F REP', '2028-06-30', 2],
  ['1097', 'N/F VITAMIN D3 SACHET', 'Supplements', 'Sachet 1.0', 1200, 1800, 31, 'CHRIS', '2028-08-30', 5],
  ['3-1772703', 'N/F VITAMIN D3 CAP (165)', 'Supplements', 'Capsule 1', 165, 250, 7, 'N/F REP', '2028-05-30', 5],
  ['7-1763145', 'N/F VITAMIN D3 BOTTLE (10400)', 'Supplements', 'Bottle', 10400, 14800, 2, 'N/F REP', '2028-06-30', 1],
  ['9-1760778', 'N/F VITAMIN E CAP (114)', 'Supplements', 'Capsule 1', 114, 180, 75, 'N/F REP', '2028-08-30', 15],
  ['0-1763676', 'N/F VITAMIN B12 TAB (169.5)', 'Supplements', 'Tablet 1.0', 169.5, 250, 341, 'N/F REP', '2028-10-30', 30],
  ['1100', 'N/F VITAMIN E ULTRA (18950)', 'Supplements', 'Bottle', 18950, 26550, 0, 'CHRIS', '2028-01-30', 1],
  ['1101', 'N/F VITAMIN E SACHET (2000)', 'Supplements', 'Sachet 1.0', 2000, 2900, 10, 'GJ', '2028-07-30', 3],
  ['9-1763677', 'N/F VITAMIN B-COMPLEX TAB', 'Supplements', 'Tablet 1.0', 108, 180, 159, 'N/F REP', '2028-09-30', 20],
  ['2-1770979', 'N/F VITAMIN D3 TAB (87)', 'Supplements', 'Tablet 1.0', 87, 150, 99, 'GJ', '2028-08-30', 15],
  ['1104', 'N/F VITAMIN C 1000MG BOTTLE', 'Vitamin', 'Bottle', 9100, 12750, 2, 'GJ', '2028-06-30', 1],
  ['1102', 'N/F VITAMIN K2/D3 TAB', 'Supplements', 'Tablet 1.0', 105, 150, 32, 'GJ', '2028-07-30', 10],
  ['1105', 'N/F ZINC 100MG TAB', 'Supplements', 'Tablet 1.0', 94, 150, 161, 'N/F REP', '2028-09-30', 20],
  ['1106', 'N/F ZINC 50MG TAB', 'Supplements', 'Tablet 1.0', 80, 130, 152, 'N/F REP', '2028-09-30', 20],
  ['0-1768475', 'N/F ZINC SACHET', 'Supplements', 'Sachet 1.0', 1400, 2000, 17, 'CHRIS', '2028-07-30', 5],
  ['209', 'N/H COD LIVER OIL', 'Supplements', 'Sachet 1.0', 680, 1000, 8, 'SANTUS', '2028-06-30', 2],
  ['1107', 'N/H FISH OIL SACHET', 'Supplements', 'Sachet 1.0', 645, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['1108', 'N/H GINSENG CAPSULE', 'Supplements', 'Sachet 1.0', 450, 800, 0, 'ELIONA', '2027-12-30', 2],
  ['7-1773303', 'N/H MULTIVITAMIN SACHET', 'Supplements', 'Sachet 1.0', 1767, 2700, 13, 'ELIONA', '2028-07-30', 3],
  ['1109', 'N/H OMEGA-3 SACHET', 'Supplements', 'Sachet 1.0', 780, 1200, 7, 'SANTUS', '2028-06-30', 2],
  ['1110', 'N/H VITAMIN E SACHET', 'Supplements', 'Sachet 1.0', 1100, 1600, 4, 'ELIONA', '2028-05-30', 2],
  ['1111', 'NAPROXEN 500MG SACHET', 'Analgesics', 'Sachet 1.0', 1050, 1500, 1, 'GJ', '2028-04-30', 2],
  ['1112', 'NAT-B CAPSULE', 'Supplements', 'Sachet 1.0', 3000, 4300, 3, 'GJ', '2028-05-30', 1],
  ['1113', 'NAT-D CAPSULE', 'Supplements', 'Pack 1', 9500, 13000, 0, 'GJ', '2027-12-30', 1],
  ['1114', 'NATRILIX SR TABLET', 'Antihypertensive', 'Pack 1', 1250, 1900, 0, 'System', '2027-12-30', 1],
  ['1115', 'NATRIXAM PACK', 'Antihypertensive', 'Pack 1', 14200, 19500, 0, 'System', '2028-01-30', 1],
  ['1116', 'NATRIXAM SACHET', 'Antihypertensive', 'Sachet 1.0', 670, 950, 0, 'PHARMATON', '2027-12-30', 2],
  ['5-1776453', "NATURE'S WAY MULTIVITAMIN", 'Supplements', 'Bottle', 9000, 12800, 1, 'GJ', '2028-05-30', 1],
  ['1117', 'NATURESFIELD FOLIC/ZINC TAB', 'Supplements', 'Tablet 1.0', 158, 250, 0, 'SANTUS', '2027-12-30', 5],
  ['1118', 'NCP ANTISEPTIC (BIG)', 'Antiseptic', 'Bottle', 1800, 2600, 1, 'GJ', '2028-06-30', 2],

  // PAGE 27 (47 items)
  ['1119', 'NCP ANTISEPTIC (MEDIUM)', 'Antiseptic', 'Bottle', 1120, 1700, 1, 'SANTUS', '2028-06-30', 2],
  ['1120', 'NCP ANTISEPTIC (SMALL)', 'Antiseptic', 'Bottle', 320, 500, 0, 'System', '2027-12-30', 3],
  ['1121', 'NECTALLIN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 1500, 2200, 0, 'GJ', '2027-12-30', 2],
  ['1124', 'NEEDLE 21G', 'Consumables', 'Single Unit', 17.5, 25, 192, 'PHARMATON', '2029-12-30', 30],
  ['1125', 'NEEDLE 23G', 'Consumables', 'Single Unit', 15, 25, 58, 'SANTUS', '2029-12-30', 20],
  ['1126', 'NEFIXIME SUSPENSION', 'Antibiotics', 'Suspension', 2000, 2800, 0, 'GJ', '2027-12-30', 1],
  ['1127', 'NEMECLOX CAPSULE', 'Antibiotics', 'Sachet 1.0', 550, 800, 0, 'PHARMATON', '2027-12-30', 2],
  ['1128', 'NEMELPRAZOLE 20MG', 'Anti-ulcer', 'Sachet 1.0', 250, 400, 0, 'CHRIS', '2027-12-30', 3],
  ['1129', 'NEMOXIL 250MG CAPSULE', 'Antibiotics', 'Sachet 1.0', 320, 700, 0, 'PHARMATON', '2027-12-30', 2],
  ['1130', 'NEMOXIL SUSPENSION', 'Antibiotics', 'Suspension', 500, 800, 0, 'PHARMATON', '2027-12-30', 2],
  ['1131', 'NEO HERBOLIN LOTION', 'Lotion', 'Lotion Bottle', 1300, 2500, 0, 'HEALTHY CHILD', '2027-12-30', 1],
  ['1134', 'NEO-PRESOL LOTION', 'Lotion', 'Lotion Bottle', 2750, 3900, 3, 'GJ', '2028-06-30', 1],
  ['1132', 'NEOBACIN POWDER', 'Powder', 'Tin', 700, 1200, 9, 'GJ', '2028-07-30', 3],
  ['1-1761675', 'NEOFIDRON LOTION', 'Lotion', 'Lotion Bottle', 1900, 2800, 3, 'GJ', '2028-05-30', 1],
  ['1133', 'NEOFYLIN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 850, 1200, 21, 'GJ', '2028-08-30', 5],
  ['1135', 'NEOSKIN CREAM', 'Cream', 'Tube', 640, 900, 19, 'SANTUS', '2028-08-30', 5],
  ['1136', 'NEOTINCOM TABLET', 'Antibiotics', 'Sachet 1.0', 450, 700, 0, 'System', '2027-12-30', 2],
  ['1-1764520', 'NEPAFENAC EYE DROPS', 'Eye drops', 'Drops Bottle', 5000, 7000, 1, 'SANTUS', '2028-04-30', 1],
  ['1137', 'NERVE LINIMENT', 'Analgesics', 'Bottle', 1150, 1700, 2, 'SANTUS', '2028-05-30', 1],
  ['1138', 'NERVERON CAPSULE', 'Supplements', 'Sachet 1.0', 1950, 2550, 0, 'PHARMATON', '2027-12-30', 1],
  ['1139', 'NEURACAL SACHET', 'Analgesics', 'Sachet 1.0', 2985, 4200, 5, 'GJ', '2028-06-30', 2],
  ['1140', 'NEURO META B TABLET', 'Vitamin', 'Sachet 1.0', 90, 130, 0, 'ELIONA', '2027-12-30', 5],
  ['1141', 'NEUROGESIC OINTMENT (REG)', 'Ointment', 'Tube', 1250, 1800, 4, 'PHARMATON', '2028-06-30', 2],
  ['1142', 'NEUROGESIC OINTMENT (BIG)', 'Ointment', 'Tube', 2250, 3400, 3, 'SANTUS', '2028-06-30', 2],
  ['1143', 'NEUROGESIC CREAM (SMALL)', 'Cream', 'Tube', 1150, 1700, 4, 'PHARMATON', '2028-06-30', 2],
  ['1144', 'NEUROGESIC CREAM (BIG)', 'Cream', 'Tube', 2200, 3200, 4, 'SANTUS', '2028-06-30', 2],
  ['1145', 'NEUROTEX FORTE', 'Vitamin', 'Sachet 1.0', 96, 140, 0, 'PHARMATON', '2027-12-30', 5],
  ['1146', 'NEUROVITE TABLET', 'Supplements', 'Tablet 1.0', 145, 200, 105, 'Idumota', '2028-09-30', 20],
  ['1147', 'NEW DIVINE DECONGESTANT', 'Decongestant', 'Sachet 1.0', 225, 300, 30, 'GJ', '2028-08-30', 10],
  ['1148', 'NGC EXPECTORANT SYRUP', 'Cough Syrup', 'Syrup Bottle', 600, 900, 5, 'SANTUS', '2028-05-30', 2],
  ['9-1764583', 'NGC VALGIN SACHET', 'Analgesics', 'Sachet 1.0', 110, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['1149', 'NGC-VALGIN CAPLET', 'Analgesics', 'Sachet 1.0', 100, 200, 86, 'GJ', '2028-09-30', 15],
  ['1150', 'NIFECARD XL 30MG', 'Antihypertensive', 'Sachet 1.0', 2070, 3000, 2, 'GJ', '2028-05-30', 2],
  ['1151', 'NIFECURE 20MG SACHET', 'Antihypertensive', 'Sachet 1.0', 68, 200, 95, 'PHARMATON', '2028-09-30', 15],
  ['1152', 'NIFEDIN RETARD 20MG', 'Antihypertensive', 'Sachet 1.0', 1030, 1600, 14, 'SANTUS', '2028-07-30', 3],
  ['1153', 'NIFEDIPINE 20MG SACHET', 'Antihypertensive', 'Sachet 1.0', 200, 400, 0, 'SANTUS', '2027-12-30', 3],
  ['1155', 'NIGHT AID TABLET', 'Analgesics', 'Sachet 1.0', 500, 700, 6, 'REALS', '2028-06-30', 2],
  ['3-1759606', 'NITRESS (ZOLPIDEM)', 'Analgesics', 'Tablet 1.0', 200, 300, 36, 'GJ', '2028-08-30', 10],
  ['1158', 'NITROFURANTOIN 100MG', 'Antifungal', 'Sachet 1.0', 615, 900, 2, 'GJ', '2028-04-30', 2],
  ['1159', 'NIXODERM CREAM (BIG)', 'Cream', 'Tube', 1260, 1700, 3, 'Shelflife', '2028-05-30', 2],
  ['1160', 'NIXODERM CREAM (REG)', 'Cream', 'Tube', 1200, 1600, 3, 'SANTUS', '2028-05-30', 2],
  ['1162', 'NOPEST INSECTICIDE', 'Insecticide', 'Aerosol Can', 1375, 1900, 0, 'System', '2028-06-30', 1],
  ['5-1780488', 'NORITE CHARCOAL TAB', 'Supplements', 'Tablet 1.0', 140, 200, 20, 'GJ', '2028-07-30', 5],
  ['1164', 'NORMAL SALINE INFUSION', 'Infusion', '500ml Bottle', 540, 850, 2, 'PHARMATON', '2028-06-30', 2],
  ['1165', 'NORMORETIC TABLET', 'Antihypertensive', 'Sachet 1.0', 280, 400, 34, 'GJ', '2028-08-30', 10],
  ['1163', 'NORPIFLEX SACHET', 'Analgesics', 'Sachet 1.0', 1500, 2100, 2, 'GJ', '2028-05-30', 2],
  ['P0000037', 'NOSCLAV 228MG SUSPENSION', 'Antibiotics', 'Suspension', 1596, 2500, 2, 'Shelflife', '2028-05-30', 2],

  // PAGE 28 (47 items)
  ['1166', 'NOSCLAV 625MG SACHET', 'Antibiotics', 'Sachet 1.0', 2500, 3700, 3, 'GJ', '2028-06-30', 2],
  ['1167', 'NOSPAMIN DROPS', 'Antispasmodic', 'Drops Bottle', 650, 1000, 9, 'SANTUS', '2028-07-30', 2],
  ['1168', 'NOSPAMIN TABLET', 'Antispasmodic', 'Sachet 1.0', 350, 600, 0, 'System', '2027-12-30', 2],
  ['1169', 'NOVALYN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 820, 1200, 3, 'SANTUS', '2028-05-30', 2],
  ['1170', 'NOVOGOLD TABLET', 'Analgesics', 'Sachet 1.0', 200, 300, 35, 'SANTUS', '2028-08-30', 10],
  ['1171', 'NUGEL-O SUSPENSION', 'Antacid', 'Suspension', 3000, 4200, 0, 'GJ', '2027-12-30', 1],
  ['1172', 'NUTRAVIT-C SYRUP', 'Vitamin', 'Syrup Bottle', 1850, 2700, 5, 'GJ', '2028-06-30', 2],
  ['1173', 'NUTRAVITE MULTIVITAMIN', 'Multivitamin', 'Syrup Bottle', 2800, 4000, 1, 'GJ', '2028-04-30', 1],
  ['1174', 'NUTRIFY EFFERVESCENT', 'Vitamin', 'Tube', 3384, 4900, 3, 'Shelflife', '2028-06-30', 1],
  ['1175', 'NUTRIFY LIQUID TONIC', 'Supplements', 'Syrup Bottle', 6800, 9600, 0, 'GJ', '2027-12-30', 1],
  ['1176', 'NUTRIRUSH SACHET', 'Supplements', 'Sachet 1.0', 146, 200, 1, 'GJ', '2028-04-30', 3],
  ['1177', 'NYLON GLOVES PACK', 'Consumables', 'Pack 1', 350, 500, 9, 'PHARMATON', '2029-12-30', 3],
  ['1178', 'NYSTATIN ORAL DROPS', 'Antifungal', 'Drops Bottle', 740, 1200, 0, 'SANTUS', '2027-12-30', 2],
  ['1179', 'NYSTATIN TABLET', 'Antifungal', 'Sachet 1.0', 600, 900, 0, 'System', '2027-12-30', 2],
  ['1180', 'NYSTATIN VAGINAL TAB', 'Antifungal', 'Pack 1', 930, 1400, 0, 'GJ', '2027-12-30', 2],
  ['1181', 'O/H BRAIN SUPPORT', 'Supplements', 'Sachet 1.0', 1380, 2000, 0, 'SANTUS', '2027-12-30', 1],
  ['1182', 'O/H EYE CARE SACHET', 'Supplements', 'Sachet 1.0', 900, 1400, 2, 'CHRIS', '2028-05-30', 1],
  ['1184', 'O/H VIT-C 1000MG BOTTLE', 'Vitamin', 'Bottle', 6000, 8500, 0, 'CHRIS', '2027-12-30', 1],
  ['1183', 'O/H VITAMIN C SACHET', 'Vitamin', 'Sachet 1.0', 550, 1000, 0, 'CHRIS', '2027-12-30', 2],
  ['1185', 'O/H ZINC SACHET', 'Supplements', 'Sachet 1.0', 715, 1200, 28, 'CHRIS', '2028-08-30', 5],
  ['1186', 'O/H ZINC TABLET', 'Supplements', 'Tablet 1.0', 92, 150, 0, 'System', '2027-12-30', 10],
  ['1187', 'OBRON-6 PRENATAL', 'Supplements', 'Sachet 1.0', 700, 1000, 11, 'PHARMATON', '2028-07-30', 3],
  ['1188', 'OCEANIC OMEGA-3', 'Supplements', 'Sachet 1.0', 450, 800, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['1189', 'OCEFIX 200MG PACK', 'Antibiotics', 'Pack 1', 3100, 4200, 1, 'SANTUS', '2028-05-30', 1],
  ['1190', 'OCEFIX 400MG PACK', 'Antibiotics', 'Pack 1', 4500, 6400, 0, 'GJ', '2027-12-30', 1],
  ['1191', 'OCEFIX SUSPENSION 100MG', 'Antibiotics', 'Suspension', 2950, 4200, 1, 'GJ', '2028-04-30', 1],
  ['1192', 'OCEFIX SUSPENSION 50MG', 'Antibiotics', 'Suspension', 2100, 3000, 4, 'GJ', '2028-05-30', 2],
  ['1193', 'OCTAMIN MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 600, 900, 0, 'ELIONA', '2027-12-30', 2],
  ['1194', 'OCULLERG EYE DROPS', 'Eye drops', 'Drops Bottle', 1400, 2000, 0, 'System', '2027-12-30', 1],
  ['1195', 'ODOMOS MOSQUITO CREAM', 'Cream', 'Tube', 548, 800, 14, 'ELIONA', '2028-08-30', 3],
  ['1196', 'ODOMOS LOTION', 'Cream', 'Bottle', 550, 800, 0, 'WELLNESS', '2027-12-30', 2],
  ['2-1779365', 'OFLOXACIN 200MG SACHET', 'Antibiotics', 'Sachet 1.0', 400, 800, 4, 'GJ', '2028-05-30', 2],
  ['1197', 'OFLOXACIN 400MG PACK', 'Antibiotics', 'Pack 1', 450, 900, 2, 'Theo Rep', '2028-05-30', 2],
  ['1198', 'OFLOXACIN TABLET (545)', 'Antibiotics', 'Sachet 1.0', 545, 1000, 9, 'GJ', '2028-07-30', 3],
  ['1201', 'OLFEN GEL (BIG)', 'Gel', 'Tube', 4250, 5700, 0, 'System', '2027-12-30', 1],
  ['1202', 'OLFEN GEL (SMALL)', 'Gel', 'Tube', 950, 1400, 0, 'System', '2027-12-30', 1],
  ['1203', 'OLIGOCARE TABLET', 'Supplements', 'Pack 1', 4500, 6500, 0, 'SANTUS', '2027-12-30', 1],
  ['1200', 'OLOPATADINE EYE DROPS', 'Eye drops', 'Drops Bottle', 2750, 3900, 2, 'GJ', '2028-05-30', 1],
  ['1204', 'OMEFAST 20MG PACK', 'Anti-ulcer', 'Pack 1', 3650, 5250, 0, 'PHARMATON', '2027-12-30', 1],
  ['1205', 'OMEFAST 20MG SACHET', 'Anti-ulcer', 'Sachet 1.0', 660, 950, 0, 'SANTUS', '2027-12-30', 2],
  ['1206', 'OMEGA-3 FORTE SACHET', 'Supplements', 'Sachet 1.0', 1920, 2700, 2, 'CHRIS', '2028-05-30', 1],
  ['1208', 'OMEGA-3 SACHET (1100)', 'Supplements', 'Sachet 1.0', 1100, 1700, 0, 'SANTUS', '2027-12-30', 2],
  ['1209', 'OMEGA-3 SACHET (550)', 'Supplements', 'Sachet 1.0', 550, 800, 0, 'PHARMATON', '2027-12-30', 2],
  ['1210', 'OMEGA-H3 SACHET', 'Multivitamin', 'Sachet 1.0', 1870, 2500, 15, 'SANTUS', '2028-08-30', 3],
  ['1211', 'OMEGA-H3 PACK', 'Multivitamin', 'Pack 1', 8720, 11800, 0, 'SANTUS', '2027-12-30', 1],
  ['2-1764358', 'OMEGOL 1000MG SACHET', 'Supplements', 'Sachet 1.0', 1300, 1500, 0, 'N/F REP', '2027-12-30', 2],
  ['2-1764357', 'OMEGOL PLUS SACHET', 'Supplements', 'Sachet 1.0', 1300, 2000, 0, 'N/F REP', '2027-12-30', 2],

  // PAGE 29 (47 items)
  ['1212', 'OMEPRAZOLE 20MG (400)', 'Anti-ulcer', 'Sachet 1.0', 400, 600, 0, 'GJ', '2027-12-30', 3],
  ['1213', 'OMEPRAZOLE 20MG PACK (495)', 'Anti-ulcer', 'Pack 1', 495, 700, 9, 'PHARMATON', '2028-07-30', 3],
  ['1217', 'OMEPRAZOLE 20MG (370)', 'Anti-ulcer', 'Sachet 1.0', 370, 600, 0, 'GJ', '2027-12-30', 3],
  ['1214', 'OMEPRAZOLE INJ 40MG', 'Injectables', 'Pack 1', 450, 700, 0, 'SANTUS', '2027-12-30', 2],
  ['1215', 'OMEPRAZOLE PACK (450)', 'Anti-ulcer', 'Pack 1', 450, 700, 0, 'BLESSED NOEDYKE', '2027-12-30', 3],
  ['3-1756125', 'OMEPRAZOLE PACK (280)', 'Anti-ulcer', 'Pack 1', 280, 500, 0, 'SANTUS', '2027-12-30', 3],
  ['1218', 'OMESHAL 20MG PACK', 'Anti-ulcer', 'Pack 1', 1250, 1750, 0, 'SANTUS', '2027-12-30', 2],
  ['0-1769689', 'OMESHAL DISPENSER BOX', 'Anti-ulcer', 'Pack 1', 9600, 13600, 2, 'SANTUS', '2028-06-30', 1],
  ['1219', 'OMESHAL SACHET', 'Anti-ulcer', 'Sachet 1.0', 735, 1050, 0, 'PHARMATON', '2027-12-30', 2],
  ['1220', 'OMRON M2 B.P MACHINE', 'Machine', 'Digital Unit', 42000, 59000, 1, 'CHRIS', '2030-12-30', 1],
  ['3-1758196', 'OMRON M3 B.P MACHINE', 'Machine', 'Digital Unit', 55000, 73000, 0, 'CHRIS', '2030-12-30', 1],
  ['1221', 'ONYDAZ TABLET', 'Antibiotics', 'Pack 1', 2500, 3800, 0, 'System', '2027-12-30', 1],
  ['1222', 'ORAL-B TOOTHPASTE', 'Consumables', 'Tube', 750, 1300, 0, 'OJEZ', '2028-06-30', 2],
  ['1224', 'ORAXIN SYRUP', 'Multivitamin', 'Syrup Bottle', 5300, 7500, 0, 'SANTUS', '2027-12-30', 1],
  ['1225', 'ORELOX SUSPENSION', 'Antibiotics', 'Suspension', 5500, 7900, 0, 'SANTUS', '2027-12-30', 1],
  ['1227', 'ORHEPTAL BLOOD TONIC (BIG)', 'Vitamin', 'Syrup Bottle', 3400, 4800, 2, 'GJ', '2028-06-30', 1],
  ['1228', 'ORHEPTAL CAPSULE SACHET', 'Multivitamin', 'Sachet 1.0', 300, 450, 3, 'CHRIS', '2028-05-30', 2],
  ['1229', 'ORHEPTAL TONIC (MEDIUM)', 'Vitamin', 'Syrup Bottle', 1450, 2000, 2, 'SANTUS', '2028-05-30', 2],
  ['1230', 'ORHEPTAL TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 650, 900, 3, 'SANTUS', '2028-05-30', 2],
  ['1231', 'ORJI TABLET', 'Antiallergy', 'Sachet 1.0', 85, 150, 82, 'SANTUS', '2028-09-30', 15],
  ['1232', 'OROFER SYRUP', 'Supplements', 'Syrup Bottle', 1300, 1800, 0, 'SANTUS', '2027-12-30', 1],
  ['1233', 'ORPHESIC TABLET', 'Analgesics', 'Sachet 1.0', 930, 1300, 17, 'SANTUS', '2028-08-30', 5],
  ['1-1762368', 'ORPHETAB SACHET', 'Analgesics', 'Sachet 1.0', 1450, 2000, 5, 'SANTUS', '2028-06-30', 2],
  ['1235', 'ORS PINNACLE SACHET', 'Electrolyte', 'Sachet 1.0', 120, 200, 11, 'GJ', '2028-07-30', 5],
  ['1236', 'ORS PINNACLE CITRATE', 'Antidote', 'Sachet 1.0', 120, 200, 0, 'GJ', '2027-12-30', 5],
  ['1237', 'OSTEO AID TABLET', 'Supplements', 'Pack 1', 1600, 2500, 0, 'GJ', '2027-12-30', 1],
  ['1238', 'OSTEO INHALER', 'Inhaler', 'MDI Inhaler', 384, 600, 7, 'GJ', '2028-06-30', 2],
  ['1239', 'OSTEO TABLET', 'Analgesics', 'Sachet 1.0', 340, 500, 1, 'SANTUS', '2028-04-30', 2],
  ['1240', 'OSTEOCARE SACHET', 'Supplements', 'Sachet 1.0', 3150, 4400, 0, 'SANTUS', '2027-12-30', 1],
  ['1241', 'OSTEOCARE PACK', 'Supplements', 'Pack 1', 6950, 9500, 0, 'GJ', '2027-12-30', 1],
  ['1242', 'OTHOALGIA TABLET', 'Analgesics', 'Tablet 1.0', 48, 70, 0, 'System', '2027-12-30', 5],
  ['1243', 'OTOMED EAR DROPS', 'Ear drops', 'Drops Bottle', 830, 1300, 11, 'SANTUS', '2028-07-30', 3],
  ['1244', 'OTRIVIN NASAL DROPS (ADULT)', 'Drops', 'Drops Bottle', 3450, 4800, 0, 'GJ', '2027-12-30', 1],
  ['1245', 'OTRIVIN PAEDIATRIC DROPS', 'Drops', 'Drops Bottle', 3350, 4800, 0, 'GJ', '2027-12-30', 1],
  ['1246', 'OVACARE TABLET PACK', 'Supplements', 'Pack 1', 5800, 8000, 0, 'SANTUS', '2027-12-30', 1],
  ['5-1772105', 'OVULATION TEST KIT', 'Test', 'Test Kit', 4800, 6900, 0, 'Idumota', '2027-12-30', 1],
  ['1247', 'OXCLAV SUSPENSION', 'Antibiotics', 'Suspension', 930, 1300, 0, 'SANTUS', '2027-12-30', 1],
  ['1248', 'OXY-10 ACNE GEL', 'Gel', 'Tube', 4200, 5800, 0, 'SANTUS', '2027-12-30', 1],
  ['1249', 'OXYTETRACYCLINE CAPSULE', 'Antibiotics', 'Pack 1', 255, 600, 12, 'SANTUS', '2028-07-30', 3],
  ['1250', 'OXYUREA 500MG (HYDREA)', 'Supplements', 'Pack 1', 3500, 5000, 1, 'SANTUS', '2028-04-30', 1],
  ['P0000014', 'P-ALAXIN SACHET (875)', 'Antimalaria', 'Sachet 1.0', 875, 1250, 18, 'GREENLIFE', '2028-08-30', 5],
  ['P0000015', 'P-ALAXIN SACHET (1050)', 'Antimalaria', 'Sachet 1.0', 1050, 1500, 20, 'GREENLIFE', '2028-08-30', 5],
  ['1254', 'P-ALAXIN QS PACK', 'Antimalaria', 'Pack 1', 1360, 2300, 2, 'GJ', '2028-05-30', 2],
  ['1255', 'P-ALAXIN SUSPENSION', 'Antimalaria', 'Suspension', 1650, 2300, 1, 'GREENLIFE', '2028-04-30', 2],
  ['1257', 'P-ALAXIN TABLET X9', 'Antimalaria', 'Pack 1', 1450, 2200, 1, 'GREENLIFE', '2028-04-30', 2],
  ['1258', 'P-ALAXIN X12 PACK', 'Antimalaria', 'Pack 1', 1380, 2000, 5, 'GJ', '2028-06-30', 2],
  ['1251', 'PAINBEX SYRUP', 'Analgesics', 'Syrup Bottle', 550, 800, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],

  // PAGE 30 (47 items)
  ['1252', 'PAINKIL SYRUP', 'Analgesics', 'Syrup Bottle', 360, 600, 0, 'GJ', '2027-12-30', 2],
  ['1253', 'PAINKIL TABLET SACHET', 'Analgesics', 'Sachet 1.0', 120, 200, 20, 'SANTUS', '2028-08-30', 5],
  ['1259', 'PALUDOSE SUSPENSION', 'Antimalaria', 'Suspension', 720, 1200, 0, 'GJ', '2027-12-30', 2],
  ['1260', 'PANADOL EXTRA SACHET', 'Analgesics', 'Sachet 1.0', 310, 600, 40, 'GJ', '2028-09-30', 10],
  ['1261', 'PANADOL EXTRA TABLET', 'Analgesics', 'Tablet 1.0', 85, 150, 16, 'GJ', '2028-07-30', 5],
  ['1262', 'PANADOL REGULAR SACHET', 'Analgesics', 'Sachet 1.0', 360, 500, 38, 'GJ', '2028-09-30', 10],
  ['1264', 'PANDA COLD SACHET (310)', 'Antiallergy', 'Sachet 1.0', 310, 450, 0, 'SANTUS', '2027-12-30', 3],
  ['1265', 'PANDA COLD SACHET (320)', 'Antiallergy', 'Sachet 1.0', 320, 450, 0, 'SANTUS', '2027-12-30', 3],
  ['1266', 'PANDA PCM SYRUP (620)', 'Analgesics', 'Syrup Bottle', 620, 900, 7, 'SANTUS', '2028-06-30', 2],
  ['1267', 'PANDA PCM SYRUP (550)', 'Analgesics', 'Syrup Bottle', 550, 850, 2, 'SANTUS', '2028-05-30', 2],
  ['1268', 'PANFOR SR 500MG (METFORMIN)', 'Antidiabetics', 'Sachet 1.0', 1250, 1800, 2, 'GJ', '2028-05-30', 2],
  ['4-1772702', 'PANZOLE 200MG (ALBENDAZOLE)', 'Anti helminthic', 'Tablet 1.0', 145, 300, 24, 'GJ', '2028-08-30', 5],
  ['9-1761654B', 'PANZOLE 400MG (ALBENDAZOLE)', 'Anti helminthic', 'Tablet 1.0', 145, 300, 59, 'GJ', '2028-09-30', 10],
  ['1270', 'PARACETAMOL VIAL INJ', 'Injectables', 'Vial 1', 550, 850, 6, 'GJ', '2028-06-30', 2],
  ['1271', 'PARACETAMOL AMP INJ', 'Injectables', 'Ampoule 1', 50, 100, 38, 'GJ', '2028-08-30', 10],
  ['1272', 'PARACETAMOL SYRUP (570)', 'Analgesics', 'Syrup Bottle', 570, 800, 16, 'GJ', '2028-07-30', 5],
  ['1273', 'PARAFEN CAPLET SACHET', 'Analgesics', 'Sachet 1.0', 138, 200, 2, 'SANTUS', '2028-04-30', 5],
  ['P0000035', 'PARANIGHT TABLET', 'Analgesics', 'Sachet 1.0', 880, 1300, 0, 'SANTUS', '2027-12-30', 2],
  ['1274', 'PASSION ENERGY SACHET', 'Supplements', 'Sachet 1.0', 200, 250, 22, 'ORANGE DRUGS', '2028-08-30', 5],
  ['1275', 'PAWAFENAC 50MG', 'Analgesics', 'Sachet 1.0', 150, 250, 31, 'CHRIS', '2028-08-30', 10],
  ['1276', 'PEFLOTAB 400MG PACK', 'Antibiotics', 'Pack 1', 3400, 5000, 1, 'GJ', '2028-05-30', 1],
  ['1277', 'PEFLOXACIN 400MG SACHET', 'Antibiotics', 'Sachet 1.0', 1650, 2500, 0, 'PHARMATON', '2027-12-30', 2],
  ['1278', 'PELROZE VITAMIN C', 'Vitamin', 'Syrup Bottle', 2500, 3500, 3, 'CHRIS', '2028-05-30', 1],
  ['1280', 'PENICILLIN EYE OINTMENT', 'Ointment', 'Tube', 570, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['1279', 'PENICILLIN SKIN OINTMENT', 'Gel', 'Tube', 580, 900, 11, 'SANTUS', '2028-07-30', 3],
  ['P0000008', 'PENTAX PARACETAMOL SYRUP', 'Analgesics', 'Syrup Bottle', 420, 700, 4, 'GJ', '2028-05-30', 2],
  ['1281', 'PENTAX-PLUS SACHET', 'Analgesics', 'Sachet 1.0', 122, 200, 68, 'SANTUS', '2028-09-30', 15],
  ['1282', 'PENTAZOCINE AMP INJ', 'Injectables', 'Ampoule 1', 680, 1250, 0, 'PHARMATON', '2027-12-30', 2],
  ['1283', 'PEPTIKIT TRIPLE THERAPY', 'Anti-ulcer', 'Pack 1', 7000, 10200, 0, 'CHRIS', '2027-12-30', 1],
  ['1284', 'PERFECTIL ORIGINAL', 'Supplements', 'Pack 1', 1950, 2750, 0, 'System', '2027-12-30', 1],
  ['1285', 'PERILON TABLET (CYPROHEPTADINE)', 'Antiallergy', 'Sachet 1.0', 320, 500, 1, 'GJ', '2028-04-30', 2],
  ['1286', 'PERMETHRIN SCABIES CREAM', 'Cream', 'Tube', 1200, 1800, 5, 'SANTUS', '2028-06-30', 2],
  ['1288', 'PICAGOLD MULTIVITAMIN', 'Multivitamin', 'Syrup Bottle', 300, 600, 0, 'System', '2027-12-30', 2],
  ['1289', 'PICCAN TEETHING SYRUP', 'Analgesics', 'Syrup Bottle', 9000, 12900, 0, 'WELLNESS', '2027-12-30', 1],
  ['1290', 'PILEX TABLET SACHET', 'Supplements', 'Sachet 1.0', 460, 700, 24, 'SANTUS', '2028-08-30', 5],
  ['8-1768498', 'PILRID CAPSULE', 'Supplements', 'Pack 1', 2000, 3000, 5, 'HEALTHY CHILD', '2028-06-30', 2],
  ['1291', 'PINAMAL ANTIMALARIAL', 'Antimalaria', 'Pack 1', 330, 500, 0, 'CIKASON', '2027-12-30', 2],
  ['1292', 'PIRAMAL-T PACK', 'Antimalaria', 'Pack 1', 1560, 2300, 2, 'Shelflife', '2028-05-30', 2],
  ['1293', 'PIRITON EXPECTORANT (890)', 'Cough Syrup', 'Syrup Bottle', 890, 1300, 1, 'SANTUS', '2028-04-30', 2],
  ['1294', 'PIRITON EXPECTORANT (910)', 'Cough Syrup', 'Syrup Bottle', 910, 1300, 15, 'SANTUS', '2028-08-30', 3],
  ['1295', 'PIRITON AMP INJ', 'Injectables', 'Ampoule 1', 50, 100, 7, 'GJ', '2028-06-30', 3],
  ['1296', 'PIRITON SYRUP', 'Antiallergy', 'Syrup Bottle', 685, 1000, 4, 'GJ', '2028-05-30', 2],
  ['1297', 'PIRITON TABLET SACHET (70)', 'Antiallergy', 'Sachet 1.0', 70, 200, 61, 'SANTUS', '2028-09-30', 15],
  ['1298', 'PIRITON TABLET SACHET (75)', 'Antiallergy', 'Sachet 1.0', 75, 150, 67, 'SANTUS', '2028-09-30', 15],
  ['1299', 'PITROFIN SUSPENSION', 'Antifungal', 'Suspension', 980, 1400, 3, 'SANTUS', '2028-05-30', 2],
  ['1300', 'PLAGERINE 75MG (CLOPIDOGREL)', 'Antihypertensive', 'Sachet 1.0', 1075, 1500, 5, 'SANTUS', '2028-06-30', 2],
  ['1301', 'PLASTER 1-INCH ROLL', 'Consumables', 'Roll', 600, 850, 9, 'PHARMATON', '2029-12-30', 3],

  // PAGE 31 (47 items)
  ['1302', 'PLASTER 2-INCH ROLL', 'Consumables', 'Roll', 1120, 1600, 3, 'SANTUS', '2029-12-30', 2],
  ['3-1757506', 'PLASTER 4-INCH ROLL', 'Consumables', 'Roll', 2240, 3150, 11, 'SANTUS', '2029-12-30', 3],
  ['1303', 'PLASTER STRIP (SINGLE)', 'Consumables', 'Single Unit', 12, 50, 127, 'BLESSED NOEDYKE', '2029-12-30', 30],
  ['5-1776258', 'POCARI SWEAT DRINK', 'Electrolyte', 'Bottle', 967, 1300, 0, 'System', '2027-12-30', 2],
  ['5-1783104', 'POCCO TELMISARTAN 40MG', 'Antihypertensive', 'Sachet 1.0', 561, 900, 10, 'GJ', '2028-07-30', 3],
  ['1304', 'POCCOCLAV 625MG', 'Antibiotics', 'Pack 1', 1950, 2800, 0, 'GJ', '2027-12-30', 1],
  ['1-1765882', 'POCCOZITH 500MG PACK', 'Antibiotics', 'Pack 1', 1300, 1900, 0, 'GJ', '2027-12-30', 2],
  ['1305', 'POCCOZITH SACHET', 'Antibiotics', 'Sachet 1.0', 1210, 1800, 0, 'SANTUS', '2027-12-30', 2],
  ['1306', 'PODOPHYLLIN CREAM', 'Cream', 'Tube', 1600, 2600, 1, 'GJ', '2028-04-30', 1],
  ['1307', 'POLYFORT SUSPENSION', 'Antacid', 'Suspension', 1760, 2600, 4, 'SANTUS', '2028-05-30', 2],
  ['9-1783591', 'POLYGEL DOUBLE STRENGTH', 'Antacid', 'Suspension', 2400, 3400, 2, 'SANTUS', '2028-05-30', 1],
  ['1308', 'POLYGEL SUSPENSION', 'Anti-ulcer', 'Suspension', 1750, 2500, 1, 'SANTUS', '2028-04-30', 1],
  ['1309', 'POSTER CONTRACEPTIVE TAB', 'Contraceptive', 'Pack 1', 1300, 2000, 2, 'SANTUS', '2028-05-30', 2],
  ['1310', 'POSTINOR-2 ORIGINAL', 'Contraceptive', 'Pack 1', 1750, 3000, 2, 'GJ', '2028-06-30', 2],
  ['1311', 'POSTPILL CONTRACEPTIVE', 'Contraceptive', 'Pack 1', 1200, 2000, 44, 'GJ', '2028-09-30', 10],
  ['1312', 'POTASSIUM CITRATE CAP', 'Supplements', 'Capsule 1', 140, 200, 5, 'System', '2028-05-30', 5],
  ['1313', 'POWER HEALTH TONIC', 'Supplements', 'Syrup Bottle', 600, 850, 0, 'GREENLIFE', '2027-12-30', 2],
  ['1315', 'PREDICURE TABLET', 'Antiallergy', 'Sachet 1.0', 67, 150, 272, 'SANTUS', '2028-10-30', 30],
  ['1316', 'PREDILIN TABLET', 'Antiallergy', 'Sachet 1.0', 180, 300, 0, 'SANTUS', '2027-12-30', 3],
  ['3-1778499', 'PREDNISOLONE 5MG SACHET', 'Antiallergy', 'Sachet 1.0', 55, 100, 0, 'GJ', '2027-12-30', 5],
  ['1317', 'PREGABALIN 75MG (1160)', 'Analgesics', 'Sachet 1.0', 1160, 1800, 6, 'GJ', '2028-06-30', 2],
  ['1318', 'PREGABALIN 75MG (800)', 'Analgesics', 'Sachet 1.0', 800, 1500, 0, 'Theo Rep', '2027-12-30', 2],
  ['1319', 'PREGABALIN 50MG (770)', 'Analgesics', 'Sachet 1.0', 770, 1300, 0, 'SANTUS', '2027-12-30', 2],
  ['1320', 'PREGASAFE TABLET', 'Supplements', 'Sachet 1.0', 1000, 1500, 0, 'SANTUS', '2027-12-30', 2],
  ['1321', 'PREGESIC TABLET', 'Analgesics', 'Sachet 1.0', 540, 800, 0, 'REALS', '2027-12-30', 2],
  ['1322', 'PREGMOM PRENATAL', 'Supplements', 'Pack 1', 5770, 8800, 0, 'SANTUS', '2027-12-30', 1],
  ['1324', 'PREGNACARE ORIGINAL SACHET', 'Supplements', 'Sachet 1.0', 6750, 9350, 2, 'GJ', '2028-06-30', 1],
  ['1323', 'PREGNACARE BREASTFEEDING', 'Supplements', 'Pack 1', 4500, 6500, 0, 'System', '2027-12-30', 1],
  ['1325', 'PREGNACARE HIM & HER', 'Supplements', 'Sachet 1.0', 5300, 8000, 9, 'ELIONA', '2028-07-30', 2],
  ['1326', 'PREGNACARE MAX PACK', 'Supplements', 'Pack 1', 9300, 13000, 3, 'GJ', '2028-06-30', 1],
  ['1327', 'PREGNANCY TEST STRIP', 'Consumables', 'Test Strip', 70, 150, 239, 'GJ', '2029-10-30', 30],
  ['1328', 'PREGNATONE SACHET', 'Supplements', 'Sachet 1.0', 440, 650, 6, 'GJ', '2028-06-30', 2],
  ['1329', 'PREXAM (TENOXICAM 20MG)', 'Analgesics', 'Capsule 1', 255, 370, 25, 'SANTUS', '2028-08-30', 5],
  ['1330', 'PREXAM INJECTION', 'Injectables', 'Ampoule 1', 636, 1000, 0, 'PHARMATON', '2027-12-30', 2],
  ['1331', 'PRIMOLUT-N TABLET', 'Contraceptive', 'Sachet 1.0', 7500, 10800, 3, 'Idumota', '2028-06-30', 1],
  ['1332', 'PRIMOSA EVENING PRIMROSE', 'Supplements', 'Pack 1', 1500, 2500, 0, 'GJ', '2027-12-30', 1],
  ['1333', 'PRIMPEX SUSPENSION', 'Antibiotics', 'Suspension', 690, 1000, 2, 'SANTUS', '2028-05-30', 2],
  ['1334', 'PRIMPEX TABLET', 'Antibiotics', 'Sachet 1.0', 266, 400, 9, 'SANTUS', '2028-06-30', 3],
  ['1335', 'PRIMPEX-DS TABLET', 'Antibiotics', 'Sachet 1.0', 515, 800, 3, 'SANTUS', '2028-05-30', 2],
  ['1336', 'PRINPIL TABLET (LISINOPRIL)', 'Antihypertensive', 'Sachet 1.0', 200, 350, 0, 'ELIONA', '2027-12-30', 2],
  ['1337', 'PROBIOTIC CAPSULE (139)', 'Supplements', 'Capsule 1', 139, 150, 0, 'CIKASON', '2027-12-30', 5],
  ['1338', 'PROBIOTIC BOTTLE (5000)', 'Supplements', 'Bottle', 5000, 9000, 2, 'ELIONA', '2028-06-30', 1],
  ['1339', 'PROCAINE PENICILLIN INJ', 'Injectables', 'Vial 1', 330, 600, 12, 'PHARMATON', '2028-07-30', 3],
  ['1340', 'PROCOLD TABLET SACHET', 'Antiallergy', 'Sachet 1.0', 308, 500, 15, 'SANTUS', '2028-07-30', 5],
  ['1341', 'PROGESTAN CAPSULE', 'Contraceptive', 'Sachet 1.0', 900, 1300, 3, 'System', '2028-05-30', 1],
  ['1342', 'PROGESTERONE INJ', 'Contraceptive', 'Ampoule 1', 380, 600, 9, 'SANTUS', '2028-06-30', 2],
  ['4-1783000', 'PROLIFE CALCIUM & VIT D', 'Vitamin', 'Bottle', 2300, 3500, 2, 'GJ', '2028-05-30', 1],

  // PAGE 32 (47 items)
  ['1343', 'PROLIFE MEN MULTIVITAMIN', 'Supplements', 'Bottle', 2300, 3500, 2, 'ELIONA', '2028-05-30', 1],
  ['1344', 'PROLIFE MULTIVITAMIN', 'Supplements', 'Bottle', 2300, 3500, 3, 'ELIONA', '2028-05-30', 1],
  ['1345', 'PROLIFE VITAMIN C', 'Vitamin', 'Bottle', 2300, 3500, 5, 'ELIONA', '2028-06-30', 2],
  ['1346', 'PROMETHAZINE AMP INJ', 'Injectables', 'Ampoule 1', 40, 100, 15, 'GJ', '2028-07-30', 5],
  ['1347', 'PROMETHAZINE TABLET', 'Antiallergy', 'Tablet 1.0', 12, 25, 108, 'GJ', '2028-09-30', 20],
  ['1348', 'PROPRANOLOL 40MG SACHET', 'Antihypertensive', 'Sachet 1.0', 580, 850, 3, 'GJ', '2028-05-30', 2],
  ['P0000048', 'PROSTATE HEALTH PACK', 'Supplements', 'Pack 1', 9100, 12800, 0, 'GJ', '2027-12-30', 1],
  ['1349', 'PROVIRON 25MG TABLET', 'Supplements', 'Pack 1', 8250, 12600, 1, 'SANTUS', '2028-05-30', 1],
  ['1350', 'PULMOCEF TABLET', 'Antimalaria', 'Pack 1', 2341, 3400, 2, 'Shelflife', '2028-05-30', 1],
  ['1351', 'PURE COD LIVER OIL', 'Supplements', 'Bottle', 2200, 3500, 0, 'SANTUS', '2027-12-30', 1],
  ['1352', 'PYMAL 40/240MG', 'Antimalaria', 'Pack 1', 1100, 1700, 0, 'GJ', '2027-12-30', 2],
  ['1353', 'PYRANTRIN SUSPENSION', 'Anti helminthic', 'Suspension', 1200, 1700, 5, 'GJ', '2028-06-30', 2],
  ['1354', 'PYRANTRIN TABLET', 'Anti helminthic', 'Pack 1', 680, 1000, 21, 'GJ', '2028-08-30', 5],
  ['0-1760357B', 'PYRIDOX TABLET', 'Antimalaria', 'Pack 1', 350, 500, 0, 'SHALINA', '2027-12-30', 2],
  ['1355', 'PYROX COMBI ULCER KIT', 'Anti-ulcer', 'Pack 1', 10500, 15000, 0, 'GJ', '2027-12-30', 1],
  ['1356', 'PYTHROCIN 500MG (AZITHROMYCIN)', 'Antibiotics', 'Pack 1', 1269, 1900, 0, 'Shelflife', '2027-12-30', 2],
  ['1357', 'QUADRICLEAR CREAM', 'Cream', 'Tube', 1612, 2300, 2, 'Shelflife', '2028-05-30', 1],
  ['1359', 'QUININE AMP INJ', 'Antimalaria', 'Ampoule 1', 280, 450, 17, 'SANTUS', '2028-07-30', 5],
  ['1360', 'QUININE SYRUP', 'Antimalaria', 'Syrup Bottle', 350, 600, 0, 'System', '2027-12-30', 2],
  ['8-1768934', 'RABEPRAZOLE 20MG SACHET', 'Anti-ulcer', 'Sachet 1.0', 750, 1200, 0, 'PHARMATON', '2027-12-30', 2],
  ['1362', 'RABEPRAZOLE PACK', 'Anti-ulcer', 'Pack 1', 1600, 2300, 4, 'GJ', '2028-06-30', 2],
  ['1365', 'RAID INSECTICIDE', 'Insecticide', 'Aerosol Can', 1980, 2800, 0, 'System', '2028-06-30', 1],
  ['1366', 'RANFERON TONIC (BIG)', 'Multivitamin', 'Syrup Bottle', 1020, 1500, 2, 'GJ', '2028-05-30', 2],
  ['1-1764521B', 'RANFERON TONIC (SMALL)', 'Multivitamin', 'Syrup Bottle', 725, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['1367', 'RANOXYL SUSPENSION', 'Antibiotics', 'Suspension', 950, 1350, 0, 'CHRIS', '2027-12-30', 2],
  ['1368', 'RAPICLAV 625MG', 'Antibiotics', 'Pack 1', 1800, 3800, 0, 'ELIONA', '2027-12-30', 1],
  ['1369', 'RATIN-A CREAM (TRETINOIN)', 'Cream', 'Tube', 2050, 3200, 1, 'GJ', '2028-05-30', 1],
  ['4-1754913', 'RAVIMAL CHILD PACK', 'Antimalaria', 'Pack 1', 385, 700, 0, 'GJ', '2027-12-30', 2],
  ['3-1762515', 'RAVIMAL ADULT PACK', 'Antimalaria', 'Pack 1', 500, 800, 12, 'GJ', '2028-07-30', 3],
  ['1399', 'RE-VIVE CAPSULE', 'Supplements', 'Pack 1', 3800, 10000, 0, 'CHRIS', '2027-12-30', 1],
  ['1370', 'READ-A-DREAM INSECTICIDE', 'Insecticide', 'Aerosol Can', 3400, 4500, 0, 'Emeka-Market', '2028-06-30', 1],
  ['1371', 'REAL EXTRA PARACETAMOL', 'Analgesics', 'Sachet 1.0', 170, 300, 30, 'SANTUS', '2028-08-30', 10],
  ['1372', 'REALS CALCIUM', 'Supplements', 'Bottle', 1300, 2100, 0, 'System', '2027-12-30', 1],
  ['1373', 'RECOXIB CAPSULE (CELECOXIB)', 'Analgesics', 'Sachet 1.0', 1350, 2000, 0, 'SANTUS', '2027-12-30', 2],
  ['1374', 'REFUCIL SUSPENSION', 'Antifungal', 'Suspension', 1650, 2500, 0, 'SANTUS', '2027-12-30', 1],
  ['1375', 'REFUCIL TABLET (GRISEOFULVIN)', 'Antifungal', 'Tablet 1.0', 255, 370, 20, 'PHARMATON', '2028-07-30', 5],
  ['1379', 'RELAXO GEL', 'Cream', 'Tube', 950, 1400, 0, 'PHARMATON', '2027-12-30', 1],
  ['1380', 'RELCER GEL ANTACID (SMALL)', 'Anti-ulcer', 'Suspension', 850, 1200, 2, 'GJ', '2028-05-30', 2],
  ['1381', 'RELCER SUSPENSION (BIG)', 'Anti-ulcer', 'Suspension', 1270, 1850, 0, 'GJ', '2027-12-30', 2],
  ['1382', 'RELIEF CREAM', 'Cream', 'Tube', 500, 750, 0, 'System', '2027-12-30', 2],
  ['1384', 'RELOAD 4 KIDS SYRUP', 'Supplements', 'Syrup Bottle', 4800, 5700, 0, 'System', '2027-12-30', 1],
  ['9-1763921', 'RELOAD FORTE', 'Supplements', 'Bottle', 9500, 13000, 0, 'CHRIS', '2027-12-30', 1],
  ['1385', 'RELOAD IMMUNE', 'Supplements', 'Bottle', 18530, 25500, 0, 'SANTUS', '2027-12-30', 1],
  ['1386', 'RELOAD JUNIOR', 'Supplements', 'Bottle', 8200, 10900, 0, 'GJ', '2027-12-30', 1],
  ['3-1756125B', 'RELOAD KIDS', 'Supplements', 'Bottle', 9900, 13500, 0, 'SANTUS', '2027-12-30', 1],
  ['1387', 'RELOAD MEN', 'Supplements', 'Bottle', 15000, 25000, 0, 'CHRIS', '2027-12-30', 1],
  ['1388', 'RELOAD MULTIVITAMIN MAX', 'Supplements', 'Bottle', 16750, 25000, 1, 'SANTUS', '2028-06-30', 1],

  // PAGE 33 (47 items)
  ['1389', 'RELOAD PRENATAL SACHET', 'Antiallergy', 'Sachet 1.0', 583, 850, 23, 'PHARMATON', '2028-08-30', 5],
  ['1390', 'RELOAD WOMEN (17500)', 'Supplements', 'Bottle', 17500, 25000, 2, 'SANTUS', '2028-06-30', 1],
  ['1383', 'RELOAD WOMEN MAX', 'Supplements', 'Bottle', 17724, 25500, 2, 'GJ', '2028-06-30', 1],
  ['1391', 'RELUDRINE SACHET', 'Antimalaria', 'Sachet 1.0', 823, 1200, 7, 'Shelflife', '2028-06-30', 2],
  ['1392', 'RENERVE PLUS CAPSULE', 'Supplements', 'Pack 1', 6000, 8800, 4, 'GJ', '2028-06-30', 1],
  ['1393', 'RENIX 40MG (FUROSEMIDE)', 'Antihypertensive', 'Sachet 1.0', 100, 150, 0, 'System', '2027-12-30', 5],
  ['1394', 'RENOCAV 625MG PACK', 'Antibiotics', 'Pack 1', 2300, 4000, 5, 'SANTUS', '2028-06-30', 2],
  ['7-1772106', 'RENOCAV SUSPENSION', 'Antibiotics', 'Suspension', 1900, 3000, 10, 'SANTUS', '2028-07-30', 3],
  ['1395', 'REPROFEN SYRUP', 'Analgesics', 'Syrup Bottle', 685, 1000, 5, 'GJ', '2028-06-30', 2],
  ['1396', 'REPTOGEL ANTACID', 'Antacid', 'Suspension', 300, 500, 0, 'SANTUS', '2027-12-30', 2],
  ['1397', 'RETRAX SUSPENSION (LEVAMISOLE)', 'Anti helminthic', 'Suspension', 470, 700, 2, 'SANTUS', '2028-05-30', 2],
  ['1398', 'RETRAX TABLET (LEVAMISOLE)', 'Anti helminthic', 'Tablet 1.0', 430, 700, 13, 'GJ', '2028-07-30', 5],
  ['1401', 'REXIFEN 400MG SACHET', 'Analgesics', 'Sachet 1.0', 270, 400, 30, 'SANTUS', '2028-08-30', 10],
  ['1400', 'REXIFEN SYRUP', 'Analgesics', 'Syrup Bottle', 600, 900, 6, 'SANTUS', '2028-06-30', 2],
  ['5-1778501', 'RHINATHIOL COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 1500, 2300, 1, 'GJ', '2028-05-30', 1],
  ['1402', 'RICAM CAPSULE (PIROXICAM)', 'Analgesics', 'Sachet 1.0', 160, 300, 30, 'SANTUS', '2028-08-30', 10],
  ['1403', 'ROBB BALM (MEDIUM)', 'Balm', 'Jar', 380, 600, 5, 'SANTUS', '2028-06-30', 2],
  ['1404', 'ROBB BALM (SMALL)', 'Balm', 'Jar', 105, 200, 40, 'SANTUS', '2028-09-30', 10],
  ['1405', 'ROBB EXTRA FORTE', 'Balm', 'Jar', 530, 800, 1, 'SANTUS', '2028-05-30', 2],
  ['1406', 'ROBB INHALER', 'Inhaler', 'Nasal Stick', 325, 500, 4, 'SANTUS', '2028-06-30', 2],
  ['8-1758968', 'ROCEPHIN 1G INJ (ROCHE)', 'Injectables', 'Pack 1', 9100, 13000, 3, 'SANTUS', '2028-06-30', 1],
  ['1408', 'ROCEPHIN INJ (STD)', 'Injectables', 'Vial 1', 9100, 12900, 0, 'SANTUS', '2027-12-30', 1],
  ['1409', 'ROGOTINON TABLET', 'Contraceptive', 'Pack 1', 1150, 1700, 2, 'GJ', '2028-05-30', 1],
  ['1410', 'ROPHEGAN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 450, 650, 8, 'SANTUS', '2028-06-30', 2],
  ['1411', 'ROSCILOX CAPSULE', 'Antibiotics', 'Pack 1', 1900, 2700, 0, 'CHRIS', '2027-12-30', 1],
  ['1413', 'ROSUVASTATIN 10MG SACHET', 'Hypercholesterolemia', 'Sachet 1.0', 1335, 1900, 5, 'GJ', '2028-06-30', 2],
  ['1412', 'ROSUVASTATIN 5MG SACHET', 'Hypercholesterolemia', 'Sachet 1.0', 550, 800, 9, 'GJ', '2028-07-30', 3],
  ['1414', 'ROXIRITE CAPSULE (1980)', 'Antibiotics', 'Pack 1', 1980, 2900, 0, 'SANTUS', '2027-12-30', 1],
  ['1415', 'ROXIRITE CAPSULE (2250)', 'Antibiotics', 'Pack 1', 2250, 3800, 2, 'SANTUS', '2028-05-30', 1],
  ['1416', 'ROYAL GUARD SUPPLEMENT', 'Supplements', 'Bottle', 2550, 4000, 2, 'VITAL ROYAL', '2028-06-30', 1],
  ['1417', 'ROYAL REST SUPPLEMENT', 'Supplements', 'Bottle', 2550, 3800, 0, 'VITAL ROYAL', '2027-12-30', 1],
  ['1419', 'RULOX SUSPENSION (SMALL)', 'Antacid', 'Suspension', 920, 1300, 1, 'GJ', '2028-05-30', 2],
  ['1418', 'RULOX SUSPENSION (BIG)', 'Antacid', 'Suspension', 1750, 2500, 1, 'PHARMATON', '2028-05-30', 2],
  ['1420', 'RULOX TABLET SACHET', 'Antacid', 'Sachet 1.0', 140, 200, 0, 'GJ', '2027-12-30', 5],
  ['1422', 'SABRESTEN CREAM', 'Antifungal', 'Tube', 1080, 1600, 0, 'System', '2027-12-30', 1],
  ['1423', 'SACOVIT CAPSULE', 'Multivitamin', 'Sachet 1.0', 500, 750, 0, 'GJ', '2027-12-30', 2],
  ['1424', 'SAFI BLOOD PURIFIER (BIG)', 'Detoxifier', 'Bottle', 10200, 13800, 0, 'GJ', '2027-12-30', 1],
  ['8-1768416', 'SAFI BLOOD PURIFIER (SMALL)', 'Detoxifier', 'Bottle', 5800, 8000, 1, 'GJ', '2028-05-30', 1],
  ['1425', 'SALBACEF INJ 1.5G', 'Injectables', 'Vial 1', 1800, 2700, 12, 'GJ', '2028-07-30', 3],
  ['1426', 'SALBUTAMOL SYRUP', 'Antiallergy', 'Syrup Bottle', 340, 500, 0, 'GJ', '2027-12-30', 2],
  ['1428', 'SALBUTAMOL 4MG LOOSE TAB', 'Antiallergy', 'Tablet 1.0', 4.8, 7.65, 52, 'GJ', '2028-08-30', 20],
  ['1429', 'SALINE NASAL DROPS', 'Drops', 'Drops Bottle', 2100, 3000, 0, 'GJ', '2027-12-30', 1],
  ['4-1759954', 'SALONPAS PAIN PATCH BOX', 'Analgesics', 'Pack 1', 6500, 9000, 0, 'System', '2027-12-30', 1],
  ['1430', 'SALONPAS PATCH SACHET', 'Analgesics', 'Sachet 1.0', 170, 250, 6, 'System', '2028-06-30', 3],
  ['9-1762430B', 'SAMPRAVA TABLET', 'Antibiotics', 'Pack 1', 2000, 3000, 10, 'Theo Rep', '2028-07-30', 2],
  ['1431', 'SAYANA PRESS CONTRACEPTIVE', 'Contraceptive', 'Single Unit', 1600, 2500, 1, 'SFH', '2028-05-30', 1],
  ['1432', 'SCALP VEIN SET', 'Consumables', 'Single Unit', 50, 100, 279, 'SANTUS', '2029-12-30', 30],

  // PAGE 34 (47 items)
  ['7-1760210B', 'SCALP VEIN SET (ALT)', 'Consumables', 'Single Unit', 50, 100, 0, 'GJ', '2029-12-30', 10],
  ['1433', 'SECTAB 500MG (SECNIDAZOLE)', 'Antibiotics', 'Pack 1', 580, 900, 0, 'GJ', '2027-12-30', 2],
  ['1434', 'SECWID TABLET (SECNIDAZOLE)', 'Antibiotics', 'Pack 1', 768, 1200, 2, 'Shelflife', '2028-05-30', 2],
  ['2-1776452', 'SENEGRA TABLET (SILDENAFIL)', 'Supplements', 'Pack 1', 2850, 4000, 4, 'GJ', '2028-06-30', 2],
  ['1435', 'SENSODYNE TOOTHPASTE (REG)', 'Consumables', 'Tube', 750, 950, 0, 'System', '2028-06-30', 2],
  ['1436', 'SENSODYNE TOOTHPASTE (BIG)', 'Consumables', 'Tube', 970, 1300, 0, 'System', '2028-06-30', 2],
  ['1437', 'SEVEN SEAS COD LIVER OIL', 'Supplements', 'Bottle', 8800, 12000, 0, 'GJ', '2027-12-30', 1],
  ['1438', "SHAL'ARTEM FORTE PACK", 'Antimalaria', 'Pack 1', 750, 1400, 34, 'SANTUS', '2028-09-30', 10],
  ['1439', "SHAL'ARTEM X18", 'Antimalaria', 'Pack 1', 670, 1000, 0, 'SANTUS', '2027-12-30', 3],
  ['1440', "SHAL'ARTEM X6", 'Antimalaria', 'Pack 1', 530, 800, 2, 'SHALINA', '2028-05-30', 3],
  ['1441', "SHAL'ARTEM X12", 'Antimalaria', 'Pack 1', 635, 950, 0, 'SANTUS', '2027-12-30', 3],
  ['1442', "SHAL'ARTEM X24", 'Antimalaria', 'Pack 1', 550, 1000, 10, 'SHALINA', '2028-07-30', 5],
  ['1444', 'SHALTOUX COUGH SYRUP (900)', 'Cough Syrup', 'Syrup Bottle', 900, 1300, 1, 'CHRIS', '2028-04-30', 2],
  ['1443', 'SHALTOUX COUGH SYRUP (800)', 'Cough Syrup', 'Syrup Bottle', 800, 1200, 3, 'SHALINA', '2028-05-30', 2],
  ['9-1764702', 'SHALTOUX LOZENGES PACK', 'Cough Syrup', 'Pack 1', 300, 800, 0, 'SHALINA', '2027-12-30', 2],
  ['1445', 'SHALTOUX LOZENGE (SINGLE)', 'Lozenges', 'Tablet 1.0', 47.5, 75, 644, 'CHRIS', '2028-10-30', 50],
  ['8-1760356', 'SHALTOUX SACHET', 'Lozenges', 'Sachet 1.0', 300, 500, 0, 'SHALINA', '2027-12-30', 3],
  ['9-1760357', 'SHALZIN SUSPENSION', 'Antibiotics', 'Suspension', 1500, 2200, 0, 'SHALINA', '2027-12-30', 1],
  ['1-1756125C', 'SILICON DERM GEL', 'Gel', 'Tube', 1980, 2800, 0, 'SANTUS', '2027-12-30', 1],
  ['1448', 'SILVER BIRD EUCALYPTUS OIL', 'Antiseptic', 'Bottle', 4150, 5850, 4, 'SANTUS', '2028-07-30', 2],
  ['1449', 'SIMVASTATIN 20MG SACHET', 'Hypercholesterolemia', 'Sachet 1.0', 1100, 1600, 1, 'GJ', '2028-04-30', 2],
  ['1450', 'SINUFED COLD TABLET', 'Antiallergy', 'Sachet 1.0', 960, 1400, 0, 'PHARMATON', '2027-12-30', 2],
  ['1451', 'SINUFED SYRUP', 'Cough Syrup', 'Syrup Bottle', 700, 1000, 0, 'SANTUS', '2027-12-30', 2],
  ['1452', 'SIRDALUD 2MG (TIZANIDINE)', 'Muscle Relaxant', 'Sachet 1.0', 450, 650, 0, 'System', '2027-12-30', 2],
  ['1-1762369', 'SKIMATE CREAM', 'Antifungal', 'Tube', 580, 900, 6, 'SANTUS', '2028-06-30', 2],
  ['1454', 'SKIN TAG PAD / REMOVER', 'Cream', 'Single Unit', 100, 200, 270, 'ELIONA', '2028-10-30', 20],
  ['1455', 'SKIN WHITE CAPSULE', 'Supplements', 'Capsule 1', 135, 200, 0, 'SANTUS', '2027-12-30', 5],
  ['1456', 'SKINEAL CREAM (ORIGINAL)', 'Antifungal', 'Tube', 1050, 1500, 33, 'Emeka-Market', '2028-09-30', 10],
  ['1457', 'SKIPEM CREAM', 'Cream', 'Tube', 500, 700, 0, 'Emeka-Market', '2027-12-30', 2],
  ['168', 'SLAP INSECTICIDE', 'Insecticide', 'Aerosol Can', 2200, 3200, 1, 'SANTUS', '2028-06-30', 1],
  ['1458', "SMOKER'S LOZENGES", 'Lozenges', 'Sachet 1.0', 185, 300, 0, 'SANTUS', '2027-12-30', 2],
  ['1460', 'SNIPER INSECTICIDE', 'Insecticide', 'Bottle', 1917, 2500, 0, 'PHARMATON', '2028-06-30', 1],
  ['1461', 'SODAMINT LOOSE TABLET', 'Antacid', 'Tablet 1.0', 2.4, 3.5, 1232, 'SANTUS', '2028-10-30', 50],
  ['1462', 'SOLOTONE TONIC', 'Multivitamin', 'Syrup Bottle', 2390, 3500, 0, 'GJ', '2027-12-30', 1],
  ['1463', 'SOLOTONE CAPSULE (120)', 'Multivitamin', 'Sachet 1.0', 120, 200, 0, 'GJ', '2027-12-30', 3],
  ['1464', 'SOLOTONE CAPSULE (250)', 'Multivitamin', 'Sachet 1.0', 250, 350, 0, 'SANTUS', '2027-12-30', 3],
  ['1465', 'SOPCEE VITAMIN C X100 (WHITE)', 'Vitamin', 'Pack 1', 530, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['1466', 'SOPCEE VITAMIN C X100 (ORANGE)', 'Vitamin', 'Pack 1', 530, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['1467', 'SORBITOL SACHET', 'GIT', 'Sachet 1.0', 135, 200, 3, 'PHARMATON', '2028-05-30', 3],
  ['4-1782231B', 'SORBITOL SOLUTION BOTTLE', 'GIT', 'Bottle', 2970, 4500, 0, 'SANTUS', '2027-12-30', 1],
  ['P0000002', 'SOREPILS LOZENGE (SINGLE)', 'Lozenges', 'Sachet 1.0', 42.5, 75, 30, 'HEALTHY CHILD', '2028-08-30', 10],
  ['1469', 'SOREPILS LOZENGES SACHET', 'Lozenges', 'Sachet 1.0', 415, 600, 0, 'PHARMATON', '2027-12-30', 3],
  ['1470', 'SPARTAN-C VITAMIN C', 'Vitamin', 'Pack 1', 990, 1400, 12, 'GJ', '2028-07-30', 3],
  ['1471', 'SPERM BOOST SUPPLEMENT', 'Supplements', 'Pack 1', 3400, 5000, 3, 'GJ', '2028-06-30', 1],
  ['1-1768501', 'SPIRONOLACTONE 25MG', 'Antihypertensive', 'Sachet 1.0', 750, 1100, 1, 'SANTUS', '2028-04-30', 2],
  ['1472', 'SPORIDEX 250MG (CEPHALEXIN)', 'Antibiotics', 'Pack 1', 2100, 3000, 3, 'SANTUS', '2028-06-30', 2],
  ['1473', 'SPORIDEX 500MG (CEPHALEXIN)', 'Antibiotics', 'Pack 1', 2700, 3900, 3, 'GJ', '2028-06-30', 2],

  // PAGE 35 (47 items)
  ['1474', 'SPORIDEX SUSPENSION', 'Antibiotics', 'Pack 1', 2100, 3200, 2, 'GJ', '2028-05-30', 2],
  ['9-1770895', 'STEVECEE VITAMIN C (BIG)', 'Vitamin', 'Syrup Bottle', 1230, 1800, 1, 'STEVENS', '2028-05-30', 2],
  ['9-1770896', 'STEVECEE VITAMIN C (SMALL)', 'Vitamin', 'Syrup Bottle', 650, 1000, 12, 'STEVENS', '2028-07-30', 3],
  ['2-1770896', 'STEVOLYN COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 725, 1200, 0, 'STEVENS', '2027-12-30', 2],
  ['1475', 'STEVUFEN IBUPROFEN SYRUP', 'Analgesics', 'Syrup Bottle', 580, 850, 4, 'GJ', '2028-06-30', 2],
  ['1476', 'STIMUNO IMMUNE SYRUP', 'Supplements', 'Syrup Bottle', 1230, 1800, 0, 'SANTUS', '2027-12-30', 1],
  ['1477', 'STREPSILS LOZENGES PACK', 'Lozenges', 'Sachet 1.0', 2500, 3500, 1, 'GJ', '2028-05-30', 1],
  ['P0000029', 'STREPSILS SACHET (2S)', 'Lozenges', 'Sachet 1.0', 213, 300, 18, 'SANTUS', '2028-08-30', 5],
  ['1478', 'STREPTOMYCIN INJ 1G', 'Injectables', 'Vial 1', 530, 900, 4, 'GJ', '2028-06-30', 2],
  ['1479', 'STRESS B-COMPLEX SACHET', 'Supplements', 'Sachet 1.0', 400, 900, 18, 'CHRIS', '2028-08-30', 5],
  ['1480', 'STRESS B-COMPLEX PACK', 'Supplements', 'Pack 1', 3000, 5000, 0, 'CHRIS', '2027-12-30', 1],
  ['1481', 'STUGERON 25MG (CINNARIZINE)', 'Antiallergy', 'Sachet 1.0', 900, 1300, 14, 'CHRIS', '2028-07-30', 3],
  ['1482', 'SUDOCREM ANTISEPTIC CREAM', 'Cream', 'Jar', 1650, 3500, 0, 'SANTUS', '2027-12-30', 1],
  ['1483', 'SUDREX HEADACHE TABLET', 'Analgesics', 'Sachet 1.0', 445, 700, 1, 'ORANGE DRUGS', '2028-05-30', 3],
  ['1485', 'SULPHUR OINTMENT (560)', 'Ointment', 'Jar', 560, 900, 0, 'GJ', '2027-12-30', 2],
  ['1486', 'SULPHUR OINTMENT (520)', 'Ointment', 'Jar', 520, 900, 1, 'SANTUS', '2028-05-30', 2],
  ['1487', 'SUMO ACTIVE SYRUP', 'Multivitamin', 'Syrup Bottle', 2130, 3500, 3, 'PHARMATON', '2028-06-30', 1],
  ['1489', 'SUPER APETITE SYRUP', 'Antiallergy', 'Syrup Bottle', 1530, 2200, 2, 'GJ', '2028-05-30', 2],
  ['1490', 'SUPER APETITE TABLET', 'Antiallergy', 'Sachet 1.0', 105, 200, 65, 'GJ', '2028-09-30', 15],
  ['7-1754820', 'SUPER IMMUNE TONIC', 'Vitamin', 'Syrup Bottle', 3630, 5200, 2, 'GJ', '2028-06-30', 1],
  ['1491', 'SUPER-D CONDOM (10S)', 'Consumables', 'Pack 1', 450, 700, 3, 'SANTUS', '2028-08-30', 2],
  ['1492', 'SUPER-D CONDOM (25S)', 'Consumables', 'Pack 1', 770, 1200, 6, 'SANTUS', '2028-08-30', 2],
  ['1493', 'SUPER-D CONDOM (3S)', 'Consumables', 'Pack 1', 270, 400, 0, 'SANTUS', '2028-06-30', 2],
  ['1494', 'SUPERMAC SUSPENSION (BIG)', 'Antacid', 'Suspension', 2600, 3200, 0, 'SANTUS', '2027-12-30', 1],
  ['1495', 'SUPERMAC SUSPENSION (MED)', 'Anti-ulcer', 'Suspension', 950, 1500, 4, 'SANTUS', '2028-06-30', 2],
  ['1496', 'SUPERMAC TABLET SACHET', 'Antacid', 'Sachet 1.0', 710, 1000, 3, 'SANTUS', '2028-06-30', 2],
  ['P0000050', 'SUPIME (CEFEPIME INJ)', 'Antibiotics', 'Vial 1', 1750, 2600, 4, 'SANTUS', '2028-06-30', 2],
  ['3-1774638', 'SUPRABETICS SUPPLEMENT', 'Supplements', 'Pack 1', 9102, 13700, 0, 'CHI', '2027-12-30', 1],
  ['1498', 'SUPRAKIDS MULTIVITAMIN', 'Supplements', 'Syrup Bottle', 3400, 4800, 0, 'PHARMATON', '2027-12-30', 1],
  ['1500', 'SUPRAMULT TONIC', 'Multivitamin', 'Syrup Bottle', 1930, 3000, 0, 'GJ', '2027-12-30', 1],
  ['1501', 'SUPRAMULT CAPSULE PACK', 'Supplements', 'Pack 1', 7200, 10000, 0, 'GJ', '2027-12-30', 1],
  ['1502', 'SUREX NIGHT TABLET', 'Analgesics', 'Sachet 1.0', 237, 350, 0, 'SANTUS', '2027-12-30', 3],
  ['1503', 'SURGICAL BLADE / GLOVE', 'Consumables', 'Single Unit', 260, 400, 0, 'PHARMATON', '2029-12-30', 5],
  ['9-1763640', 'SWEDISH BITTERS HERBAL', 'Supplements', 'Bottle', 6000, 8300, 0, 'GJ', '2027-12-30', 1],
  ['1504', 'SWIDAR TABLET (SP ANTIMALARIAL)', 'Antimalaria', 'Pack 1', 400, 800, 12, 'GJ', '2028-07-30', 3],
  ['1505', 'SWIDON TABLET', 'Sedative', 'Tablet 1.0', 67, 100, 1, 'GJ', '2028-04-30', 3],
  ['P0000025', 'SWIPHA AMLODIPINE 10MG', 'Antihypertensive', 'Sachet 1.0', 330, 600, 10, 'Shelflife', '2028-07-30', 3],
  ['P0000024', 'SWIPHA AMLODIPINE 5MG', 'Antihypertensive', 'Sachet 1.0', 265, 400, 5, 'Shelflife', '2028-06-30', 3],
  ['1518', 'SWITEM TELMISARTAN', 'Antihypertensive', 'Sachet 1.0', 1250, 1800, 2, 'SANTUS', '2028-05-30', 2],
  ['P0000009', 'SYMAR TABLET', 'Supplements', 'Sachet 1.0', 1767, 2600, 3, 'GJ', '2028-06-30', 2],
  ['1535', 'T-MYCIN EYE DROPS', 'Eye drops', 'Drops Bottle', 1150, 1650, 0, 'GJ', '2027-12-30', 1],
  ['1506', 'TABUFEN SYRUP', 'Analgesics', 'Syrup Bottle', 350, 500, 0, 'FIDSON', '2027-12-30', 2],
  ['1507', 'TACORANGE VITAMIN C', 'Vitamin', 'Syrup Bottle', 480, 700, 0, 'GJ', '2027-12-30', 2],
  ['1508', 'TAGACURE (CIMETIDINE)', 'Anti-ulcer', 'Pack 1', 930, 1400, 1, 'SANTUS', '2028-04-30', 2],
  ['1509', 'TALEN 1.5MG TABLET', 'Antihypertensive', 'Tablet 1.0', 25, 50, 35, 'GJ', '2028-08-30', 10],
  ['1510', 'TALEN 3MG TABLET', 'Antihypertensive', 'Tablet 1.0', 37, 60, 5, 'ELBE', '2028-06-30', 5],
  ['1511', 'TAMETHER ANTIMALARIAL', 'Antimalaria', 'Pack 1', 1250, 2000, 0, 'ELIONA', '2027-12-30', 2],

  // PAGE 36 (47 items)
  ['0-1759572', 'TAMOXIFEN 20MG TABLET', 'Supplements', 'Sachet 1.0', 1200, 1750, 3, 'SANTUS', '2028-06-30', 2],
  ['8-1760212', 'TAMSULON (TAMSULOSIN 0.4MG)', 'Prostate drug', 'Sachet 1.0', 700, 1200, 9, 'GJ', '2028-07-30', 3],
  ['1512', 'TANZOL SUSPENSION (ALBENDAZOLE)', 'Anti helminthic', 'Suspension', 340, 600, 9, 'Shelflife', '2028-07-30', 3],
  ['1513', 'TANZOL TABLET (ALBENDAZOLE)', 'Anti helminthic', 'Tablet 1.0', 180, 300, 36, 'GJ', '2028-09-30', 10],
  ['1514', 'TECOTRIM TABLET', 'Antibiotics', 'Pack 1', 530, 800, 3, 'GJ', '2028-05-30', 2],
  ['1515', 'TEETHING MIXTURE / POWDER', 'Analgesics', 'Syrup Bottle', 835, 1300, 0, 'SANTUS', '2027-12-30', 2],
  ['1516', 'TELMISARTAN 80MG (1250)', 'Antihypertensive', 'Sachet 1.0', 1250, 1800, 0, 'GJ', '2027-12-30', 2],
  ['9-1764588', 'TELMISARTAN 40MG (490)', 'Antihypertensive', 'Sachet 1.0', 490, 700, 6, 'SANTUS', '2028-06-30', 3],
  ['405', 'TELMISARTAN 80MG (1100)', 'Antihypertensive', 'Sachet 1.0', 1100, 1600, 14, 'SANTUS', '2028-08-30', 5],
  ['1517', 'TELMISARTAN 40MG (1050)', 'Antihypertensive', 'Sachet 1.0', 1050, 1500, 0, 'GJ', '2027-12-30', 2],
  ['1519', 'TELSARTAN-H TABLET', 'Antihypertensive', 'Sachet 1.0', 750, 1100, 0, 'System', '2027-12-30', 2],
  ['1520', 'TEMPCHECK DIGITAL THERMOMETER', 'Machine', 'Digital Unit', 2500, 3500, 0, 'GJ', '2030-12-30', 1],
  ['1521', 'TENORIC 100/25MG TABLET', 'Antihypertensive', 'Sachet 1.0', 2100, 3100, 3, 'SANTUS', '2028-06-30', 2],
  ['1522', 'TENORIC 50/12.5MG TABLET', 'Antihypertensive', 'Sachet 1.0', 1900, 2800, 3, 'GJ', '2028-06-30', 2],
  ['P0000043', 'TERBINAFINE TABLET PACK', 'Antifungal', 'Pack 1', 3400, 5000, 2, 'PHARMATON', '2028-06-30', 1],
  ['1524', 'TETANUS TOXOID VACCINE INJ', 'Injectables', 'Ampoule 1', 400, 700, 30, 'CHRIS', '2028-08-30', 10],
  ['9-1764360', 'TETMOSOL MEDICATED SOAP', 'Antiseptic', 'Bar', 710, 1100, 0, 'System', '2028-06-30', 3],
  ['1525', 'TETRACYCLINE 250MG SACHET', 'Antibiotics', 'Sachet 1.0', 205, 300, 43, 'PHARMATON', '2028-09-30', 10],
  ['9-1763061', 'THEOCLAV 625MG PACK', 'Antibiotics', 'Pack 1', 2700, 4200, 2, 'Theo Rep', '2028-06-30', 2],
  ['9-1763549', 'THEOCLAV SACHET', 'Antibiotics', 'Sachet 1.0', 1450, 2100, 0, 'Theo Rep', '2027-12-30', 2],
  ['0-1758731', 'THEOCLAV SUSPENSION', 'Antibiotics', 'Suspension', 1700, 2800, 5, 'Theo Rep', '2028-06-30', 2],
  ['8-1757934', 'THEOFIX TABLET (CEFIXIME)', 'Antibiotics', 'Pack 1', 2600, 4000, 0, 'Theo Rep', '2027-12-30', 1],
  ['1528', 'THERMOMETER (CLINICAL)', 'Consumables', 'Digital Unit', 963, 1400, 2, 'GJ', '2030-12-30', 2],
  ['1529', 'THIOCAL-12 SYRUP', 'Vitamin', 'Syrup Bottle', 880, 1300, 0, 'GJ', '2027-12-30', 2],
  ['1530', 'THROTAL SORE THROAT SPRAY', 'Antibiotics', 'Spray', 880, 1400, 3, 'SANTUS', '2028-06-30', 2],
  ['1531', 'TIMOMED EYE DROPS (TIMOLOL)', 'Eye drops', 'Drops Bottle', 850, 1300, 1, 'GJ', '2028-05-30', 1],
  ['1532', 'TINIFLOX TABLET (1300)', 'Antibiotics', 'Sachet 1.0', 1300, 2000, 2, 'GJ', '2028-05-30', 2],
  ['1533', 'TINIFLOX TABLET (630)', 'Antibiotics', 'Pack 1', 630, 1000, 0, 'PHARMATON', '2027-12-30', 2],
  ['1534', 'TINIZOL TABLET (TINIDAZOLE)', 'Antibiotics', 'Sachet 1.0', 218, 400, 4, 'GJ', '2028-06-30', 2],
  ['1536', 'TOBIDEX EYE DROPS', 'Antiallergy', 'Drops Bottle', 650, 1000, 0, 'SANTUS', '2027-12-30', 1],
  ['1537', 'TOOTHBRUSH (ADULT/SOFT)', 'Consumables', 'Single Unit', 300, 450, 0, 'System', '2029-12-30', 5],
  ['2-1753906', 'TORSINEX-5 (TORSEMIDE)', 'Antihypertensive', 'Sachet 1.0', 870, 1250, 7, 'GJ', '2028-07-30', 3],
  ['1-1765045', 'TORSINEX-10 (TORSEMIDE)', 'Antihypertensive', 'Sachet 1.0', 1100, 1550, 2, 'SANTUS', '2028-06-30', 2],
  ['1538', "TOT'HEMA IRON AMP", 'Vitamin', 'Ampoule 1', 625, 900, 28, 'SANTUS', '2028-08-30', 10],
  ['1539', 'TOUCH AND GO ORAL GEL', 'Analgesics', 'Tube', 2350, 3300, 0, 'SANTUS', '2027-12-30', 1],
  ['1540', 'TRADOMAL TABLET', 'Analgesics', 'Sachet 1.0', 1650, 2400, 0, 'GJ', '2027-12-30', 2],
  ['1542', 'TRETINOIN ACNE CREAM', 'Cream', 'Tube', 4300, 6200, 0, 'GJ', '2027-12-30', 1],
  ['1543', 'TREXIP TABLET (CIPROFLOXACIN)', 'Antibiotics', 'Sachet 1.0', 550, 1200, 0, 'GREENLIFE', '2027-12-30', 2],
  ['1544', 'TREXIP-TZ TABLET', 'Antibiotics', 'Pack 1', 1000, 2500, 0, 'GREENLIFE', '2027-12-30', 2],
  ['1545', 'TRIBACT TRIPLE CREAM', 'Cream', 'Tube', 550, 900, 2, 'GJ', '2028-05-30', 2],
  ['4-1772885', 'TRIBINAT 500MG (CEFUROXIME)', 'Antibiotics', 'Pack 1', 2300, 4000, 6, 'Theo Rep', '2028-07-30', 2],
  ['1546', 'TRIBOTAN CREAM (BIG)', 'Cream', 'Tube', 1500, 2100, 9, 'FIDSON', '2028-07-30', 3],
  ['1547', 'TRIBOTAN CREAM (SMALL)', 'Cream', 'Tube', 1250, 1800, 9, 'PHARMATON', '2028-07-30', 3],
  ['1548', 'TRICLAV SUSPENSION', 'Antibiotics', 'Suspension', 2030, 2900, 0, 'GJ', '2027-12-30', 1],
  ['1549', 'TRICOD COUGH SYRUP', 'Cough Syrup', 'Syrup Bottle', 750, 1300, 78, 'Theo Rep', '2028-10-30', 15],
  ['1550', 'TRIFLUCON (FLUCONAZOLE)', 'Antifungal', 'Tablet 1.0', 125, 300, 17, 'Theo Rep', '2028-08-30', 5],
  ['7-1757933', 'TRIOKIT ULCER THERAPY', 'Antibiotics', 'Pack 1', 2000, 3000, 0, 'Theo Rep', '2027-12-30', 1],

  // PAGE 37 (47 items)
  ['1-1765307', 'TRIZEM CREAM', 'Cream', 'Tube', 750, 1300, 4, 'SANTUS', '2028-06-30', 2],
  ['1551', 'TROOP-C VITAMIN C SYRUP', 'Vitamin', 'Syrup Bottle', 720, 1100, 12, 'GJ', '2028-07-30', 3],
  ['1552', 'TROOP-C X100 PACK', 'Vitamin', 'Pack 1', 690, 950, 0, 'GJ', '2027-12-30', 2],
  ['1553', 'TROPITONE TABLET', 'Supplements', 'Sachet 1.0', 105, 200, 0, 'GJ', '2027-12-30', 3],
  ['1554', 'TUCLOX SUSPENSION', 'Antibiotics', 'Suspension', 920, 1350, 5, 'GJ', '2028-06-30', 2],
  ['1555', 'TUMOL PARACETAMOL', 'Analgesics', 'Sachet 1.0', 130, 200, 13, 'GJ', '2028-07-30', 5],
  ['1556', 'TUTOLIN COUGH SYRUP (ADULT)', 'Cough Syrup', 'Syrup Bottle', 465, 700, 1, 'GJ', '2028-05-30', 2],
  ['1557', 'TUTOLIN EXPECTORANT', 'Cough Syrup', 'Syrup Bottle', 500, 800, 12, 'GJ', '2028-07-30', 3],
  ['1558', 'TUTOLIN PAED SYRUP', 'Cough Syrup', 'Syrup Bottle', 500, 700, 3, 'GJ', '2028-06-30', 2],
  ['7-1773491', 'TUXIL RUNNING NOSE SYRUP', 'Antiallergy', 'Syrup Bottle', 699, 1200, 4, 'Shelflife', '2028-06-30', 2],
  ['1559', 'TUXIL-D COUGH SYRUP (BIG)', 'Cough Syrup', 'Syrup Bottle', 800, 1200, 4, 'GJ', '2028-06-30', 2],
  ['1560', 'TUXIL-D COUGH SYRUP (REG)', 'Cough Syrup', 'Syrup Bottle', 755, 1200, 7, 'GJ', '2028-07-30', 2],
  ['1561', 'TUXIL-N COUGH SYRUP (BIG)', 'Cough Syrup', 'Syrup Bottle', 800, 1200, 12, 'GJ', '2028-08-30', 3],
  ['1562', 'TUXIL-N COUGH SYRUP (REG)', 'Cough Syrup', 'Syrup Bottle', 637, 1200, 12, 'GJ', '2028-08-30', 3],
  ['1563', 'TYDIBACT CREAM', 'Cream', 'Tube', 280, 400, 0, 'System', '2027-12-30', 2],
  ['1564', 'TYDINEAL TRIPLE CREAM', 'Cream', 'Tube', 800, 1200, 13, 'PHARMATON', '2028-08-30', 3],
  ['1565', 'TYDISIL CREAM', 'Cream', 'Tube', 1020, 1600, 0, 'GJ', '2027-12-30', 2],
  ['1566', 'ULGICID SUSPENSION', 'Anti-ulcer', 'Suspension', 3300, 4200, 0, 'SANTUS', '2027-12-30', 1],
  ['1567', 'UNABENC LOZENGES', 'Lozenges', 'Sachet 1.0', 180, 250, 0, 'System', '2027-12-30', 3],
  ['1568', 'UNICID ANTACID TABLET', 'Antacid', 'Sachet 1.0', 134, 200, 42, 'PHARMATON', '2028-09-30', 10],
  ['1569', 'UNIGYL 200MG (METRONIDAZOLE)', 'Antibiotics', 'Sachet 1.0', 80, 200, 3, 'PHARMATON', '2028-05-30', 3],
  ['1570', 'UNIGYL 400MG (METRONIDAZOLE)', 'Antibiotics', 'Sachet 1.0', 165, 300, 5, 'PHARMATON', '2028-06-30', 3],
  ['1571', 'UNIGYL SUSPENSION', 'Antibiotics', 'Suspension', 430, 650, 0, 'GJ', '2027-12-30', 2],
  ['1572', 'UNIPLEX MULTIVITAMIN SYRUP', 'Cough Syrup', 'Syrup Bottle', 658, 950, 3, 'Shelflife', '2028-06-30', 2],
  ['1574', 'VAGIHEAL VAGINAL TAB', 'Antifungal', 'Pack 1', 950, 1500, 3, 'PHARMATON', '2028-06-30', 2],
  ['1576', 'VALSARTAN 160MG SACHET', 'Antihypertensive', 'Sachet 1.0', 1920, 3000, 4, 'GJ', '2028-06-30', 2],
  ['1577', 'VALSARTAN 80MG SACHET', 'Antihypertensive', 'Sachet 1.0', 1785, 2500, 0, 'SANTUS', '2027-12-30', 2],
  ['1579', 'VAMI-CEE SYRUP', 'Vitamin', 'Syrup Bottle', 500, 750, 0, 'CHRIS', '2027-12-30', 2],
  ['1580', 'VAMI-CEE VITAMIN C', 'Vitamin', 'Syrup Bottle', 450, 700, 12, 'GJ', '2028-07-30', 3],
  ['1581', 'VAMIREX SYRUP', 'Analgesics', 'Syrup Bottle', 382, 600, 3, 'CP COOP', '2028-05-30', 2],
  ['1582', 'VASOPRIN 75MG (ASPIRIN)', 'Antihypertensive', 'Sachet 1.0', 61, 100, 113, 'GJ', '2028-10-30', 20],
  ['152', 'VATROMAX (AZITHROMYCIN)', 'Antibiotics', 'Pack 1', 2900, 4200, 0, 'ELIONA', '2027-12-30', 1],
  ['1583', 'VECUTEN CREAM', 'Cream', 'Tube', 1400, 2000, 0, 'System', '2027-12-30', 1],
  ['1584', 'VEGA 100MG TABLET (420)', 'Supplements', 'Sachet 1.0', 420, 600, 11, 'SANTUS', '2028-07-30', 3],
  ['1585', 'VEGA 50MG TABLET (350)', 'Supplements', 'Sachet 1.0', 350, 600, 0, 'SANTUS', '2027-12-30', 3],
  ['1586', 'VENTOLIN INHALER (GSK)', 'Inhaler', 'MDI Inhaler', 7500, 10400, 2, 'SANTUS', '2028-06-30', 1],
  ['1587', 'VERAVIT FORTE', 'Vitamin', 'Sachet 1.0', 400, 600, 0, 'CHRIS', '2027-12-30', 2],
  ['1588', 'VERMOX TABLET (MEBENDAZOLE)', 'Anti helminthic', 'Pack 1', 2200, 3200, 0, 'CHRIS', '2027-12-30', 1],
  ['9-1762371', 'VIGOR CHOCOLATE / SUPPLEMENT', 'Supplements', 'Pack 1', 2750, 3800, 2, 'SANTUS', '2028-06-30', 1],
  ['1589', 'VIRA IMMUNE TABLET', 'Supplements', 'Sachet 1.0', 350, 700, 4, 'SANTUS', '2028-06-30', 2],
  ['1590', 'VIREST 400MG (ACYCLOVIR)', 'Antiviral', 'Sachet 1.0', 2200, 3150, 5, 'GJ', '2028-07-30', 2],
  ['1591', 'VIREST CREAM (ACYCLOVIR)', 'Cream', 'Tube', 2200, 3200, 2, 'GJ', '2028-06-30', 1],
  ['1592', 'VIREST 200MG TABLET', 'Antiviral', 'Sachet 1.0', 1360, 1950, 5, 'GJ', '2028-07-30', 2],
  ['1593', 'VISCETRIN TABLET', 'Antiallergy', 'Sachet 1.0', 1300, 1900, 0, 'GJ', '2027-12-30', 2],
  ['0-1773495', 'VISITA VAGINAL GEL', 'Antifungal', 'Tube', 2350, 3400, 0, 'GJ', '2027-12-30', 1],
  ['1594', 'VISITA-PLUS CREAM', 'Cream', 'Tube', 634, 1000, 6, 'GJ', '2028-06-30', 2],
  ['454', 'VIT C + GLUCOSE SACHET', 'Vitamin', 'Sachet 1.0', 132, 200, 20, 'SANTUS', '2028-08-30', 5],

  // PAGE 38 (47 items)
  ['P0000019', 'VITABOL VITAMIN C', 'Vitamin', 'Syrup Bottle', 700, 1000, 2, 'GJ', '2028-05-30', 2],
  ['1595', 'VITACAP MULTIVITAMIN', 'Multivitamin', 'Sachet 1.0', 580, 800, 0, 'SANTUS', '2027-12-30', 2],
  ['3-1765621', 'VITAMIN A & D CAPSULE', 'Supplements', 'Sachet 1.0', 1218, 1750, 3, 'PHARMATON', '2028-06-30', 2],
  ['3-1783022', 'VITAMIN A 200,000 IU (350)', 'Vitamin', 'Sachet 1.0', 350, 500, 9, 'GJ', '2028-07-30', 3],
  ['1597', 'VITAMIN A CAPSULE (320)', 'Vitamin', 'Sachet 1.0', 320, 500, 0, 'SANTUS', '2027-12-30', 3],
  ['1598', 'VITAMIN A PACK (1800)', 'Vitamin', 'Pack 1', 1800, 2700, 4, 'SANTUS', '2028-06-30', 2],
  ['1600', 'VITAMIN B-COMPLEX SACHET', 'Vitamin', 'Sachet 1.0', 55, 100, 119, 'SANTUS', '2028-10-30', 20],
  ['1601', 'VITAMIN B-COMPLEX LOOSE', 'Vitamin', 'Tablet 1.0', 1, 3.3, 0, 'SANTUS', '2028-06-30', 50],
  ['9-1776506', 'VITAMIN C 1000MG TUBE', 'Vitamin', 'Tube', 4000, 5800, 0, 'System', '2027-12-30', 1],
  ['1602', 'VITAMIN C LOOSE (WHITE)', 'Vitamin', 'Tablet 1.0', 2.3, 3.5, 10299, 'CHRIS', '2028-11-30', 100],
  ['1603', 'VITAMIN C LOOSE (ORANGE)', 'Vitamin', 'Tablet 1.0', 2.3, 3.5, 3441, 'CHRIS', '2028-11-30', 100],
  ['1605', 'VITAMIN D3 50,000 IU BOTTLE', 'Supplements', 'Bottle', 12800, 18000, 0, 'System', '2028-01-30', 1],
  ['1607', 'VITAMIN D3 SACHET (285)', 'Supplements', 'Sachet 1.0', 285, 400, 0, 'GJ', '2027-12-30', 3],
  ['251', 'VITAMIN D3 CAPSULE (90)', 'Supplements', 'Capsule 1', 90, 200, 12, 'System', '2028-07-30', 5],
  ['1606', 'VITAMIN D3 TABLET (130)', 'Supplements', 'Tablet 1.0', 130, 200, 0, 'System', '2027-12-30', 5],
  ['1608', 'VITAMIN E 1000IU SACHET', 'Supplements', 'Sachet 1.0', 850, 1200, 0, 'System', '2027-12-30', 2],
  ['1609', 'VITAMIN K INJ AMP', 'Vitamin', 'Ampoule 1', 72, 150, 3, 'SANTUS', '2028-05-30', 3],
  ['1610', 'VITAMIN K TABLET', 'Vitamin', 'Tablet 1.0', 14, 50, 101, 'System', '2028-09-30', 20],
  ['1611', 'VITAMIN C EFFERVESCENT PACK', 'Vitamin', 'Pack 1', 7500, 11000, 0, 'System', '2027-12-30', 1],
  ['6-1768474B', 'VITAMIN-E SOFTGEL SACHET', 'Supplements', 'Sachet 1.0', 1400, 2000, 4, 'GJ', '2028-06-30', 2],
  ['7-1760614', 'VITANE MULTIVITAMIN SYRUP', 'Multivitamin', 'Syrup Bottle', 9900, 13800, 0, 'GJ', '2027-12-30', 1],
  ['1612', 'VOLTAREN 75MG INJ / GEL', 'Analgesics', 'Ampoule 1', 650, 950, 0, 'System', '2027-12-30', 2],
  ['1613', 'VOLTFAST 50MG SACHET', 'Analgesics', 'Sachet 1.0', 90, 500, 0, 'System', '2027-12-30', 3],
  ['1615', 'W/S OMEGA-3 BOTTLE', 'Supplements', 'Bottle', 7500, 10800, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['P0000021', 'W/SHIELD MULTIVITAMIN', 'Supplements', 'Sachet 1.0', 2975, 4200, 9, 'WHOLESHIELD', '2028-07-30', 2],
  ['P0000020', 'W/SHIELD IMMUNE SACHET', 'Supplements', 'Sachet 1.0', 3079, 4500, 6, 'WHOLESHIELD', '2028-07-30', 2],
  ['1616', 'WAIPA ACT ANTIMALARIAL', 'Antimalaria', 'Pack 1', 1340, 1900, 1, 'SANTUS', '2028-05-30', 2],
  ['1617', 'WATER CANISTER / BOTTLE', 'Consumables', 'Bottle', 480, 700, 0, 'System', '2029-12-30', 2],
  ['1618', 'WATER FILTER CARTRIDGE', 'Consumables', 'Single Unit', 1600, 2200, 0, 'System', '2029-12-30', 1],
  ['1619', 'WATER FOR INJECTION 10ML', 'Consumables', 'Ampoule 1', 66, 100, 44, 'SANTUS', '2028-09-30', 15],
  ['1620', 'WATER GUARD PURIFIER', 'Antiseptic', 'Bottle', 1000, 1400, 0, 'PHARMATON', '2028-06-30', 2],
  ['3-1773311', 'WELLKID CHEWABLE PACK', 'Supplements', 'Pack 1', 3667, 5300, 8, 'ELIONA', '2028-07-30', 2],
  ['1621', 'WELLKID SMART SYRUP', 'Supplements', 'Syrup Bottle', 8700, 12200, 3, 'GJ', '2028-06-30', 1],
  ['1624', 'WELLMAN ORIGINAL SACHET', 'Supplements', 'Sachet 1.0', 6400, 8700, 2, 'GJ', '2028-06-30', 1],
  ['1622', 'WELLMAN MAX / CONCEPTION', 'Supplements', 'Pack 1', 24100, 36200, 0, 'Shelflife', '2028-01-30', 1],
  ['1623', 'WELLMAN 50+ / PROSTATE', 'Supplements', 'Sachet 1.0', 6000, 8500, 4, 'CHRIS', '2028-06-30', 1],
  ['1625', 'WELLROSE EVENING PRIMROSE', 'Supplements', 'Sachet 1.0', 2500, 3500, 6, 'PHARMATON', '2028-07-30', 2],
  ['1626', 'WELLSPRING VITAMIN', 'Vitamin', 'Pack 1', 6000, 8000, 0, 'BLESSED NOEDYKE', '2027-12-30', 1],
  ['1627', 'WELLTEEN HER / HIM PACK', 'Supplements', 'Pack 1', 5500, 7600, 2, 'Shelflife', '2028-06-30', 1],
  ['1628', 'WELLTEEN SACHET', 'Supplements', 'Sachet 1.0', 1900, 2650, 0, 'System', '2027-12-30', 1],
  ['1629', 'WELLWOMAN ORIGINAL SACHET', 'Supplements', 'Sachet 1.0', 6370, 8600, 1, 'Shelflife', '2028-05-30', 1],
  ['1630', 'WELLWOMAN MAX PACK', 'Supplements', 'Pack 1', 24950, 34500, 1, 'SANTUS', '2028-06-30', 1],
  ['1631', 'WELLWOMAN 50+ PACK', 'Supplements', 'Pack 1', 5800, 8200, 4, 'Idumota', '2028-06-30', 1],
  ['1632', 'WELLWOMAN PLUS OMEGA', 'Supplements', 'Pack 1', 31000, 44500, 0, 'System', '2028-01-30', 1],
  ['1633', "WHITEFIELD'S OINTMENT", 'Ointment', 'Tube', 650, 950, 3, 'PHARMATON', '2028-06-30', 2],
  ['1635', 'WIPE IT INSECTICIDE (BIG)', 'Insecticide', 'Aerosol Can', 2100, 3200, 0, 'System', '2028-06-30', 1],
  ['1636', 'WIPE IT INSECTICIDE (SMALL)', 'Insecticide', 'Aerosol Can', 1700, 2400, 3, 'Emeka-Market', '2028-06-30', 2],

  // PAGE 39 (40 items)
  ['1637', 'WORMIN 100MG (MEBENDAZOLE)', 'Anti helminthic', 'Pack 1', 80, 200, 0, 'SANTUS', '2027-12-30', 3],
  ['1638', 'WORMIN 500MG TABLET', 'Anti helminthic', 'Pack 1', 640, 900, 38, 'SANTUS', '2028-09-30', 10],
  ['1639', 'WOSAN CREAM', 'Ointment', 'Tube', 1620, 2300, 7, 'SANTUS', '2028-07-30', 2],
  ['1640', 'WOSAN ANTISEPTIC SOAP', 'Antiseptic', 'Bar', 1870, 2700, 4, 'SANTUS', '2028-07-30', 2],
  ['1642', 'XASTEN TABLET (KETOTIFEN)', 'Antiallergy', 'Sachet 1.0', 90, 150, 189, 'SANTUS', '2028-10-30', 25],
  ['1643', 'XENOBREX SYRUP', 'Analgesics', 'Syrup Bottle', 1480, 2100, 0, 'SANTUS', '2027-12-30', 1],
  ['1645', 'XTENDA-20 (TADALAFIL)', 'Supplements', 'Sachet 1.0', 110, 300, 0, 'CHRIS', '2027-12-30', 3],
  ['1646', 'YEAST POWDER / BOTTLE', 'Supplements', 'Bottle', 2700, 3800, 0, 'SANTUS', '2027-12-30', 1],
  ['1647', 'YEAST TABLET X100 (1250)', 'Supplements', 'Pack 1', 1250, 1750, 0, 'GJ', '2027-12-30', 2],
  ['1648', 'YEAST TABLET X100 (650)', 'Supplements', 'Pack 1', 650, 1200, 0, 'BLESSED NOEDYKE', '2027-12-30', 2],
  ['1649', 'YEAST LOOSE TABLET', 'Vitamin', 'Tablet 1.0', 6.9, 9.8, 1500, 'SANTUS', '2028-11-30', 100],
  ['1650', 'YOYO BITTERS HERBAL', 'Detoxifier', 'Bottle', 1300, 1800, 5, 'GJ', '2028-06-30', 2],
  ['1651', 'YTACAN CREAM', 'Cream', 'Tube', 645, 900, 6, 'SANTUS', '2028-06-30', 2],
  ['1652', 'YTACAN PLUS CREAM', 'Cream', 'Tube', 700, 1000, 1, 'SANTUS', '2028-05-30', 2],
  ['8-1774551', 'YTALYTE ORS SACHET', 'Electrolyte', 'Sachet 1.0', 100, 200, 0, 'System', '2027-12-30', 5],
  ['1653', 'ZENTEL SUSPENSION (GSK)', 'Anti helminthic', 'Suspension', 1152, 1700, 2, 'Medquest', '2028-05-30', 2],
  ['1654', 'ZENTEL TABLET PACK (GSK)', 'Anti helminthic', 'Pack 1', 1230, 1800, 3, 'SANTUS', '2028-06-30', 2],
  ['1655', 'ZESTUP VITAMIN TABLET', 'Vitamin', 'Sachet 1.0', 150, 250, 12, 'CHRIS', '2028-07-30', 5],
  ['5-1783160', 'ZETRO AZITHROMYCIN 500MG', 'Antibiotics', 'Pack 1', 2150, 3000, 2, 'GJ', '2028-06-30', 2],
  ['1657', 'ZEVIT MULTIVITAMIN SACHET', 'Multivitamin', 'Sachet 1.0', 170, 250, 1, 'GJ', '2028-05-30', 3],
  ['1658', 'ZINATEM FORTE ANTIMALARIAL', 'Antimalaria', 'Pack 1', 550, 1200, 0, 'ELIONA', '2027-12-30', 2],
  ['1659', 'ZINC 100MG TABLET', 'Supplements', 'Sachet 1.0', 350, 600, 0, 'System', '2027-12-30', 3],
  ['165', 'ZINC DISPERSIBLE SACHET', 'Supplements', 'Sachet 1.0', 225, 400, 18, 'FIDSON', '2028-08-30', 5],
  ['1660', 'ZINC TABLET LOOSE', 'Supplements', 'Tablet 1.0', 25, 50, 0, 'System', '2027-12-30', 20],
  ['1661', 'ZINNAT SUSPENSION (GSK)', 'Antibiotics', 'Suspension', 3000, 5000, 0, 'OJEZ', '2027-12-30', 1],
  ['1662', 'ZINNAT 250MG TABLET (GSK)', 'Antibiotics', 'Pack 1', 3800, 5500, 0, 'SANTUS', '2027-12-30', 1],
  ['1663', 'ZINNAT 500MG TABLET (GSK)', 'Antibiotics', 'Pack 1', 11500, 16000, 0, 'SANTUS', '2027-12-30', 1],
  ['1664', 'ZIPROWIN (CIPROFLOXACIN)', 'Antibiotics', 'Pack 1', 750, 1100, 0, 'System', '2027-12-30', 2],
  ['3-1766055', 'ZITHROHEALTH 500MG', 'Antibiotics', 'Pack 1', 1140, 1700, 0, 'SANTUS', '2027-12-30', 2],
  ['1665', 'ZITHROLIN 500MG PACK', 'Antibiotics', 'Pack 1', 1600, 2300, 0, 'PHARMATON', '2027-12-30', 2],
  ['1666', 'ZITHROMAX SUSPENSION (PFIZER)', 'Antibiotics', 'Suspension', 3470, 6500, 0, 'SANTUS', '2027-12-30', 1],
  ['1667', 'ZITHROMAX 500MG PACK (PFIZER)', 'Antibiotics', 'Pack 1', 5000, 7000, 0, 'OJEZ', '2027-12-30', 1],
  ['1668', 'ZOGA E-06 CAPSULE', 'Supplements', 'Sachet 1.0', 130, 300, 6, 'PHARMATON', '2028-06-30', 3],
  ['1669', 'ZOLACIN TABLET', 'Antibiotics', 'Pack 1', 1200, 2000, 10, 'GJ', '2028-07-30', 3],
  ['1670', 'ZOLAT CHEWABLE (ALBENDAZOLE)', 'Anti helminthic', 'Tablet 1.0', 360, 600, 1, 'SANTUS', '2028-05-30', 2],
  ['1671', 'ZOLAT SUSPENSION (ALBENDAZOLE)', 'Anti helminthic', 'Suspension', 750, 1000, 4, 'SANTUS', '2028-06-30', 2],
  ['1672', 'ZOLAT TABLET (ALBENDAZOLE)', 'Anti helminthic', 'Tablet 1.0', 300, 500, 60, 'SANTUS', '2028-09-30', 15],
  ['1673', 'ZOLO NASAL INHALER', 'Inhaler', 'Nasal Stick', 150, 250, 0, 'CHRIS', '2027-12-30', 2],
  ['1675', 'ZYNCET CETIRIZINE SYRUP', 'Antiallergy', 'Syrup Bottle', 1300, 1850, 0, 'System', '2027-12-30', 2],
  ['1676', 'ZYNCET CETIRIZINE TABLET', 'Antiallergy', 'Sachet 1.0', 400, 600, 0, 'PHARMATON', '2027-12-30', 3]
];

function inferDosageForm(itemName, rawCategory, unitType) {
  const n = `${itemName} ${rawCategory} ${unitType}`.toUpperCase();
  if (n.includes('SYRINGE') || n.includes('NEEDLE') || n.includes('CANNULA') || n.includes('AMP') || n.includes('VIAL') || n.includes('INJ')) {
    return 'Injectable / Syringe';
  }
  if (n.includes('INFUSION')) return 'IV Infusion';
  if (n.includes('INHALER')) return 'MDI Inhaler';
  if (n.includes('EYE DROP') || n.includes('EAR DROP') || n.includes('DROPS')) return 'Drops';
  if (n.includes('SUSP') || n.includes('SYRUP') || n.includes('TONIC') || n.includes('LINCTUS') || n.includes('EMULSION') || n.includes('LIQUID')) {
    return 'Syrup / Suspension';
  }
  if (n.includes('CREAM') || n.includes('OINTMENT') || n.includes('GEL') || n.includes('BALM') || n.includes('LOTION')) {
    return 'Cream / Ointment / Gel';
  }
  if (n.includes('LOZENGE')) return 'Lozenges';
  if (n.includes('CAP') || n.includes('SOFTGEL')) return 'Capsule / Softgel';
  if (n.includes('POWDER') || n.includes('SALT') || n.includes('ORS')) return 'Oral Sachet / Powder';
  if (n.includes('MACHINE') || n.includes('TEST') || n.includes('COTTON') || n.includes('BANDAGE') || n.includes('GLOVE') || n.includes('CONDOM')) {
    return 'Medical Consumable / Device';
  }
  return 'Tablet / Sachet';
}

function inferStrength(itemName, unitType) {
  const match = itemName.match(/(\d+(?:\.\d+)?\s*(?:MG|MCG|G|ML|IU|%)(?:\/\d+(?:\.\d+)?\s*(?:MG|ML))?|X\d+)/i);
  if (match) return match[1].toUpperCase();
  return unitType || 'Regular';
}

function generateInitialCatalog() {
  const today = new Date('2026-10-15T12:00:00Z');

  return SECTION_1_PDF_ITEMS.map((row, idx) => {
    const [sku, itemName, rawCategory, unitType, costPrice, sellingPrice, stockQty, supplier, expiryDate, reorderLevel] = row;
    const clinicalCategory = RAW_CATEGORY_TO_CLINICAL[rawCategory] || 'Vitamins, Multivitamins & Supplements';
    const dosageForm = inferDosageForm(itemName, rawCategory, unitType);
    const strength = inferStrength(itemName, unitType);
    const lasaGroup = itemName.replace(/[^A-Z]/gi, '').slice(0, 5).toUpperCase() || 'ITEM';

    const expObj = new Date(`${expiryDate}T12:00:00Z`);
    const daysUntilExpiry = isNaN(expObj.getTime())
      ? 365
      : Math.round((expObj.getTime() - today.getTime()) / 86400000);

    const unitsPerPack =
      unitType.includes('Tablet 1.0') || unitType.includes('Capsule 1') || unitType.includes('Single')
        ? 1
        : unitType.includes('Sachet 1.0')
        ? 10
        : 12;

    const rxRequired =
      rawCategory === 'Antibiotics' ||
      rawCategory === 'Antihypertensive' ||
      rawCategory === 'Antidiabetics' ||
      rawCategory === 'Injectables' ||
      rawCategory === 'Sedative' ||
      rawCategory === 'Prostate drug';

    const aisleLetter = String.fromCharCode(65 + (idx % 8));
    const bayNum = String(1 + (idx % 16)).padStart(2, '0');
    const shelfLocation = `${rawCategory} • Bay ${aisleLetter}-${bayNum}`;
    const markupPercent = costPrice > 0 ? Math.round(((sellingPrice - costPrice) / costPrice) * 100) : 0;

    return {
      id: `ao-sec1-${idx + 1}`,
      sku: String(sku),
      lasaGroup,
      genericName: itemName,
      brandName: `${supplier} • ${rawCategory}`,
      supplier: supplier || 'SANTUS',
      rawCategory,
      category: clinicalCategory,
      strength,
      dosageForm,
      releaseType: `${markupPercent}% Markup`,
      packSize: unitType,
      unitsPerPack,
      batchNumber: `AO-${String(sku).slice(0, 6)}`,
      expiryDate,
      daysUntilExpiry,
      shelfLocation,
      stockQty: Math.max(0, Number(stockQty) || 0),
      reorderLevel: Math.max(1, Number(reorderLevel) || 2),
      costPrice: Number(costPrice) || 0,
      sellingPrice: Number(sellingPrice) || Number(costPrice) || 0,
      rxRequired,
      coldChain: false,
      controlled: rawCategory === 'Sedative',
      searchIndex: `${sku} ${itemName} ${rawCategory} ${clinicalCategory} ${supplier} ${unitType} ${dosageForm} ${strength}`.toLowerCase()
    };
  });
}

// Keep DRUG_FAMILIES reference for LASA / Importer compatibility
const DRUG_FAMILIES = [
  { code: 'AMOXI', generic: 'AMOXICILLIN / AMOXIL', category: 'Antibiotics & Anti-Infectives', rx: true },
  { code: 'AUGME', generic: 'AUGMENTIN / AUGMEC / AQUACLAV', category: 'Antibiotics & Anti-Infectives', rx: true },
  { code: 'AMATE', generic: 'AMATEM / ARTEMETHER / COARTEM', category: 'Antimalarials & Antiparasitics', rx: false },
  { code: 'AMLOD', generic: 'AMLODIPINE / AMLONG', category: 'Cardiovascular & Antihypertensives', rx: true },
  { code: 'ATORV', generic: 'ATORVASTATIN', category: 'Cardiovascular & Antihypertensives', rx: true },
  { code: 'AZITH', generic: 'AZITHROMYCIN / AZILIDE', category: 'Antibiotics & Anti-Infectives', rx: true },
  { code: 'CEFUR', generic: 'CEFUROXIME / CEFTRIAXONE / CEFIXIME', category: 'Antibiotics & Anti-Infectives', rx: true },
  { code: 'CIPRO', generic: 'CIPROFLOXACIN / CIPROTAB', category: 'Antibiotics & Anti-Infectives', rx: true },
  { code: 'BENYL', generic: 'BENYLIN / COFLIN / COFTA', category: 'Respiratory, Cough & Antiallergy', rx: false },
  { code: 'DARAV', generic: 'DARAVIT / ASTYMIN / CHEMIRON', category: 'Vitamins, Multivitamins & Supplements', rx: false }
];

/**
 * ============================================================================
 * MODULE 4: LABELED ARCHITECTURE MODULES (`src/data/architectureDocs.js`)
 * ============================================================================
 */
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

/**
 * ============================================================================
 * MODULE 5: EXCEL (.XLSX / .XLS) & CSV INVENTORY IMPORT ENGINE
 * (`src/utils/excelCsvImporter.js`)
 * ============================================================================
 */
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

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT (`src/App.jsx`)
 * ============================================================================
 */
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
    let totalSkus = catalog.length;
    let totalUnitsInStock = 0;
    let totalInventoryValue = 0;
    let totalCostValuation = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;
    let expiringSoonCount = 0;
    let expiredCount = 0;

    for (let i = 0; i < catalog.length; i++) {
      const item = catalog[i];
      totalUnitsInStock += item.stockQty;
      totalInventoryValue += item.stockQty * item.sellingPrice;
      totalCostValuation += item.stockQty * item.costPrice;
      if (item.stockQty === 0) outOfStockCount++;
      else if (item.stockQty <= item.reorderLevel) lowStockCount++;

      if (item.daysUntilExpiry <= 0) expiredCount++;
      else if (item.daysUntilExpiry <= 90) expiringSoonCount++;
    }

    const todayRevenue = salesHistory
      .filter((s) => s.status !== 'VOIDED')
      .reduce((acc, s) => acc + s.total, 0);

    return {
      totalSkus,
      totalUnitsInStock,
      totalInventoryValue,
      totalCostValuation,
      lowStockCount,
      outOfStockCount,
      expiringSoonCount,
      expiredCount,
      todayRevenue
    };
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
    setCatalog((prev) =>
      prev.map((item) => {
        if (item.id !== drugId) return item;
        return { ...item, stockQty: Math.max(0, item.stockQty + delta) };
      })
    );
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
    setCatalog((prev) =>
      prev.map((item) => (item.daysUntilExpiry <= 0 ? { ...item, stockQty: 0 } : item))
    );
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