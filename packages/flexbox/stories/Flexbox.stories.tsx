import * as React from 'react'
import { Flexbox } from "../src"

export default { title: 'Components/Flexbox' }

export const Initial = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flexInitial justify="center" alignItems="center" width="24" sm={{width: "64"}}>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flexInitial justify="center" alignItems="center" width="32" sm={{width: "14"}}>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Flex1 = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flex1 justify="center" alignItems="center" width="64">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flex1 justify="center" alignItems="center" width="32">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Auto = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flexAuto justify="center" alignItems="center" width="64">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flexAuto justify="center" alignItems="center" width="32">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const None = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flexNone justify="center" alignItems="center" width="64">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flex1 justify="center" alignItems="center" width="32">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Grow = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flexNone grow justify="center" alignItems="center" height="14">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Ungrow = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone grow justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox flexNone unGrow justify="center" alignItems="center" height="14">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flexNone grow justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Shrink = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox shrink justify="center" alignItems="center" width="64">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flexNone justify="center" alignItems="center" width="14" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Unshrink = () => {
  return(
    <Flexbox spaceX="3">
      <Flexbox flex1 justify="center" alignItems="center" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">01</div>
      </Flexbox>
      <Flexbox unShrink justify="center" alignItems="center" width="32">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full">02</div>
      </Flexbox>
      <Flexbox flex1 justify="center" alignItems="center" height="14">
        <div className="bg-blue-800 text-blue-600 px-4 py-4 rounded-lg text-center w-full">03</div>
      </Flexbox>
    </Flexbox>
  )
}

export const Row = () => {
  return(
    <Flexbox direction="row" spaceX="3">
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
    </Flexbox>
  )
}

export const RowReverse = () => {
  return(
    <Flexbox direction="row-reverse" spaceX="3" spaceXReverse>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
    </Flexbox>
  )
}

export const Col = () => {
  return(
    <Flexbox direction="col" spaceY="3">
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">01</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">02</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">03</div>
    </Flexbox>
  )
}

export const ColReverse = () => {
  return(
    <Flexbox direction="col-reverse" spaceY="3" spaceYReverse>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">01</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">02</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">03</div>
    </Flexbox>
  )
}

export const Wrap = () => {
  return(
    <div style={{width: "40%"}}>
      <Flexbox wrap="wrap" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">03</div>
      </Flexbox>
    </div>
  )
}

export const NoWrap = () => {
  return(
    <div style={{width: "40%"}}>
      <Flexbox wrap="nowrap" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">03</div>
      </Flexbox>
    </div>
  )
}

export const WrapReverse = () => {
  return(
    <div style={{width: "40%"}}>
      <Flexbox wrap="wrap-reverse" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-64">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyStart = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="start" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyCenter = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="center" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyEnd = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="end" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyBetween = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="between" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyArround = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="around" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const JustifyEvenly = () => {
  return(
    <div className='w-full'>
      <Flexbox justify="evenly" gap="3">
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">01</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">02</div>
        <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-14">03</div>
      </Flexbox>
    </div>
  )
}

export const Responsive = () => {
  return(
    <Flexbox direction="col" gap="2" lg={{direction: "row"}}>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full lg:w-14">01</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full lg:w-14">02</div>
      <div className="bg-blue-600 text-white px-4 py-4 rounded-lg text-center w-full lg:w-14">03</div>
    </Flexbox>
  )
}
