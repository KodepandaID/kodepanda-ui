<p align="center">
  <a href="https://zenbu-ui.com">
    <img width="200" src="https://kodepanda.com/assets/kodepanda-blue.svg">
  </a>
</p>

<h1 align="center">Zenbu UI</h1>

<div align="center">
  Don't waste your time to build UI component.
</div>

## Features
- Unstyled, you have the freedom to use any design system in the world. The basic style of Zenbu UI is a plain design.
- Utility props, you can customize the design with the use of utility props not with CSS.
- Theming, you can customize the specific component with context.
- Accessible, following the WAI-ARIA guidelines specifications and support keyboard navigation, and screen reader.
- Semantic, following the Semantic HTML guideline specifications.

## Introduction
The main mission of Zenbu UI is a provide the easiest way to build a website. Sometimes dealing with CSS waste your time, and it's not simple to use CSS for some people. Zenbu UI provides you the convenience of applying your design system without CSS, just using the props.

## Installing Zenbu-UI
```sh
$ yarn add @zenbu-ui/react

# or

$ npm i @zenbu-ui/react
```

## Usage

1. Zenbu UI using tailwind as utility css. First, you must copy file ```tailwind.config.js``` to your project folder then generate the CSS with the command:
```bash
npx tailwindcss -o your-project-folder -c ./tailwind.config.js --minify
```

2. Wrap your component with Provider and import the css:
```typescript
import 'your-project-folder/style.css'

<Provider dark={false}>
  <YourComponent />
</Provider>
```

## Documentation
For more information please read the [documentation](https://zenbu-ui.com).

## Support Zenbu UI
If this project can help you and you like it you can be my sponsor. You can sponsor me for $10 or more. We'll appreciate some support. Thank you to all our supporters! 🙏 [Contribute](https://opencollective.com/zenbu-ui).

## License
MIT © [Yudha Pratama Wicaksana](https://twitter.com/lordaur)
