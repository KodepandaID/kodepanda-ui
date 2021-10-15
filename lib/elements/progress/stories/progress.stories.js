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
  <Progress rounded="lg" percentage={50} />
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

export const circle = () => (
  <Progress circle percentage={50} />
)

export const circleSize = () => (
  <div className="flex flex-col space-y-4 bg-gray-200 px-5 py-5">
    <div className="w-max bg-white rounded-md shadow-md px-5 py-5 mr-5">
      <Progress circle percentage={50} />
    </div>
    <div className="w-max bg-white rounded-md shadow-md px-5 py-5">
      <Progress circle circleSize="sm" percentage={50} />
    </div>
    <div className="w-max bg-white rounded-md shadow-md px-5 py-5">
      <Progress circle circleSize="md" percentage={50} />
    </div>
    <div className="w-max bg-white rounded-md shadow-md px-5 py-5">
      <Progress circle circleSize="lg" percentage={50} />
    </div>
    <div className="w-max bg-white rounded-md shadow-md px-5 py-5">
      <Progress circle circleSize="xl" percentage={50} />
    </div>
  </div>
)