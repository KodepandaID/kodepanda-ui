import { base, SpacingProps, StandardProps, text, VisualTextProps, VisualProps, ColorProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

interface TagProps extends StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  href?: string,
  target?: "_self" | "_blank" | "_parent" | "_top",
  closable?: boolean
}

export const Tag: React.FC<TagProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)

  const tg = theme?.tags?.[`${props.componentName}`]

  const [visible, setVisible] = React.useState(true)

  const cls = base({
    model: {
      display: "inline-flex"
    },
    flexbox: {
      flex: false,
      alignItems: "center"
    },
    visual: {
      dark: dark,
      bgColor: tg?.color !== undefined ? tg.color : props.color,
      bgColorContrast: tg?.colorContrast !== undefined ? tg.colorContrast : props.colorContrast,
      darkBgColor: tg?.darkColor !== undefined ? tg.darkColor : props.darkColor,
      darkBgColorContrast: tg?.darkColorContrast !== undefined ? tg.darkColorContrast : props.darkColorContrast,
      borderWidth: (tg?.border && tg.borderWidth !== undefined) ? tg.borderWidth : (props.border && tg?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tg?.border && tg.borderStyle !== undefined) ? tg.borderStyle : (props.border && tg?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tg?.border && tg.borderColor !== undefined) ? tg.borderColor : (props.border && tg?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tg?.border && tg.borderColorContrast !== undefined) ? tg.borderColorContrast : (props.border && tg?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tg?.rounded !== undefined ? tg.rounded : props.rounded,
    },
    misc: {
      userSelect: "none"
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: tg?.textColor !== undefined ? tg.textColor : props.textColor,
      textColorContrast: tg?.textColorContrast !== undefined ? tg.textColorContrast : props.textColorContrast,
      darkTextColor: tg?.darkTextColor !== undefined ? tg.darkTextColor : props.darkTextColor,
      darkTextColorContrast: tg?.darkTextColorContrast !== undefined ? tg.darkTextColorContrast : props.darkTextColorContrast,
      fontSize: tg?.fontSize !== undefined ? tg.fontSize : props.fontSize,
      fontWeight: tg?.fontWeight !== undefined ? tg.fontWeight : props.fontWeight,
      lineHeight: "relaxed"
    },
    spacing: {
      mx: tg?.mx !== undefined ? tg.mx : props.mx,
      my: tg?.my !== undefined ? tg.my : props.my,
      mb: tg?.mb !== undefined ? tg.mb : props.mb,
      ml: tg?.ml !== undefined ? tg.ml : props.ml,
      mr: tg?.mr !== undefined ? tg.mr : props.mr,
      mt: tg?.mt !== undefined ? tg.mt : props.mt,
      px: tg?.px !== undefined ? tg.px : props.px,
      py: tg?.py !== undefined ? tg.py : props.py,
      pb: tg?.pb !== undefined ? tg.pb : props.pb,
      pl: tg?.pl !== undefined ? tg.pl : props.pl,
      pr: tg?.pr !== undefined ? tg.pr : props.pr,
      pt: tg?.pt !== undefined ? tg.pt : props.pt
    }
  })

  if (!visible) return null

  if (props.href !== undefined) {
    return(
      <a
      id={props.id}
      className={[cls, clsText].join(" ").trim()}
      href={props.href}
      target={props.target}>
        {props.children}
        {props.closable && (
          <span
          className="ml-2"
          onClick={() => setVisible(false)}
          aria-hidden="true"
          role="button"
          tabIndex={0}>
            <Icon icon="x-solid" height="3" />
          </span>
        )}
      </a>
    )
  }

  return(
    <div id={props.id} className={[cls, clsText].join(" ").trim()}>
      {props.children}
      {props.closable && (
        <span
        className="ml-2"
        onClick={() => setVisible(false)}
        onKeyPress={(e) => {
          if (e.key === "Enter") setVisible(false)
        }}
        aria-hidden="true"
        role="button"
        tabIndex={0}>
          <Icon icon="x-solid" height="3" />
        </span>
      )}
    </div>
  )
}

Tag.defaultProps = {
  target: "_self",
  closable: false,
  color: "gray",
  colorContrast: "200",
  textColor: "gray",
  textColorContrast: "700",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "300",
  rounded: "md",
  fontWeight: "semibold",
  fontSize: "xs",
  px: "3",
  py: "1"
}
