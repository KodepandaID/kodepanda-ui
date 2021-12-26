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
  const { dark } = React.useContext(ThemeCtx)
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
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderRadius: props.rounded
    },
    misc: {
      userSelect: "none"
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: "relaxed"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
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
