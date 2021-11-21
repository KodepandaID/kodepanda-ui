import { base, content, element, ElementProps, FontSize, ModelProps, ObjectFit, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
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
  const cls = base({
    className: props.className,
    model: props.circle ? {
      width: props.width,
      height: props.width
    }:{
      width: props.fluid ? "full" : props.width,
      height: props.height
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    visual: props.caption === undefined ? {
      dark: false,
      borderWidth: (props.border && props.borderWidth === undefined) ? "normal" : props.borderWidth,
      borderStyle: (props.border && props.borderStyle === undefined) ? "solid" : props.borderStyle,
      borderColor: (props.border && props.borderColor === undefined) ? "gray" : props.borderColor,
      borderColorContrast: (props.border && props.borderColorContrast === undefined) ? 600 : props.borderColorContrast,
      borderRadius: props.circle ? "full" : props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow
    } : undefined,
    filter: {
      blur: props.blur ? "normal" : undefined
    }
  })

  const clsElm = element({
    element: {
      objectFit: props.objectFit,
      transform: props.rotate !== undefined ? true : false,
      rotate: props.rotate
    },
    spacing: props.caption === undefined ? {
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
    } : undefined
  })

  if (props.caption !== undefined) {
    const clsFigure = base({
      model: {
        width: "max"
      },
      visual: {
        dark: false,
        borderWidth: (props.border && props.borderWidth === undefined) ? "normal" : props.borderWidth,
        borderStyle: (props.border && props.borderStyle === undefined) ? "solid" : props.borderStyle,
        borderColor: (props.border && props.borderColor === undefined) ? "gray" : props.borderColor,
        borderColorContrast: (props.border && props.borderColorContrast === undefined) ? 600 : props.borderColorContrast,
        borderRadius: props.rounded,
        borderRadiusPosition: props.roundedPosition,
        shadow: props.shadow
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
        fontSize: props.captionFontSize,
        textAlign: "center"
      },
      spacing: {
        px: 2,
        py: 2
      }
    })

    return(
      <figure className={`${clsFigureContent} ${clsFigure}`}>
        <img id={props.id} className={`${cls} ${clsElm}`} alt={props.alt} src={props.src} />
        <figcaption className={`bg-black ${clsCaption} italic`}>{props.caption}</figcaption>
      </figure>
    )
  }

  return React.createElement(
    "img",
    {
      id: props.id,
      className: `${cls} ${clsElm}`,
      alt: props.alt,
      src: props.src
    }, props.children)
}

Image.defaultProps = {
  width: 52,
  border: false,
  circle: false,
  blur: false,
  captionFontSize: "xs"
}
