import { AriaProps, base, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

export interface FileProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  accept: string,
  disabled?: boolean,
  required?: boolean,
  multiple?: boolean,
  maxCount?: number,
  maxSize?: number,
  fluid?: boolean,
  label?: React.ReactNode,
  labelPosition?: "left" | "top" | "inside",
  name: string,
  text?: string,
  textState?: string,
  errorMaxSize?: (maxSize: string) => string | React.ReactNode,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  onChange?: (value: Array<File>) => void
}

export const InputFile: React.FC<FileProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const node = React.createRef<HTMLInputElement>()
  const id = useId("input-file")

  const [files, setFiles] = React.useState<Array<File>>([])
  const [errorMessage, setErrorMessage] = React.useState<string | React.ReactNode>(null)
  const [errorMaxSize, setErrorMaxSize] = React.useState<boolean>(false)

  const clsWrapper = base({
    model: {
      display: props.textState !== undefined ? "inline-flex" : undefined,
      width: props.fluid ? "full" : props.width,
      overflow: "hidden",
    },
    flexbox: {
      flex: false,
      alignItems: "center"
    },
    positioning: {
      position: "relative"
    },
    misc: {
      opacity: props.disabled ? "25" : undefined
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
    }
  })

  const clsButton = base({
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      bgHoverColor: props.colorHover,
      bgHoverColorContrast: props.colorHoverContrast,
      darkBgHoverColor: props.darkBgColorHover,
      darkBgHoverColorContrast: props.darkBgColorHoverContrast,
      borderRadius: props.rounded
    },
    spacing: {
      mr: "4",
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt,
    }
  })

  const clsButtonText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      textAlign: "center",
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    },
    misc: {
      userSelect: "none"
    }
  })

  const clsPlaceholder = text({
    visualText: {
      dark: dark,
      textColor: props.placeholderColor,
      textColorContrast: props.placeholderColorContrast,
      fontSize: "sm",
    },
    misc: {
      userSelect: "none"
    }
  })

  const generateTextSize = (size: number): string => {
    const s = Math.floor(size / 1000)
    if (s < 1000) return `${s} MB`
    else return `${(s / 1000).toFixed(2)} MB`
  }

  const validateMaxSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (files.length > 0) setFiles([])

    const f = e.currentTarget?.files
    const arr = []
    setFiles([])
    if (props.maxSize !== undefined && f !== null) {
      for (let i = 0; i < f.length; i++) {
        if (props.maxCount !== undefined) {
          if (i+1 === props.maxCount) break
        }

        if ((f[i].size / 1000) > props.maxSize) {
          const text = props.errorMaxSize !== undefined ? props.errorMaxSize(generateTextSize(props.maxSize)) : ""
          if (props.errorMaxSize) setErrorMessage(text)
          setErrorMaxSize(true)
          break
        } else {
          setFiles((old) => [...old, f[i]])
          arr.push(f[i])
        }

        if (i === f.length - 1 && props.onChange !== undefined) props.onChange(arr)
      }
    } else if (props.maxSize === undefined && f !== null) {
      for (let i = 0; i < f.length; i++) {
        if (props.maxCount !== undefined) {
          if (i === props.maxCount) {
            if (props.onChange !== undefined) props.onChange(arr)
            break
          }
        }

        setFiles((old) => [...old, f[i]])
        arr.push(f[i])

        if (i === f.length - 1 && props.onChange !== undefined) props.onChange(arr)
      }
    }
  }

  return(
    <React.Fragment>
      {(props.label !== undefined && props.labelPosition === "top") && (
        <label htmlFor={id} className="pl-1">{props.label}</label>
      )}
      <div className={clsWrapper}>
        {(props.label !== undefined && props.labelPosition === "left") && (
          <label htmlFor={id} className="pr-1">{props.label}</label>
        )}
        <input
        id={id}
        ref={node}
        className="hidden"
        aria-disabled={props.disabled ? "true" : undefined}
        name={props.name}
        type="file" disabled={props.disabled} required={props.required}
        accept={props.accept} multiple={props.multiple}
        onChange={(e) => {
          validateMaxSize(e)
        }}/>

        <button
        aria-label={props.ariaLabel}
        className={[
          clsButton,
          clsButtonText,
          props.disabled ? "pointer-events-none" : "",
        ].join(" ").trim()}
        onClick={() => {
          node.current?.click()
        }}>{props.text}</button>
        {(props.textState && !errorMaxSize) && (
          <span className={clsPlaceholder}>{files.length > 0 ? `${files.length > 1 ? `${files[0].name}...` : `${files[0].name}`}` : props.textState}</span>
        )}

        {errorMaxSize && (
          <span className={clsPlaceholder}>{errorMessage}</span>
        )}
      </div>
    </React.Fragment>
  )
}

InputFile.defaultProps = {
  width: "max",
  disabled: false,
  required: false,
  color: "blue",
  colorContrast: "500",
  textColor: "white",
  placeholderColor: "gray",
  placeholderColorContrast: "500",
  text: "Choose File",
  textState: "No file choosen",
  fontSize: "sm",
  rounded: "md",
  labelPosition: "top",
  errorMaxSize: (maxSize: string) => `The file size is too large. The file size cannot be more than ${maxSize}`,
  px: "3",
  py: "1"
}
