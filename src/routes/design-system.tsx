import { createFileRoute } from "@tanstack/react-router"
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  Clock,
  Component,
  Copy,
  CreditCard,
  Download,
  Edit,
  Eye,
  Flag,
  GitBranch,
  Heart,
  Home,
  Info,
  Layers,
  LogOut,
  Mail,
  Moon,
  MoreHorizontal,
  Package,
  Palette,
  Plus,
  Printer,
  Search,
  Settings,
  Share2,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  Sun,
  Trash2,
  TrendingDown,
  TrendingUp,
  Type,
  Upload,
  User,
  Users,
  X,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ThemeProvider, useTheme } from "@/lib/theme-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export const Route = createFileRoute("/design-system")({
  component: DesignSystemPage,
})

function DesignSystemPage() {
  return (
    <ThemeProvider defaultTheme="light">
      <DesignSystemContent />
    </ThemeProvider>
  )
}

function DesignSystemContent() {
  const { toggleTheme, theme } = useTheme()
  const isMobile = useIsMobile()

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <TooltipProvider delayDuration={0}>
        <AppSidebar />

        <SidebarInset className="flex flex-col">
          <header className="sticky top-0 z-50 flex h-12 shrink-0 items-center gap-2 border-b border-border/50 bg-background/80 px-4 backdrop-blur-xl">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <div className="flex flex-1 items-center gap-2">
              <Search className="size-3.5 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                className="h-7 max-w-xs border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={toggleTheme}
              className="ml-auto"
            >
              {theme === "light" ? (
                <Moon className="size-3.5" />
              ) : (
                <Sun className="size-3.5" />
              )}
            </Button>
          </header>

          <main className="flex-1 overflow-auto">
            <div className="mx-auto max-w-6xl p-6 lg:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[0.625rem]">
                    <Sparkles className="size-2.5" />
                    Living Documentation
                  </Badge>
                </div>
                <h1 className="mt-3 font-heading text-2xl font-medium">
                  Design System
                </h1>
                <p className="mt-1 max-w-xl text-xs/relaxed text-muted-foreground">
                  A comprehensive showcase of the design system tokens,
                  components, and patterns. Toggle dark mode to see how
                  components adapt across themes.
                </p>
              </div>

              <div className="space-y-12">
                <section id="colors">
                  <ColorPaletteSection />
                </section>

                <section id="typography">
                  <TypographySection />
                </section>

                <section id="spacing">
                  <SpacingSection />
                </section>

                <section id="motion">
                  <MotionSection />
                </section>

                <section id="buttons">
                  <ButtonsSection />
                </section>

                <section id="badges">
                  <BadgesSection />
                </section>

                <section id="cards">
                  <CardsSection />
                </section>

                <section id="inputs">
                  <InputsSection />
                </section>

                <section id="tables">
                  <TablesSection />
                </section>

                <section id="dialogs">
                  <DialogsSection />
                </section>

                <section id="dropdowns">
                  <DropdownsSection />
                </section>

                <IconsSection />
              </div>
            </div>
          </main>
        </SidebarInset>
      </TooltipProvider>
    </SidebarProvider>
  )
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-3.5" />
        </div>
        <h2 className="font-heading text-base font-medium">{title}</h2>
      </div>
      <p className="mt-1 text-xs/relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function ColorSwatch({
  name,
  variable,
  value,
}: {
  name: string
  variable: string
  value: string
}) {
  return (
    <div className="group flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md ring-1 ring-foreground/10 transition-transform group-hover:scale-[1.02]"
        style={{ background: value }}
      />
      <div>
        <p className="text-xs font-medium">{name}</p>
        <p className="font-mono text-[0.625rem] text-muted-foreground">
          {variable}
        </p>
      </div>
    </div>
  )
}

function ColorPaletteSection() {
  const { theme } = useTheme()

  const primaryColors = [
    {
      name: "Background",
      variable: "--background",
      light: "oklch(1 0 0)",
      dark: "oklch(0.145 0 0)",
    },
    {
      name: "Foreground",
      variable: "--foreground",
      light: "oklch(0.145 0 0)",
      dark: "oklch(0.985 0 0)",
    },
    {
      name: "Primary",
      variable: "--primary",
      light: "oklch(0.527 0.154 150.069)",
      dark: "oklch(0.448 0.119 151.328)",
    },
    {
      name: "Primary FG",
      variable: "--primary-foreground",
      light: "oklch(0.982 0.018 155.826)",
      dark: "oklch(0.982 0.018 155.826)",
    },
    {
      name: "Secondary",
      variable: "--secondary",
      light: "oklch(0.967 0.001 286.375)",
      dark: "oklch(0.274 0.006 286.033)",
    },
    {
      name: "Secondary FG",
      variable: "--secondary-foreground",
      light: "oklch(0.21 0.006 285.885)",
      dark: "oklch(0.985 0 0)",
    },
    {
      name: "Muted",
      variable: "--muted",
      light: "oklch(0.97 0 0)",
      dark: "oklch(0.269 0 0)",
    },
    {
      name: "Muted FG",
      variable: "--muted-foreground",
      light: "oklch(0.556 0 0)",
      dark: "oklch(0.708 0 0)",
    },
    {
      name: "Accent",
      variable: "--accent",
      light: "oklch(0.97 0 0)",
      dark: "oklch(0.269 0 0)",
    },
    {
      name: "Accent FG",
      variable: "--accent-foreground",
      light: "oklch(0.205 0 0)",
      dark: "oklch(0.985 0 0)",
    },
    {
      name: "Destructive",
      variable: "--destructive",
      light: "oklch(0.577 0.245 27.325)",
      dark: "oklch(0.704 0.191 22.216)",
    },
    {
      name: "Border",
      variable: "--border",
      light: "oklch(0.922 0 0)",
      dark: "oklch(1 0 0 / 10%)",
    },
    {
      name: "Input",
      variable: "--input",
      light: "oklch(0.922 0 0)",
      dark: "oklch(1 0 0 / 15%)",
    },
    {
      name: "Ring",
      variable: "--ring",
      light: "oklch(0.708 0 0)",
      dark: "oklch(0.556 0 0)",
    },
  ]

  const chartColors = [
    {
      name: "Chart 1",
      variable: "--chart-1",
      value: "oklch(0.871 0.15 154.449)",
    },
    {
      name: "Chart 2",
      variable: "--chart-2",
      value: "oklch(0.723 0.219 149.579)",
    },
    {
      name: "Chart 3",
      variable: "--chart-3",
      value: "oklch(0.627 0.194 149.214)",
    },
    {
      name: "Chart 4",
      variable: "--chart-4",
      value: "oklch(0.527 0.154 150.069)",
    },
    {
      name: "Chart 5",
      variable: "--chart-5",
      value: "oklch(0.448 0.119 151.328)",
    },
  ]

  const sidebarColors = [
    {
      name: "Sidebar",
      variable: "--sidebar",
      light: "oklch(0.985 0 0)",
      dark: "oklch(0.205 0 0)",
    },
    {
      name: "Sidebar FG",
      variable: "--sidebar-foreground",
      light: "oklch(0.145 0 0)",
      dark: "oklch(0.985 0 0)",
    },
    {
      name: "Sidebar Primary",
      variable: "--sidebar-primary",
      light: "oklch(0.627 0.194 149.214)",
      dark: "oklch(0.723 0.219 149.579)",
    },
    {
      name: "Sidebar Primary FG",
      variable: "--sidebar-primary-foreground",
      light: "oklch(0.982 0.018 155.826)",
      dark: "oklch(0.982 0.018 155.826)",
    },
    {
      name: "Sidebar Accent",
      variable: "--sidebar-accent",
      light: "oklch(0.97 0 0)",
      dark: "oklch(0.269 0 0)",
    },
    {
      name: "Sidebar Accent FG",
      variable: "--sidebar-accent-foreground",
      light: "oklch(0.205 0 0)",
      dark: "oklch(0.985 0 0)",
    },
    {
      name: "Sidebar Border",
      variable: "--sidebar-border",
      light: "oklch(0.922 0 0)",
      dark: "oklch(1 0 0 / 10%)",
    },
    {
      name: "Sidebar Ring",
      variable: "--sidebar-ring",
      light: "oklch(0.708 0 0)",
      dark: "oklch(0.556 0 0)",
    },
  ]

  const radiusScale = [
    {
      name: "sm",
      variable: "--radius-sm",
      calc: "calc(var(--radius) × 0.6)",
      approx: "~4.3px",
    },
    {
      name: "md",
      variable: "--radius-md",
      calc: "calc(var(--radius) × 0.8)",
      approx: "~5.8px",
    },
    {
      name: "lg",
      variable: "--radius-lg",
      calc: "var(--radius)",
      approx: "~7.2px",
    },
    {
      name: "xl",
      variable: "--radius-xl",
      calc: "calc(var(--radius) × 1.4)",
      approx: "~10.1px",
    },
    {
      name: "2xl",
      variable: "--radius-2xl",
      calc: "calc(var(--radius) × 1.8)",
      approx: "~13px",
    },
    {
      name: "3xl",
      variable: "--radius-3xl",
      calc: "calc(var(--radius) × 2.2)",
      approx: "~15.8px",
    },
    {
      name: "4xl",
      variable: "--radius-4xl",
      calc: "calc(var(--radius) × 2.6)",
      approx: "~18.7px",
    },
  ]

  return (
    <div>
      <SectionHeader
        icon={Palette}
        title="Color Palette"
        description="OKLCH color tokens for light and dark modes. Base color: neutral with green primary (~150° hue)."
      />

      <Tabs defaultValue="core" className="w-full">
        <TabsList variant="line" className="mb-4">
          <TabsTrigger value="core">Core</TabsTrigger>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
          <TabsTrigger value="radius">Radius</TabsTrigger>
        </TabsList>

        <TabsContent value="core">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Core Tokens</CardTitle>
              <CardDescription>
                {theme === "light" ? "Light" : "Dark"} mode values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {primaryColors.map((color) => (
                  <ColorSwatch
                    key={color.variable}
                    name={color.name}
                    variable={color.variable}
                    value={theme === "light" ? color.light : color.dark}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chart">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Chart Colors</CardTitle>
              <CardDescription>
                Sequential green palette for data visualization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {chartColors.map((color) => (
                  <ColorSwatch
                    key={color.variable}
                    name={color.name}
                    variable={color.variable}
                    value={color.value}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sidebar">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Sidebar Tokens</CardTitle>
              <CardDescription>
                Dedicated color tokens for sidebar components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {sidebarColors.map((color) => (
                  <ColorSwatch
                    key={color.variable}
                    name={color.name}
                    variable={color.variable}
                    value={theme === "light" ? color.light : color.dark}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="radius">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Border Radius Scale</CardTitle>
              <CardDescription>
                Base radius: 0.45rem (~7.2px) — multiplied for each step
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {radiusScale.map((r) => (
                  <div
                    key={r.variable}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="h-12 w-12 bg-primary/20 ring-1 ring-primary/30"
                      style={{ borderRadius: r.approx.replace("~", "") }}
                    />
                    <div className="text-center">
                      <p className="text-xs font-medium">{r.name}</p>
                      <p className="font-mono text-[0.625rem] text-muted-foreground">
                        {r.approx}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TypographySection() {
  const fontSizes = [
    {
      label: "0.625rem (10px)",
      classes: "text-[0.625rem]",
      sample: "Badge / micro text",
    },
    {
      label: "0.75rem (12px)",
      classes: "text-xs",
      sample: "Body text, labels",
    },
    {
      label: "0.875rem (14px)",
      classes: "text-sm",
      sample: "Descriptions, secondary text",
    },
    {
      label: "1rem (16px)",
      classes: "text-base",
      sample: "Card titles, headings",
    },
    { label: "1.25rem (20px)", classes: "text-lg", sample: "Section headings" },
    { label: "1.5rem (24px)", classes: "text-xl", sample: "Page headings" },
    { label: "1.875rem (30px)", classes: "text-2xl", sample: "Metric values" },
    { label: "2.25rem (36px)", classes: "text-3xl", sample: "Hero text" },
  ]

  const fontWeights = [
    { label: "normal", classes: "font-normal", sample: "The quick brown fox" },
    { label: "medium", classes: "font-medium", sample: "The quick brown fox" },
    {
      label: "semibold",
      classes: "font-semibold",
      sample: "The quick brown fox",
    },
    { label: "bold", classes: "font-bold", sample: "The quick brown fox" },
  ]

  const lineHeights = [
    {
      label: "tight",
      classes: "leading-tight",
      sample: "Compact labels and tight text blocks",
    },
    {
      label: "snug",
      classes: "leading-snug",
      sample: "Slightly tighter than normal for labels",
    },
    {
      label: "normal",
      classes: "leading-normal",
      sample: "Default line height for descriptions",
    },
    {
      label: "relaxed",
      classes: "leading-relaxed",
      sample: "Relaxed spacing for body copy and text",
    },
    {
      label: "loose",
      classes: "leading-loose",
      sample: "Loose spacing for long-form reading",
    },
  ]

  return (
    <div>
      <SectionHeader
        icon={Type}
        title="Typography"
        description="Geist Variable font family with a comprehensive scale for sizes, weights, and line heights."
      />

      <div className="space-y-6">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Font Family</CardTitle>
            <CardDescription>
              --font-sans: 'Geist Variable', sans-serif
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-medium">
              Geist Variable — Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp
              Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              0123456789 !@#$%^&*()
            </p>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Font Sizes</CardTitle>
            <CardDescription>
              Scale from 10px micro text to 36px hero text
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {fontSizes.map((size) => (
                <div key={size.label} className="flex items-baseline gap-4">
                  <span className="w-32 shrink-0 font-mono text-[0.625rem] text-muted-foreground">
                    {size.label}
                  </span>
                  <span className={cn(size.classes, "text-foreground")}>
                    {size.sample}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Font Weights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {fontWeights.map((weight) => (
                  <div key={weight.label} className="flex items-baseline gap-4">
                    <span className="w-20 shrink-0 font-mono text-[0.625rem] text-muted-foreground">
                      {weight.label}
                    </span>
                    <span className={cn(weight.classes, "text-sm")}>
                      {weight.sample}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>Line Heights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lineHeights.map((lh) => (
                  <div key={lh.label} className="flex items-baseline gap-4">
                    <span className="w-20 shrink-0 font-mono text-[0.625rem] text-muted-foreground">
                      {lh.label}
                    </span>
                    <span className={cn(lh.classes, "max-w-[200px] text-sm")}>
                      {lh.sample}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SpacingSection() {
  const spacingScale = [
    { label: "gap-1", px: "4px", value: "0.25rem" },
    { label: "gap-1.5", px: "6px", value: "0.375rem" },
    { label: "gap-2", px: "8px", value: "0.5rem" },
    { label: "gap-3", px: "12px", value: "0.75rem" },
    { label: "gap-4", px: "16px", value: "1rem" },
    { label: "gap-6", px: "24px", value: "1.5rem" },
    { label: "gap-8", px: "32px", value: "2rem" },
    { label: "gap-12", px: "48px", value: "3rem" },
  ]

  const paddingExamples = [
    { label: "p-2", px: "8px" },
    { label: "p-3", px: "12px" },
    { label: "p-4", px: "16px" },
    { label: "p-6", px: "24px" },
  ]

  return (
    <div>
      <SectionHeader
        icon={Layers}
        title="Spacing"
        description="Tailwind spacing scale used throughout the design system for consistent rhythm."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Gap Scale</CardTitle>
            <CardDescription>
              Common gap values used in component layouts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {spacingScale.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="w-16 shrink-0 font-mono text-[0.625rem] text-muted-foreground">
                    {s.label}
                  </span>
                  <div className="flex-1">
                    <div
                      className="h-4 rounded-sm bg-primary/20"
                      style={{ width: s.px }}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-[0.625rem] text-muted-foreground">
                    {s.px}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Padding Examples</CardTitle>
            <CardDescription>
              Visual reference for common padding values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {paddingExamples.map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="flex size-16 items-center justify-center rounded-md border border-dashed border-border">
                      <div
                        className="rounded-sm bg-primary/20"
                        style={{
                          width: `calc(100% - ${parseInt(p.px) * 2}px)`,
                          height: `calc(100% - ${parseInt(p.px) * 2}px)`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium">{p.label}</p>
                    <p className="font-mono text-[0.625rem] text-muted-foreground">
                      {p.px}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ButtonsSection() {
  return (
    <div>
      <SectionHeader
        icon={Component}
        title="Buttons"
        description="Interactive button components with variants for different contexts and hierarchy levels."
      />

      <div className="space-y-6">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Six button variants for different visual emphasis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Four size scales from extra-small to large
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Icon Buttons</CardTitle>
            <CardDescription>
              Icon-only buttons in all size variants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="icon-xs" variant="outline">
                <Plus className="size-2.5" />
              </Button>
              <Button size="icon-sm" variant="outline">
                <Plus className="size-3" />
              </Button>
              <Button size="icon" variant="outline">
                <Plus className="size-3.5" />
              </Button>
              <Button size="icon-lg" variant="outline">
                <Plus className="size-4" />
              </Button>
              <Button size="icon" variant="default">
                <Plus className="size-3.5" />
              </Button>
              <Button size="icon" variant="destructive">
                <X className="size-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>
              Buttons with leading and trailing icons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button>
                <Plus className="size-3.5" />
                Create
              </Button>
              <Button variant="outline">
                <Download className="size-3.5" />
                Download
              </Button>
              <Button variant="secondary">
                Next
                <ArrowRight className="size-3.5" />
              </Button>
              <Button variant="destructive">
                <Trash2 className="size-3.5" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>Disabled and loading states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
              <Button variant="secondary" disabled>
                Disabled Secondary
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BadgesSection() {
  return (
    <div>
      <SectionHeader
        icon={Sparkles}
        title="Badges"
        description="Subtle outlined status indicators with functional color variants and glow effects."
      />

      <Card size="sm">
        <CardHeader>
          <CardTitle>Standard Variants</CardTitle>
          <CardDescription>Core badge styles for general use</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
          </div>
        </CardContent>
      </Card>

      <Card size="sm" className="mt-4">
        <CardHeader>
          <CardTitle>Functional Colors</CardTitle>
          <CardDescription>
            Outlined badges with subtle backgrounds, colored borders, and glow
            effects for status indication
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="success">
              <Check className="size-3" /> Success
            </Badge>
            <Badge variant="warning">
              <AlertTriangle className="size-3" /> Warning
            </Badge>
            <Badge variant="error">
              <X className="size-3" /> Error
            </Badge>
            <Badge variant="info">
              <Info className="size-3" /> Info
            </Badge>
            <Badge variant="neutral">
              <Clock className="size-3" /> Neutral
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card size="sm" className="mt-4">
        <CardHeader>
          <CardTitle>Destructive</CardTitle>
          <CardDescription>
            Destructive variant with red glow for critical actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="destructive">
              <Trash2 className="size-3" /> Delete
            </Badge>
            <Badge variant="destructive">
              <AlertTriangle className="size-3" /> Critical
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CardsSection() {
  return (
    <div>
      <SectionHeader
        icon={Layers}
        title="Cards"
        description="Versatile container components for grouping related content and actions."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>
              A standard card with header, content, and footer sections.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs/relaxed text-muted-foreground">
              Cards provide a flexible container for grouping related content.
              They support headers, footers, actions, and descriptions.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Action</Button>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </CardFooter>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Compact Card</CardTitle>
            <CardDescription>
              A smaller variant for dense layouts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs/relaxed text-muted-foreground">
              The compact card uses reduced padding and tighter spacing for
              information-dense interfaces.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="xs">Action</Button>
            <Button size="xs" variant="outline">
              Cancel
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card with Action</CardTitle>
            <CardDescription>
              Cards support inline actions in the header.
            </CardDescription>
            <CardAction>
              <Button size="icon-xs" variant="ghost">
                <MoreHorizontal className="size-3" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Activity className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Active Users</p>
                <p className="text-xs text-muted-foreground">
                  1,234 currently online
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>Card with Border</CardTitle>
            <CardDescription>
              Using border separators for structure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Revenue</span>
                <span className="text-sm font-medium">$45,231</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Growth</span>
                <span className="text-sm font-medium text-primary">+20.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Users</span>
                <span className="text-sm font-medium">+573</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <p className="text-[0.625rem] text-muted-foreground">
              Last updated 5 minutes ago
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function InputsSection() {
  return (
    <div>
      <SectionHeader
        icon={Edit}
        title="Inputs"
        description="Form input components including text fields, selects, checkboxes, switches, and more."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Text Inputs</CardTitle>
            <CardDescription>
              Standard text input fields with labels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-1.5">
              <Label>Disabled</Label>
              <Input disabled placeholder="Disabled input" />
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Focus & Error States</CardTitle>
            <CardDescription>
              Input states for active focus and validation errors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="focused-input">Focused</Label>
              <Input
                id="focused-input"
                defaultValue="This input is focused"
                className="ring-2 ring-ring/50 focus-visible:ring-ring/50"
                autoFocus
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="error-input" className="text-destructive">
                Username
              </Label>
              <Input
                id="error-input"
                defaultValue="inv@lid"
                aria-invalid
                className="border-destructive/50 text-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
              />
              <p className="text-xs text-destructive">
                Username can only contain letters and numbers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Textarea & Select</CardTitle>
            <CardDescription>
              Multi-line text and dropdown selection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label>Message</Label>
              <Textarea placeholder="Type your message..." rows={3} />
            </div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Checkbox & Radio</CardTitle>
            <CardDescription>Selection controls for forms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Checkboxes
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="check1" defaultChecked />
                  <Label htmlFor="check1" className="text-xs">
                    Enable notifications
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" />
                  <Label htmlFor="check2" className="text-xs">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" disabled />
                  <Label
                    htmlFor="check3"
                    className="text-xs text-muted-foreground"
                  >
                    Disabled option
                  </Label>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Radio Group
              </p>
              <RadioGroup defaultValue="option1" className="gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1" className="text-xs">
                    Standard Plan
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2" className="text-xs">
                    Pro Plan
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="option3" id="r3" disabled />
                  <Label htmlFor="r3" className="text-xs text-muted-foreground">
                    Enterprise (disabled)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Switch & Slider</CardTitle>
            <CardDescription>
              Toggle controls and range selection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Switches
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Dark Mode</p>
                  <p className="text-[0.625rem] text-muted-foreground">
                    Toggle dark theme
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Auto-save</p>
                  <p className="text-[0.625rem] text-muted-foreground">
                    Save changes automatically
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Slider
              </p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TablesSection() {
  return (
    <div>
      <SectionHeader
        icon={BarChart3}
        title="Data Tables"
        description="Structured data display with sortable columns, checkboxes, and row actions."
      />

      <Card size="sm">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            A table showing team member information with row selection and
            actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox aria-label="Select all rows" />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[0.5rem]">
                        OL
                      </AvatarFallback>
                    </Avatar>
                    Olivia Martin
                  </div>
                </TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <StatusBadge variant="success">Active</StatusBadge>
                </TableCell>
                <TableCell className="text-right">$1,999.00</TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[0.5rem]">
                        JL
                      </AvatarFallback>
                    </Avatar>
                    Jackson Lee
                  </div>
                </TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>
                  <StatusBadge variant="warning">Away</StatusBadge>
                </TableCell>
                <TableCell className="text-right">$2,450.00</TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[0.5rem]">
                        IN
                      </AvatarFallback>
                    </Avatar>
                    Isabella Nguyen
                  </div>
                </TableCell>
                <TableCell>Product Manager</TableCell>
                <TableCell>
                  <StatusBadge variant="info">Busy</StatusBadge>
                </TableCell>
                <TableCell className="text-right">$3,200.00</TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[0.5rem]">
                        WK
                      </AvatarFallback>
                    </Avatar>
                    William Kim
                  </div>
                </TableCell>
                <TableCell>Data Analyst</TableCell>
                <TableCell>
                  <StatusBadge variant="error">Offline</StatusBadge>
                </TableCell>
                <TableCell className="text-right">$980.00</TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right font-medium">
                  $8,629.00
                </TableCell>
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function StatusBadge({
  variant = "success",
  children,
}: {
  variant: "success" | "warning" | "info" | "error"
  children: React.ReactNode
}) {
  const dotColors = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    info: "bg-blue-500",
    error: "bg-red-500",
  }

  const variantClasses = {
    success:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/30 dark:text-emerald-400",
    warning:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-400/30 dark:text-amber-400",
    info: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:border-blue-400/30 dark:text-blue-400",
    error:
      "border-red-500/30 bg-red-500/10 text-red-600 dark:border-red-400/30 dark:text-red-400",
  }

  return (
    <span
      className={cn(
        "relative inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-lg border px-3 py-0.5 text-xs font-medium whitespace-nowrap",
        variantClasses[variant]
      )}
    >
      <span
        className={cn("size-1.5 shrink-0 rounded-full", dotColors[variant])}
      />
      {children}
    </span>
  )
}

function RowActions() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-xs" className="size-7">
          <MoreHorizontal className="size-3.5" />
          <span className="sr-only">Row actions</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-44 p-1">
        <div className="flex flex-col gap-0.5">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 justify-start gap-2 px-2 text-xs font-normal"
          >
            <Edit className="size-3.5" />
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 justify-start gap-2 px-2 text-xs font-normal"
          >
            <Share2 className="size-3.5" />
            Share
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 justify-start gap-2 px-2 text-xs font-normal"
          >
            <Bookmark className="size-3.5" />
            Bookmark
          </Button>
          <Separator className="my-0.5" />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 justify-start gap-2 px-2 text-xs font-normal text-destructive"
          >
            <Trash2 className="size-3.5" />
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function DialogsSection() {
  return (
    <div>
      <SectionHeader
        icon={Eye}
        title="Dialogs & Alerts"
        description="Modal overlays for confirmations, alerts, and focused interactions."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Alert Dialog</CardTitle>
            <CardDescription>Destructive action confirmation</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="size-3.5" />
                  Delete Project
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <AlertTriangle className="size-4 text-destructive" />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the project and remove all associated data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>
              User avatars with fallback and grouping
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="text-xs">AB</AvatarFallback>
                </Avatar>
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">CD</AvatarFallback>
                </Avatar>
                <Avatar className="size-9">
                  <AvatarFallback className="text-xs">EF</AvatarFallback>
                </Avatar>
                <Avatar className="size-10">
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
              </div>
              <Separator />
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-primary text-[0.5rem] text-primary-foreground">
                    A
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-secondary text-[0.5rem]">
                    B
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-muted text-[0.5rem]">
                    C
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="text-[0.5rem]">+3</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Skeletons</CardTitle>
            <CardDescription>Loading state placeholders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex-1 space-y-1.5">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-2.5 w-24" />
                </div>
              </div>
              <Skeleton className="h-20 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Tabbed content navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account">
              <TabsList className="w-full">
                <TabsTrigger value="account" className="flex-1">
                  Account
                </TabsTrigger>
                <TabsTrigger value="password" className="flex-1">
                  Password
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex-1">
                  Notifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-3">
                <p className="text-xs/relaxed text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </TabsContent>
              <TabsContent value="password" className="mt-3">
                <p className="text-xs/relaxed text-muted-foreground">
                  Change your password and security settings.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="mt-3">
                <p className="text-xs/relaxed text-muted-foreground">
                  Configure your notification preferences.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DropdownsSection() {
  return (
    <div>
      <SectionHeader
        icon={ChevronDown}
        title="Dropdown Menus"
        description="Contextual menus for actions, settings, and navigation."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Dropdown Menu</CardTitle>
            <CardDescription>
              Full-featured dropdown with groups and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Open Menu
                  <ChevronDown className="size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="size-3.5" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="size-3.5" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="size-3.5" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <GitBranch className="size-3.5" />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share2 className="size-3.5" />
                    <span>Twitter</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut className="size-3.5" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Tooltips</CardTitle>
            <CardDescription>Contextual hints on hover</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Plus className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add new item</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Edit className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit details</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Trash2 className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete item</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Share2 className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share link</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Bookmark className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bookmark</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon-sm" variant="outline">
                    <Flag className="size-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Report issue</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MotionSection() {
  const timingTokens = [
    {
      token: "--duration-fast",
      value: "120ms",
      usage: "Hover state, focus ring, tooltip",
      width: "40%",
    },
    {
      token: "--duration-base",
      value: "200ms",
      usage: "Button, input, tab, badge, default transition",
      width: "66%",
    },
    {
      token: "--duration-slow",
      value: "300ms",
      usage: "Modal open, drawer slide, spring action",
      width: "100%",
    },
  ]

  const easingCurves = [
    {
      token: "--ease-out",
      curve: "cubic-bezier(0.16, 1, 0.3, 1)",
      character: "Default masuk — deselerasi cepat",
      path: "M 10,110 C 26,10 36,10 110,10",
      label: "out",
    },
    {
      token: "--ease-in",
      curve: "cubic-bezier(0.4, 0, 1, 1)",
      character: "Default keluar — akselerasi",
      path: "M 10,110 C 50,110 110,110 110,10",
      label: "in",
    },
    {
      token: "--ease-inout",
      curve: "cubic-bezier(0.45, 0, 0.55, 1)",
      character: "Symmetric — tab switch, state toggle",
      path: "M 10,110 C 55,110 65,10 110,10",
      label: "inout",
    },
    {
      token: "--ease-spring",
      curve: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      character: "Bouncy — toggle, konfirmasi, popover",
      path: "M 10,110 C 44,-45 74,10 110,10",
      label: "spring",
    },
  ]

  return (
    <div>
      <SectionHeader
        icon={Zap}
        title="Motion & Animation"
        description="Timing and easing tokens for consistent, purposeful animations across the design system."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Timing Scale</CardTitle>
            <CardDescription>
              Relative duration values visualized proportionally
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timingTokens.map((t, i) => (
                <div key={t.token} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs">{t.token}</span>
                      <span className="text-[0.625rem] text-muted-foreground">
                        {t.value}
                      </span>
                    </div>
                    <span className="text-[0.625rem] text-muted-foreground">
                      {t.usage}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted/50">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{
                        width: t.width,
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardTitle>Easing Curves</CardTitle>
            <CardDescription>
              Cubic-bezier curves rendered as motion paths
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {easingCurves.map((e) => (
                <div key={e.token} className="flex flex-col gap-1.5">
                  <div className="overflow-hidden rounded-lg border border-border/50 bg-muted/30">
                    <svg viewBox="0 0 120 120" className="h-20 w-full">
                      {/* Grid */}
                      <line
                        x1="10"
                        y1="10"
                        x2="10"
                        y2="110"
                        stroke="currentColor"
                        className="text-border/60"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="10"
                        y1="110"
                        x2="110"
                        y2="110"
                        stroke="currentColor"
                        className="text-border/60"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="10"
                        y1="10"
                        x2="110"
                        y2="10"
                        stroke="currentColor"
                        className="text-border/30"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                      />
                      <line
                        x1="110"
                        y1="10"
                        x2="110"
                        y2="110"
                        stroke="currentColor"
                        className="text-border/30"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                      />
                      {/* Diagonal reference */}
                      <line
                        x1="10"
                        y1="110"
                        x2="110"
                        y2="10"
                        stroke="currentColor"
                        className="text-muted-foreground/20"
                        strokeWidth="0.4"
                        strokeDasharray="3 3"
                      />
                      {/* Curve */}
                      <path
                        d={e.path}
                        fill="none"
                        stroke="currentColor"
                        className="text-primary"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Animated dot */}
                      <circle
                        r="2.5"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={e.path}
                        />
                      </circle>
                      {/* Control points for spring */}
                      {e.label === "spring" && (
                        <>
                          <circle
                            cx="44"
                            cy="-45"
                            r="1.5"
                            fill="none"
                            stroke="currentColor"
                            className="text-muted-foreground/40"
                            strokeWidth="0.5"
                          />
                          <circle
                            cx="74"
                            cy="10"
                            r="1.5"
                            fill="none"
                            stroke="currentColor"
                            className="text-muted-foreground/40"
                            strokeWidth="0.5"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-[0.625rem]">{e.token}</p>
                    <p className="text-[0.625rem] text-muted-foreground">
                      {e.character}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card size="sm" className="mt-4">
        <CardHeader>
          <CardTitle>Interactive Demos</CardTitle>
          <CardDescription>
            Hover to see timing and easing tokens in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Duration comparison
              </p>
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    120ms
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    200ms
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    300ms
                  </span>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <p className="mb-2 text-[0.625rem] font-medium tracking-wider text-muted-foreground uppercase">
                Easing comparison
              </p>
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    ease-out
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-base)] ease-[var(--ease-in)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    ease-in
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-base)] ease-[var(--ease-inout)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    ease-inout
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded-lg bg-primary/80 transition-transform duration-[var(--duration-base)] ease-[var(--ease-spring)] hover:scale-110" />
                  <span className="text-[0.625rem] text-muted-foreground">
                    ease-spring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IconsSection() {
  const iconCategories = [
    {
      label: "Navigation",
      icons: [
        Home,
        Settings,
        Search,
        Bell,
        Mail,
        ArrowRight,
        ChevronDown,
        MoreHorizontal,
      ],
    },
    {
      label: "Actions",
      icons: [Plus, Edit, Trash2, Copy, Download, Upload, Printer, Share2],
    },
    {
      label: "Status",
      icons: [Check, X, AlertTriangle, Info, Star, Heart, Bookmark, Flag],
    },
    {
      label: "Business",
      icons: [
        TrendingUp,
        TrendingDown,
        CreditCard,
        Activity,
        Package,
        ShoppingCart,
        BarChart3,
        Zap,
      ],
    },
    {
      label: "Social",
      icons: [
        Users,
        GitBranch,
        Share2,
        Bookmark,
        User,
        Shield,
        Clock,
        Sparkles,
      ],
    },
  ]

  return (
    <div>
      <SectionHeader
        icon={Sparkles}
        title="Icons"
        description="Lucide React icon library — a comprehensive set of open-source icons used throughout the design system."
      />

      <div className="space-y-4">
        {iconCategories.map((category) => (
          <Card key={category.label} size="sm">
            <CardHeader>
              <CardTitle>{category.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.icons.map((Icon) => (
                  <Tooltip key={Icon.name}>
                    <TooltipTrigger asChild>
                      <div className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                        <Icon className="size-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-[0.625rem]">{Icon.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
