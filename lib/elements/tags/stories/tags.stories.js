import React from "react";

import { default as Tags } from "../tags";

export default {
  title: 'Example/Tags',
  component: Tags,
}
  
export const basic = () => (
  <Tags>Tags 1</Tags>
)

export const coloring = () => (
  <div className="flex flex-row">
    <Tags border={false} mr={2}>Blue</Tags>
    <Tags border={false} color={"red"} colorContrast={700} mr={2}>Red</Tags>
    <Tags border={false} color={"indigo"} colorContrast={700} mr={2}>Indigo</Tags>
    <Tags border={false} color={"green"} colorContrast={500}>Green</Tags>
  </div>
)

export const rounded = () => (
  <div className="flex flex-row">
    <Tags rounded="xs" mr={2}>Tags Rounded</Tags>
    <Tags rounded="sm" mr={2}>Tags Rounded</Tags>
    <Tags rounded="md" mr={2}>Tags Rounded</Tags>
    <Tags rounded="lg">Tags Rounded</Tags>
  </div>
)

export const closable = () => (
  <div className="flex flex-row">
    <Tags closable={true} mr={2} onClose={() => console.log("Tags 1 closed")}>Tags 1</Tags>
    <Tags closable={true} mr={2} onClose={() => console.log("Tags 2 closed")}>Tags 2</Tags>
    <Tags closable={true} onClose={() => console.log("Tags 3 closed")}>Tags 3</Tags>
  </div>
)

export const icon = () => (
  <div className="flex flex-row">
    <Tags icon={"phone-missed-call"} mr={2}>Missed Call</Tags>
    <Tags icon={"mail"} mr={2}>Mail</Tags>
  </div>
)

export const checkable = () => (
  <div className="flex flex-row">
    <p className="flex items-center mr-2 text-xs">Categories: </p>
    <Tags checkable={true} mr={2} onChange={(status) => {
      console.log(`Movies: ${status}`)
    }}>Movies</Tags>
    <Tags checkable={true} mr={2} onChange={(status) => {
      console.log(`Books: ${status}`)
    }}>Books</Tags>
    <Tags checkable={true} onChange={(status) => {
      console.log(`Music: ${status}`)
    }}>Music</Tags>
  </div>
)