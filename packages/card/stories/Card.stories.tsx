import * as React from 'react'
import { Card } from "../src"
import { Text } from "../../typography/src"
import { Button } from "../../button/src"

export default { title: 'Components/Card' }

const img = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
const imgHouse = "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"

export const Basic = () => {
  return(
    <Card
    cover={img} coverAlt="Unsplash photo by Norbert Levajsics"
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )} px="3" />
  )
}

export const CoverAspectRatio = () => {
  return(
    <Card
    cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverAspectRatio="1/1"
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )} px="3" />
  )
}

export const CoverPadding = () => {
  return(
    <Card
    cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverPadding
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )} px="3" />
  )
}

export const CoverPosition = () => {
  return(
    <React.Fragment>
      <div className="flex space-x-5 mb-4">
        <Card
        cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverWidth="40" coverPosition="left"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
            <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )} px="3" />

        <Card
        cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverWidth="40" coverPosition="right"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
            <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )} px="3" />
      </div>

      <div className="flex space-x-5">
        <Card
        width="72"
        cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverPosition="center"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
            <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )} px="3" />

        <Card
        width="72"
        cover={img} coverAlt="Unsplash photo by Norbert Levajsics" coverPosition="center" coverPadding coverRounded="md"
        title={(
          <React.Fragment>
            <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
            <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
          </React.Fragment>
        )}
        description={(
          <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )} px="3" />
      </div>
    </React.Fragment>
  )
}

export const Footer = () => {
  return(
    <Card
    cover={imgHouse} coverAlt="Unsplash photo by Ralph Kelly"
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="600">New House</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Medium Blue House, Indonesia</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )}
    footer={(
      <Button fluid icon="calendar" rounded="none" color="purple" colorContrast="600" fontWeight="semibold" mt="3">Request to meet the owner</Button>
    )}
    px="3" />
  )
}

export const Responsive = () => {
  return(
    <Card
    md={{width: "full"}}
    cover={img} coverAlt="Unsplash photo by Norbert Levajsics"
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )} px="3" />
  )
}


export const Shadow = () => {
  return(
    <Card
    cover={img} coverAlt="Unsplash photo by Norbert Levajsics"
    title={(
      <React.Fragment>
        <Text fontSize="xs" color="purple" colorContrast="400">Case Study</Text>
        <Text fontSize="base" fontWeight="semibold" color="black">Improve your customer experience</Text>
      </React.Fragment>
    )}
    description={(
      <Text fontSize="sm" textAlign="justify" color="gray" colorContrast="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )}
    shadow="md"
    px="3" />
  )
}

export const BackgroundImage = () => {
  return(
    <Card
    bgImg={img}
    description={(
      <Text fontSize="sm" textAlign="justify" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )} px="3" />
  )
}
