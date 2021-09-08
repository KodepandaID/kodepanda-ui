import React from "react";

import { default as Box } from "../box";

export default {
  title: 'Example/Box',
  component: Box,
}

export const basic = () => (
  <>
    <Box color="rose" textColor="white">
      Box Basic
    </Box>
  </>
)

export const rounded = () => (
  <>
    <Box color="rose" textColor="white" rounded="md">
      Box Basic
    </Box>
  </>
)

export const roundedPosition = () => (
  <>
    <Box color="rose" colorContrast={50} textColor="black" rounded="md" roundedPosition="top" mb={0}>
      Rounded Top
    </Box>
    <Box color="gray" colorContrast={600} textColor="white" rounded="md" roundedPosition="bottom" mt={0}>
      Rounded Bottom
    </Box>
  </>
)

export const border = () => (
  <>
    <Box color="gray" colorContrast={50} textColor="black" rounded="md" border="dashed" borderColor="gray">
      Box Basic
    </Box>
  </>
)