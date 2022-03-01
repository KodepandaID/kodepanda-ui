import * as React from 'react'
import { Table } from "../src"

export default { title: 'Components/Table' }

const columns = [{
  header: "Name",
  accessor: "name",
  position: "left"
}, {
  header: "Job",
  accessor: "job",
  position: "left"
}, {
  header: "Age",
  accessor: "age",
  position: "left",
  width: "12"
}]

const rows = [{
  name: "Jhon",
  job: "Frontend Engineer",
  age: 24
}, {
  name: "Gill",
  job: "DevOps",
  age: 31
}, {
  name: "Oesman",
  job: "Backend Engineer",
  age: <b>27</b>
}]

export const Basic = () => {
  return(
    <Table columns={columns} rows={rows}  />
  )
}

export const Border = () => {
  return(
    <Table columns={columns} rows={rows} border />
  )
}

export const Coloring = () => {
  return(
    <Table
    columns={columns} rows={rows} border
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="600"
    rowColor="blue" rowColorContrast="500" />
  )
}

export const Rounded = () => {
  return(
    <Table
    columns={columns} rows={rows} border rounded="lg"
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="600"
    rowColor="blue" rowColorContrast="500" />
  )
}

export const Stripe = () => {
  return(
    <Table stripe
    columns={columns} rows={rows}
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="700"
    rowColor="blue" rowColorContrast="500"
    stripeColor="blue" stripeColorContrast="600" />
  )
}

export const RowHover = () => {
  return(
    <Table columns={columns} rows={rows}
    rowColorHover="gray" rowColorHoverContrast="300"  />
  )
}

export const Numbering = () => {
  return(
    <Table stripe numbering
    rowNumber={(idx) => (<b>{idx}.</b>)}
    columns={columns} rows={rows}
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="700"
    rowColor="blue" rowColorContrast="500"
    stripeColor="blue" stripeColorContrast="600" />
  )
}

export const Checkbox = () => {
  const [selected, setSelected] = React.useState<Array<number>>([])
  return(
    <>
      <p>Selected: <strong>{selected}</strong></p>
      <Table stripe checkbox selected={selected}
      columns={columns} rows={rows}
      textColor="gray" textColorContrast="700"
      borderColor="gray" borderColorContrast="300"
      colColor="gray" colColorContrast="400"
      rowColor="gray" rowColorContrast="200"
      stripeColor="gray" stripeColorContrast="300"
      onSelected={(selected) => setSelected([...selected])} />
    </>
  )
}

export const CustomRows = () => {
  const rows = [{
    name: "Jhon",
    job: "Frontend Engineer",
    age: 24
  }, {
    name: "Gill",
    job: "DevOps",
    age: 31
  }, {
    name: "Oesman",
    job: "Backend Engineer",
    age: <b>27</b>,
    rowColor: "red",
    rowColorContrast: "700"
  }]

  return(
    <Table
    columns={columns} rows={rows} border
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="600"
    rowColor="blue" rowColorContrast="500" />
  )
}

export const OnClickRow = () => {
  const rows = [{
    name: "Jhon",
    job: "Frontend Engineer",
    age: 24
  }, {
    name: "Gill",
    job: "DevOps",
    age: 31
  }, {
    name: "Oesman",
    job: "Backend Engineer",
    age: <b>27</b>,
    onClick: () => { alert("Show Alert") }
  }]

  return(
    <Table
    columns={columns} rows={rows} border
    textColor="white"
    borderColor="blue" borderColorContrast="700"
    colColor="blue" colColorContrast="600"
    rowColor="blue" rowColorContrast="500" />
  )
}
