# Yandex Metrika
[![npm](https://img.shields.io/npm/dt/@gtarr/nuxtjs-yandex-metrika.svg?style=flat-square)](https://www.npmjs.com/package/@gtarr/nuxtjs-yandex-metrika)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@gtarr/nuxtjs-yandex-metrika/latest.svg?style=flat-square)](https://www.npmjs.com/package/@gtarr/nuxtjs-yandex-metrika)

## Update

This version is update for @nuxtjs/yandex-metrika and @naumstory/nuxtjs-yandex-metrika modules.

Added functionality for use $metrika global.

Example for push goals in component:

```js
this.$metrika.reachGoal('demo')
```

Or also in middleware:

```js
export default function({ route, $metrika }) {
  if(process.client && route.path === '/demo/') {
    $metrika.reachGoal('demo')
  }
}
```

> Add Yandex Metrika to your nuxt.js application.

This plugins automatically sends first page and route change events to yandex metrika.

**Note:** yandex metrika is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup

- Add `@gtarr/nuxtjs-yandex-metrika` dependency using yarn or npm to your project
- Add `@gtarr/nuxtjs-yandex-metrika` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    [
      '@gtarr/nuxtjs-yandex-metrika',
      {
        id: 'XXXXXX',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ]
  ];
}
```

## Options

For more information:

- [Documetation for Ya.Metrika](https://yandex.com/support/metrica/code/counter-initialize.xml)
- [hit method](https://yandex.com/support/metrica/objects/hit.xml)

### `id`

- Required

### `webvisor`

### `clickmap`

### `trackLinks`

### `accurateTrackBounce`
