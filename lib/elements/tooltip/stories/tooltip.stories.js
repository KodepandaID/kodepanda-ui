import React from "react";

import { default as Tooltip } from "../tooltip";

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
}

export const basic = () => (
  <div className="mt-5">
    <Tooltip title="Tooltip top">
      Move your cursor here...
    </Tooltip>
  </div>
)
