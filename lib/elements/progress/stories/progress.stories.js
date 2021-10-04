import React, { useEffect, useState } from "react";

import Progress from "../progress";

export default {
  title: 'Example/Progress',
  component: Progress,
}

export const basic = () => (
  <Progress percentage={50} />
)

export const width = () => (
  <Progress width="1/2" percentage={10} />
)

export const coloring = () => (
  <Progress color="green" bgColor="gray" percentage={10} />
)

export const rounded = () => (
  <Progress rounded="none" percentage={50} />
)

export const showPercentage = () => (
  <Progress showPercentage width="1/2" percentage={10} />
)

export const showPercentagePosition = () => (
  <Progress showPercentage showPercentagePosition="outside" width="1/2" percentage={10} />
)

export const dynamic = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) setPercentage(percentage+20)
    }, 5000)
  }, [percentage])

  return(
    <Progress showPercentage width="1/2" percentage={percentage} />
  )
}