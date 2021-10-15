import React from "react";

import Pagination from "../pagination";

export default {
  title: 'Example/Pagination',
  component: Pagination,
}

export const basic = () => (
  <>
    <Pagination total={50} onChange={(page) => console.log(page)} />
  </>
)

export const noBorder = () => (
  <>
    <Pagination total={50} border={false} />
  </>
)

export const manyPage = () => (
  <>
    <Pagination total={100} />
  </>
)

export const showSizeChanger = () => (
  <>
    <Pagination total={100} showSizeChanger={true} />
  </>
)

export const showTotal = () => (
  <>
    <Pagination total={100} showTotal={(total) => `Total ${total} items`} />
    <Pagination total={100} mt={5} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} showSizeChanger={true} />
  </>
)

export const coloring = () => (
  <>
    <Pagination total={50} color={"blue"} colorContrast={600} textColor={"white"} />
  </>
)

export const coloringActive = () => (
  <>
    <Pagination total={50} colorActive={"blue"} colorActiveContrast={500} textColorActive={"white"} border={false} />
  </>
)

export const noData = () => (
  <>
    <Pagination total={0} />
  </>
)