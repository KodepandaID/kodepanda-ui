import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Card } from "../src"
import { Button } from "../../button/src"
import { Text } from "../../typography/src"

describe("Standard Card component", () => {
  let rendered: RenderResult
  const img = "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

  beforeEach(() => {
    rendered = render(
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
  })

  it("should have div element with classname ", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative inline-block overflow-hidden w-72 bg-white rounded-md break-words")
  })

  it("should have div element wrapper with classname ", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("flex flex-col")
  })

  it("should have img element wrapper with classname ", () => {
    expect(rendered.container.querySelector("div>div>img")).toHaveClass("aspect-[3/1.464] object-cover w-full")
  })

  describe("Standard Card with customize aspect ratio component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have img element with classname ", () => {
      expect(rendered.container.querySelector("div>div>img")).toHaveClass("aspect-[1/1] object-cover w-full")
    })
  })

  describe("Standard Card with cover padding component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have img element inside wrapper with classname ", () => {
      expect(rendered.container.querySelector("div>div>div>img")).toHaveClass("aspect-[3/1.464] object-cover w-full")
    })
  })

  describe("Standard Card with cover position left component", () => {
    beforeEach(() => {
      rendered = render(
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
      )
    })

    it("should have div element wrapper with classname ", () => {
      expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("flex flex-row")
    })

    describe("Standard Card with cover position right component", () => {
      beforeEach(() => {
        rendered = render(
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
        )
      })

      it("should have div element wrapper with classname ", () => {
        expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("flex flex-row-reverse")
      })
    })
  })

  describe("Standard Card with footer component", () => {
    beforeEach(() => {
      rendered = render(
        <Card
        cover={img} coverAlt="Unsplash photo by Ralph Kelly"
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
    })

    it("should have button element ", () => {
      expect(rendered.container.querySelectorAll("button")).toHaveLength(1)
    })
  })

  describe("Standard Card responsive component", () => {
    beforeEach(() => {
      rendered = render(
        <Card
        width="full" lg={{width: "72"}}
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
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative inline-block overflow-hidden w-full lg:w-72 bg-white rounded-md break-words")
    })
  })

  describe("Standard Card background image component", () => {
    beforeEach(() => {
      rendered = render(
        <Card
        bgImg={img}
        description={(
          <Text fontSize="sm" textAlign="justify" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        )} px="3" />
      )
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass(`relative inline-block overflow-hidden w-72 bg-white rounded-md bg-cover bg-center break-words`)
    })
  })
})
