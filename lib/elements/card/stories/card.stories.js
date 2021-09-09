import React from "react";

import { default as Avatar } from "../../avatar/avatar";
import { default as Card } from "../card";
import { default as Button } from "../../button/button";
import { default as Grid } from "../../grid/grid"; 
import { default as Statistic } from "../../statistic/statistic";
import { default as Tags } from "../../tags/tags"; 

export default {
  title: 'Example/Card',
  component: Card,
}

export const basic = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
    />
  </div>
)

export const noRounded = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card
      rounded={false}
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
    />
  </div>
)

export const size = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card size="sm"
      description={(
        <Statistic
        title={(
          <div className="flex flex-row">
            <div className="text-gray-300 text-sm mr-1">Total Revenue</div>
            <Tags color="green" colorContrast={100} textColor="green" border={false} rounded="md" py={0.5} px={1}>+ 12.5%</Tags>
          </div>
        )} value={100000} preffix={(<span className="text-bold text-2xl">Rp</span>)} />
      )}
    />
  </div>
)

export const coloring = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card size="sm" color="blue" colorContrast={600}
      description={(
        <Statistic
        textColor="white"
        title={(
          <div className="flex flex-row">
            <div className="text-white text-sm mr-1">Total Revenue</div>
            <Tags color="green" colorContrast={100} textColor="green" border={false} rounded="md" py={0.5} px={1}>+ 12.5%</Tags>
          </div>
        )} value={100000} preffix={(<span className="text-bold text-2xl">Rp</span>)} />
      )}
    />
  </div>
)

export const backgroundImage = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card size="sm"
      bgImage="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      description={(
        <div className="h-full flex flex-wrap content-center">
          <Button size="sm" fluid>View Details</Button>
        </div>
      )}
    />
  </div>
)

export const backgroundImageOverlay = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card size="sm"
      bgImage="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      bgImageOverlay
      description={(
        <div className="h-full flex flex-wrap justify-center content-center">
          <b className="text-white text-lg text-center">Strawberry Cake</b>
          <p className="text-gray-200 text-sm text-center">Three layer strawberry dessert is not only beautiful looking, but also delicious!</p>
          <Button size="sm" fluid mt={1}>View Details</Button>
        </div>
      )}
    />
  </div>
)

export const coverPosition = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      coverPosition="left"
      mb={5}
    />

    <Card
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      coverPosition="right"
      mb={5}
    />

    <Card
      title={(
        <div className="flex flex-row items-center">
          <span className="flex flex-row items-center text-black text-sm"><Avatar size="sm" circle={true} color="blue" colorContrast={500} mr={2}><p className="text-white">YP</p></Avatar> Yudha Pratama</span>
          <span className="text-sm text-gray-500 absolute right-4">14h</span>
        </div>
      )}
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      coverPosition="center"
      mb={5}
    />
  </div>
)

export const customElement = () => (
  <div className="bg-gray-300 w-full h-full py-5 px-5">
    <Card
      title={(
        <div className="flex flex-row relative mt-1">
          <span className="font-bold text-md mb-3">Strawberry Cake</span>
          <span className="flex flex-row absolute -top-0.5 right-1">
            <Tags circle color="green" colorContrast={500} icon="wifi-solid" border={false} mr={1} />
            <Tags circle color="red" colorContrast={500} icon="fire-solid" border={false} mr={1} />
            <Tags circle color="yellow" colorContrast={500} icon="sun-solid" border={false} />
          </span>
        </div>
      )}
      description={(
        <>
          <div className="text-gray-400 text-sm">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</div>
          <div className="flex flex-row justify-start mt-3">
            <Tags colorContrast={400} border={false} rounded="sm" mr={2}>Dessert</Tags>
            <Tags colorContrast={400} border={false} rounded="sm">Sweet</Tags>
          </div>
        </>
      )}
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Grid>
          <Grid.Row>
            <Grid.Column width="1/2">
              <div className="flex flex-row justify-start items-center">
                <span className="font-bold text-xl">Rp</span>
                <span className="font-bold text-lg">50.000</span>
              </div>
            </Grid.Column>
            <Grid.Column width="1/2">
              <Button size="sm" fluid>ORDER</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    />
  </div>
)