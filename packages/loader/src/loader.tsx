import { AnimatePresence, motion } from "framer-motion"
import { base, ColorProps, element, ModelProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import * as React from "react"
import { useId } from "@reach/auto-id"
import { ThemeCtx } from "@zenbu-ui/provider"

interface LoaderProps extends StandardProps, ColorProps, ModelProps, VisualTextProps, VisualProps {
  visible?: boolean,
  text?: string
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("loader")

  const tl = theme?.loader?.[`${props.componentName}`]

  const cls = base({
    positioning: {
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "50"
    },
    model: {
      display: "flex",
      width: "full",
      height: "full",
    },
    flexbox: {
      flex: false,
      verticalAlign: "middle",
      justify: "center"
    },
    visual: {
      dark: false,
      bgColor: tl?.color !== undefined ? tl.color : props.color,
      bgColorContrast: tl?.colorContrast !== undefined ? tl.colorContrast : props.colorContrast
    },
    misc: {
      opacity: "75"
    }
  })

  const clsContent = base({
    model: {
      width: "max"
    },
    flexbox: {
      flex: true,
      direction: "col",
      alignItems: "center",
      justify: "center"
    }
  })

  const clsText = text({
    visualText: {
      dark: false,
      textColor: tl?.textColor !== undefined ? tl.textColor : props.textColor,
      textColorContrast: tl?.textColorContrast !== undefined ? tl.textColorContrast : props.textColorContrast,
      fontSize: tl?.fontSize !== undefined ? tl.fontSize : props.fontSize,
      lineHeight: "relaxed"
    }
  })

  const clsSpinner = element({
    model: {
      width: tl?.width !== undefined ? tl.width : props.width
    },
    transition: {
      animation: "spin"
    }
  })

  return(
    <AnimatePresence>
      {props.visible && (
        <motion.div
        id={id}
        className={cls}
        role="status"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 0.85,
          }
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.8}}
        >
          <div className={clsContent}>
            <svg className={clsSpinner} viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
              <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {props.text !== undefined && (
              <span className={clsText}>{props.text}</span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Loader.defaultProps = {
  visible: false,
  width: "6",
  color: "black",
  textColor: "white",
  fontSize: "sm"
}
