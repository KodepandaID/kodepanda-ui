import cx from "clsx";

const Margin = (mx, my, mb, ml, mr, mt) => {
  const margin = cx(
    (mx !== undefined && mx >= 0 || mx === "auto") && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0 || my === "auto") && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0 || mb === "auto") && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0 || ml === "auto") && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0 || mr === "auto") && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0 || mt === "auto") && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  return margin === undefined ? "" : margin
}

export {
  Margin
}
