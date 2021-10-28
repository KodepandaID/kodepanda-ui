<p align="center">
  <a href="https://ui.kodepanda.com">
    <img width="200" src="https://kodepanda.com/assets/kodepanda-blue.png">
  </a>
</p>

<h1 align="center">Zenbu-UI</h1>

<div align="center">
  Zenbu-UI is a React UI components with easy customization without the CSS knowledge required.
</div>

## Features
- Styling only with props: Zenbu-UI contains a lot of components and it's easy to customize the component only with props like color, border, etc...
- Flexible design: Zenbu-UI does not have a specific design you can use your design system and customize the component just by passing props.

## Introduction
Zenbu-UI is a free open-source React UI component that provides ready-to-use components without the CSS knowledge required, just used tags property. Zenbu-UI built with tailwindcss utility CSS framework thanks for tailwind.

## Installing Zenbu-UI
```sh
$ yarn add @zenbu-ui/react

# or

$ npm i @zenbu-ui/react
```

## Usage
To start using Zenbu-UI is easy, please follow these steps:

1. You can access all the components with import "@zenbu-ui/react"
```jsx
import { Button } "@zenbu-ui/react";
import "@zenbu-ui/themes/styles.css"; // required to import

function App() {
  return(
    <Button />
  )
}
```

2. Or you can import the specific component like these:
```jsx
import { Button } "@zenbu-ui/button";
import "@zenbu-ui/themes/styles.css"; // required to import

function App() {
  return(
    <Button />
  )
}
```

If you are using Next.JS, you should import "@zenbu-ui/themes/styles.css" on your _app.js files.

## Just information
Website Documentation is still in progress ...

## License
MIT © [Yudha Pratama Wicaksana](https://github.com/lordaur)
