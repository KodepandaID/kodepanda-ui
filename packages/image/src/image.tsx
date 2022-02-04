import { base, content, element, ElementProps, FontSize, ModelProps, ObjectFit, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface ImageProps extends StandardProps, ModelProps, ResponsiveProps, VisualProps, ElementProps, SpacingProps {
  alt: string,
  src: string,
  caption?: string,
  captionFontSize?: FontSize,
  objectFit?: ObjectFit,
  border?: boolean,
  circle?: boolean,
  blur?: boolean,
  fluid?: boolean
}

export const Image: React.FC<ImageProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId()

  const timg = theme?.image?.[`${props.componentName}`]

  const cls = base({
    model: (timg?.circle || (props.circle && timg?.circle === undefined)) ? {
      width: timg?.width !== undefined ? timg.width : props.width,
      height: timg?.width !== undefined ? timg.width : props.width
    }:{
      width: (timg?.fluid || (props.fluid && timg?.fluid === undefined)) ? "full" : timg?.width !== undefined ? timg.width : props.width,
      height: timg?.height !== undefined ? timg.height : props.height
    },
    responsive: {
      sm: timg?.sm !== undefined ? timg.sm : props.sm,
      md: timg?.md !== undefined ? timg.md : props.md,
      lg: timg?.lg !== undefined ? timg.lg : props.lg,
      xl: timg?.xl !== undefined ? timg.xl : props.xl,
      "2xl": timg?.["2xl"] !== undefined ? timg["2xl"] : props["2xl"]
    },
    visual: props.caption === undefined ? {
      dark: false,
      borderWidth: (timg?.border && timg.borderWidth !== undefined) ? timg.borderWidth : (props.border && timg?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (timg?.border && timg.borderStyle !== undefined) ? timg.borderStyle : (props.border && timg?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (timg?.border && timg.borderColor !== undefined) ? timg.borderColor : (props.border && timg?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (timg?.border && timg.borderColorContrast !== undefined) ? timg.borderColorContrast : (props.border && timg?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: (timg?.circle || (props.circle && timg?.circle === undefined)) ? "full" : timg?.rounded !== undefined ? timg.rounded : props.rounded,
      borderRadiusPosition: timg?.roundedPosition !== undefined ? timg.roundedPosition : props.roundedPosition,
      shadow: timg?.shadow !== undefined ? timg.shadow : props.shadow,
      shadowColor: (timg?.shadow !== undefined && timg.shadowColor !== undefined) ? timg.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (timg?.shadow !== undefined && timg.shadowColorContrast !== undefined) ? timg.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (timg?.shadow !== undefined && timg.shadowOpacity !== undefined) ? timg.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (timg?.shadow !== undefined && timg.darkShadowColor !== undefined) ? timg.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (timg?.shadow !== undefined && timg.darkShadowColorContrast !== undefined) ? timg.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (timg?.shadow !== undefined && timg.darkShadowOpacity !== undefined) ? timg.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    } : undefined,
    filter: {
      blur: (timg?.blur || props.blur) ? "normal" : undefined
    }
  })

  const clsElm = element({
    element: {
      objectFit: timg?.objectFit !== undefined ? timg.objectFit : props.objectFit,
      transform: (timg?.rotate !== undefined || props.rotate !== undefined) ? true : false,
      rotate: timg?.rotate !== undefined ? timg.rotate : props.rotate
    },
    spacing: props.caption === undefined ? {
      mx: timg?.mx !== undefined ? timg.mx : props.mx,
      my: timg?.my !== undefined ? timg.my : props.my,
      mb: timg?.mb !== undefined ? timg.mb : props.mb,
      ml: timg?.ml !== undefined ? timg.ml : props.ml,
      mr: timg?.mr !== undefined ? timg.mr : props.mr,
      mt: timg?.mt !== undefined ? timg.mt : props.mt,
      px: timg?.px !== undefined ? timg.px : props.px,
      py: timg?.py !== undefined ? timg.py : props.py,
      pb: timg?.pb !== undefined ? timg.pb : props.pb,
      pl: timg?.pl !== undefined ? timg.pl : props.pl,
      pr: timg?.pr !== undefined ? timg.pr : props.pr,
      pt: timg?.pt !== undefined ? timg.pt : props.pt
    } : undefined
  })

  if (props.caption !== undefined) {
    const clsFigure = base({
      model: {
        width: "max"
      },
      visual: {
        dark: false,
        borderWidth: ((timg?.border && timg.borderWidth !== undefined) || (props.border && timg?.border === undefined && props.borderWidth === undefined)) ? "normal" : timg?.borderWidth !== undefined ? timg.borderWidth : props.borderWidth,
        borderStyle: ((timg?.border && timg.borderStyle !== undefined) || (props.border && timg?.border === undefined && props.borderStyle === undefined)) ? "solid" : timg?.borderStyle !== undefined ? timg.borderStyle : props.borderStyle,
        borderColor: ((timg?.border && timg.borderColor !== undefined) || (props.border && timg?.border === undefined && props.borderColor === undefined)) ? "gray" : timg?.borderColor !== undefined ? timg.borderColor : props.borderColor,
        borderColorContrast: ((timg?.border && timg.borderColorContrast !== undefined) || (props.border && timg?.border === undefined && props.borderColorContrast === undefined)) ? 600 : timg?.borderColorContrast !== undefined ? timg.borderColorContrast : props.borderColorContrast,
        borderRadius: (timg?.circle || (props.circle && timg?.circle === undefined)) ? "full" : timg?.rounded !== undefined ? timg.rounded : props.rounded,
        borderRadiusPosition: timg?.roundedPosition !== undefined ? timg.roundedPosition : props.roundedPosition,
        shadow: timg?.shadow !== undefined ? timg.shadow : props.shadow,
        shadowColor: (timg?.shadow !== undefined && timg.shadowColor !== undefined) ? timg.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
        shadowColorContrast: (timg?.shadow !== undefined && timg.shadowColorContrast !== undefined) ? timg.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
        shadowOpacity: (timg?.shadow !== undefined && timg.shadowOpacity !== undefined) ? timg.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
        darkShadowColor: (timg?.shadow !== undefined && timg.darkShadowColor !== undefined) ? timg.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
        darkShadowColorContrast: (timg?.shadow !== undefined && timg.darkShadowColorContrast !== undefined) ? timg.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
        darkShadowOpacity: (timg?.shadow !== undefined && timg.darkShadowOpacity !== undefined) ? timg.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      },
      spacing: {
        mx: timg?.mx !== undefined ? timg.mx : props.mx,
        my: timg?.my !== undefined ? timg.my : props.my,
        mb: timg?.mb !== undefined ? timg.mb : props.mb,
        ml: timg?.ml !== undefined ? timg.ml : props.ml,
        mr: timg?.mr !== undefined ? timg.mr : props.mr,
        mt: timg?.mt !== undefined ? timg.mt : props.mt,
        px: timg?.px !== undefined ? timg.px : props.px,
        py: timg?.py !== undefined ? timg.py : props.py,
        pb: timg?.pb !== undefined ? timg.pb : props.pb,
        pl: timg?.pl !== undefined ? timg.pl : props.pl,
        pr: timg?.pr !== undefined ? timg.pr : props.pr,
        pt: timg?.pt !== undefined ? timg.pt : props.pt
      }
    })

    const clsFigureContent = content({
      flexbox: {
        flex: true,
        direction: "col"
      }
    })

    const clsCaption = text({
      visualText: {
        dark: false,
        textColor: "white",
        fontSize: timg?.captionFontSize !== undefined ? timg.captionFontSize : props.captionFontSize,
        textAlign: "center"
      },
      spacing: {
        px: "2",
        py: "2"
      }
    })

    return(
      <figure id={`zenbu-image-${id}`} className={[clsFigureContent, clsFigure].join(" ").trim()}>
        <img className={[cls, clsElm].join(" ").trim()} alt={props.alt} src={props.src} />
        <figcaption className={["bg-black", clsCaption, "italic"].join(" ").trim()}>{props.caption}</figcaption>
      </figure>
    )
  }

  return React.createElement(
    "img",
    {
      id: `zenbu-image-${id}`,
      className: [cls, clsElm].join(" ").trim(),
      alt: props.alt,
      src: props.src
    }, props.children)
}

Image.defaultProps = {
  width: "52",
  border: false,
  circle: false,
  blur: false,
  captionFontSize: "xs"
}
