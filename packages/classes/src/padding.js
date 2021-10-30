import cx from "clsx";

const Padding = (px, py, pb, pl, pr, pt) => {
  const padding = cx(
    (px !== undefined && px >= 0 || px === "auto") && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0 || py === "auto") && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0 || pb === "auto") && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0 || pl === "auto") && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0 || pr === "auto") && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0 || pt === "auto") && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`,
  )

  return padding === undefined ? "" : padding
}

export {
  Padding
}
