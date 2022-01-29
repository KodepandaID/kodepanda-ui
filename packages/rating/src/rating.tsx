// Following the rating slider guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/slider/slider-rating.html

import { base, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

interface RatingProps extends StandardProps, ColorProps, ModelProps, SpacingProps {
  count?: number,
  heart?: boolean,
  defaultValue?: number,
  nonActiveColor?: Color,
  nonActiveColorContrast?: ColorContrast,
  onChange?: (star: number) => void
}

export const Rating: React.FC<RatingProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("rating")

  const tr = theme?.rating?.[`${props.componentName}`]

  const [star, setStar] = React.useState(props.defaultValue || 0)
  const [starHover, setStarHover] = React.useState(0)

  const cls = base({
    model: {
      display: "inline-flex",
    },
    flexbox: {
      flex: false,
      verticalAlign: "baseline"
    },
    spacing: {
      mx: tr?.mx !== undefined ? tr.mx : props.mx,
      my: tr?.my !== undefined ? tr.my : props.my,
      mb: tr?.mb !== undefined ? tr.mb : props.mb,
      ml: tr?.ml !== undefined ? tr.ml : props.ml,
      mr: tr?.mr !== undefined ? tr.mr : props.mr,
      mt: tr?.mt !== undefined ? tr.mt : props.mt,
      px: tr?.px !== undefined ? tr.px : props.px,
      py: tr?.py !== undefined ? tr.py : props.py,
      pb: tr?.pb !== undefined ? tr.pb : props.pb,
      pl: tr?.pl !== undefined ? tr.pl : props.pl,
      pr: tr?.pr !== undefined ? tr.pr : props.pr,
      pt: tr?.pt !== undefined ? tr.pt : props.pt
    }
  })

  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    switch (event.key) {
      case "Home":
        setStar(0)
        if (props.onChange !== undefined) props.onChange(0)
        break
      case "End":
        if (props.count !== undefined) {
          setStar(props.count)
          if (props.onChange !== undefined) props.onChange(props.count)
        }
        break
      case "ArrowRight":
        if (props.count !== undefined && star+1 <= props.count) {
          setStar(star + 1)
          if (props.onChange !== undefined) props.onChange(star + 1)
        }
        break
      case "ArrowLeft":
        if (star > 0) {
          setStar(star - 1)
          if (props.onChange !== undefined) props.onChange(star - 1)
        }
        break
    }
  }

  return(
    <div
    id={id}
    className={cls}
    role="slider"
    tabIndex={0}
    aria-label={(tr?.heart || (props.heart && tr?.heart === undefined)) ? "rating by heart" : "rating by star"}
    aria-valuemin={0}
    aria-valuenow={star}
    aria-valuemax={props.count}
    aria-valuetext={star === 0 ? "no stars" : `${star} stars`}
    onKeyDown={handleKeyDown}
    >
      {Array.from(Array(props.count), (e, i) => {
        return(
          <span
          className="cursor-pointer"
          key={`star-${i}`}
          role="button"
          tabIndex={0}
          aria-hidden="true"
          onMouseOver={() => setStarHover(i+1)}
          onFocus={() => setStarHover(i+1)}
          onMouseOut={() => setStarHover(0)}
          onBlur={() => setStarHover(0)}
          onClick={() => {
            if (star === (i+1)) setStar(0)
            else setStar(i+1)

            if (props.onChange !== undefined) props.onChange(star)
          }}>
            <Icon
            aria-hidden={true}
            icon={(tr?.heart || (props.heart && tr?.heart === undefined)) ? "heart-solid" : "star-solid"}
            color={star > i || starHover > i ? tr?.color !== undefined ? tr.color : props.color : tr?.nonActiveColor !== undefined ? tr.nonActiveColor : props.nonActiveColor}
            colorContrast={star > i || starHover > i ? tr?.colorContrast !== undefined ? tr.colorContrast : props.colorContrast : tr?.nonActiveColorContrast !== undefined ? tr.nonActiveColorContrast : props.nonActiveColorContrast}
            height={tr?.height !== undefined ? tr.height : props.height} />
          </span>
        )
      })}
    </div>
  )
}

Rating.defaultProps = {
  height: "6",
  color: "yellow",
  colorContrast: "300",
  nonActiveColor: "gray",
  nonActiveColorContrast: "300",
  defaultValue: 0,
  count: 5,
  heart: false
}
