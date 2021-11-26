import * as React from "react"
import { List, ListBox } from "../src"

export default { title: 'Components/List' }

export const Basic = () => {
  return(
    <List>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  )
}

export const Horizontal = () => {
  return(
    <List horizontal>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  )
}

export const Bulleted = () => {
  return(
    <List type="disc">
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  )
}

export const Decimal = () => {
  return(
    <List type="decimal">
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  )
}

export const Nested = () => {
  return(
    <List type="decimal">
      <List.Item>Getting Started</List.Item>
      <List.Item>Introduction</List.Item>
      <List.Item>
        Languages
        <List.Nested>
          <List.Item>HTML</List.Item>
          <List.Item>Typescript</List.Item>
          <List.Item>CSS</List.Item>
        </List.Nested>
      </List.Item>
      <List.Item>Review</List.Item>
    </List>
  )
}

export const Icon = () => {
  return(
    <List>
      <List.Item icon="user-group">Kodepanda Kreasi Media</List.Item>
      <List.Item icon="location-marker">Medan, Indonesia</List.Item>
      <List.Item icon="mail-open">yudha@kodepanda.com</List.Item>
      <List.Item icon="link" link="https://kodepanda.com">kodepanda.com</List.Item>
    </List>
  )
}

export const Separator = () => {
  return(
    <List separator horizontal>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  )
}

export const Header = () => {
  return(
    <List separator space="2">
      <List.Item
      iconSVG={(<img alt="Github Logo" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg" width="30" />)}
      header="KodepandaID/zenbu-ui" subHeader="Updated 5 mins ago" />
      <List.Item
      iconSVG={(<img alt="Github Logo" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg" width="30" />)}
      header="KodepandaID/zenbu-ui" subHeader="Updated 15 mins ago" />
      <List.Item
      iconSVG={(<img alt="Github Logo" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg" width="30" />)}
      header="KodepandaID/zenbu-ui" subHeader="Updated 25 mins ago" />
    </List>
  )
}

export const Box = () => {
  return(
    <ListBox
    bgActiveColor="blue" bgActiveColorContrast="500"
    textActiveColor="white">
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
  )
}

export const BoxHorizontal = () => {
  return(
    <ListBox
    horizontal
    bgActiveColor="blue" bgActiveColorContrast="500"
    textActiveColor="white">
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
  )
}

export const BoxSpace = () => {
  return(
    <ListBox
    space="3"
    bgActiveColor="blue" bgActiveColorContrast="500"
    textActiveColor="white">
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
  )
}

export const BoxSpaceHorizontal = () => {
  return(
    <ListBox
    horizontal space="3"
    bgActiveColor="blue" bgActiveColorContrast="500"
    textActiveColor="white">
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
  )
}
