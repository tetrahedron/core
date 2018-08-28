<p align="center">
  <img src='https://i.imgur.com/5fgTysV.jpg' alt='Tetrahedron Logo'/>
</p>

<p align="center">
  <a href="https://travis-ci.org/tetrahedron/core">
    <img src="https://travis-ci.org/tetrahedron/core.svg?branch=master" alt="Travis CI build status">
  </a>
  <a href="https://spectrum.chat/tetrahedron">
    <img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum">
  </a>
</p>

# Tetrahedron Core

Tetrahedron Core is a collection of components that are frequently used by the sub-packages in Tetrahedron UI.

## Quick Jump

1. [Installation](#installation)
2. [Documentation](#documentation)
   1. [`Stylable`](#stylable)

## Installation

#### Using yarn

```bash
yarn add @tetrahedron/core
```

#### Using npm

```bash
npm install @tetrahedron/core
```

## Documentation

### `Stylable`

`Stylable` is a function that returns a styled-components component that has all of the most commonly set CSS properties exposed as react properties.

#### Props

- `padding`: `string` - structure: `20px`
- `margin`: `string` - structure: `20px`
- `width`: `string` - structure: `100px`
- `height`: `string` - structure: `100px`
- `visibility`: `string` - `visible|hidden|collapse|initial|inherit`
- `display`: `string` - `inline|block|contents|flex|grid|inline-block|none|initial|inherit|inline-flex|inline-grid|inline-table|list-item|run-in|table|table-caption|table-column-group|table-header-group|table-footer-group|table-row-group|table-cell|table-column|table-row`
- `opacity`: `float` - `0`-`1.0`
- `background`: `string` - structure: `color`
- `border`: `string` - structure: `width style color`
- `hidden`: `boolean`

#### Usage

<details><summary><strong>Basic Usage</strong></summary><p>

This is not something that you will use as a react component, but rather as a complement to styled-components. It's a function that accepts a single string argument (tagname). Most every html tag is supported, you can find a list of html tags [here](https://www.w3schools.com/tags/).

Here's an example of basic usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CustomComponent = Stylable("div");

const App = () => (
  <CustomComponent padding="20px" background="palevioletred" color="white">
    This is my custom styled component!
  </CustomComponent>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

</p></details>

<details><summary><strong>With styled-components</strong></summary><p>

You can also combine the `Stylable` function with `styled` to set an initial style via styled-components, while still allowing style changes inline. This is especially useful if you want to create a reusable component that will allow tweaking on the fly.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CustomComponent = styled(Stylable("div"))`
  font-size: 30px;
  font-family: sans-serif;
`;

const App = () => (
  <CustomComponent padding="20px" background="palevioletred" color="white">
    This is my custom styled component!
  </CustomComponent>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

</p></details>

## Credits

Tetrahedron Core is a project by [Garet McKinley](https://github.com/garetmckinley)

Want to help? Join our [Spectrum.chat community](https://spectrum.chat/tetrahedron) to get started!

## License

MIT
