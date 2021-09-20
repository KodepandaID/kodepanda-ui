import React from "react";

import Avatar from "../avatar";

export default {
  title: 'Example/Avatar',
  component: Avatar,
}

export const basic = () => (
  <Avatar />
)

export const src = () => (
  <Avatar size="lg" src="https://kodepanda.com/kurito/person.png" />
)

export const size = () => (
  <div className="flex flex-row">
    <Avatar size={"xs"} mr={2}/>
    <Avatar size={"sm"} mr={2}/>
    <Avatar size={"md"} mr={2}/>
    <Avatar size={"lg"} mr={2}/>
    <Avatar size={"xl"} mr={2}/>
    <Avatar size={52} mr={2}/>
  </div>
)

export const rounded = () => (
  <div className="flex flex-row">
    <Avatar rounded="xs" size="lg" color="yellow" colorContrast={400} mr={2}/>
    <Avatar rounded="sm" size="lg" color="yellow" colorContrast={400} mr={2}/>
    <Avatar rounded="md" size="lg" color="yellow" colorContrast={400} mr={2}/>
    <Avatar rounded="lg" size="lg" color="yellow" colorContrast={400} mr={2}/>
  </div>
)

export const circle = () => (
  <Avatar circle={true} />
)

export const text = () => (
  <Avatar circle={true}><p className="text-white">U</p></Avatar>
)

export const groups = () => (
  <Avatar.Group>
    <Avatar size="sm" circle={true} />
    <Avatar size="sm" circle={true} color="yellow" colorContrast={500} />
    <Avatar size="sm" circle={true} color="blue" colorContrast={500}><p className="text-white">U</p></Avatar>
  </Avatar.Group>
)