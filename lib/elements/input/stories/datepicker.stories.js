import React from "react";

import Input from "../input";

export default {
  title: 'Example/Input Datepicker',
  component: Input.Datepicker
}

export const basic = () => (
  <Input.Datepicker onChange={(unix, format) => {
    console.log(unix)
    console.log(format)
  }} />
)

export const format = () => (
  <Input.Datepicker format="MMMM DD, YYYY" />
)

export const formatLanguage = () => (
  <Input.Datepicker lang="id" format="DD MMMM YYYY" />
)

export const calendarColor = () => (
  <Input.Datepicker calendarColor="green" calendarColorContrast={200} />
)

export const calendarButtonColor = () => (
  <Input.Datepicker 
  calendarActionButtonHoverColor="green" calendarActionButtonHoverColorContrast={200}
  calendarActionButtonTextColor="green" calendarActionButtonTextColorContrast={500}
  dateActiveColor="green" dateActiveColorContrast={200}
  dateHoverColor="green" dateHoverColorContrast={500}
  calendarColor="green" calendarColorContrast={100} />
)

export const calendarShadow = () => (
  <Input.Datepicker shadowCalendar="md" roundedCalendar="md" borderCalendar={false} />
)

export const time = () => (
  <Input.Datepicker time format="DD/MM/YYYY HH:mm" />
)