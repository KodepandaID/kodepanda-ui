import React from "react";
import { Grid } from "../index";
import { Box } from "../../box";

export default {
  title: 'Grid',
  component: Grid,
};

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

export const responsive = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={12} widthSM="full">
        <Box textAlign="center" color="emerald" textColor="white" rounded="md">Responsive SM to Full</Box>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
