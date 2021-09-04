import React from "react";

import { default as Pagination } from "../pagination";

export default {
  title: 'Example/Pagination',
  component: Pagination,
}

export const basic = () => (
  <>
    <Pagination total={50} onChange={(page) => console.log(page)} />
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

export const coloring = () => (
  <>
    <Pagination total={50} color={"blue"} colorContrast={600} textColor={"white"} />
  </>
)

export const noData = () => (
  <>
    <Pagination total={0} />
  </>
)