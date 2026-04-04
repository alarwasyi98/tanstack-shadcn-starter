# Design System: School Administration SaaS Platform

**Project ID:** Edara

## 1. Visual Theme & Atmosphere

The School Administration SaaS Platform embodies a **precise, utilitarian clarity** that balances the institutional authority of educational management with the approachable warmth of a modern SaaS experience. The interface feels **structured and purposeful**, prioritizing information density and operational efficiency above decorative flourish. The design philosophy is dashboard-first and data-centric, allowing administrators to manage students, teachers, billing, and scheduling with minimal friction.

The overall mood is **grounded yet refined**, creating a professional aesthetic that remains welcoming to non-technical users. The interface feels **competent in its restraint** but elegant in its execution, with every element serving a clear administrative purpose while maintaining visual sophistication. The atmosphere evokes the organized efficiency of a well-run school office — systematic, reliable, and quietly confident.

**Key Characteristics:**

- **Comfortable, information-rich layouts with generous spacing**
- Clean, architectural sidebar navigation with collapsible icon mode
- Data-first presentation with subtle visual hierarchy
- Refined, understated interactive elements with smooth motion transitions
- Professional editorial tone with Indonesian Islamic educational context
- Dark mode support with carefully calibrated contrast ratios

## 2. Color Palette & Roles

### Primary Foundation

- **Pure White Canvas** (#FFFFFF) – Primary background color. Creates a clean, uncluttered surface for data-heavy dashboards and content areas, serving as the neutral foundation for the entire experience.
- **Off-White Near-Pure** (#FAFAFA) – Sidebar background color. Provides a barely perceptible warmth that visually separates the navigation surface from the main content area without creating harsh contrast.
- **Light Mist Gray** (#F7F7F7) – Muted and accent background. Used for subtle surface differentiation, tab panels, and secondary content zones.
- **Soft Cloud Gray** (#F4F4F5) – Secondary surface color. Used for card backgrounds in elevated contexts and secondary interactive surfaces.

### Accent & Interactive

- **Vibrant Forest Green** (#0D9F6E) – The primary brand accent and sole saturated color in the palette. Used exclusively for primary call-to-action buttons, active navigation states, selected filters, key interactive highlights, and success confirmations. This confident green creates clear visual focus points while reinforcing the educational growth metaphor.
- **Deep Forest Green** (#0A7A54) – Dark mode primary accent. Adjusted for optimal contrast against dark surfaces while maintaining brand identity.
- **Emerald Light** (#6DD6A0) – Chart color 1 (lightest). Used for the first data series in visualizations, providing a soft entry point in the green gradient scale.
- **Emerald Mid-Light** (#34B87A) – Chart color 2. Second data series in charts and graphs.
- **Emerald Mid** (#1E9E65) – Chart color 3. Third data series, bridging light and dark greens.
- **Emerald Primary** (#0D9F6E) – Chart color 4. Matches the primary brand color for emphasis in data visualization.
- **Emerald Deep** (#0A7A54) – Chart color 5 (darkest). Used for the final data series, providing maximum contrast within the green palette.

### Typography & Text Hierarchy

- **Near-Black Charcoal** (#252525) – Primary text color for headlines, labels, and body content. Provides strong readable contrast while being slightly softer and more refined than pure black.
- **Medium Warm Gray** (#8E8E8E) – Secondary and muted text. Used for supporting metadata, placeholder text, disabled states, and tertiary labels. Creates clear typographic hierarchy without harsh contrast.
- **Silver Border Gray** (#E8E8E8) – Border, input, and divider color. Creates structural separation that is present but unobtrusive, defining boundaries without competing with content.

### Functional States

- **Coral Error Red** (#E54D42) – Error states, destructive actions, validation failures, and critical alerts. Demands immediate attention without being alarmist.
- **Emerald Success** (#0D9F6E) – Success confirmations, completed states, and positive indicators. Shares the primary brand green for cohesive feedback language.
- **Amber Warning** (#F59E0B) – Warning states, pending actions, and cautionary indicators.
- **Blue Information** (#3B82F6) – Informational callouts, neutral system messages, and helpful guidance.
- **Neutral Muted** (#8E8E8E with #F7F7F7 background) – Disabled states, inactive elements, and recessive metadata.

### Dark Mode Surfaces

- **Charcoal Dark Canvas** (#252525) – Primary dark background. Replaces pure white with a deep, comfortable gray that reduces eye strain during extended administrative sessions.
- **Dark Card Surface** (#343434) – Card, popover, and sidebar backgrounds in dark mode. Provides subtle elevation above the primary dark background.
- **Dark Secondary** (#454547) – Secondary surfaces and muted backgrounds in dark mode.
- **Dark Muted** (#444444) – Muted backgrounds for tabs, secondary panels, and recessive surfaces.
- **Frosted White Border** (rgba(255,255,255,0.10)) – Dark mode borders. Subtle white transparency creates structural definition against dark surfaces.
- **Frosted White Input** (rgba(255,255,255,0.15)) – Dark mode input backgrounds. Slightly more opaque than borders for interactive surface recognition.
- **Dark Ring Gray** (#8E8E8E) – Focus rings in dark mode.
- **Dark Text Primary** (#FAFAFA) – Primary text in dark mode. Near-white for maximum readability.
- **Dark Text Muted** (#B5B5B5) – Secondary and muted text in dark mode.

## 3. Typography Rules

**Primary Font Family:** Geist Variable  
**Character:** Modern, geometric sans-serif with optical sizing and a full range of weights. Clean letterforms that feel contemporary, technical, and highly legible at small sizes — ideal for data-dense administrative interfaces.

### Hierarchy & Weights

- **Card Titles:** Medium weight (500), 16px size (default), 14px (compact). Used for card headers and section titles within content areas. Establishes clear content zones without visual aggression.
- **Body Default:** Regular weight (400), 14px (text-sm). Standard text for most UI elements including buttons, badges, tabs, and sidebar navigation.
- **Body Large:** Regular weight (400), 16px (text-base). Primary reading text for input fields and content paragraphs.
- **Body Small:** Regular weight (400), 12px (text-xs). Smaller text for secondary information and supporting labels.
- **Muted Text:** Regular weight (400), Medium Warm Gray (#8E8E8E). Secondary information, supporting labels, and placeholder text.
- **Link Text:** Medium weight (500), Primary Green (#0D9F6E), underline offset 4px. Clickable text throughout the application.

### Spacing Principles

- Body text uses normal line-height for comfortable reading at standard sizes
- Consistent vertical rhythm with 4px base unit between related text elements
- Card headers use 4px gap between title and description (default), tighter for compact variant
- Sidebar navigation uses 2px gap between menu items for scannable lists

## 4. Component Stylings

### Buttons

- **Shape:** Subtly rounded corners (6px–10px depending on size) — approachable and modern without appearing playful. Uses `min(var(--radius-md), 8px)` for xs/sm variants.
- **Primary:** Vibrant Forest Green (#0D9F6E) background with Pure White Canvas text. Comfortable padding (10px horizontal, 8px vertical for default). Hover darkens to 80% opacity. Active state presses down 1px for tactile feedback.
- **Secondary:** Soft Cloud Gray (#F4F4F5) background with Near-Black Charcoal text. Hover darkens to 80% opacity.
- **Outline:** Silver Border Gray (#E8E8E8) border with background. Hover fills with Light Mist Gray tint. Dark mode uses frosted white input background (30% opacity).
- **Ghost:** No background or border. Hover fills with Light Mist Gray (#F7F7F7). Dark hover uses muted at 50% opacity.
- **Destructive:** Coral Error Red at 10% opacity background with Coral Error Red text. Hover increases to 20% opacity. Dark mode uses 20%/30% opacity for better visibility.
- **Link:** Primary Green text with underline on hover, 4px offset. No background or border.
- **Sizes:** Default (36px height, text-sm), Small (32px), Large (40px), Extra-Small (24px, text-xs). Icon variants: icon-xs (24px), icon-sm (32px), icon (36px), icon-lg (40px).
- **Focus:** Soft outer ring (3px) in Ring Gray at 50% opacity for keyboard navigation accessibility.
- **Disabled:** 50% opacity with pointer events disabled.

### Badges

- **Shape:** Subtly rounded corners (7px/0.45rem radius) — distinctly rounded but not pill-shaped, creating a refined rectangular form with softened edges.
- **Height:** 24px with 12px horizontal padding — compact but readable.
- **Border:** 1px solid border in variant-dependent color — outlined style rather than filled, providing clear visual definition.
- **Default:** Vibrant Forest Green (#0D9F6E) background with Pure White Canvas text.
- **Success:** Emerald border at 30% opacity, Emerald background at 10% opacity, Emerald 600 text. Dark mode uses Emerald 400 text.
- **Warning:** Amber border at 30% opacity, Amber background at 10% opacity, Amber 600 text. Dark mode uses Amber 400 text.
- **Error:** Red border at 30% opacity, Red background at 10% opacity, Red 600 text. Dark mode uses Red 400 text.
- **Info:** Blue border at 30% opacity, Blue background at 10% opacity, Blue 600 text. Dark mode uses Blue 400 text.
- **Neutral:** Silver Border Gray at 60% opacity, Light Mist Gray at 40% opacity, Medium Warm Gray text.
- **Outline:** Silver Border Gray border, Light Mist Gray input background at 20% opacity.
- **Ghost:** No border, hover fills with Light Mist Gray.
- **Destructive:** Coral Error Red border at 30% opacity, Coral background at 10% opacity.
- **No glow effects:** All variants use semi-transparent backgrounds with colored borders — no box-shadow glow.

### Cards & Containers

- **Corner Style:** Generously rounded corners (12px/rounded-xl) creating soft, professional edges. Compact variant uses same rounding.
- **Background:** Pure White Canvas (#FFFFFF) in light mode, Dark Card Surface (#343434) in dark mode.
- **Border Strategy:** Subtle 1px ring in Near-Black Charcoal at 10% opacity combined with shadow-xs. Creates delicate definition with gentle depth.
- **Internal Padding:** 24px horizontal, 24px vertical (default, py-6); 16px for small variant (py-4). Comfortable for content-rich layouts.
- **Section Gap:** 24px (default, gap-6); 16px for small variant (gap-4).
- **Image Treatment:** First-child images round to match card top corners (rounded-t-xl), last-child images round to match card bottom corners (rounded-b-xl).
- **Header:** Grid layout with 4px gap between title and description, 24px horizontal padding (default), 16px (compact). Supports action slot in right column. Border-bottom padding: 24px (default), 16px (compact).
- **Footer:** Flex layout with 24px horizontal padding (default), 16px (compact), rounds bottom corners to match card. Border-top padding: 24px (default), 16px (compact).
- **Card Title:** 16px (text-base) default, 14px (text-sm) compact.
- **Card Description:** 14px (text-sm) for both variants.

### Input Fields

- **Height:** 36px (h-9) — comfortable for standard forms.
- **Corner Style:** Subtly rounded corners (6px/0.375rem radius) matching button default.
- **Border:** 1px Silver Border Gray (#E8E8E8).
- **Background:** Transparent (light mode), frosted white input at 30% opacity (dark mode).
- **Text:** 16px (text-base) default, responsive to 14px (text-sm) on md+ screens.
- **Placeholder:** Medium Warm Gray (#8E8E8E).
- **Focus:** Border shifts to Ring Gray (#A1A1AA) with 3px outer ring at 50% opacity.
- **Error:** Border shifts to Coral Error Red with 3px ring at 20% opacity (dark: 40%, border at 50%).
- **Disabled:** 50% opacity with pointer events and cursor-not-allowed.
- **File Upload:** Inline flex button at 28px height, transparent background, inherits text color (text-sm).

### Tabs

- **Pill Variant (default):** Segmented control style with Light Mist Gray (#F7F7F7) background, 3px padding around triggers, 36px height (h-9). Triggers use subtly rounded corners (6px).
- **Line Variant:** Transparent background with gap between triggers. Active state indicated by 2px underline in Near-Black Charcoal with shadow-sm on active pill.
- **Trigger inactive:** Near-Black Charcoal at 60% opacity (light mode), Medium Warm Gray (dark mode). Text size 14px (text-sm).
- **Trigger active:** Pure White Canvas background with Near-Black Charcoal text and shadow-sm (light mode), frosted white input background with white text (dark mode).
- **Transition:** 200ms ease-in-out for smooth state changes.

### Sidebar

- **Dimensions:** 256px expanded (desktop), 288px (mobile), 48px collapsed icon mode.
- **Background:** Off-White Near-Pure (#FAFAFA) in light mode, Dark Card Surface (#343434) in dark mode.
- **Menu Button:** 32px height (default), 28px (small), 48px (large). Corner radius ~6px.
- **Menu Button states:** Default shows Medium Warm Gray text. Hover adds sidebar accent at 50% opacity with sidebar foreground text. Active state uses sidebar primary at 10% background with medium font weight and sidebar primary text.
- **Collapsible:** Supports offcanvas, icon, and none modes. Icon mode shows only icons with tooltips on hover.
- **Keyboard shortcut:** Ctrl+B / Cmd+B to toggle.
- **Sub-menu:** Indented with left border line, 28px height, same state colors as parent buttons. Text size 12px (text-xs) for both sm and md sizes.

### Icons

- **Default:** 14px (buttons, tabs)
- **Small:** 10px (extra-small buttons)
- **Medium:** 12px (small buttons, badges)
- **Large:** 16px (sidebar, large buttons)
- Icon color inherits parent text color for consistent theming.

### Navigation

- **Style:** Vertical sidebar with grouped sections, collapsible sub-menus.
- **Typography:** 12px, Medium Warm Gray default, transitions to sidebar foreground on hover.
- **Active Indicator:** Sidebar primary at 10% background with medium font weight and sidebar primary text.
- **Hover:** Sidebar accent at 50% opacity background with sidebar foreground text.
- **Transition:** 200ms ease-out for smooth color and background changes.

## 5. Layout Principles

### Grid & Structure

- **Sidebar Width:** 256px expanded, 48px collapsed (desktop), 288px (mobile sheet).
- **Main Content:** Flexible flex-1 layout with min-w-0 to prevent squishing when sidebar collapses.
- **Inset Variant:** 8px margin with rounded-xl corners and subtle shadow, additional 8px margin when sidebar collapses.
- **Responsive Breakpoints:** Mobile <768px (sidebar becomes slide-out sheet), Desktop >=768px (persistent sidebar).

### Whitespace Strategy

- **Base Unit:** 4px for micro-spacing (icon gaps, tight padding).
- **Component Spacing:** 8px–10px for standard internal padding (buttons, inputs).
- **Section Spacing:** 24px for card padding (default), 16px (compact variant).
- **Content Gaps:** 4px gap between card title and description for tight grouping, 24px for general content stacking (default), 16px (compact).
- **Sidebar Menu:** 1px gap between menu items for scannable navigation.

### Alignment & Visual Balance

- **Text Alignment:** Left-aligned for body, navigation, and data tables — optimal readability for administrative content.
- **Card Layout:** Flex column with gap-based spacing, overflow-hidden for clean image clipping.
- **Sidebar Content:** Flex column with minimum height of viewport, scrollable content area.
- **Header:** Sticky at top with 80% background opacity and extra-large backdrop blur for content visibility during scroll.

### Motion & Animation

- **Standard Transition:** 200ms with ease-out curve (cubic-bezier 0.16, 1, 0.3, 1) — used for buttons, inputs, badges, and sidebar items.
- **Tab Transitions:** 200ms with ease-in-out curve (cubic-bezier 0.45, 0, 0.55, 1) — bidirectional state changes.
- **Fast Microinteractions:** 120ms — icon hovers and small state changes.
- **Slow Emphasis:** 300ms — larger state changes and emphasis animations.
- **Spring Curve:** cubic-bezier(0.34, 1.56, 0.64, 1) — bouncy emphasis for special interactions.
- **Transition Properties:** Explicit property lists (color, background-color, border-color, box-shadow) instead of transition-all for performance and predictability. Buttons include transform for press effect.

### Responsive Behavior

- **Mobile-First Sidebar:** Converts to slide-out sheet at 288px width with overlay.
- **Input Text Scaling:** 16px (text-base) default, scales to 14px (text-sm) on md+ screens.
- **Touch Targets:** Minimum 36px height for buttons and inputs, 48px for sidebar large variant.
- **Collapsible Navigation:** Sidebar collapses to 48px icon-only mode on desktop for maximum content space.

## 6. Design System Notes for Stitch Generation

When creating new screens for this project, reference these specific instructions:

### Language to Use

- **Atmosphere:** "Comfortable, information-rich layouts with generous spacing"
- **Button Shapes:** "Subtly rounded corners" (not "rounded-md" or "6px")
- **Badge Shapes:** "Subtly rounded rectangular corners, not pill-shaped"
- **Card Borders:** "Subtle 1px ring with shadow-xs for gentle depth"
- **Spacing:** "Comfortable and generous" and "information-rich with generous spacing"

### Color References

Always use the descriptive names with hex codes:

- Primary CTA: "Vibrant Forest Green (#0D9F6E)"
- Backgrounds: "Pure White Canvas (#FFFFFF)" or "Off-White Near-Pure (#FAFAFA)"
- Text: "Near-Black Charcoal (#252525)" or "Medium Warm Gray (#8E8E8E)"
- Borders: "Silver Border Gray (#E8E8E8)"
- Error: "Coral Error Red (#E54D42)"

### Component Prompts

- "Create a data table card with generously rounded corners (rounded-xl), subtle 1px ring border, shadow-xs, and comfortable 24px padding"
- "Design a primary action button in Vibrant Forest Green (#0D9F6E) with subtly rounded corners and comfortable 36px height (h-9)"
- "Add a status badge with subtly rounded rectangular corners, outlined style with semi-transparent background and colored border"
- "Build a sidebar navigation with collapsible icon mode, 256px expanded width, and smooth 200ms transitions"

### Incremental Iteration

When refining existing screens:

1. Focus on ONE component at a time (e.g., "Update the data table row actions")
2. Be specific about what to change (e.g., "Increase the card padding from 24px to 28px")
3. Reference this design system language consistently
4. Maintain the comfortable, information-rich aesthetic — avoid adding decorative elements

### Explicit Guardrails

- Never use pill-shaped (rounded-full) badges — always use subtly rounded rectangular corners
- Never use box-shadow glow on badges or buttons — use semi-transparent backgrounds with colored borders
- Never use transition-all — always specify explicit transition properties
- Cards use shadow-xs combined with a 1px ring for gentle depth — do not remove the shadow
- Never mix more than one saturated color (Vibrant Forest Green) with functional colors on a single screen
- Always maintain the vega sizing convention: buttons default h-9, inputs h-9, badges h-6, cards rounded-xl with 24px padding
- Always use OKLCH color space for design tokens — never hardcode hex values in CSS
- Always support dark mode with frosted white borders (rgba transparency) instead of solid gray borders
