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

export const coloring = () => (
  <div className="mt-5">
    <Tooltip title="Tooltip top" color="red">
      Move your cursor here...
    </Tooltip>
  </div>
)


export const rounded = () => (
  <div className="mt-5">
    <Tooltip title="Tooltip top" rounded="md">
      Move your cursor here...
    </Tooltip>
  </div>
)

export const position = () => (
  <div className="flex flex-row">
    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip top right" position="top-right">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip top" position="top">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip top left" position="top-left">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip bottom left" position="bottom-left">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip bottom" position="bottom">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip bottom right" position="bottom-right">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip left" position="left">
        Move your cursor here...
      </Tooltip>
    </div>

    <div className="mt-5 mr-5">
      <Tooltip title="Tooltip right" position="right">
        Move your cursor here...
      </Tooltip>
    </div>
  </div>
)