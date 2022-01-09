// Following the rating slider guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/slider/slider-rating.html

import { base, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
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
  const id = useId("rating")

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
    aria-label={props.heart ? "rating by heart" : "rating by star"}
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
            icon={props.heart ? "heart-solid" : "star-solid"}
            color={star > i || starHover > i ? props.color : props.nonActiveColor}
            colorContrast={star > i || starHover > i ? props.colorContrast : props.nonActiveColorContrast}
            height={props.height} />
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
