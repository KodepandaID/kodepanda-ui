import { AnimatePresence, motion } from "framer-motion"
import { base, Color, ColorContrast, element, FontSize, ModelProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import * as React from "react"

interface LoaderProps extends StandardProps, ModelProps, VisualProps {
  visible?: boolean,
  text?: string,
  textColor?: Color,
  textColorContrast?: ColorContrast,
  fontSize?: FontSize
}

export const Loader: React.FC<LoaderProps> = (props) => {
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
      bgColor: props.bgColor,
      bgColorContrast: props.bgColorContrast
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
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      fontSize: props.fontSize,
      lineHeight: "relaxed"
    }
  })

  const clsSpinner = element({
    model: {
      width: props.width
    },
    transition: {
      animation: "spin"
    }
  })

  return(
    <AnimatePresence>
      {props.visible && (
        <motion.div
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
  bgColor: "black",
  textColor: "white",
  fontSize: "sm"
}
