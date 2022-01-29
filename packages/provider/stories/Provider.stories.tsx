import * as React from 'react'
import { Provider } from "../src"
import { Accordion } from "../../accordion/src"
import { AlertDialog } from "../../alert-dialog/src"
import { Avatar } from "../../avatar/src"
import { Badge } from "../../badge/src"
import { Box } from "../../box/src"
import { Breadcrumb } from "../../breadcrumb/src"
import { Button, ButtonGroup, ButtonDropdown, ButtonDropdownHorizontal } from "../../button/src"
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
import { useNotification, Notification, NotificationProvider } from "../../notification/src"
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

export default { title: 'Components/Provider' }

export const ProviderAccordion = () => {
  return(
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
}

export const ProviderAlertDialog = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Provider dark={false} theme={{
      alertDialog: {
        "alert": {
          color: "gray",
          colorContrast: "200"
        }
      }
    }}>
      <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Alert</Button>
      <AlertDialog componentName="alert"
      visible={visible}
      okText="Yes, delete account" cancelText="Cancel"
      onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
        <Text fontSize="sm" color="gray" colorContrast="500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </Text>
      </AlertDialog>
    </React.Fragment>
    </Provider>
  )
}

export const ProviderAvatar = () => {
  return(
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
}

export const ProviderBadge = () => {
  return(
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
}

export const ProviderBox = () => {
  return(
    <Provider dark={false} theme={{
      box: {
        "box-emerald": {
          color: "emerald",
          colorContrast: "400",
          rounded: "lg"
        },
        "box-pink": {
          color: "pink",
          colorContrast: "200"
        }
      }
    }}>
      <Box componentName="box-emerald" width="36" height="16" />
      <Box componentName="box-pink" width="36" height="16" />
    </Provider>
  )
}

export const ProviderBreadcrumb = () => {
  return(
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
}

export const ProviderButton = () => {
  return(
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
}

export const ProviderButtonDropdown = () => {
  return(
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
}

export const ProviderButtonGroup = () => {
  return(
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
}

export const ProviderCard = () => {
  return(
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
}

export const ProviderDialog = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <Provider dark={false} theme={{
      dialog: {
        "dialog": {
          color: "emerald",
          colorContrast: "500",
          border: false
        }
      }
    }}>
      <React.Fragment>
        <Button onClick={() => setVisible(true)}>Show Dialog</Button>

        <Dialog componentName="dialog" visible={visible} onClose={() => setVisible(false)}>
          <Text color="white" fontSize="2xl" fontWeight="semibold" mb="2">Show Basic Dialog</Text>
          <Text color="white" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Dialog>
      </React.Fragment>
    </Provider>
  )
}

export const ProviderFlexbox = () => {
  return(
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
}

export const ProviderGrid = () => {
  return(
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
}

export const ProviderIcon = () => {
  return(
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
}

export const ProviderImage = () => {
  return(
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
}

export const ProviderRating = () => {
  return(
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
}

export const ProviderSeparator = () => {
  return(
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
}

export const ProviderSkeleton = () => {
  return(
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
}

export const ProviderStatistic = () => {
  return(
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
}

export const ProviderText = () => {
  return(
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
}

export const ProviderLink = () => {
  return(
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
}

export const ProviderHeader = () => {
  return(
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
}

export const ProviderBlockquote = () => {
  return(
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
}

export const ProviderTags = () => {
  return(
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
}

export const ProviderSwitch = () => {
  return(
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
}

export const ProviderProgress = () => {
  const [value, setValue] = React.useState(0)
  return(
    <Provider dark={false} theme={{
      progress: {
        "progress": {
          color: "emerald",
          colorContrast: "500",
          completeColor: "cyan",
          completeColorContrast: "500"
        }
      }
    }}>
      <React.Fragment>
        <button
        className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
        onClick={() => {
          if (value < 100) setValue(value+10)
        }}>+</button>
        <Progress componentName="progress" percentage={value} showPercentage />
      </React.Fragment>
    </Provider>
  )
}

export const ProviderLoader = () => {
  return(
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
}

export const ProviderMessage = () => {
  return(
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
}

export const ProviderTooltip = () => {
  return(
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
}

export const ProviderPopover = () => {
  return(
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
}

const AddNotification = () => {
  const notify = useNotification()
  return(
    <Provider dark={false} theme={{
      notification: {
        "notif": {
          color: "emerald",
          colorContrast: "600"
        }
      }
    }}>
      <button
        className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
        onClick={() => {
          const id = Date.now().toString()
          notify.addCustom(id, {
            custom: (
              <Notification componentName="notif" id={id} closable
              color="green" colorContrast="500" borderColor="green" borderColorContrast="600"
              description={(
                <p className="text-sm text-white">Hello, world! This is a notification message.</p>
              )} />
            )
          })
        }}>+</button>
    </Provider>
  )
}

export const ProviderNotification = () => {
  return(
    <NotificationProvider>
      <AddNotification />
    </NotificationProvider>
  )
}

export const ProviderList = () => {
  return(
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
}

export const ProviderListBox = () => {
  return(
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
        <ListBox.Item>
          <div className="flex justify-between">
            <h5>List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p>Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </ListBox.Item>
        <ListBox.Item>
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
}

export const ProviderPagination = () => {
  return(
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
}

export const ProviderTabs = () => {
  return(
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
}

export const ProviderTable = () => {
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

  return(
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
}

export const ProviderMenu = () => {
  return(
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
}

export const ProviderMenuSidebar = () => {
  return(
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
}

export const ProviderMenuFooter = () => {
  return(
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
}

export const ProviderInput = () => {
  return(
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
}

export const ProviderInputNumber = () => {
  return(
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
}

export const ProviderInputPhone = () => {
  return(
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
}

export const ProviderInputPin = () => {
  return(
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
}

export const ProviderInputRadio = () => {
  return(
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
}

export const ProviderTextarea = () => {
  return(
    <Provider dark={false} theme={{
      inputTextarea: {
        "textarea": {
          color: "gray",
          colorContrast: "400",
          border: false,
          rounded: "md"
        }
      }
    }}>
      <Input.Textarea componentName="textarea" name="tester" placeholder="Write something here..." />
    </Provider>
  )
}

export const ProviderInputCheckbox = () => {
  return(
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
}

export const ProviderInputDate = () => {
  return(
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
}

export const ProviderInputFile = () => {
  return(
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
}

export const ProviderInputSelect = () => {
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

  return(
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
}

export const ProviderInputCreditCard = () => {
  return(
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
}
