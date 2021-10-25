import React from "react";
import { Tabs } from "../src";
import { Icon } from "../../icon/src";

export default {
  title: 'Tabs',
  component: Tabs
};

export const basic = () => (
  <Tabs>
    <Tabs.Panel header="Tab 1">Tab 1 Content</Tabs.Panel>
    <Tabs.Panel header="Tab 2">Tab 2 Content</Tabs.Panel>
  </Tabs>
)

export const rounded = () => (
  <Tabs rounded="md">
    <Tabs.Panel header="Tab 1">Tab 1 Content</Tabs.Panel>
    <Tabs.Panel header="Tab 2">Tab 2 Content</Tabs.Panel>
  </Tabs>
)

export const customHeader = () => (
  <Tabs>
    <Tabs.Panel header={(
      <div className="flex flex-row items-center">
        <Icon icon="fire" mt={-0.5} mr={2} />
        <b>Tab 1</b>
      </div>
    )}>Tab 1 Content</Tabs.Panel>
     <Tabs.Panel header={(
      <div className="flex flex-row items-center">
        <Icon icon="fire" mt={-0.5} mr={2} />
        <b>Tab 2</b>
      </div>
    )}>Tab 2 Content</Tabs.Panel>
  </Tabs>
)

export const coloring = () => (
  <Tabs
    bgHeaderColor="red" bgHeaderColorContrast={500}
    bgHeaderColorActive="red" bgHeaderColorActiveContrast={700} 
    bgContentColor="red" bgContentColorContrast={700}
    borderColor="red" borderColorContrast={800}>
    <Tabs.Panel header="Tab 1" headerColor="white">
      <p className="text-white">Tab 1 Content</p>
    </Tabs.Panel>
    <Tabs.Panel header="Tab 2" headerColor="white">
      <p className="text-white">Tab 2 Content</p>
    </Tabs.Panel>
  </Tabs>
)

export const simple = () => (
  <Tabs simple>
    <Tabs.Panel header="Tab 1">Tab 1 Content</Tabs.Panel>
    <Tabs.Panel header="Tab 2">Tab 2 Content</Tabs.Panel>
  </Tabs>
)

export const bar = () => (
  <Tabs bar rounded="md"
    bgHeaderColor="gray" bgHeaderColorContrast={200}
    bgHeadeeColoActiver="blue" bgHeaderColorActiveContrast={700}
    headerColorActive="white"
  >
    <Tabs.Panel header="Tab 1">Tab 1 Content</Tabs.Panel>
    <Tabs.Panel header="Tab 2">Tab 2 Content</Tabs.Panel>
  </Tabs>
)
