// Layout

export type Display = "block" | "inline-block" | "inline" | "inline" | "flex" | "inline-flex" | "table" | "inline-table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row-group" | "table-row" | "flow-root" | "grid" | "inline-grid" | "contents" | "list-item" | "hidden"

export type Float = "right" | "left" | "none"

export type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down"

export type Overflow = "auto" | "hidden" | "visible" | "scroll"

export type Position = "static" | "fixed" | "absolute" | "relative" | "sticky"

export type Visibility = "visible" | "invisible"

export type ZIndex = "0" | "10" | "20" | "30" | "40" | "50" | "auto"

// Flexbox and Grid

export type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse"

export type FlexWrap = "wrap" | "wrap-reverse" | "nowrap"

export type GridSize = "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full" | "auto"

export type GridCols = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none"

export type GridRows = "1" | "2" | "3" | "4" | "5" | "6" | "none"

export type AutoFlow = "flow-row" | "flow-col" | "flow-row-dense" | "flow-col-dense"

export type AutoColumns = "cols-auto" | "cols-min" | "cols-max" | "cols-fr"

export type Gap = "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "108" | "120" | "132"

export type JustifyContent = "start" | "end" | "center" | "between" | "around" | "evenly"

export type JustifyItems = "start" | "end" | "center" | "stretch"

export type AlignContent = "center" | "start" | "end" | "between" | "around" | "evenly"

export type AlignItems = "start" | "end" | "center" | "baseline" | "stretch"

// Spacing

export type PositionScale = "-0" | "-0.5" | "-1" | "-1.5" | "-2" | "-2.5" | "-3" | "-3.5" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | -96 | "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | 44  | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "auto"

export type SpaceBetween = "-0" | "-0.5" | "-1" | "-1.5" | "-2" | "-2.5" | "-3" | "-3.5" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | -96 | "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | 44  | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"

// Sizing

export type Size = "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "108" | "120" | "132" | "full" | "auto" | "screen" | "min" | "max" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12"

// Typography

export type FontSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type FontWeight = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LineHeight = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"

export type TextAlignment = "left" | "center" | "right" | "justify"

export type TextDecoration = "underline" | "line-through" | "no-underline"

export type TextDecorationStyle = "solid" | "double" | "dotted" | "dashed" | "wavy"

export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case"

export type TextOverflow = "truncate" | "overflow-ellipsis" | "overflow-clip"

export type TextUnderlineOffset = "0" | "1" | "2" | "4" | "8"

export type VerticalAlign = "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom"

export type ListStyleType = "none" | "disc" | "decimal" | "square" | "roman"

export type ListStylePosition = "inside" | "outside"

export type WordBreak = "normal" | "words" | "all"

// Color class utility

export type Color = "white" | "black" | "gray" | "zinc" |  "slate" | "stone" | "neutral" | "red" | "yellow" | "orange" | "amber" | "lime" | "green" | "blue" | "sky" | "indigo" | "purple" | "pink" | "emerald" | "teal" | "cyan" | "fuchsia" | "violet" | "rose" | "facebook" | "facebook-darker" | "twitter" | "twitter-darker" | "whatsapp" | "whatsapp-darker" | "transparent"

export type ColorContrast = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"

// Border

export type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"

export type BorderRadiusPosition = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right"

export type BorderWidth = "0" | "2" | "4" | "8" | "normal"

export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "none"

export type DivideWidth = "0" | "2" | "4" | "8" | "normal"

export type RightWidth = "0" | "2" | "4" | "8" | "normal"

// Effects

export type BoxShadow = "sm" | "normal" | "md" | "lg" | "xl" | "2xl" | "inner" | "none"

export type Opacity = "0" | "25" | "50" | "75" | "80" | "90" | "95" | "100"

// Filter

export type Blur = "none" | "sm" | "normal" | "lg" | "xl" | "2xl" | "3xl"

// Transition

export type Transition = "none" | "all" | "normal" | "colors" | "opacity" | "shadow" | "transform"

export type Duration = "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000"

export type TimingFunction = "linear" | "in" | "out" | "in-out"

export type Delay = "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000"

export type Animation = "none" | "spin" | "ping" | "pulse"

// Transform

export type Rotate = "-1" | "-2" | "-3" | "-6" | "-12" | "-45" | "-90" | "-100" | "-180" | "0" | "1" | "2" | "3" | "6" | "12" | "45" | "90" | "100" | "180"

export type Translate = "-0.5" | "-1" | "-1.5" | "-2" | "-2.5" | "-3" | "-3.5" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full" | "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full"

export type Scale = "0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150"

// Interactivity

export type Cursor = "auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed"

export type UserSelect = "none" | "text" | "all" | "auto"
