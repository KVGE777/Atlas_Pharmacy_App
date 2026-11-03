import React from 'react';
import { formatNaira } from '../data/catalogData';
import { ShoppingCart, Sparkles, Wand2 } from './icons';

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

export { DosageFormIcon, PackTypeDoodle, KpiDoodleIllustration, HeroApothecaryBanner, EmptyPosCounterIllustration, DispensedStampDoodle };
