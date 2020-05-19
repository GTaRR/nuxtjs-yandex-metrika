# Yandex Metrika

> Add Yandex Metrika to your nuxt.js application.

This plugins automatically sends first page and route change events to yandex metrika.

**Note:** yandex metrika is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup

- Add `@naumstory/nuxtjs-yandex-metrika` dependency using yarn or npm to your project
- Add `@naumstory/nuxtjs-yandex-metrika` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    [
      '@naumstory/nuxtjs-yandex-metrika',
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
