import * as React from 'react'
import { Pagination } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Pagination' }

export const Basic = () => {
  return(
    <Pagination total={100} />
  )
}

export const ShowTotal = () => {
  return(
    <Pagination total={100} showTotal={(total) => `Total ${total} data`} />
  )
}

export const ShowTotalCustomize = () => {
  return(
    <Pagination total={100} showTotal={(total) => <Text color="red" colorContrast="700" fontSize="sm">Total {total} data</Text>} />
  )
}

export const ShowTotalRangeCustomize = () => {
  return(
    <Pagination total={100} showTotal={(total, range) => <Text fontSize="sm">{range[0]}-{range[1]} of {total} items</Text>} />
  )
}

export const Coloring = () => {
  return(
    <Pagination total={100}
    color="blue" colorContrast="500" colorHover="blue" colorHoverContrast="700"
    borderColor="blue" borderColorContrast="600"
    textColor="white" />
  )
}

export const Shadow = () => {
  return(
    <Pagination total={100} shadow="lg" />
  )
}

export const WithoutBorder = () => {
  return(
    <Pagination total={100} border={false} />
  )
}

export const Plain = () => {
  return(
    <Pagination total={100} border={false} color="transparent" />
  )
}

export const NoData = () => {
  return(
    <Pagination total={0} />
  )
}
