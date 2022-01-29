import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Provider } from "../src/context"
import { Accordion } from "../../accordion/src"
import { AlertDialog } from "../../alert-dialog/src"
import { Avatar } from "../../avatar/src"
import { Badge } from "../../badge/src"
import { Box } from "../../box/src"
import { Breadcrumb } from "../../breadcrumb/src"
import { Button, ButtonDropdown, ButtonDropdownHorizontal, ButtonGroup } from "../../button/src"
import { Card } from "../../card/src"
import { Dialog } from "../../dialog/src"
import { Flexbox } from "../../flexbox/src"
import { Grid } from "../../grid/src"
import { Icon } from "../../icon/src"
import { Image } from "../../image/src"
import { Input } from "../../input/src"
import { List, ListBox } from "../../list/src"
import { Loader } from "../../loader/src"
import { Menu, MenuSidebar, MenuFooter } from "../../menu/src"
import { Message } from "../../message/src"
import { Pagination } from "../../pagination/src"
import { Popover } from "../../popover/src"
import { Progress } from "../../progress/src"
import { Rating } from "../../rating/src"
import { Separator } from "../../separator/src"
import { Skeleton } from "../../skeleton/src"
import { Statistic } from "../../statistic/src"
import { Switch } from "../../switch/src"
import { Tabs } from "../../tabs/src"
import { Table } from "../../table/src"
import { Tag } from "../../tags/src"
import { Tooltip } from "../../tooltip/src"
import { Blockquote, Header, Link, Text } from "../../typography/src"
import userEvent from "@testing-library/user-event"

describe("Use theming context", () => {
  let rendered: RenderResult

  describe("Accordion", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          accordion: {
            "accordion": {
              color: "blue",
              colorContrast: "600",
              colorContent: "blue",
              colorContentContrast: "700"
            }
          }
        }}>
          <Accordion componentName="accordion">
            <Accordion.Item title="Is it accessible?">
              Yes. It adheres to the WAI-ARAI design pattern.
            </Accordion.Item>
            <Accordion.Item title="Is it unstyled?">
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </Accordion.Item>
            <Accordion.Item title="Can it be animated?">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </Accordion.Item>
          </Accordion>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("block overflow-hidden w-64 bg-blue-600 border border-solid border-gray-200 rounded-md")
    })
  })

  describe("Alert Dialog", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          alertDialog: {
            "alert": {
              color: "gray",
              colorContrast: "200"
            }
          }
        }}>
          <AlertDialog componentName="alert" visible>
            <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
            <Text fontSize="sm" color="gray" colorContrast="500">
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </Text>
          </AlertDialog>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div[role=alertdialog]")?.querySelector("div")).toHaveClass("bg-gray-200 px-4 py-3")
    })
  })

  describe("Avatar Dialog", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          avatar: {
            "avatar": {
              bgColor: "emerald",
              bgColorContrast: "500",
              textColor: "white"
            }
          }
        }}>
          <Avatar componentName="avatar"
          alt="Avatar for user ABC"
          bgColor="yellow" bgColorContrast="200" textColor="yellow" textColorContrast="500"
          text="YP" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("inline-flex overflow-hidden w-12 h-12 justify-center items-center align-middle bg-emerald-500 rounded-full select-none")
    })
  })

  describe("Badge Dialog", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          badge: {
            "badge": {
              color: "amber",
              colorContrast: "200"
            }
          }
        }}>
          <Badge componentName="badge" count={5}>
            <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
          </Badge>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("sup")).toHaveClass("absolute -top-1.5 -right-1 z-auto overflow-hidden w-6 h-6 flex justify-center items-center bg-amber-200 rounded-full text-white text-sm font-semibold leading-tight")
    })
  })

  describe("Blockquote", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          blockquote: {
            "bc": {
              width: "80",
              bgColor: "emerald",
              bgColorContrast: "600",
              border: false,
              shadow: "none",
              color: "white"
            }
          }
        }}>
          <Blockquote componentName="bc" cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein">
            I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
          </Blockquote>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("figure")).toHaveClass("w-80 bg-emerald-600 rounded-md shadow-none mx-3 my-3")
    })
  })

  describe("Box", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          box: {
            "box-emerald": {
              color: "emerald",
              colorContrast: "400",
              rounded: "lg"
            }
          }
        }}>
          <Box componentName="box-emerald" width="36" height="16" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-36 h-16 bg-emerald-400 border border-solid border-gray-200 rounded-lg px-5 py-5")
    })
  })

  describe("Breadcrumb", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          breadcrumb: {
            "breadcrumb": {
              activeColor: "purple",
              activeColorContrast: "600"
            }
          }
        }}>
          <Breadcrumb componentName="breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelectorAll("li")[2]).toHaveClass("flex flex-row items-center text-purple-600 text-sm")
    })
  })

  describe("Button", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          button: {
            "button": {
              color: "cyan",
              colorContrast: "500",
              colorHover: "cyan",
              colorHoverContrast: "700"
            }
          }
        }}>
          <Button componentName="button">Basic Button</Button>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-cyan-500 hover:bg-cyan-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-cyan-700 text-white text-sm font-normal")
    })
  })

  describe("ButtonGroup", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          buttonGroup: {
            "button": {
              color: "cyan",
              colorContrast: "500",
              colorHover: "cyan",
              colorHoverContrast: "700"
            }
          }
        }}>
          <div className="flex items-center justify-center">
            <ButtonGroup componentName="button">
              <ButtonGroup.Item icon="menu" />
              <ButtonGroup.Item icon="menu-alt-2" />
              <ButtonGroup.Item icon="menu-alt-3" />
            </ButtonGroup>
          </div>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-cyan-500 hover:bg-cyan-700 transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-cyan-700 text-white text-sm font-normal")
    })
  })

  describe("ButtonDropdown", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          buttonDropdown: {
            "button": {
              color: "cyan",
              colorContrast: "500",
              colorHover: "cyan",
              colorHoverContrast: "700",
              dropdownBgHoverColor: "cyan",
              dropdownBgHoverColorContrast: "500"
            }
          }
        }}>
          <div className="flex items-center justify-center">
            <ButtonDropdown componentName="button" dropdownIconHeight="4">
              Options
              <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
              <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
              <ButtonDropdown.Item disabled icon="shield-check">New Private Window</ButtonDropdown.Item>
              <ButtonDropdown.Item>
                Favorites
                <ButtonDropdownHorizontal>
                  <ButtonDropdown.Item>New Tab</ButtonDropdown.Item>
                  <ButtonDropdown.Item>New Window</ButtonDropdown.Item>
                  <ButtonDropdown.Item>Download</ButtonDropdown.Item>
                </ButtonDropdownHorizontal>
              </ButtonDropdown.Item>
              <ButtonDropdown.Item icon="cloud-download">Download</ButtonDropdown.Item>
            </ButtonDropdown>
          </div>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-cyan-500 hover:bg-cyan-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-cyan-700 text-white text-sm font-normal")
    })

    it("should have classname", () => {
      const elm = rendered.container.querySelector("button")
      if (elm !== undefined && elm !== null) userEvent.click(elm)

      expect(rendered.container.querySelector("div[role=menuitem]")).toHaveClass("flex justify-between items-center hover:bg-cyan-500 rounded-md px-3 py-0.5 mb-1 select-none focus:outline-none focus:bg-cyan-500 focus:text-white dark:focus:text-white text-black hover:text-white text-sm")
    })
  })

  describe("Card", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          card: {
            "card": {
              color: "emerald",
              colorContrast: "500",
              border: false
            }
          }
        }}>
          <Card componentName="card"
          cover="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" coverAlt="Unsplash photo by Norbert Levajsics"
          title={(
            <React.Fragment>
              <Text fontSize="xs" color="white">Case Study</Text>
              <Text fontSize="base" fontWeight="semibold" color="white">Improve your customer experience</Text>
            </React.Fragment>
          )}
          description={(
            <Text fontSize="sm" textAlign="justify" color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          )} px="3" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative inline-block overflow-hidden w-72 bg-emerald-500 rounded-md break-words")
    })
  })

  describe("Dialog", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          dialog: {
            "dialog": {
              color: "emerald",
              colorContrast: "500",
              border: false
            }
          }
        }}>
          <Dialog componentName="dialog" visible>
            <Text color="white" fontSize="2xl" fontWeight="semibold" mb="2">Show Basic Dialog</Text>
            <Text color="white" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Dialog>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelectorAll("div[role=dialog]>div")[1]).toHaveClass("bg-emerald-500 px-4 py-3")
    })
  })

  describe("Flexbox", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          flexbox: {
            "flex": {
              grow: true
            }
          }
        }}>
          <Flexbox componentName="flex" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("flex grow")
    })
  })

  describe("Grid", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          grid: {
            "grid": {
              gap: "6"
            }
          }
        }}>
          <Grid componentName="grid">
            <Grid.Column width="4/5" className="bg-purple-500 rounded-lg">
              <p className="text-white text-center text-2xl font-bold">4/5</p>
            </Grid.Column>
            <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
              <p className="text-white text-center text-2xl font-bold">Auto</p>
            </Grid.Column>
            <Grid.Column width="auto" className="bg-gray-200 rounded-lg">
              <p className="text-white text-center text-2xl font-bold">Auto</p>
            </Grid.Column>
          </Grid>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("flex gap-6 flex-col lg:flex-row")
    })
  })

  describe("Header", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          header: {
            "h1": {
              color: "emerald",
              colorContrast: "700"
            }
          }
        }}>
          <Header componentName="h1" as="h1">Header 1</Header>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("h1")).toHaveClass("text-emerald-700 text-8xl font-semibold normal-case")
    })
  })

  describe("Icon", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          icon: {
            "icon": {
              color: "emerald",
              colorContrast: "500",
              height: "5"
            }
          }
        }}>
          <Icon componentName="icon" icon="academic-cap" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("svg")).toHaveClass("h-5 text-emerald-500")
    })
  })

  describe("Image", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          image: {
            "image": {
              width: "full"
            }
          }
        }}>
          <Image componentName="image" alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("img")).toHaveClass("w-full")
    })
  })

  describe("Input", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          input: {
            "input": {
              color: "gray",
              colorContrast: "400",
              border: false,
              rounded: "md"
            }
          }
        }}>
          <Input componentName="input" name="tester" placeholder="Write text here..." />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-400 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Input Number", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          input: {
            "number": {
              color: "gray",
              colorContrast: "400",
              border: false,
              rounded: "md"
            }
          }
        }}>
          <Input.Number componentName="number" name="tester" placeholder="Place a number here" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-400 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Input Phone", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputPhone: {
            "phone": {
              color: "gray",
              colorContrast: "400",
              border: false,
              rounded: "md"
            }
          }
        }}>
          <Input.Phone componentName="phone" name="tester" placeholder="Phone number" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-400 rounded-md px-3 py-1 pl-8 pr-4 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Input Pin", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputPin: {
            "pin": {
              color: "gray",
              colorContrast: "400",
              border: false,
              rounded: "md"
            }
          }
        }}>
          <Input.Pin componentName="pin" name="tester" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-10 bg-gray-400 rounded-md px-3 py-1 text-gray-700 text-sm text-center")
    })
  })

  describe("Input Radio", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputRadio: {
            "radio": {
              color: "emerald",
              colorContrast: "700"
            }
          }
        }}>
          <Input.Radio componentName="radio" value={1} name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("float-left cursor-pointer text-emerald-700")
    })
  })

  describe("Input Checkbox", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputCheckbox: {
            "checkbox": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
          <Input.Checkbox componentName="checkbox" name="tester" label={(<Text span fontSize="sm">Default checkbox</Text>)} />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("float-left cursor-pointer text-emerald-600")
    })
  })

  describe("Input Date", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputDate: {
            "date": {
              color: "gray",
              colorContrast: "400",
              border: false
            }
          }
        }}>
          <Input.Date componentName="date" name="tester" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-400 rounded-md px-3 py-1 pl-8 pr-4 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Input File", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputFile: {
            "file": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
           <Input.File componentName="file" name="tester" accept="*" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("bg-emerald-600 rounded-md mr-4 px-3 py-1 text-white text-sm text-center select-none")
    })
  })

  describe("Input Select", () => {
    const data = [{
      key: "apple",
      value: "apple",
      text: "Apple"
    }, {
      key: "orange",
      value: "orange",
      text: "Orange"
    }, {
      key: "mango",
      value: "mango",
      text: "Mango"
    }]

    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputSelect: {
            "select": {
              color: "gray",
              colorContrast: "400",
              border: false
            }
          }
        }}>
          <Input.Select componentName="select" name="tester" data={data} placeholder="Choose fruit" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("relative block w-max bg-gray-400 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 cursor-pointer focus:outline-none")
    })
  })

  describe("Input Credit Card", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          inputCreditCard: {
            "cc": {
              color: "gray",
              colorContrast: "400",
              border: false
            }
          }
        }}>
          <Input.CreditCard componentName="cc" name="tester" placeholder="Card Number" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-56 bg-gray-400 rounded-md px-3 py-1 pr-8 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("List", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          list: {
            "list": {
              type: "decimal",
              textColor: "emerald",
              textColorContrast: "600"
            }
          }
        }}>
          <List componentName="list">
            <List.Item>Apples</List.Item>
            <List.Item>Pears</List.Item>
            <List.Item>Oranges</List.Item>
          </List>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("li")).toHaveClass("text-emerald-600 text-sm justify-center items-center align-middle")
    })
  })

  describe("ListBox", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          listBox: {
            "listbox": {
              bgActiveColor: "emerald",
              bgActiveColorContrast: "600",
              textActiveColor: "white"
            }
          }
        }}>
          <ListBox componentName="listbox">
            <ListBox.Item active>
              <div className="flex justify-between">
                <h5>List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p>Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </ListBox.Item>
          </ListBox>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div[role=listitem]")).toHaveClass("relative z-10 block bg-emerald-600 px-4 py-3 text-white")
    })
  })

  describe("Loader", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          loader: {
            "loader": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
          <Loader componentName="loader" visible />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("absolute top-0 left-0 z-50 flex w-full h-full justify-center align-middle bg-emerald-600 opacity-75")
    })
  })

  describe("Link", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          link: {
            "link": {
              color: "emerald",
              colorContrast: "500",
              colorHover: "emerald",
              colorHoverContrast: "700"
            }
          }
        }}>
          <Link componentName="link" href="/">Tester Link</Link>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("a")).toHaveClass("text-emerald-500 hover:text-emerald-700 transition-colors duration-500 cursor-pointer")
    })
  })

  describe("Menu", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          menu: {
            "menu": {
              color: "emerald",
              colorContrast: "600",
              itemTextColor: "white"
            }
          }
        }}>
          <Menu componentName="menu"
          logo={(
            <a href="https://kodepanda.com">
              <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
            </a>
          )}>
            <Menu.Item href="#">Services</Menu.Item>
            <Menu.Item href="#">Portofolio</Menu.Item>
            <Menu.Item href="#">About</Menu.Item>
            <Menu.Item href="#">Blog</Menu.Item>
            <Menu.Item href="#">Career</Menu.Item>
            <Menu.Item href="#">Contact</Menu.Item>
          </Menu>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("relative bg-emerald-600 border border-solid border-gray-100")
    })
  })

  describe("MenuSidebar", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          menuSidebar: {
            "sidebar": {
              color: "emerald",
              colorContrast: "600",
              itemTextColor: "white"
            }
          }
        }}>
          <MenuSidebar componentName="sidebar"
          height="screen"
          logo={(
            <a href="https://kodepanda.com" className="w-full flex items-center justify-center px-3">
              <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
            </a>
          )}>
            <Menu.Item href="#">Home</Menu.Item>
            <Menu.Item href="#">Features</Menu.Item>
            <Menu.Item href="#">Pricing</Menu.Item>
            <Menu.Item href="#">About</Menu.Item>
          </MenuSidebar>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-64 h-screen flex flex-col bg-emerald-600 border border-solid border-gray-100 ")
    })
  })

  describe("MenuFooter", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          menuFooter: {
            "footer": {
              color: "emerald",
              colorContrast: "600",
              itemTextColor: "white"
            }
          }
        }}>
          <MenuFooter componentName="footer"
          px="16">
            <MenuFooter.Content width="72">
              <div className="flex flex-col space-y-3">
                <Image alt="logo kodepanda" src="https://kodepanda.com/assets/kodepanda-logo-black.svg" width="10" />
                <Text fontSize="sm" color="gray" colorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </div>
            </MenuFooter.Content>
            <Menu.Items title={(
              <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
            )}>
              <Menu.Item href="#">Home</Menu.Item>
              <Menu.Item href="#">Services</Menu.Item>
              <Menu.Item href="#">Features</Menu.Item>
              <Menu.Item href="#">Pricing</Menu.Item>
              <Menu.Item href="#">Blog</Menu.Item>
            </Menu.Items>
            <Menu.Items title={(
              <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Information</Text>
            )}>
              <Menu.Item href="#">About Us</Menu.Item>
              <Menu.Item href="#">Terms of Conditions</Menu.Item>
              <Menu.Item href="#">Documentation</Menu.Item>
              <Menu.Item href="#">Support Center</Menu.Item>
            </Menu.Items>
          </MenuFooter>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("relative w-full bg-emerald-600 border border-solid border-gray-100")
    })
  })

  describe("Message", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          message: {
            "message": {
              color: "emerald",
              colorContrast: "600",
            }
          }
        }}>
          <Message componentName="message">
            <p className="text-white text-sm">This is a message</p>
          </Message>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("overflow-hidden w-full  bg-emerald-600 border border-solid border-gray-300 rounded-md px-4 py-3")
    })
  })

  describe("Pagination", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          pagination: {
            "pagination": {
              colorHover: "emerald",
              colorHoverContrast: "600",
              textColorHover: "white",
              border: false
            }
          }
        }}>
          <Pagination componentName="pagination" total={100} />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelectorAll("li")[1]).toHaveClass("bg-emerald-600 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-emerald-600 text-gray-700 hover:text-white text-sm")
    })
  })

  describe("Popover", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          popover: {
            "popover": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
          <div className="w-screen h-screen flex items-center justify-center">
            <Popover componentName="popover"
            trigger={(
              <Button>Popover Button</Button>
            )}
            content={(
              <p className="text-sm text-white">Bottom popover</p>
            )} />
          </div>
        </Provider>
      )
    })

    it("should have classname", () => {
      const elm = rendered.container.querySelector("button")
      if (elm !== undefined && elm !== null) userEvent.click(elm)
      expect(rendered.container.querySelector("div[role=dialog]")).toHaveClass("overflow-hidden bg-emerald-600 border border-solid border-gray-200 rounded-md px-4 py-2")
    })
  })

  describe("Progress", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          progress: {
            "progress": {
              color: "emerald",
              colorContrast: "500"
            }
          }
        }}>
          <Progress componentName="progress" percentage={10} showPercentage />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveClass("overflow-hidden flex flex-col justify-center bg-emerald-500 text-center")
    })
  })

  describe("Rating", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          rating: {
            "rating": {
              color: "emerald",
              colorContrast: "500"
            }
          }
        }}>
          <Rating defaultValue={1} componentName="rating" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("svg")).toHaveClass("h-6 text-emerald-500")
    })
  })

  describe("Separator", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          separator: {
            "separator": {
              borderColor: "emerald",
              borderColorContrast: "600",
              borderWidth: "2"
            }
          }
        }}>
          <Separator componentName="separator"
          text={(
            <h2 className="font-bold text-lg">Title was Here</h2>
          )} />
        </Provider>
      )
    })

    it("should have style attribute", () => {
      expect(rendered.container.querySelector("div")).toHaveAttribute("style", "--border-bottom: 2px solid #059669;")
    })
  })

  describe("Skeleton", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          skeleton: {
            "skeleton": {
              color: "emerald",
              colorContrast: "200"
            }
          }
        }}>
          <Skeleton componentName="skeleton" width="72" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("inline-block w-72 h-2 bg-emerald-200 rounded-md")
    })
  })

  describe("Statistic", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          statistic: {
            "statistic": {
              titleColor: "emerald",
              titleColorContrast: "500"
            }
          }
        }}>
          <Statistic componentName="statistic" title="Active Users" value={1000} />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div>div>div")).toHaveClass("text-emerald-500 text-sm font-light")
    })
  })

  describe("Switch", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          switch: {
            "switch": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
          <Switch componentName="switch" />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div>div")).toHaveClass("w-6 h-6 bg-emerald-600 rounded-full transform translate-x-0 duration-300 ease-in-out")
    })
  })

  describe("Tabs", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          tabs: {
            "tabs": {
              borderActiveColor: "emerald",
              borderActiveColorContrast: "700"
            }
          }
        }}>
          <Tabs componentName="tabs">
            <Tabs.Item title={(<Text span fontSize="sm">Account</Text>)}>
              <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Make changes to your account here. Click save when you're done.</Text>

              <div className="mt-3">
                <Input fluid name="name" value="Yudha Pratama"
                label={(<Text span color="gray" colorContrast="600" fontSize="xs">Name</Text>)}
                borderColor="blue" borderColorContrast="500" mb="1.5" />
                <Input fluid name="username" value="@LordAur"
                label={(<Text span color="gray" colorContrast="600" fontSize="xs">Username</Text>)}
                borderColor="blue" borderColorContrast="500" />

                <div className="w-full flex justify-end mt-4">
                  <Button color="blue" colorContrast="500" textColor="white">Save changes</Button>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title={(<Text span fontSize="sm">Password</Text>)}>
              <Text color="gray" colorContrast="600" fontSize="xs" mt="2">Change your password here. After saving, you'll be logged out.</Text>

              <div className="mt-3">
                <Input fluid name="current_password" type="password"
                label={(<Text span color="gray" colorContrast="600" fontSize="xs">Current Password</Text>)}
                borderColor="blue" borderColorContrast="500" mb="1.5" />
                <Input fluid name="password" type="password"
                label={(<Text span color="gray" colorContrast="600" fontSize="xs">New Password</Text>)}
                borderColor="blue" borderColorContrast="500" mb="1.5" />
                <Input fluid name="confirm_password" type="password"
                label={(<Text span color="gray" colorContrast="600" fontSize="xs">Confirm Password</Text>)}
                borderColor="blue" borderColorContrast="500" />

                <div className="w-full flex justify-end mt-4">
                  <Button color="blue" colorContrast="500" textColor="white">Change password</Button>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("flex justify-center items-center border-b-2 border-solid border-emerald-700 px-3 py-3 select-none focus:bg-gray-100 focus:outline-none")
    })
  })

  describe("Table", () => {
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

    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          table: {
            "table": {
              colColor: "emerald",
              colColorContrast: "600",
              rowColor: "emerald",
              rowColorContrast: "700",
              textColor: "white"
            }
          }
        }}>
          <Table componentName="table" columns={columns} rows={rows}  />
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("th")).toHaveClass("bg-emerald-600 px-4 py-2 text-left")
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("td")).toHaveClass("bg-emerald-700 px-4 py-2")
    })
  })

  describe("Tags", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          tags: {
            "tag": {
              color: "emerald",
              colorContrast: "600",
              textColor: "white",
              border: false
            }
          }
        }}>
          <Tag componentName="tag">
            <Icon icon="mail-open" height="4" mr="1" />
            Mail
          </Tag>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("inline-flex items-center bg-emerald-600 rounded-md select-none text-white text-xs font-semibold leading-relaxed px-3 py-1")
    })
  })

  describe("Tooltip", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          tooltip: {
            "tooltip": {
              color: "emerald",
              colorContrast: "600"
            }
          }
        }}>
          <div className="w-screen h-screen flex items-center justify-center">
            <Tooltip componentName="tooltip"
            trigger={(
              <Button>Tooltip Button</Button>
            )}
            content={(
              <p className="text-sm text-white">Bottom tooltip</p>
            )} />
          </div>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("div[role=tooltip]")).toHaveClass("overflow-hidden bg-emerald-600 border border-solid border-gray-200 rounded-md px-4 py-2")
    })
  })

  describe("Text", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark={false} theme={{
          text: {
            "text": {
              color: "emerald",
              colorContrast: "600",
              fontWeight: "black"
            }
          }
        }}>
          <Text componentName="text">The quick brown fox jumps over the lazy dog.</Text>
        </Provider>
      )
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("p")).toHaveClass("text-emerald-600 text-base font-black")
    })
  })
})
