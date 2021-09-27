import React from "react";

import Input from "../input";
import Image from "../../image/image";
import Grid from "../../grid/grid";
import "../../../style.css"; 

export default {
  title: 'Example/Input Radio',
  component: Input.Radio
}

export const basic = () => (
  <Input.Radio.Group defaultValue="B">
    <Input.Radio name="alphabet" value="A">A</Input.Radio>
    <Input.Radio name="alphabet" value="B" color="red">B</Input.Radio>
    <Input.Radio name="alphabet" value="C" color="green">C</Input.Radio>
  </Input.Radio.Group>
)

export const noInline = () => (
  <Input.Radio.Group inline={false} defaultValue="B">
    <Input.Radio name="alphabet" value="A">A</Input.Radio>
    <Input.Radio name="alphabet" value="B" color="red">B</Input.Radio>
    <Input.Radio name="alphabet" value="C" color="green">C</Input.Radio>
  </Input.Radio.Group>
)

export const toggle = () => (
  <Input.Radio.Toggle name="alphabet" defaultValue="Apple" rounded="md">
    <Input.Radio value="Apple">Apple</Input.Radio>
    <Input.Radio value="Pear">Pear</Input.Radio>
    <Input.Radio value="Orange">Orange</Input.Radio>
  </Input.Radio.Toggle>
)

export const box = () => (
  <Input.Radio.Box name="alphabet" defaultValue="Chrome" rounded="md">
    <Input.Radio value="Chrome">
      <Grid>
        <Grid.Row>
          <Grid.Column width="1/5">
            <Image src="https://kodepanda.com/assets/chrome.svg" fluid circle />
          </Grid.Column>
          <Grid.Column width="3/4">
            <h2>Chrome</h2>
            <p className="text-xs text-gray-400">Free web browser from Google</p>
          </Grid.Column>
          <Grid.Column width="1/5" className="flex flex-wrap content-center text-gray-500">Free</Grid.Column>
        </Grid.Row>
      </Grid>
    </Input.Radio>
    <Input.Radio value="Firefox">
      <Grid>
        <Grid.Row>
          <Grid.Column width="1/5">
            <Image src="https://kodepanda.com/assets/mozilla.svg" fluid circle />
          </Grid.Column>
          <Grid.Column width="3/4">
            <h2>Firefox</h2>
            <p className="text-xs text-gray-400">Free web browser from Mozilla</p>
          </Grid.Column>
          <Grid.Column width="1/5" className="flex flex-wrap content-center text-gray-500">Free</Grid.Column>
        </Grid.Row>
      </Grid>
    </Input.Radio>
    <Input.Radio value="Safari">
      <Grid>
        <Grid.Row>
          <Grid.Column width="1/5">
            <Image src="https://kodepanda.com/assets/safari.svg" fluid circle />
          </Grid.Column>
          <Grid.Column width="3/4">
            <h2>Firefox</h2>
            <p className="text-xs text-gray-400">Free web browser from Apple</p>
          </Grid.Column>
          <Grid.Column width="1/5" className="flex flex-wrap content-center text-gray-500">Free</Grid.Column>
        </Grid.Row>
      </Grid>
    </Input.Radio>
  </Input.Radio.Box>
)