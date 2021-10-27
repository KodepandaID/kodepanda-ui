import React, { useState } from "react";
import { Loader } from "../index";
import { Button } from "../../button";

export default {
  title: 'Loader',
  component: Loader,
};

export const basic = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Loader visible={open} />
      <Button onClick={() => setOpen(true)}>Show Loader</Button>
    </div>
  )
}

export const color = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className="w-full">
      <Loader visible={open} color="red" />
      <Button onClick={() => setOpen(true)}>Show Loader</Button>
    </div>
  )
}

export const size = () => (
  <>
    <div className="w-full h-24 relative">
      <Loader visible={true} loadingSize="xs" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
    <div className="w-full h-36 relative mt-5">
      <Loader visible={true} loadingSize="sm" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
    <div className="w-full h-36 relative mt-5">
      <Loader visible={true} loadingSize="md" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
    <div className="w-full h-44 relative mt-5">
      <Loader visible={true} loadingSize="lg" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
    <div className="w-full h-44 relative mt-5">
      <Loader visible={true} loadingSize="xl" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
    <div className="w-full h-48 relative mt-5">
      <Loader visible={true} loadingSize="2xl" noFullscreen />
      <div className="text-sm text-black p-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    </div>
  </>
)

export const loadingText = () => (
  <>
    <Loader visible={true} loadingText="Preparing Files..." />
  </>
)
