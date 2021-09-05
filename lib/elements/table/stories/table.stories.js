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

export const emptyState = () => {
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

  return(
    <>
      <Table columns={columns} rows={[]} emptyState={true} />
    </>
  )
}

export const emptyStateCustom = () => {
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

  const svg = (
    <div className="mt-10">
      <svg id="Capa_1" enableBackground="new 0 0 512 512" height="80" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g clipRule="evenodd" fillRule="evenodd"><path d="m37.105 243.57h239.758v-198.994h-178.585l-61.173 61.143z" fill="#f9f7f8"/><path d="m136.122 243.57h239.756v-198.994h-178.612l-61.144 61.143z" fill="#ebe8fa"/><path d="m235.137 243.57h239.758v-191.228c0-5.414-2.608-7.766-7.768-7.766h-170.847l-61.144 61.143v137.851z" fill="#f9f7f8"/><path d="m450.629 238.723h24.266v-186.381c0-5.414-2.608-7.766-7.768-7.766h-24.264c5.158 0 7.767 2.352 7.767 7.766v186.381z" fill="#ebe8fa"/><path d="m98.278 44.576v53.377c0 4.959-2.013 7.766-7.767 7.766h-53.406z" fill="#dddaec"/><path d="m197.266 44.576v53.377c0 5.301-2.778 7.766-7.739 7.766h-53.404z" fill="#d0cce3"/><path d="m296.28 44.576v53.377c0 5.385-2.637 7.766-7.767 7.766h-53.377z" fill="#dddaec"/><path d="m15.279 467.424h481.471c4.252 0 7.767-3.486 7.767-7.767v-213.196c0-4.252-3.515-7.738-7.767-7.738h-481.471c-4.28 0-7.768 3.486-7.768 7.738v213.195c.001 4.282 3.488 7.768 7.768 7.768z" fill="#ce9875"/><path d="m472.484 467.424h24.266c4.252 0 7.767-3.486 7.767-7.767v-213.196c0-4.252-3.515-7.738-7.767-7.738h-24.266c4.252 0 7.768 3.486 7.768 7.738v213.195c0 4.282-3.516 7.768-7.768 7.768z" fill="#c6865c"/><path d="m193.665 277.473h124.698c10.062 0 18.34 8.248 18.34 18.311 0 10.093-8.277 18.343-18.34 18.343h-124.698c-10.091 0-18.34-8.25-18.34-18.343 0-10.063 8.249-18.311 18.34-18.311z" fill="#365e7d"/><path d="m294.098 277.473h24.266c10.062 0 18.34 8.248 18.34 18.311 0 10.093-8.277 18.343-18.34 18.343h-24.266c10.064 0 18.312-8.25 18.312-18.343 0-10.063-8.248-18.311-18.312-18.311z" fill="#2b4d66"/></g><path d="m179.18 52.059h-73.418v53.66c0 4.139-3.345 7.512-7.483 7.512h-53.66v42.011c0 4.139-3.374 7.484-7.513 7.484s-7.483-3.346-7.483-7.484v-49.522c0-1.928.709-3.826 2.183-5.301l61.116-61.116c1.36-1.389 3.26-2.238 5.357-2.238h376.616c4.139 0 7.512 3.373 7.512 7.513v186.635h22.11c4.138 0 7.483 3.346 7.483 7.512v97.37c0 4.139-3.346 7.484-7.483 7.484-4.139 0-7.513-3.346-7.513-7.484v-89.886c-160.669 0-321.339 0-482.008 0v213.731h482.008v-89.886c0-4.139 3.374-7.484 7.513-7.484 4.138 0 7.483 3.346 7.483 7.484v97.37c0 4.14-3.346 7.513-7.483 7.513h-497.005c-4.139 0-7.512-3.373-7.512-7.513v-228.701c0-4.166 3.373-7.512 7.512-7.512h22.11v-42.011c0-4.139 3.345-7.512 7.483-7.512 4.139 0 7.513 3.373 7.513 7.512v42.011h83.991v-125.492c.029-1.928.738-3.826 2.212-5.301zm124.613 0v53.66c0 4.139-3.373 7.512-7.513 7.512h-53.631v42.011c0 4.139-3.374 7.484-7.513 7.484-4.138 0-7.512-3.346-7.512-7.484v-49.522c0-1.928.737-3.826 2.211-5.301l48.359-48.359h-73.418v53.66c0 4.139-3.346 7.512-7.512 7.512h-53.632v117.98h83.991v-42.012c0-4.139 3.374-7.512 7.512-7.512 4.139 0 7.513 3.373 7.513 7.512v42.011h224.762v-179.152zm-50.542 46.148h35.546v-35.547zm-99.016 0h35.546v-35.547zm-63.468-35.547-35.547 35.547h35.547zm102.898 207.301h124.698c7.115 0 13.578 2.891 18.255 7.568 4.677 4.705 7.568 11.141 7.568 18.254 0 7.116-2.892 13.579-7.568 18.257-4.677 4.678-11.14 7.598-18.255 7.598h-124.698c-7.114 0-13.578-2.92-18.255-7.598-4.678-4.678-7.597-11.141-7.597-18.257 0-7.086 2.919-13.549 7.597-18.254 4.677-4.677 11.141-7.568 18.255-7.568zm124.698 14.994h-124.698c-2.976 0-5.697 1.219-7.653 3.203-1.956 1.957-3.203 4.678-3.203 7.625 0 2.977 1.247 5.7 3.203 7.655 1.956 1.984 4.677 3.203 7.653 3.203h124.698c2.977 0 5.669-1.219 7.625-3.203 1.984-1.955 3.203-4.679 3.203-7.655 0-2.947-1.219-5.668-3.203-7.625-1.956-1.984-4.648-3.203-7.625-3.203zm22.848 114.182c-4.139 0-7.484-3.344-7.484-7.482 0-4.168 3.346-7.512 7.484-7.512h116.136c4.139 0 7.512 3.344 7.512 7.512 0 4.139-3.373 7.482-7.512 7.482zm0 27.269c-4.139 0-7.484-3.373-7.484-7.512s3.346-7.512 7.484-7.512h79.456c4.166 0 7.512 3.373 7.512 7.512s-3.346 7.512-7.512 7.512z"/></g></svg>
    </div>
  )

  return(
    <>
      <Table columns={columns} rows={[]} emptyState={true} emptyStateImage={svg} emptyStateText="Data tidak ditemukan..." emptyStateTextColor={"black"} />
    </>
  )
}