import { base, Color, ColorContrast, SpacingProps, StandardProps, text } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface StatisticProps extends StandardProps, SpacingProps {
  separator?: "dot" | "comma",
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  title: string,
  titleColor?: Color,
  titleColorContrast?: ColorContrast,
  darkTitleColor?: Color,
  darkTitleColorContrast?: ColorContrast,
  value: number,
  valueColor?: Color,
  valueColorContrast?: ColorContrast,
  darkValueColor?: Color,
  darkValueColorContrast?: ColorContrast,
  icon?: React.ReactNode
}

export const Statistic: React.FC<StatisticProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const ts = theme?.statistic?.[`${props.componentName}`]

  const cls = text({
    visualText: {
      dark: false,
      lineHeight: "relaxed"
    },
    spacing: {
      mx: ts?.mx !== undefined ? ts.mx : props.mx,
      my: ts?.my !== undefined ? ts.my : props.my,
      mb: ts?.mb !== undefined ? ts.mb : props.mb,
      ml: ts?.ml !== undefined ? ts.ml : props.ml,
      mr: ts?.mr !== undefined ? ts.mr : props.mr,
      mt: ts?.mt !== undefined ? ts.mt : props.mt,
      px: ts?.px !== undefined ? ts.px : props.px,
      py: ts?.py !== undefined ? ts.py : props.py,
      pb: ts?.pb !== undefined ? ts.pb : props.pb,
      pl: ts?.pl !== undefined ? ts.pl : props.pl,
      pr: ts?.pr !== undefined ? ts.pr : props.pr,
      pt: ts?.pt !== undefined ? ts.pt : props.pt
    }
  })

  const clsTitle = text({
    visualText: {
      dark: dark,
      textColor: ts?.titleColor !== undefined ? ts.titleColor : props.titleColor,
      textColorContrast: ts?.titleColorContrast !== undefined ? ts.titleColorContrast : props.titleColorContrast,
      darkTextColor: ts?.darkTitleColor !== undefined ? ts.darkTitleColor : props.darkTitleColor,
      darkTextColorContrast: ts?.darkTitleColorContrast !== undefined ? ts.darkTitleColorContrast : props.darkTitleColorContrast,
      fontSize: "sm",
      fontWeight: "light"
    }
  })

  const clsValue = text({
    visualText: {
      dark: dark,
      textColor: ts?.valueColor !== undefined ? ts.valueColor : props.valueColor,
      textColorContrast: ts?.valueColorContrast !== undefined ? ts.valueColorContrast : props.valueColorContrast,
      darkTextColor: ts?.darkValueColor !== undefined ? ts.darkValueColor : props.darkValueColor,
      darkTextColorContrast: ts?.darkValueColorContrast !== undefined ? ts.darkValueColorContrast : props.darkValueColorContrast,
      fontSize: "xl",
      fontWeight: "bold"
    }
  })

  if (props.icon !== undefined) {
    const cls = base({
      flexbox: {
        flex: true,
        direction: "row",
        verticalAlign: "middle"
      },
    })

    const clsBase = text({
      visualText: {
        dark: false,
        lineHeight: "relaxed"
      },
      spacing: {
        mx: ts?.mx !== undefined ? ts.mx : props.mx,
        my: ts?.my !== undefined ? ts.my : props.my,
        mb: ts?.mb !== undefined ? ts.mb : props.mb,
        ml: ts?.ml !== undefined ? ts.ml : props.ml,
        mr: ts?.mr !== undefined ? ts.mr : props.mr,
        mt: ts?.mt !== undefined ? ts.mt : props.mt,
        px: ts?.px !== undefined ? ts.px : props.px,
        py: ts?.py !== undefined ? ts.py : props.py,
        pb: ts?.pb !== undefined ? ts.pb : props.pb,
        pl: ts?.pl !== undefined ? ts.pl : props.pl,
        pr: ts?.pr !== undefined ? ts.pr : props.pr,
        pt: ts?.pt !== undefined ? ts.pt : props.pt
      }
    })

    return(
      <div id={`zenbu-statistic-${id}`} className={[cls, "space-x-3", clsBase].join(" ").trim()}>
        <div className="flex items-center">
          {props.icon}
        </div>
        <div className="block">
          <div className={clsTitle}>
            {props.title}
          </div>
          <div className={clsValue}>
            {props.prefix !== undefined && (
              <span>{props.prefix}</span>
            )}
            <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, props.separator === "dot" ? "." : ",")}</span>
            {props.suffix !== undefined && (
              <span>{props.suffix}</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return(
    <div id={`zenbu-statistic-${id}`} className={cls}>
      <div className={clsTitle}>
        {props.title}
      </div>
      <div className={clsValue}>
        {props.prefix !== undefined && (
          <span>{props.prefix}</span>
        )}
        <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, props.separator === "dot" ? "." : ",")}</span>
        {props.suffix !== undefined && (
          <span>{props.suffix}</span>
        )}
      </div>
    </div>
  )
}

Statistic.defaultProps = {
  separator: "dot",
  titleColor: "gray",
  titleColorContrast: "400",
  valueColor: "black"
}
