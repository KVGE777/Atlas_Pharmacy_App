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

export { ACCENT_THEMES };
