import React from "react";

import Image from "../image";
import "../../../style.css";

export default {
  title: 'Example/Image',
  component: Image,
}

export const basic = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" alt="image basic" />
  </>
)

export const size = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" size="xs" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" size="sm" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" size="md" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" size="lg" mb={5} />
  </>
)

export const rounded = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" rounded="none" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" rounded="sm" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" rounded="md" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" rounded="lg" mb={5} />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" rounded="full" mb={5} />
  </>
)

export const circle = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" circle/>
  </>
)

export const disabled = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" disabled/>
  </>
)

export const fluid = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" fluid/>
  </>
)

export const bordered = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" borderWidth={4} borderColor="red" />
  </>
)

export const responsive = () => (
  <>
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" size="full" />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" screenSM="xs" />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" screenMD="sm" />
    <Image src="https://tailwindcss.com/img/placeholder-amber.svg" screenLG="md" />
  </>
)

export const failImage = () => (
  <>
    <Image src="https://kodepanda.com/none.png" />
  </>
)