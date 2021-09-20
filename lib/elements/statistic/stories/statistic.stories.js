import React from "react";

import Statistic from "../statistic";
import Tags from "../../tags/tags";

export default {
  title: 'Example/Statistic',
  component: Statistic,
}

export const basic = () => (
  <div className="flex flex-row">
    <Statistic title="Active Users" value={1000} mr={5} />
    <Statistic title="Account Balance (IDR)" value={10000} precision={2} />
  </div>
)

export const icon = () => (
  <Statistic title="Active Users" value={1000} icon="users" />
)

export const preffix = () => (
  <Statistic title="Account Balance (IDR)" value={100000} preffix={(<span className="text-bold text-2xl">Rp</span>)} />
)

export const suffix = () => (
  <Statistic title="Rank" value={1} suffix="/ 10" />
)

export const textSize = () => (
  <Statistic title="Active Users" value={1000} textSize="3xl" />
)

export const customTitle = () => (
  <Statistic
  title={(
    <div className="flex flex-row">
      <div className="text-gray-300 text-sm mr-1">Total Revenue</div>
      <Tags color="green" colorContrast={100} textColor="green" border={false} rounded="md" py={0.5} px={1}>+ 12.5%</Tags>
    </div>
  )} value={100000} preffix={(<span className="text-bold text-2xl">Rp</span>)} />
)

export const description = () => (
  <Statistic
  title={(
    <div className="flex flex-row">
      <div className="text-gray-400 text-sm mr-1">Total Revenue</div>
      <Tags color="green" colorContrast={100} textColor="green" border={false} rounded="md" py={0.5} px={1}>+ 12.5%</Tags>
    </div>
  )} value={100000} preffix={(<span className="text-bold text-2xl">Rp</span>)}
  description={<span className="text-gray-400 text-xs">500 orders</span>} />
)