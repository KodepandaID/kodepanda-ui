import React from "react";

import { default as Table } from "../table";
import "../../../style.css";

export default {
  title: 'Example/Table',
  component: Table,
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
	{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address'
	}
]

const rows = [
	{ name: 'Jhon Doe', age: '20', address: 'Street X No. 666', key: '1' },
	{ name: 'Jane Doe', age: '25', address: 'Street X No. 777', key: '2' },
]

export const basic = () => (
	<>
		<Table columns={columns} rows={rows} />
	</>
)

export const tableStripe = () => (
  <>
		<Table columns={columns} rows={rows} stripe={true} />
	</>
)