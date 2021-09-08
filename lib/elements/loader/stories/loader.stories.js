import React from "react";

import { default as Loader } from "../loader";
import "../../../style.css";

export default {
  title: 'Example/Loader',
  component: Loader,
}

export const basic = () => (
  <>
    <Loader />
  </>
)

export const color = () => (
  <>
    <Loader color="red" />
  </>
)

export const size = () => (
  <>
    <div className="w-full h-24">
      <Loader loadingSize="xs" noFullscreen />
    </div>
    <div className="w-full h-36 mt-5">
      <Loader loadingSize="sm" noFullscreen />
    </div>
    <div className="w-full h-36 mt-5">
      <Loader loadingSize="md" noFullscreen />
    </div>
    <div className="w-full h-44 mt-5">
      <Loader loadingSize="lg" noFullscreen />
    </div>
    <div className="w-full h-44 mt-5">
      <Loader loadingSize="xl" noFullscreen />
    </div>
    <div className="w-full h-48 mt-5">
      <Loader loadingSize="2xl" noFullscreen />
    </div>
  </>
)

export const loadingText = () => (
  <>
    <Loader loadingText="Preparing Files..." />
  </>
)