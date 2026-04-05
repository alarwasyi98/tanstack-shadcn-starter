# EDARA Style Guide v3.2.0

> Panduan desain resmi untuk platform manajemen sekolah EDARA. Dibangun di atas prinsip **utilitarian clarity** — terinspirasi dari Geist Design System, Vercel, dan 21st Dev.

**Stack**: Base UI + shadcn · Geist Variable + Geist Mono · Lucide Icons · WCAG AA · Vega · OKLCH color space · Tailwind v4

---

## 01. Typography

### Font Families

| Token         | Value                                | Source                       | Penggunaan                                        |
| ------------- | ------------------------------------ | ---------------------------- | ------------------------------------------------- |
| `--font-sans` | `"Geist Variable", sans-serif`       | `@fontsource-variable/geist` | Semua UI, body, label, tombol, heading            |
| `--font-mono` | `"Geist Mono", "SF Mono", monospace` | `@fontsource/geist-mono`     | NIS, kode transaksi, nominal uang, ID, timestamps |

### Font Weights

| Token    | Value | Penggunaan                  |
| -------- | ----- | --------------------------- |
| Light    | 300   | Deskripsi panjang, subtext  |
| Regular  | 400   | Body text standar           |
| Medium   | 500   | Label, tombol, badge        |
| Semibold | 600   | Judul kartu, section header |
| Bold     | 700   | Heading, angka KPI besar    |

### Text Styles

#### Headings

| Style   | Size | Weight | Letter-Spacing | Line-Height | Penggunaan                         |
| ------- | ---- | ------ | -------------- | ----------- | ---------------------------------- |
| Display | 32px | 700    | `-0.04em`      | 1.1         | Dashboard page title, hero section |
| H1      | 24px | 700    | `-0.03em`      | 1.2         | Section title, page heading        |
| H2      | 18px | 600    | `-0.02em`      | 1.3         | Widget title, modal heading        |
| H3      | 15px | 600    | `-0.01em`      | 1.4         | Card title, section subheader      |
| H4      | 13px | 600    | `-0.01em`      | 1.4         | Tab label aktif, small card title  |

#### Body & UI Text

| Style      | Size | Weight | Line-Height | Penggunaan                                    |
| ---------- | ---- | ------ | ----------- | --------------------------------------------- |
| Body Large | 16px | 400    | 1.6         | Primary reading, input fields, paragraphs     |
| Body       | 14px | 400    | 1.5         | Default UI text, buttons, tabs, sidebar items |
| Body Small | 12px | 400    | 1.5         | Supporting text, secondary labels             |
| Card Title | 16px | 500    | 1.4         | Card headers, section titles                  |
| Caption    | 11px | 500    | 1.4         | Timestamps, meta info                         |
| Mono Data  | 12px | 400    | 1.5         | NIS, kode transaksi, nominal uang, ID         |
| Stat / KPI | 28px | 700    | 1           | Dashboard stat cards, KPI number              |

---

## 02. Color Palette

### Brand Colors (Official Source — HEX)

| Token                        | HEX       | Penggunaan                                                     |
| ---------------------------- | --------- | -------------------------------------------------------------- |
| Deep Emerald Green (Primary) | `#008236` | Primary brand accent, CTA, active state, success confirmations |
| Dark Forest Green (Dark)     | `#016630` | Primary accent for dark mode contexts                          |
| Deep Emerald (Chart)         | `#008236` | Main data emphasis in charts                                   |
| Forest Deep (Chart)          | `#016630` | Final data series in charts                                    |
| Link Text Green              | `#008236` | Clickable text, underline offset 4px                           |

### Semantic / Functional Colors

| Token            | HEX       | Penggunaan                                  |
| ---------------- | --------- | ------------------------------------------- |
| Emerald Success  | `#008236` | Success state, paid status, positive trends |
| Vivid Red        | `#E7000B` | Error state, destructive actions            |
| Amber Warning    | `#F59E0B` | Warning state, partial payment, pending     |
| Blue Information | `#3B82F6` | Informational callouts                      |

### Neutral / Surface Colors (Atmosphere)

| Token                 | HEX       | Penggunaan                                         |
| --------------------- | --------- | -------------------------------------------------- |
| Pure White Canvas     | `#FFFFFF` | Primary app background (light), card surface       |
| Off-White Near-Pure   | `#FAFAFA` | Sidebar background context                         |
| Light Mist Gray       | `#F5F5F5` | Muted background, accent background, secondary     |
| Soft Cloud Gray       | `#F4F4F5` | Card backgrounds (elevated), interactive secondary |
| Light Border Gray     | `#E5E5E5` | Default border, input, divider                     |
| Rich Charcoal (Text1) | `#0A0A0A` | Primary body text, labels, headlines               |
| Neutral Gray (Text2)  | `#737373` | Secondary/muted text, placeholder, disabled        |

| Token                | HEX       | Penggunaan                   |
| -------------------- | --------- | ---------------------------- |
| Rich Charcoal Canvas | `#0A0A0A` | Dark mode primary background |
| Dark Card Surface    | `#171717` | Cards, sidebar context       |
| Dark Secondary       | `#27272A` | Secondary dark backgrounds   |
| Dark Text Primary    | `#FAFAFA` | Primary readability text     |
| Dark Text Muted      | `#A1A1A1` | Secondary text, meta info    |

### Chart Color Palette

| Token   | HEX       | Penggunaan                  |
| ------- | --------- | --------------------------- |
| Chart 1 | `#7BF1A8` | Mint Light (Primary Series) |
| Chart 2 | `#00C950` | Bright Emerald              |
| Chart 3 | `#00A63E` | Vivid Green                 |
| Chart 4 | `#008236` | Deep Emerald Green          |
| Chart 5 | `#016630` | Forest Deep                 |
| Chart 6 | `#F59E0B` | Highlight series            |
| Chart 7 | `#737373` | Neutral series              |
| Chart 8 | `#E5E5E5` | Disabled/reference line     |

### shadcn/ui Color Tokens (OKLCH — Implementation)

These are the actual CSS variable values used by shadcn/ui components. Brand colors above map to `primary`/`primary-foreground` tokens.

#### Light Mode (`:root`)

```css
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);
--card: oklch(1 0 0);
--card-foreground: oklch(0.145 0 0);
--popover: oklch(1 0 0);
--popover-foreground: oklch(0.145 0 0);
--primary: oklch(0.527 0.154 150.069); /* Deep Emerald Green */
--primary-foreground: oklch(0.982 0.018 155.826);
--secondary: oklch(0.967 0.001 286.375);
--secondary-foreground: oklch(0.21 0.006 285.885);
--muted: oklch(0.97 0 0);
--muted-foreground: oklch(0.556 0 0);
--accent: oklch(0.97 0 0);
--accent-foreground: oklch(0.205 0 0);
--destructive: oklch(0.577 0.245 27.325);
--border: oklch(0.922 0 0);
--input: oklch(0.922 0 0);
--ring: oklch(0.708 0 0);
--chart-1: oklch(0.871 0.15 154.449);
--chart-2: oklch(0.723 0.219 149.579);
--chart-3: oklch(0.627 0.194 149.214);
--chart-4: oklch(0.527 0.154 150.069);
--chart-5: oklch(0.448 0.119 151.328);
--sidebar: oklch(0.985 0 0);
--sidebar-foreground: oklch(0.145 0 0);
--sidebar-primary: oklch(0.627 0.194 149.214);
--sidebar-primary-foreground: oklch(0.982 0.018 155.826);
--sidebar-accent: oklch(0.97 0 0);
--sidebar-accent-foreground: oklch(0.205 0 0);
--sidebar-border: oklch(0.922 0 0);
--sidebar-ring: oklch(0.708 0 0);
```

#### Dark Mode (`.dark`)

```css
--background: oklch(0.145 0 0);
--foreground: oklch(0.985 0 0);
--card: oklch(0.205 0 0);
--card-foreground: oklch(0.985 0 0);
--popover: oklch(0.205 0 0);
--popover-foreground: oklch(0.985 0 0);
--primary: oklch(0.448 0.119 151.328); /* Dark Forest Green */
--primary-foreground: oklch(0.982 0.018 155.826);
--secondary: oklch(0.274 0.006 286.033);
--secondary-foreground: oklch(0.985 0 0);
--muted: oklch(0.269 0 0);
--muted-foreground: oklch(0.708 0 0);
--accent: oklch(0.269 0 0);
--accent-foreground: oklch(0.985 0 0);
--destructive: oklch(0.704 0.191 22.216);
--border: oklch(1 0 0 / 10%);
--input: oklch(1 0 0 / 15%);
--ring: oklch(0.556 0 0);
--chart-1: oklch(0.871 0.15 154.449);
--chart-2: oklch(0.723 0.219 149.579);
--chart-3: oklch(0.627 0.194 149.214);
--chart-4: oklch(0.527 0.154 150.069);
--chart-5: oklch(0.448 0.119 151.328);
--sidebar: oklch(0.205 0 0);
--sidebar-foreground: oklch(0.985 0 0);
--sidebar-primary: oklch(0.723 0.219 149.579);
--sidebar-primary-foreground: oklch(0.982 0.018 155.826);
--sidebar-accent: oklch(0.269 0 0);
--sidebar-accent-foreground: oklch(0.985 0 0);
--sidebar-border: oklch(1 0 0 / 10%);
--sidebar-ring: oklch(0.556 0 0);
```

---

## 03. Border Radius

### EDARA Design Values (Reference)

| Token           | Value  | Penggunaan                       |
| --------------- | ------ | -------------------------------- |
| `--radius-sm`   | 4px    | Small elements                   |
| `--radius-md`   | 6px    | Button, input, default corners   |
| `--radius-lg`   | 8.5px  | Cards, panels (base radius)      |
| `--radius-xl`   | 12px   | Modals, side drawers, rounded-xl |
| `--radius-full` | 9999px | Avatars, pills (if applicable)   |

### shadcn/ui Relative System (Implementation)

Base radius: `--radius: 0.45rem` (≈ 7.2px)

| Token          | Value                       | Penggunaan         |
| -------------- | --------------------------- | ------------------ |
| `--radius-sm`  | `calc(var(--radius) * 0.6)` | Small elements     |
| `--radius-md`  | `calc(var(--radius) * 0.8)` | Default components |
| `--radius-lg`  | `var(--radius)`             | Cards, panels      |
| `--radius-xl`  | `calc(var(--radius) * 1.4)` | Modals, drawers    |
| `--radius-2xl` | `calc(var(--radius) * 1.8)` | Large containers   |
| `--radius-3xl` | `calc(var(--radius) * 2.2)` | Extra large        |
| `--radius-4xl` | `calc(var(--radius) * 2.6)` | Maximum            |

---

## 04. Shadows

| Token         | Value                                                     | Penggunaan                |
| ------------- | --------------------------------------------------------- | ------------------------- |
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)`                              | Kartu default, tombol     |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`  | Input focus               |
| `--shadow-md` | `0 4px 8px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)`  | Sidebar, topbar           |
| `--shadow-lg` | `0 8px 16px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.04)` | Modal, dropdown, bulk bar |

---

## 05. Motion & Animation

### Timing Tokens

| Token             | Value | Penggunaan                                    |
| ----------------- | ----- | --------------------------------------------- |
| `--duration-fast` | 120ms | Hover state, focus ring, tooltip              |
| `--duration-base` | 200ms | Button, input, tab, badge, default transition |
| `--duration-slow` | 300ms | Modal open, drawer slide, spring action       |

### Easing Tokens

| Token           | Curve                               | Karakter                             |
| --------------- | ----------------------------------- | ------------------------------------ |
| `--ease-out`    | `cubic-bezier(0.16, 1, 0.3, 1)`     | Default masuk — deselerasi cepat     |
| `--ease-in`     | `cubic-bezier(0.4, 0, 1, 1)`        | Default keluar — akselerasi          |
| `--ease-inout`  | `cubic-bezier(0.45, 0, 0.55, 1)`    | Symmetric — tab switch, state toggle |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy — toggle, konfirmasi, popover |

### Default Transition Utility

```css
transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)]
```

### Animasi per Komponen

| Komponen         | Durasi | Easing          | Properti                     |
| ---------------- | ------ | --------------- | ---------------------------- |
| Button hover     | 200ms  | ease-out        | background, shadow           |
| Input focus      | 120ms  | ease-out        | border-color, box-shadow     |
| Tab switch       | 200ms  | ease-inout      | color, border-color          |
| Switch/Toggle    | 200ms  | ease-spring     | transform (thumb)            |
| Modal open       | 300ms  | ease-out        | opacity + scale(0.96→1)      |
| Side drawer      | 300ms  | ease-out        | translateX                   |
| Toast/snackbar   | 250ms  | ease-out        | translateY + opacity         |
| Page transition  | 200ms  | ease-out        | opacity + translateY(12px→0) |
| Skeleton shimmer | 1.5s   | linear infinite | background-position          |
| Bulk bar appear  | 250ms  | ease-spring     | translateY + opacity         |

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 06. Spacing System

| Token        | Value | Penggunaan                                                    |
| ------------ | ----- | ------------------------------------------------------------- |
| `--space-1`  | 4px   | Micro — gap antar dot, ikon dan teks kecil                    |
| `--space-2`  | 8px   | XSmall — padding internal badge, gap sidebar item             |
| `--space-3`  | 12px  | Small — padding kartu kecil, gap komponen baris               |
| `--space-4`  | 16px  | Default — padding kartu standar, cell tabel, margin form      |
| `--space-5`  | 20px  | Medium-SM — padding horizontal topbar kecil                   |
| `--space-6`  | 24px  | Medium — padding kartu besar, jarak antar section dalam modal |
| `--space-8`  | 32px  | Large — jarak antar widget dashboard, padding horizontal page |
| `--space-10` | 40px  | XLarge — margin vertikal section utama                        |
| `--space-12` | 48px  | 2XLarge — padding atas halaman, top margin konten utama       |
| `--space-16` | 64px  | 3XLarge — jarak antar section besar dalam halaman             |

---

## 07. shadcn/ui Component Specifications

### Button

**Source:** `src/components/ui/button.tsx`

**Base Classes:**

```
group/button inline-flex shrink-0 items-center justify-center rounded-md
border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap
transition-[color,background-color,border-color,box-shadow,transform]
duration-[var(--duration-base)] ease-[var(--ease-out)]
outline-none select-none
focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
active:not-aria-[haspopup]:translate-y-px
disabled:pointer-events-none disabled:opacity-50
aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20
dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
```

**Variants:**

| Variant       | Classes                                                                      | Penggunaan                                 |
| ------------- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| `primary`     | `bg-primary text-primary-foreground hover:bg-primary/80`                     | Aksi utama (Deep Emerald Green `#008236`)  |
| `secondary`   | `bg-secondary text-secondary-foreground hover:bg-secondary/80`               | Aksi sekunder (Soft Cloud `#F4F4F5`)       |
| `outline`     | `border-border bg-background shadow-xs hover:bg-muted hover:text-foreground` | Aksi tersier (Light Border Gray `#E5E5E5`) |
| `ghost`       | `hover:bg-muted hover:text-foreground`                                       | Aksi minimal, navigasi dalam tabel         |
| `destructive` | `bg-destructive/10 text-destructive hover:bg-destructive/20`                 | Hapus, aksi berbahaya (Vivid Red)          |
| `link`        | `text-primary underline-offset-4 hover:underline`                            | Inline link text                           |

**Sizes:**

| Size      | Height      | Font     | Padding  | Penggunaan          |
| --------- | ----------- | -------- | -------- | ------------------- |
| `xs`      | 24px (h-6)  | 0.625rem | `0 8px`  | Micro actions       |
| `sm`      | 32px (h-8)  | 0.75rem  | `0 8px`  | Compact UI          |
| `default` | 36px (h-9)  | 0.75rem  | `0 10px` | Standard buttons    |
| `lg`      | 40px (h-10) | 0.75rem  | `0 12px` | Prominent actions   |
| `icon`    | 36×36px     | —        | —        | Icon-only default   |
| `icon-xs` | 24×24px     | —        | —        | Icon-only micro     |
| `icon-sm` | 32×32px     | —        | —        | Icon-only compact   |
| `icon-lg` | 40×40px     | —        | —        | Icon-only prominent |

**Default Variants:** `variant: "default"`, `size: "default"`

### Badge

**Source:** `src/components/ui/badge.tsx`

**Base Classes:**

```
group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5
overflow-hidden rounded-lg border px-3 py-0.5 text-xs font-medium whitespace-nowrap
transition-[color,background-color,border-color,box-shadow]
duration-[var(--duration-base)] ease-[var(--ease-out)]
focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50
[&>svg]:pointer-events-none [&>svg]:size-3!
```

**Shape:** `rounded-lg` (Strictly rectangular dengan sudut halus, NO pill/rounded-full)
**Height:** 24px (h-6)

**Variants:**

| Variant       | Classes                                                    | Penggunaan                      |
| ------------- | ---------------------------------------------------------- | ------------------------------- |
| `default`     | `bg-primary text-primary-foreground`                       | General (Deep Emerald Green)    |
| `secondary`   | `bg-secondary text-secondary-foreground`                   | Neutral (Soft Cloud)            |
| `destructive` | `border-destructive/30 bg-destructive/10 text-destructive` | Error/Danger (Vivid Red)        |
| `outline`     | `border-border text-foreground`                            | Outlined style                  |
| `success`     | `border-emerald-500/30 bg-emerald-500/10 text-emerald-600` | Success state (Lunas/Aktif)     |
| `warning`     | `border-amber-500/30 bg-amber-500/10 text-amber-600`       | Warning state (Cicil/Pending)   |
| `error`       | `border-destructive/30 bg-destructive/10 text-destructive` | Error state (Tunggak/Non-Aktif) |
| `info`        | `border-blue-500/30 bg-blue-500/10 text-blue-600`          | Info state (Subsidi/Pesan)      |

### Input

**Source:** `src/components/ui/input.tsx`

**Base Classes:**

```
h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1
text-base shadow-xs transition-[color,background-color,border-color,box-shadow]
duration-[var(--duration-base)] ease-[var(--ease-out)] outline-none
placeholder:text-muted-foreground
focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20
md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
```

**Height:** 36px (h-9)
**Radius:** 6px (`rounded-md`)

**States:**
| State | Styling |
| -------- | ---------------------------------------------------------------------------- |
| Default | `border-border (Light Border Gray #E5E5E5), bg-transparent` |
| Focus | `border-ring, ring-3 ring-ring/50` |
| Disabled | `pointer-events-none, cursor-not-allowed, opacity-50` |
| Error | `border-destructive (Vivid Red), ring-3 ring-destructive/20` (dark: ambient) |

### Tabs

**Source:** `src/components/ui/tabs.tsx`

**List:**

```
group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px]
text-muted-foreground group-data-horizontal/tabs:h-9
data-[variant=line]:rounded-none
```

| Variant   | Classes                |
| --------- | ---------------------- |
| `default` | `bg-muted`             |
| `line`    | `gap-1 bg-transparent` |

**Trigger:**

```
relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5
rounded-md border border-transparent px-2 py-1 text-sm font-medium
whitespace-nowrap text-foreground/60
transition-[color,background-color,border-color,box-shadow]
duration-[var(--duration-base)] ease-[var(--ease-inout)]
hover:text-foreground
focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50
disabled:pointer-events-none disabled:opacity-50
[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
```

| State        | Classes                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Default      | `text-foreground/60` (dark: `text-muted-foreground`)                                                                                           |
| Active       | `data-active:bg-background data-active:text-foreground` (dark: `data-active:border-input data-active:bg-input/30 data-active:text-foreground`) |
| Line variant | `bg-transparent` (both default and active)                                                                                                     |

**Content:** `flex-1 text-sm outline-none`

### Sidebar Menu Button

**Source:** `src/components/ui/sidebar.tsx`

**Base Classes:**

```
peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden
rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs text-muted-foreground
ring-sidebar-ring outline-hidden transition-[color,background-color,border-color]
duration-[var(--duration-base)] ease-[var(--ease-out)]
group-has-data-[sidebar=menu-action]/menu-item:pr-8
group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!
hover:bg-sidebar-accent/50 hover:text-sidebar-foreground
focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50
data-active:bg-sidebar-primary/10 data-active:font-medium data-active:text-sidebar-primary
[&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate
```

**Sizes:**
| Size | Height | Font |
|------|--------|------|
| `sm` | 28px (h-7) | 0.75rem |
| `default` | 32px (h-8) | 0.75rem |
| `lg` | 48px (h-12) | 0.875rem |

**States:**
| State | Styling |
|-------|---------|
| Default | `text-muted-foreground` |
| Hover | `bg-sidebar-accent/50 text-sidebar-foreground` |
| Active | `bg-sidebar-primary/10 font-medium text-sidebar-primary` |

### Sidebar Menu Sub Button

**Source:** `src/components/ui/sidebar.tsx`

**Base Classes:**

```
flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2
text-muted-foreground ring-sidebar-ring outline-hidden
transition-[color,background-color,border-color]
duration-[var(--duration-base)] ease-[var(--ease-out)]
group-data-[collapsible=icon]:hidden
hover:bg-sidebar-accent/50 hover:text-sidebar-foreground
focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50
data-[size=md]:text-xs data-[size=sm]:text-xs
data-active:bg-sidebar-primary/10 data-active:text-sidebar-primary
[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0
```

**Sizes:** `sm`, `md`
**States:** Same as Sidebar Menu Button (default/hover/active)

---

## 08. Layout System

### Structure

```
┌──────────────────────────────────────────┐
│  HEADER (sticky top-0 z-50)              │
│  bg-background/80 backdrop-blur-xl       │
├─────────────┬────────────────────────────┤
│             │  Breadcrumb + Page Title   │
│  SIDEBAR    │  ─────────────────────── │
│  (256px)    │  Content Area              │
│  fixed      │  (padding: 24px)           │
│  collapsible│                            │
│  → icon-only│                            │
└─────────────┴────────────────────────────┘
```

### Header

- **Position:** `sticky top-0 z-50`
- **Background:** `bg-background/80`
- **Backdrop:** `backdrop-blur-xl`

### Sidebar

| Property          | Value                           |
| ----------------- | ------------------------------- |
| Width (expanded)  | 256px (16rem)                   |
| Width (mobile)    | 288px (18rem)                   |
| Width (icon-only) | 48px (3rem)                     |
| Background        | Off-White Near-Pure (`#FAFAFA`) |
| Collapsible modes | `offcanvas`, `icon`, `none`     |
| Variants          | `sidebar`, `floating`, `inset`  |

**Sidebar Inset Fix:** Use `min-w-0` (NOT `w-full`) to prevent squishing on sidebar collapse.

**Inset Variant Classes:**

```
md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0
md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm
md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2
```

### Topbar

- **Height:** 52px
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E5E5E5` bawah
- **Padding:** `0 16px`
- **Konten kiri:** nama unit aktif + breadcrumb + badge role
- **Konten kanan:** notifikasi bell + avatar user

### Content Area

- **Padding:** `24px`
- **Max width:** tidak dibatasi (full remaining width)
- **Dashboard grid:** 4 kolom widget cards, 2 kolom section bawah

---

## 09. Additional Components

### Avatar

| Size | Dimensi | Font       |
| ---- | ------- | ---------- |
| SM   | 24×24px | 10px / 600 |
| MD   | 32×32px | 12px / 600 |
| LG   | 40×40px | 14px / 600 |

- Border radius: full (circle)
- Background: warna unik per user (dari palet brand/accent/neutral)
- Inisial: 2 huruf kapital

### Breadcrumb

- Font: 12px / 400
- Separator: `›` — warna `#D4D4D4`
- Item default: `#A3A3A3`
- Item aktif (last): `#0A0A0A` / 500

### Tooltip

- Background: `#171717`
- Text: `#FFFFFF` / 11px / 500
- Padding: `5px 10px`
- Border radius: `6px`
- Shadow: `--shadow-lg`
- Delay: 300ms

### Progress Bar

- Track height: 5px, background `#E5E5E5`, radius full
- Fill: warna semantik (brand/accent/error)
- Transition: `width 0.6s ease-out`

### Pagination

- Button size: 28px height, min-width 28px
- Font: 12px / 500
- Active: background `#008236`, text white
- Border radius: `6px`
- Gap antar tombol: 4px

### Empty State

- Layout: center, flex column, text-align center
- Icon container: 40×40px, background `#F5F5F5`, border `1px #E5E5E5`, radius `8px`
- Title: 13px / 600
- Description: 12px / 400 / `#525252`, max-width 280px, line-height 1.6
- CTA buttons: "Kembali" (secondary) + "Ke Beranda" (primary), gap 8px
- Padding: `48px 24px`
- Border: `1px dashed #E5E5E5`, radius `12px`
- Tidak menampilkan tombol "Tambah Data" atau "Import"

### Bulk Action Bar

- Posisi: fixed/floating, bottom screen, z-index tinggi
- Background: `#171717`
- Padding: `8px 16px`
- Border radius: `8px`
- Shadow: `--shadow-lg`
- Konten: jumlah baris terpilih (mono chip) + action buttons + "Batalkan"
- Action button: background `rgba(255,255,255,0.10)`, border `rgba(255,255,255,0.15)`
- Animasi: 250ms slide-up + fade dari bawah

### Skeleton Loader

- Border radius: `4px` (sm)
- Animasi shimmer gradient horizontal, 1.5s infinite
- Selalu mengisi slot ukuran komponen yang ditunggu (same height/width)

### Table

| Property             | Value                                             |
| -------------------- | ------------------------------------------------- |
| Header Height        | 32px                                              |
| Row Height           | 44px (dense)                                      |
| Cell Padding         | `8px 12px`                                        |
| Header Font          | 11px / 500 / uppercase / `letter-spacing: 0.04em` |
| Header Background    | `#F5F5F5`                                         |
| Row Hover Background | `#FAFAFA`                                         |
| Row Divider          | `1px solid #F0F0F0`                               |
| Default Pagination   | 20 baris/halaman (opsi 50 / 100)                  |
| Sticky Column        | Nama — pin kiri (pada scroll horizontal)          |

### Icons

**Library:** Lucide React

| Size | Dimensi | Penggunaan                                              |
| ---- | ------- | ------------------------------------------------------- |
| XS   | 12×12px | Inline dengan teks, badge dot pengganti                 |
| SM   | 14×14px | **Component Default** (Buttons, Inputs, Badges)         |
| MD   | 16×16px | **Global UI Default**, dashboard cards, form field icon |
| LG   | 20×20px | Sidebar navigation items                                |
| XL   | 24×24px | Empty state, large widget icons                         |

- **Stroke Width:** `1.75px` untuk navigasi · `2px` untuk UI elements
- **Stroke Linecap:** `round`
- **Stroke Linejoin:** `round`

---

## 10. Theme Provider

**Source:** `src/lib/theme-provider.tsx`

- Light/dark mode toggle
- CSS class-based (`.dark` class on root element)
- Sync with system preference via `prefers-color-scheme`

---

## 11. Base Layer Rules

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
```

---

## CSS Variables Reference (Complete)

```css
:root {
  /* Brand - Deep Emerald Green System */
  --color-brand: #008236;
  --color-brand-hover: #016630;
  --color-brand-active: #01552a;
  --color-brand-subtle: #f0fdf4;
  --color-brand-muted: #7bf1a8;

  /* Accent - Amber System */
  --color-accent: #f59e0b;
  --color-accent-hover: #d97706;
  --color-accent-subtle: #fef3c7;

  /* Semantic */
  --color-success: #008236;
  --color-success-subtle: #f0fdf4;
  --color-error: #e7000b;
  --color-error-subtle: #fff1f2;
  --color-warning: #f59e0b;
  --color-warning-subtle: #fef3c7;
  --color-info: #3b82f6;
  --color-info-subtle: #eff6ff;

  /* Surface - Atmospheric */
  --color-bg: #ffffff;
  --color-bg-sidebar: #fafafa;
  --color-bg-subtle: #f5f5f5;
  --color-surface: #ffffff;
  --color-surface-elevated: #f4f4f5;
  --color-border: #e5e5e5;
  --color-border-subtle: #f0f0f0;

  /* Text - Utilitarian */
  --color-text-primary: #0a0a0a;
  --color-text-secondary: #737373;
  --color-text-tertiary: #a1a1a1;
  --color-text-disabled: #d4d4d4;
  --color-text-inverse: #ffffff;

  /* Typography */
  --font-sans: "Geist Variable", -apple-system, sans-serif;
  --font-mono: "Geist Mono", "SF Mono", monospace;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Radius */
  --radius: 0.45rem;
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.04);

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-inout: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
}
```

---

_EDARA Style Guide v3.2.0 · Yayasan Ulul Ilmi · 5 April 2026_
_OKLCH color space · Geist Variable · shadcn/ui Radix Vega · Tailwind v4_
