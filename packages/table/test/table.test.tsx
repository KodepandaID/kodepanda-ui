import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Table } from "../src"
import userEvent from "@testing-library/user-event"

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

describe("Standard Table component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Table columns={columns} rows={rows}  />
    )
  })

  it("should have table element with classname", () => {
    expect(rendered.container.querySelector("table")).toHaveClass("w-full border-collapse table-auto")
  })

  it("should have thead element with classname", () => {
    expect(rendered.container.querySelector("thead")).toHaveClass("border-b border-solid border-gray-200")
  })

  it("should have thead>tr>th element with classname", () => {
    expect(rendered.container.querySelector("thead>tr>th")).toHaveClass("px-4 py-2 text-left")
  })

  it("should have thead>tr>th element on index 2 with classname", () => {
    expect(rendered.container.querySelectorAll("thead>tr>th")[2]).toHaveClass("px-4 py-2 w-12 text-left")
  })

  it("should have tbody>tr element with classname", () => {
    expect(rendered.container.querySelector("tbody>tr")).toHaveClass("border-b border-solid border-gray-200")
  })

  it("should have 3 element tbody>tr", () => {
    expect(rendered.container.querySelectorAll("tbody>tr")).toHaveLength(3)
  })

  describe("Standard Table Border component", () => {
    beforeEach(() => {
      rendered = render(
        <Table columns={columns} rows={rows} border />
      )
    })

    it("should have table element with classname", () => {
      expect(rendered.container.querySelector("table")).toHaveClass("w-full border border-solid border-gray-200 border-collapse table-auto")
    })

    it("should have thead>tr>th element on index 0 with classname", () => {
      expect(rendered.container.querySelectorAll("thead>tr>th")[0]).toHaveClass("px-4 py-2 text-left")
    })

    it("should have thead>tr>th element on index 1 with classname", () => {
      expect(rendered.container.querySelectorAll("thead>tr>th")[1]).toHaveClass("border-l border-solid border-gray-200 px-4 py-2 text-left")
    })

    it("should have tbody>tr>td element on index 0 with classname", () => {
      expect(rendered.container.querySelectorAll("tbody>tr>td")[0]).toHaveClass("px-4 py-2")
    })

    it("should have tbody>tr>td element on index 1 with classname", () => {
      expect(rendered.container.querySelectorAll("tbody>tr>td")[1]).toHaveClass("border-l border-solid border-gray-200 px-4 py-2 border-l")
    })
  })

  describe("Standard Table Coloring component", () => {
    beforeEach(() => {
      rendered = render(
        <Table
        columns={columns} rows={rows} border
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="600"
        rowColor="blue" rowColorContrast="500" />
      )
    })

    it("should have thead>tr>th element with classname", () => {
      expect(rendered.container.querySelector("thead>tr>th")).toHaveClass("bg-blue-600 px-4 py-2 text-left")
    })

    it("should have tbody>tr>td element with classname", () => {
      expect(rendered.container.querySelector("tbody>tr>td")).toHaveClass("bg-blue-500 px-4 py-2")
    })
  })

  describe("Standard Table Rounded component", () => {
    beforeEach(() => {
      rendered = render(
        <Table
        columns={columns} rows={rows} border rounded="lg"
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="600"
        rowColor="blue" rowColorContrast="500" />
      )
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative rounded-lg overflow-x-auto overflow-y-auto")
    })

    it("should have table element with classname", () => {
      expect(rendered.container.querySelector("table")).toHaveClass("w-full border border-solid border-blue-700 text-white border-collapse table-auto")
    })
  })

  describe("Standard Table Stripe component", () => {
    beforeEach(() => {
      rendered = render(
        <Table stripe
        columns={columns} rows={rows}
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="700"
        rowColor="blue" rowColorContrast="500"
        stripeColor="blue" stripeColorContrast="600" />
      )
    })

    it("should have tbody>tr element on index 0 with classname", () => {
      expect(rendered.container.querySelectorAll("tbody>tr")[0].querySelector("td")).toHaveClass("bg-blue-500 px-4 py-2")
    })

    it("should have tbody>tr element on index 1 with classname", () => {
      expect(rendered.container.querySelectorAll("tbody>tr")[1].querySelector("td")).toHaveClass("bg-blue-600 px-4 py-2")
    })
  })

  describe("Standard Table Row Hover component", () => {
    beforeEach(() => {
      rendered = render(
        <Table columns={columns} rows={rows}
        rowColorHover="gray" rowColorHoverContrast="300"  />
      )
    })

    it("should have tbody>tr element with classname", () => {
      expect(rendered.container.querySelector("tbody>tr")).toHaveClass("hover:bg-gray-300 border-b border-solid border-gray-200")
    })
  })

  describe("Standard Table Numbering component", () => {
    beforeEach(() => {
      rendered = render(
        <Table stripe numbering
        rowNumber={(idx) => (<b>{idx}.</b>)}
        columns={columns} rows={rows}
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="700"
        rowColor="blue" rowColorContrast="500"
        stripeColor="blue" stripeColorContrast="600" />
      )
    })

    it("should have tbody>tr>td element with text content", () => {
      expect(rendered.container.querySelector("tbody>tr>td")).toHaveTextContent("1.")
    })
  })

  describe("Standard Table Checkbox component", () => {
    let selected: Array<number>

    beforeEach(() => {
      rendered = render(
        <Table stripe checkbox
        columns={columns} rows={rows}
        textColor="gray" textColorContrast="700"
        borderColor="gray" borderColorContrast="300"
        colColor="gray" colColorContrast="400"
        rowColor="gray" rowColorContrast="200"
        stripeColor="gray" stripeColorContrast="300"
        onSelected={(e) => selected = e} />
      )
    })

    it("should have input type checkbox on thead", () => {
      expect(rendered.container.querySelector("thead>tr>th")?.querySelector("input[type=checkbox]")).not.toBeNull()
    })

    it("should have input type checkbox on thbody", () => {
      expect(rendered.container.querySelector("thead>tr>td")?.querySelector("input[type=checkbox]")).not.toBeNull()
    })

    it("should return [0, 1, 2] after click checkbox all", () => {
      const elm = rendered.container.querySelector("thead>tr>th")?.querySelector("input[type=checkbox]")
      if (elm !== undefined && elm !== null) userEvent.click(elm)

      expect(selected).toEqual([0,1,2])
    })

    it("should have return [0] after click checkbox on tbody>tr index 0", () => {
      const elm = rendered.container.querySelector("tbody>tr>td")?.querySelector("input[type=checkbox]")
      if (elm !== undefined && elm !== null) userEvent.click(elm)

      expect(selected).toEqual([0])
    })

    it("should return [0, 2] after click checkbox all and click tbody>tr index 1", () => {
      const elm = rendered.container.querySelector("thead>tr>th")?.querySelector("input[type=checkbox]")
      if (elm !== undefined && elm !== null) userEvent.click(elm)

      const elm2 = rendered.container.querySelectorAll("tbody>tr")[1].querySelector("td")?.querySelector("input[type=checkbox]")
      if (elm2 !== undefined && elm2 !== null) userEvent.click(elm2)

      expect(selected).toEqual([0,2])
    })
  })

  describe("Standard Table Custom Rows component", () => {
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

    beforeEach(() => {
      rendered = render(
        <Table
        columns={columns} rows={rows} border
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="600"
        rowColor="blue" rowColorContrast="500" />
      )
    })

    it("should have tbody>tr>td element index 2 with classname", () => {
      expect(rendered.container.querySelectorAll("tbody>tr")[2].querySelector("td")).toHaveClass("bg-red-700 px-4 py-2")
    })
  })

  describe("Standard Table onClick component", () => {
    const onClick = jest.fn()
    const rowsClick = [{
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
      onClick: () => {onClick()}
    }]

    beforeEach(() => {
      rendered = render(
        <Table
        columns={columns} rows={rowsClick} border
        textColor="white"
        borderColor="blue" borderColorContrast="700"
        colColor="blue" colColorContrast="600"
        rowColor="blue" rowColorContrast="500" />
      )
    })

    it("should called onClick after click rows", () => {
      const elm = rendered.container.querySelectorAll("tbody>tr")[2]
      if (elm !== undefined && elm !== null) userEvent.click(elm)

      expect(onClick).toBeCalled()
    })
  })

  describe("Standard Table scroll component", () => {
    beforeEach(() => {
      rendered = render(
        <Table columns={columns} rows={rows} border scroll scrollHeight={150} />
      )
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveStyle("height: 150px;")
    })

    it("should have th element with classname", () => {
      expect(rendered.container.querySelector("th")).toHaveClass("px-4 py-2 text-left sticky top-0")
    })
  })
})
