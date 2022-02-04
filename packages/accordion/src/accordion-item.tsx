import { arrowNavigation, base, element, StandardProps, text } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { useId } from "@reach/auto-id"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useContext } from "."

export interface AccordionItemProps extends StandardProps {
  title: React.ReactNode,
  active?: boolean
  last?: boolean
}

export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const accordion = useContext
  const idContent = useId()

  const [expand, setExpand] = React.useState(props.active)

  const cls = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between"
    },
    visual: {
      dark: false,
      borderWidth: (accordion.separator && !props.last) ? "normal" : undefined,
      borderStyle: (accordion.separator && !props.last) ? "solid" : undefined,
      borderPosition: (accordion.separator && !props.last) ? "bottom" : undefined,
      borderColor: (accordion.separator && !props.last) ? accordion.separatorColor : undefined,
      borderColorContrast: (accordion.separator && !props.last) ? accordion.separatorColorContrast : undefined
    },
    spacing: {
      px: accordion.px,
      py: accordion.py,
      pb: accordion.pb,
      pl: accordion.pl,
      pr: accordion.pr,
      pt: accordion.pt
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    },
  })

  const clsContent = base({
    model: {
      display: "block",
      overflow: "hidden"
    },
    visual: !accordion.simple ? {
      dark: accordion.dark === undefined ? false : accordion.dark,
      bgColor: accordion.colorContent,
      bgColorContrast: accordion.colorContentContrast,
      darkBgColor: accordion.darkColorContent,
      darkBgColorContrast: accordion.darkColorContentContrast,
      borderWidth: (accordion.separator && !props.last) ? "normal" : undefined,
      borderStyle: (accordion.separator && !props.last) ? "solid" : undefined,
      borderPosition: (accordion.separator && !props.last) ? "bottom" : undefined,
      borderColor: (accordion.separator && !props.last) ? accordion.separatorColor : undefined,
      borderColorContrast: (accordion.separator && !props.last) ? accordion.separatorColorContrast : undefined
    } : undefined
  })

  const clsText = text({
    visualText: {
      dark: accordion.dark === undefined ? false : accordion.dark,
      textColor: accordion.textColor,
      textColorContrast: accordion.textColorContrast,
      darkTextColor: accordion.darkTextColor,
      darkTextColorContrast: accordion.darkTextColorContrast,
      fontSize: accordion.fontSize,
      fontWeight: accordion.fontWeight
    },
    spacing: {
      pr: "12"
    }
  })

  const clsContentText = text({
    visualText: {
      dark: accordion.dark === undefined ? false : accordion.dark,
      textColor: accordion.textColor,
      textColorContrast: accordion.textColorContrast,
      darkTextColor: accordion.darkTextColor,
      darkTextColorContrast: accordion.darkTextColorContrast,
      fontSize: accordion.fontSize,
    },
    spacing: {
      px: accordion.px,
      py: accordion.py,
      pb: accordion.pb,
      pl: accordion.pl,
      pr: accordion.pr,
      pt: accordion.pt
    }
  })

  const clsFocus = element({
    focus: {
      dark: accordion.dark === undefined ? false : accordion.dark,
      focusColor: accordion.focusColor,
      focusColorContrast: accordion.focusColorContrast,
      focusDarkColor: accordion.darkFocusColor,
      focusDarkColorContrast: accordion.darkFocusColorContrast
    }
  })

  const clsChevron = element({
    transition: {
      transition: "transform",
      duration: "500",
    },
    element: {
      rotate: expand ? "180" : undefined
    }
  })

  return(
    <div className="block overflow-hidden">
      <div className="block">
        <span className="flex">
          <div
          id={props.id}
          className={[
            cls,
            clsFocus,
            "focus:outline-none"
          ].join(" ").trim()}
          role="button"
          tabIndex={0}
          aria-controls={`zenbu-accordion-item-${idContent}`}
          aria-expanded={expand}
          onClick={() => {
            setExpand(!expand)
          }}
          onKeyDown={(e) => arrowNavigation(e, props.id, (code) => {
            if (code === "Enter" || e.code === "Space") {
              setExpand(!expand)
            }
          })}
          style={{flex: "1 1 0%"}}>
            <span className={clsText}>{props.title}</span>
            <Icon className={clsChevron} icon="chevron-down-solid" color={accordion.dark ? accordion.darkTextColor : accordion.textColor} colorContrast={accordion.dark ? accordion.darkTextColorContrast : accordion.textColorContrast} height="4" />
          </div>
        </span>

        <AnimatePresence initial={false}>
          <motion.div
          id={`zenbu-accordion-item-${idContent}`}
          className={clsContent}
          role="region"
          aria-labelledby={props.id}
          initial="collapsed"
          animate={expand ? "open" : "collapsed"}
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <div className={clsContentText}>{props.children}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

AccordionItem.defaultProps = {
  active: false,
  last: false
}
