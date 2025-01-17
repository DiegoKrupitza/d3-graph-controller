<h1 align="center">d3-graph-controller</h1>

<p align="center">
  <img src="docs/.vuepress/public/logo.svg" alt="Logo" width="128px" height="128px">
</p>

<p align="center">
  <a href="https://graph-controller.yeger.eu">
    Documentation
  </a>
</p>

<p align="center">
    A TypeScript library for visualizing and simulating directed, interactive graphs.
</p>

<p align="center">
  <a href="https://github.com/DerYeger/d3-graph-controller/actions/workflows/ci.yml">
    <img alt="CI" src="https://img.shields.io/github/workflow/status/DerYeger/d3-graph-controller/CI?label=ci&logo=github&color=#4DC71F">
  </a>
  <a href="https://www.npmjs.com/package/d3-graph-controller">
    <img alt="NPM" src="https://img.shields.io/npm/v/d3-graph-controller?logo=npm">
  </a>
  <a href="https://codecov.io/gh/DerYeger/d3-graph-controller">
    <img alt="Coverage" src="https://codecov.io/gh/DerYeger/d3-graph-controller/branch/master/graph/badge.svg?token=p35W6u2noe">
  </a>
  <a href="https://lgtm.com/projects/g/DerYeger/d3-graph-controller">
    <img alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/github/DerYeger/d3-graph-controller?logo=lgtm">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT" src="https://img.shields.io/npm/l/d3-graph-controller?color=%234DC71F">
  </a>
  <a href="https://bundlephobia.com/package/d3-graph-controller">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/d3-graph-controller">
  </a>
</p>

## Features

- 👉 Fully **interactive** dragging, panning, zooming and more. Supports **touch input** and uses multi-touch.
- 📱 **Responsive** graphs that fit any screen thanks to automatic or manual resizing.
- 🔧 Extensive **configuration** enables customizable behavior and visuals.

## Installation

```bash
# yarn
$ yarn add d3-graph-controller

# npm
$ npm install d3-graph-controller
```

## Usage

```typescript
import {
  defineGraph,
  defineGraphConfig,
  defineLink,
  defineNodeWithDefaults,
  Graph,
  GraphController,
} from 'd3-graph-controller'
import 'd3-graph-controller/default.css'

const a = defineNodeWithDefaults({
  type: 'node',
  id: 'a',
  label: {
    color: 'black',
    fontSize: '1rem',
    text: 'A',
  },
})

const b = defineNodeWithDefaults({
  type: 'node',
  id: 'b',
  label: {
    color: 'black',
    fontSize: '1rem',
    text: 'B',
  },
})

const link = defineLink({
  source: a,
  target: b,
  color: 'gray',
  label: false,
})

const graph = defineGraph({
  nodes: [a, b],
  links: [link],
})

// A reference to the native host element, e.g., an HTMLDivElement. This is framework agnostic.
// You may use Angular's @ViewChild, Vue's $ref, plain JavaScript or something else entirely.
const container = document.getElementById('graph') as HTMLDivElement

const controller = new GraphController(container, graph, defineGraphConfig())

// Integrate the controller into the lifecylce of your application
controller.shutdown()
```

### Styling

In addition to the default style, that is available by adding `import 'd3-graph-controller/default.css'` to your project, it is possible to configure font-size and color of graph elements.
Both properties of nodes and links accept valid CSS expressions.
This allows you to use dynamic colors with CSS variables:

```css
:root {
  --color-primary: 'red';
}
```

```ts
import { defineNodeWithDefaults } from 'd3-graph-controller'

defineNodeWithDefaults({
  type: 'node',
  id: 'a',
  label: {
    color: 'black',
    fontSize: '2rem',
    text: 'A',
  },
  color: 'var(--color-primary)',
})
```

For customization of the default theme, the custom CSS property `--color-node-stroke` can be used.

## Development

```bash
# install dependencies
$ yarn install

# build for production
$ yarn build

# build in watch mode
$ yarn dev

# lint project files
$ yarn lint

# serve demo
$ yarn demo:dev

# serve docs
$ yarn docs:dev
```

## License

[MIT](./LICENSE) - Copyright &copy; Jan Müller
