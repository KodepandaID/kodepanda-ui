import { AlignContent, AlignItems, AspectRatio, BorderRadius, BorderStyle, BorderWidth, BoxShadow, Color, ColorContrast, ColorProps, ElementProps, FlexDirection, FlexWrap, FontSize, FontWeight, Gap, GridCols, JustifyContent, JustifyItems, ListStyleType, ModelProps, ObjectFit, PositionScale, ResponsiveProps, Rotate, Size, SpaceBetween, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"

interface accordionProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  simple?: boolean,
  separator?: boolean,
  separatorColor?: Color,
  separatorColorContrast?: ColorContrast,
  colorContent?: Color,
  colorContentContrast?: ColorContrast,
  darkColorContent?: Color,
  darkColorContentContrast?: ColorContrast,
  focusColor?: Color,
  focusColorContrast?: ColorContrast,
  darkFocusColor?: Color,
  darkFocusColorContrast?: ColorContrast
}

interface alertDialogProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  footerColor?: Color,
  footerColorContrast?: ColorContrast,
  darkFooterColor?: Color,
  darkFooterColorContrast?: ColorContrast,
  okColor?: Color,
  okColorContrast?: ColorContrast,
  okTextColor?: Color,
  okTextColorContrast?: ColorContrast,
  darkOkColor?: Color,
  darkOkColorContrast?: ColorContrast,
  darkOkTextColor?: Color,
  darkOkTextColorContrast?: ColorContrast,
  cancelColor?: Color,
  cancelColorContrast?: ColorContrast,
  cancelTextColor?: Color,
  cancelTextColorContrast?: ColorContrast,
  darkCancelColor?: Color,
  darkCancelColorContrast?: ColorContrast,
  darkCancelTextColor?: Color,
  darkCancelTextColorContrast?: ColorContrast
}

interface avatarProps extends StandardProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  blur?: boolean
}

interface avatarGroupProps extends StandardProps {
  space?: SpaceBetween
}

interface badgeProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {}

interface blockquoteProps extends StandardProps, ColorProps, ResponsiveProps, ModelProps, VisualProps, SpacingProps, ResponsiveProps, VisualTextProps {
  quoteColor?: Color,
  quoteColorContrast?: ColorContrast,
  darkQuoteColor?: Color,
  darkQuoteColorContrast?: ColorContrast,
  bgCaptionGradientPosition?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right",
  bgCaptionColor?: Color,
  bgCaptionColorContrast?: ColorContrast
  darkBgCaptionColor?: Color,
  darkBgCaptionColorContrast?: ColorContrast,
  bgCaptionGradientFromColor?: Color,
  bgCaptionGradientFromColorContrast?: ColorContrast,
  bgCaptionGradientMiddleColor?: Color,
  bgCaptionGradientMiddleColorContrast?: ColorContrast,
  bgCaptionGradientEndColor?: Color,
  bgCaptionGradientEndColorContrast?: ColorContrast
}

interface boxProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, ElementProps, SpacingProps {
  rotate?: Rotate,
  overlay?: boolean
}

interface breadcrumbProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
  dividerHeight?: Size,
  activeColor?: Color,
  activeColorContrast?: ColorContrast,
  darkActiveColor?: Color,
  darkActiveColorContrast?: ColorContrast
}

interface buttonProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  loading?: boolean,
  loadingText?: string,
  circle?: boolean,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  darkIconColor?: Color,
  darkIconColorContrast?: ColorContrast
}

interface buttonGroupProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean
}

interface buttonDropdownProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  circle?: boolean,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  darkIconColor?: Color,
  darkIconColorContrast?: ColorContrast,
  dropdownBgColor?: Color,
  dropdownBgColorContrast?: ColorContrast,
  darkDropdownBgColor?: Color,
  darkDropdownBgColorContrast?: ColorContrast,
  dropdownBgHoverColor?: Color,
  dropdownBgHoverColorContrast?: ColorContrast,
  darkDropdownBgHoverColor?: Color,
  darkDropdownBgHoverColorContrast?: ColorContrast,
  dropdownTextColor?: Color,
  dropdownTextColorContrast?: ColorContrast,
  darkDropdownTextColor?: Color,
  darkDropdownTextColorContrast?: ColorContrast,
  dropdownTextHoverColor?: Color,
  dropdownTextHoverColorContrast?: ColorContrast,
  darkDropdownTextHoverColor?: Color,
  darkDropdownTextHoverColorContrast?: ColorContrast,
  dropdownFontSize?: FontSize,
  dropdownBorder?: boolean,
  dropdownBorderColor?: Color,
  dropdownBorderColorContrast?: ColorContrast,
  dropdownRounded?: BorderRadius,
  dropdownIconHeight?: Size,
  dropdownShadow?: BoxShadow,
  dropdownShadowColor?: Color,
  dropdownShadowColorContrast?: ColorContrast,
  dropdownShadowOpacity?: number,
}

interface cardProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  coverWidth?: Size,
  coverPosition?: "top" | "left" | "right" | "center"
  coverPadding?: boolean,
  coverRounded?: BorderRadius,
  coverAspectRatio?: AspectRatio | string
}

interface dialogProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  titleColor?: Color,
  titleColorContrast?: ColorContrast,
  darkTitleColor?: Color,
  darkTitleColorContrast?: ColorContrast,
  footerColor?: Color,
  footerColorContrast?: ColorContrast
  darkFooterColor?: Color,
  darkFooterColorContrast?: ColorContrast
}

interface flexboxProps extends StandardProps, ModelProps, ResponsiveProps, SpacingProps {
  direction?: FlexDirection
  wrap?: FlexWrap,
  justify?: JustifyContent,
  justifyItems?: JustifyItems,
  alignContent?: AlignContent,
  alignItems?: AlignItems,
  flex1?: boolean,
  flexAuto?: boolean,
  flexInitial?: boolean,
  flexNone?: boolean,
  grow?: boolean,
  unGrow?: boolean,
  shrink?: boolean,
  unShrink?: boolean,
  gap?: Gap,
  spaceX?: SpaceBetween,
  spaceY?: SpaceBetween,
  spaceXReverse?: boolean,
  spaceYReverse?: boolean
}

interface gridProps extends StandardProps, SpacingProps {
  columns?: GridCols,
  gap?: Gap,
  gapX?: Gap,
  gapY?: Gap
}

interface headerProps extends StandardProps, ColorProps, SpacingProps, ResponsiveProps, VisualTextProps {
  markerColor?: Color,
  markerColorContrast?: ColorContrast,
  markerRotate?: Rotate,
  uppercase?: boolean,
  lowercase?: boolean,
  capitalize?: boolean,
  ellipsis?: boolean
}

interface iconProps extends StandardProps, ColorProps, SpacingProps {
  height?: Size
}

interface imageProps extends StandardProps, ModelProps, ResponsiveProps, VisualProps, ElementProps, SpacingProps {
  captionFontSize?: FontSize,
  objectFit?: ObjectFit,
  border?: boolean,
  circle?: boolean,
  blur?: boolean,
  fluid?: boolean
}

interface inputProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  iconPosition?: "left" | "right",
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  iconActionColor?: Color,
  iconActionColorContrast?: ColorContrast,
}

interface inputCheckboxProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {}

interface inputCreditCardProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast
}

interface inputDateProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  iconColor?: Color,
  iconColorContrast?: ColorContrast
}

interface inputFileProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast
}

interface inputPhoneProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  dropdownItemColorHover?: Color,
  dropdownItemColorHoverContrast?: ColorContrast,
  darkDropdownItemColorHover?: Color,
  darkDropdownItemColorHoverContrast?: ColorContrast,
  dropdownTextColor?: Color,
  dropdownTextColorContrast?: ColorContrast,
  darkDropdownTextColor?: Color,
  darkDropdownTextColorContrast?: ColorContrast,
  dropdownTextColorHover?: Color,
  dropdownTextColorHoverContrast?: ColorContrast,
  darkDropdownTextColorHover?: Color,
  darkDropdownTextColorHoverContrast?: ColorContrast
}

interface inputPinProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast
}

interface inputRadioProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  inline?: boolean
}

interface inputSelectProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  dropdownItemColorHover?: Color,
  dropdownItemColorHoverContrast?: ColorContrast,
  darkDropdownItemColorHover?: Color,
  darkDropdownItemColorHoverContrast?: ColorContrast,
  dropdownTextColor?: Color,
  dropdownTextColorContrast?: ColorContrast,
  darkDropdownTextColor?: Color,
  darkDropdownTextColorContrast?: ColorContrast,
  dropdownTextColorHover?: Color,
  dropdownTextColorHoverContrast?: ColorContrast,
  darkDropdownTextColorHover?: Color,
  darkDropdownTextColorHoverContrast?: ColorContrast
}

interface inputTextareaProps extends StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  labelPosition?: "left" | "top" | "inside",
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast
}

interface loaderProps extends StandardProps, ColorProps, ModelProps, VisualTextProps, VisualProps {}

interface linkProps extends StandardProps, ColorProps, SpacingProps, ResponsiveProps, VisualTextProps {}

interface listProps extends StandardProps, VisualTextProps, SpacingProps {
  type?: ListStyleType,
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  iconHeight?: Size,
  listColor?: Color,
  listColorContrast?: ColorContrast,
  space?: SpaceBetween
}

interface listBoxProps extends StandardProps, VisualProps, VisualTextProps, SpacingProps {
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  textActiveColor?: Color,
  textActiveColorContrast?: ColorContrast,
  bgActiveColor?: Color,
  bgActiveColorContrast?: ColorContrast,
  darkBgActiveColor?: Color,
  darkBgActiveColorContrast?: ColorContrast,
  space?: SpaceBetween
}

interface menuProps extends StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  iconOnly?: boolean,
  fixed?: boolean,
  fixedPosition?: "top" | "bottom",
  responsive?: boolean,
  dropdownMode?: "click" | "hover"
  logoPosition?: "left" | "right",
  itemPosition?: "left" | "right" | "center",
  itemRounded?: BorderRadius,
  itemActiveFontWeight?: FontWeight,
  itemBorder?: boolean,
  itemBorderHoverWidth?: BorderWidth,
  itemBorderHoverStyle?: BorderStyle,
  itemBorderHoverColor?: Color,
  itemBorderHoverColorContrast?: ColorContrast,
  itemTextColor?: Color,
  itemTextColorContrast?: ColorContrast,
  itemTextColorHover?: Color,
  itemTextColorHoverContrast?: ColorContrast,
  darkItemTextColor?: Color,
  darkItemTextColorContrast?: ColorContrast,
  darkItemTextColorHover?: Color,
  darkItemTextColorHoverContrast?: ColorContrast,
  itemBgColor?: Color,
  itemBgColorContrast?: ColorContrast,
  itemBgColorHover?: Color,
  itemBgColorHoverContrast?: ColorContrast
  darkItemBgColor?: Color,
  darkItemBgColorContrast?: ColorContrast,
  darkItemBgColorHover?: Color,
  darkItemBgColorHoverContrast?: ColorContrast,
  itemPX?: PositionScale,
  itemPY?: PositionScale,
  itemPB?: PositionScale,
  itemPL?: PositionScale,
  itemPR?: PositionScale,
  itemPT?: PositionScale
}

interface menuFooterProps extends StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fixed?: boolean,
  responsive?: boolean,
  iconOnly?: boolean,
  logoPosition?: "left" | "right",
  itemPosition?: "left" | "right" | "center",
  itemRounded?: BorderRadius,
  itemActiveFontWeight?: FontWeight,
  itemBorder?: boolean,
  itemBorderHoverWidth?: BorderWidth,
  itemBorderHoverStyle?: BorderStyle,
  itemBorderHoverColor?: Color,
  itemBorderHoverColorContrast?: ColorContrast,
  itemTextColor?: Color,
  itemTextColorContrast?: ColorContrast,
  itemTextColorHover?: Color,
  itemTextColorHoverContrast?: ColorContrast,
  darkItemTextColor?: Color,
  darkItemTextColorContrast?: ColorContrast,
  darkItemTextColorHover?: Color,
  darkItemTextColorHoverContrast?: ColorContrast,
  itemBgColor?: Color,
  itemBgColorContrast?: ColorContrast,
  itemBgColorHover?: Color,
  itemBgColorHoverContrast?: ColorContrast
  darkItemBgColor?: Color,
  darkItemBgColorContrast?: ColorContrast,
  darkItemBgColorHover?: Color,
  darkItemBgColorHoverContrast?: ColorContrast,
  itemPX?: PositionScale,
  itemPY?: PositionScale,
  itemPB?: PositionScale,
  itemPL?: PositionScale,
  itemPR?: PositionScale,
  itemPT?: PositionScale,
  spaceX?: SpaceBetween,
  spaceY?: SpaceBetween
}

interface menuSidebarProps extends StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  collapse?: boolean,
  collapseButton?: boolean,
  collapseMini?: boolean,
  iconOnly?: boolean,
  fixed?: boolean,
  fixedPosition?: "left" | "right",
  responsive?: boolean,
  itemPosition?: "top" | "bottom",
  itemRounded?: BorderRadius,
  itemActiveFontWeight?: FontWeight,
  itemBorder?: boolean,
  itemBorderHoverWidth?: BorderWidth,
  itemBorderHoverStyle?: BorderStyle,
  itemBorderHoverColor?: Color,
  itemBorderHoverColorContrast?: ColorContrast,
  itemTextColor?: Color,
  itemTextColorContrast?: ColorContrast,
  itemTextColorHover?: Color,
  itemTextColorHoverContrast?: ColorContrast,
  darkItemTextColor?: Color,
  darkItemTextColorContrast?: ColorContrast,
  darkItemTextColorHover?: Color,
  darkItemTextColorHoverContrast?: ColorContrast,
  itemBgColor?: Color,
  itemBgColorContrast?: ColorContrast,
  itemBgColorHover?: Color,
  itemBgColorHoverContrast?: ColorContrast
  darkItemBgColor?: Color,
  darkItemBgColorContrast?: ColorContrast,
  darkItemBgColorHover?: Color,
  darkItemBgColorHoverContrast?: ColorContrast,
  itemPX?: PositionScale,
  itemPY?: PositionScale,
  itemPB?: PositionScale,
  itemPL?: PositionScale,
  itemPR?: PositionScale,
  itemPT?: PositionScale
}

interface messageProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  fixed?: boolean,
  position?: "bottom" | "top",
  contentCenter?: boolean
}

interface notificationProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  position?: "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"
}

interface paginationProps extends StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {}

interface popoverProps extends StandardProps, ColorProps, VisualProps, SpacingProps {
  position?: "top" | "bottom" | "left" | "right",
  pointerArrow?: boolean,
  closeIconHeight?: Size
}

interface progressProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  completeColor?: Color,
  completeColorContrast?: ColorContrast
}

interface ratingProps extends StandardProps, ColorProps, ModelProps, SpacingProps {
  heart?: boolean,
  nonActiveColor?: Color,
  nonActiveColorContrast?: ColorContrast
}

interface separatorProps extends StandardProps, VisualProps, SpacingProps {}

interface skeletonProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  circle?: boolean
}

interface statisticProps extends StandardProps, SpacingProps {
  titleColor?: Color,
  titleColorContrast?: ColorContrast,
  darkTitleColor?: Color,
  darkTitleColorContrast?: ColorContrast,
  valueColor?: Color,
  valueColorContrast?: ColorContrast,
  darkValueColor?: Color,
  darkValueColorContrast?: ColorContrast
}

interface switchProps extends StandardProps, ModelProps, ColorProps, VisualTextProps, VisualProps {}

interface tabsProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  simple?: boolean,
  borderActiveColor?: Color,
  borderActiveColorContrast?: ColorContrast,
  focusColor?: Color,
  focusColorContrast?: ColorContrast,
  darkFocusColor?: Color,
  darkFocusColorContrast?: ColorContrast
}

interface tableProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  colColor?: Color,
  colColorContrast?: ColorContrast,
  darkColColor?: Color,
  darkColColorContrast?: ColorContrast,
  colBorderWidth?: BorderWidth,
  colBorderColor?: Color,
  colBorderColorContrast?: ColorContrast,
  rowColor?: Color,
  rowColorContrast?: ColorContrast,
  rowColorHover?: Color,
  rowColorHoverContrast?: ColorContrast,
  darkRowColor?: Color,
  darkRowColorContrast?: ColorContrast,
  darkRowColorHover?: Color,
  darkRowColorHoverContrast?: ColorContrast,
  rowBorderWidth?: BorderWidth,
  rowBorderColor?: Color,
  rowBorderColorContrast?: ColorContrast,
  stripeColor?: Color,
  stripeColorContrast?: ColorContrast,
  darkStripeColor?: Color,
  darkStripeColorContrast?: ColorContrast,
  checkboxColor?: Color,
  checkboxColorContrast?: ColorContrast,
  darkCheckboxColor?: Color,
  darkCheckboxColorContrast?: ColorContrast
}

interface tagProps extends StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {}

interface textProps extends StandardProps, ColorProps, VisualTextProps, ResponsiveProps, SpacingProps {}

interface tooltipProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  position?: "top" | "bottom" | "left" | "right",
  pointerArrow?: boolean
}

export type themes = {
  accordion?: {
    [key: string]: accordionProps
  },
  alertDialog?: {
    [key: string]: alertDialogProps
  },
  avatar?: {
    [key: string]: avatarProps
  },
  avatarGroup?: {
    [key: string]: avatarGroupProps
  },
  badge?: {
    [key: string]: badgeProps
  },
  blockquote?: {
    [key: string]: blockquoteProps
  },
  box?: {
    [key: string]: boxProps
  },
  breadcrumb?: {
    [key: string]: breadcrumbProps
  },
  button?: {
    [key: string]: buttonProps
  },
  buttonGroup?: {
    [key: string]: buttonGroupProps
  },
  buttonDropdown?: {
    [key: string]: buttonDropdownProps
  },
  card?: {
    [key: string]: cardProps
  },
  dialog?: {
    [key: string]: dialogProps
  },
  flexbox?: {
    [key: string]: flexboxProps
  },
  grid?: {
    [key: string]: gridProps
  },
  header?: {
    [key: string]: headerProps
  },
  icon?: {
    [key: string]: iconProps
  },
  image?: {
    [key: string]: imageProps
  },
  input?: {
    [key: string]: inputProps
  },
  inputCheckbox?: {
    [key: string]: inputCheckboxProps
  },
  inputCreditCard?: {
    [key: string]: inputCreditCardProps
  },
  inputDate?: {
    [key: string]: inputDateProps
  },
  inputFile?: {
    [key: string]: inputFileProps
  },
  inputPhone?: {
    [key: string]: inputPhoneProps
  },
  inputPin?: {
    [key: string]: inputPinProps
  },
  inputRadio?: {
    [key: string]: inputRadioProps
  },
  inputSelect?: {
    [key: string]: inputSelectProps
  },
  inputTextarea?: {
    [key: string]: inputTextareaProps
  },
  loader?: {
    [key: string]: loaderProps
  },
  link?:{
    [key: string]: linkProps
  },
  list?: {
    [key: string]: listProps
  },
  listBox?: {
    [key: string]: listBoxProps
  },
  menu?: {
    [key: string]: menuProps
  },
  menuFooter?: {
    [key: string]: menuFooterProps
  },
  menuSidebar?: {
    [key: string]: menuSidebarProps
  },
  message?: {
    [key: string]: messageProps
  },
  notification?: {
    [key: string]: notificationProps
  },
  pagination?: {
    [key: string]: paginationProps
  },
  popover?: {
    [key: string]: popoverProps
  },
  progress?: {
    [key: string]: progressProps
  },
  rating?: {
    [key: string]: ratingProps
  },
  separator?: {
    [key: string]: separatorProps
  },
  skeleton?: {
    [key: string]: skeletonProps
  },
  statistic?: {
    [key: string]: statisticProps
  },
  switch?: {
    [key: string]: switchProps
  },
  tabs?: {
    [key: string]: tabsProps
  },
  table?: {
    [key: string]: tableProps
  },
  tags?: {
    [key: string]: tagProps
  },
  text?: {
    [key: string]: textProps
  },
  tooltip?: {
    [key: string]: tooltipProps
  }
}
