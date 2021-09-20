import React from "react";

import List from "../list";
import "../../../style.css";

export default {
  title: 'Example/List',
  component: List
}

export const basic = () => (
  <>
    <List mb={10}>
      <List.Item>Lorem ipsum dolor sit amet, consectetur adipisicing elit</List.Item>
      <List.Item>Assumenda, quia temporibus eveniet a libero incidunt suscipit</List.Item>
      <List.Item>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</List.Item>
    </List>
    <List type="disc" mb={10}>
      <List.Item>Lorem ipsum dolor sit amet, consectetur adipisicing elit</List.Item>
      <List.Item>Assumenda, quia temporibus eveniet a libero incidunt suscipit</List.Item>
      <List.Item>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</List.Item>
    </List>
    <List type="decimal" mb={10}>
      <List.Item>Lorem ipsum dolor sit amet, consectetur adipisicing elit</List.Item>
      <List.Item>Assumenda, quia temporibus eveniet a libero incidunt suscipit</List.Item>
      <List.Item>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</List.Item>
    </List>
    <List type="roman" mb={10}>
      <List.Item>Lorem ipsum dolor sit amet, consectetur adipisicing elit</List.Item>
      <List.Item>Assumenda, quia temporibus eveniet a libero incidunt suscipit</List.Item>
      <List.Item>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</List.Item>
    </List>
  </>
)

export const nested = () => (
  <>
    <List type="decimal" mb={10}>
      <List.Item>Getting Started</List.Item>
      <List.Item>Introduction</List.Item>
      <List.Item>
        Languages
        <List.List ordered>
          <List.Item>HTML</List.Item>
          <List.Item>CSS</List.Item>
        </List.List>
      </List.Item>
    </List>
  </>
)

export const nestedIcon = () => (
  <>
    <List mb={10}>
      <List.Item icon="folder" header="src" sub="Source files for project" noBorder />
      <List.Item>
        <List.List>
          <List.Item icon="folder" header="site" sub="Your site's theme" noBorder />
          <List.Item icon="folder" header="themes" sub="Packaged theme files" noBorder />
        </List.List>
      </List.Item>
    </List>
  </>
)

export const icon = () => (
  <>
    <List mb={10}>
      <List.Item icon="at-symbol">hello@kodepanda.com</List.Item>
      <List.Item icon="link"><a href="https://kodepanda.com">kodepanda.com</a></List.Item>
    </List>
  </>
)

export const headerWithSub = () => (
  <>
    <List mb={10}>
      <List.Item icon="at-symbol" header="hello@kodepanda.com" sub="You can send a message to our email" />
      <List.Item icon="at-symbol" header="hello@kodepanda.com" sub="You can send a message to our email" />
    </List>
  </>
)