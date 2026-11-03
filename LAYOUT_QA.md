# Layout QA Checklist

Fill each viewport cell after checking the page manually. Mark `PASS`, `FAIL`, or add notes.

| Page | 360x740 | 390x844 | 768x1024 | 1024x768 | 1280x800 | 1366x768 | 1920x1080 | 2560x1440 |
|---|---|---|---|---|---|---|---|---|
| Home |  |  |  |  |  |  |  |  |
| Inventory (cards) |  |  |  |  |  |  |  |  |
| Inventory (table) |  |  |  |  |  |  |  |  |
| POS with empty cart |  |  |  |  |  |  |  |  |
| POS with items |  |  |  |  |  |  |  |  |
| Invoices |  |  |  |  |  |  |  |  |
| Add/Edit SKU modal |  |  |  |  |  |  |  |  |
| Import modal |  |  |  |  |  |  |  |  |
| Receipt modal |  |  |  |  |  |  |  |  |
| Dark mode |  |  |  |  |  |  |  |  |

## Checks

- No horizontal page scroll; intentional table scrolling stays inside its wrapper.
- All buttons, tabs, steppers, pagination controls, and modal actions are reachable.
- Mobile bottom tabs, cart bar, cart sheet, and safe-area spacing do not overlap content.
- POS cart totals and completion action remain visible; cart items scroll correctly.
- Inventory cards/table, filters, chips, and pagination remain usable at each breakpoint.
- Modal headers, bodies, and footers remain visible and readable while scrolling.
- Drug names, quantities, prices, statuses, form labels, and buttons are readable.
- Sidebar drawer, tablet collapse behavior, dark mode, and reduced-motion behavior work as expected.
