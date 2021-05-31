import React from "react";

import { default as Box } from "../box";
import "../../../style.css"; 

export default {
  title: 'Example/Box',
  component: Box,
}

export const basic = () => (
  <>
    <Box bgColor="rose" textColor="white">
      Box Basic
    </Box>
  </>
)

export const rounded = () => (
  <>
    <Box bgColor="rose" textColor="white" rounded="md">
      Box Basic
    </Box>
  </>
)

export const roundedPosition = () => (
  <>
    <Box bgColor="rose" contrast={50} textColor="black" rounded="md" roundedPosition="top" mb={0}>
      Rounded Top
    </Box>
    <Box bgColor="gray" contrast={600} textColor="white" rounded="md" roundedPosition="bottom" mt={0}>
      Rounded Bottom
    </Box>
  </>
)

export const border = () => (
  <>
    <Box bgColor="gray" contrast={50} textColor="black" rounded="md" border="dashed" borderColor="gray">
      Box Basic
    </Box>
  </>
)