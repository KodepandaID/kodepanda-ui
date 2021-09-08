import React from "react";

import { default as Grid } from "../grid";
import { default as Box } from "../../box/box";
import "../../../style.css";

export default {
  title: 'Example/Grid',
  component: Grid,
}

export const basic = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width="full">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md" my={0}>full</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="4/5">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">4/5</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="3/4">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">3/4</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2/3">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">2/3</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="3/5">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">3/5</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="1/2">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">1/2</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="2/5">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">2/5</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="1/3">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">1/3</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="1/4">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">1/4</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">1/5</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
      <Grid.Column width="1/5">
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">Auto</Box>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export const ColumnSystem = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={1}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">2</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">3</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">4</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={5}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">5</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={6}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">6</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={7}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">7</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={8}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">8</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={9}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">9</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={10}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">10</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={11}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">11</Box>
      </Grid.Column>
      <Grid.Column width={1}>
        <Box textAlign="center" color="gray" contrast={200} rounded="md" textColor="gray">1</Box>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={12}>
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">12</Box>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export const responsive = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={12} screenSM="1/2" screenMD="1/2" screenLG="1/2">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">Responsive SM to Full</Box>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)