import cx from "clsx";

const Responsive = (width, widthSM, widthMD, widthLG, widthXL, width2XL) => {
  const responsive = cx(
    widthSM !== undefined && `w-${widthSM}`,
    (widthMD !== undefined && widthSM !== undefined) && `md:w-${widthMD}`,
    (widthMD !== undefined && widthSM === undefined) && `w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    (width !== undefined && widthSM === undefined && widthMD === undefined) && `w-${width}`,
    (width !== undefined && widthSM !== undefined && widthLG === undefined) && `lg:w-${width}`,
    (width !== undefined && widthSM === undefined && widthMD !== undefined && widthLG === undefined) && `lg:w-${width}`,
  )

  return responsive;
}

const ResponsiveHeight = (height, heightSM, heightMD, heightLG, heightXL, height2XL) => {
  const responsive = cx(
    heightSM !== undefined && `h-${heightSM}`,
    (heightMD !== undefined && heightSM !== undefined) && `md:h-${heightMD}`,
    (heightMD !== undefined && heightSM === undefined) && `h-${heightMD}`,
    heightLG !== undefined && `lg:h-${heightLG}`,
    heightXL !== undefined && `xl:h-${heightXL}`,
    height2XL !== undefined && `2xl:h-${height2XL}`,
    (height !== undefined && heightSM === undefined && heightMD === undefined) && `h-${height}`,
    (height !== undefined && heightSM !== undefined && heightLG === undefined) && `lg:h-${height}`,
    (height !== undefined && heightSM === undefined && heightMD !== undefined && heightLG === undefined) && `lg:h-${height}`,
  )

  return responsive;
}

export {
  Responsive,
  ResponsiveHeight
}
