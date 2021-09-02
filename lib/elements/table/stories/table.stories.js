import React, { useState } from "react";

import { default as Table } from "../table";
import { default as Button } from "../../button/button"
import "../../../style.css";

export default {
  title: 'Example/Table',
  component: Table,
}

export const basic = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    }
  ]
  return(
    <>
      <Table columns={columns} rows={rows} />
    </>
  )
}

export const tableStripe = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} stripe={true} />
    </>
  )
}

export const tableLine = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} line={true} />
    </>
  )
}


export const tableScroll = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} stripe={true} scroll={true} height={150} shadow="lg" rounded="lg" />
    </>
  )
}

export const tableNoBorder = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123"
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456"
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} border={false} stripe={true} />
    </>
  )
}

export const tableCheckbox = () => {
  const [selection, setSelection] = useState([])
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123",
      key: 1
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 2
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 3
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 4
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 5
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 6
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      key: 7
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} checkbox={true} selectedRows={(data) => setSelection(data)} />
      {JSON.stringify(selection)}
    </>
  )
}

export const tableCustomElement = () => {
  const columns = [{
    Header: "Name",
    accessor: "name"
  }, {
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Address",
    accessor: "address"
  },{
    Header: "",
    accessor: "action",
  }]
  
  const rows = [
    {
      name: "Jhon Doe",
      age: 20,
      address: "Street X No. 123",
      action: (
        <div style={{float: "right"}}>
          <Button>Save</Button>
        </div>
      )
    },
    {
      name: "Jane Doe",
      age: 26,
      address: "Street Y No. 456",
      action: (
        <div style={{float: "right"}}>
          <Button>Save</Button>
        </div>
      )
    }
  ]

  return(
    <>
      <Table columns={columns} rows={rows} border={false} stripe={true} />
    </>
  )
}