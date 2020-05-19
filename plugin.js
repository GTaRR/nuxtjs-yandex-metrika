export default (ctx, inject) => {
  let ready = false

  ctx.app.router.onReady(() => {
    // Mark when the router has completed the initial navigation.
    ready = true
  })

  function create() {
    window['yaCounter<%= options.id %>'] = new Ya.Metrika( <%= JSON.stringify(options) %> )

    ctx.app.router.afterEach((to, from) => {
      if (!ready) {
        // Don't record a duplicate hit for the initial navigation.
        return
      }
      window['yaCounter<%= options.id %>'].hit(to.fullPath, {
        referer: from.fullPath
        // TODO: pass title: <new page title>
        // This will need special handling because router.afterEach is called *before* DOM is updated.
      })
    })

    inject('metrika', window['yaCounter<%= options.id %>'])
  }

  if (process.env.NODE_ENV === 'production') {
    if (window.Ya && window.Ya.Metrika) {
      // Yandex.Metrika API is already available.
      create()
    } else {
      // Yandex.Metrika has not loaded yet, register a callback.
      (function (w, c) {
        (w[c] = w[c] || []).push(create)
      })(window, 'yandex_metrika_callbacks')
    }
  } else {
    // Debug warns for development mode
    console.warn('[nuxtjs-yandex-metrika] Tracking is disabled, because env option is not "production"')
    const metrikaFunctions = {
      addFileExtension() { console.log('[nuxtjs-yandex-metrika] addFileExtension:', arguments)},
      extLink() { console.log('[nuxtjs-yandex-metrika] extLink:', arguments) },
      file() { console.log('[nuxtjs-yandex-metrika] file:', arguments) },
      getClientID() { console.log('[nuxtjs-yandex-metrika] getClientID:', arguments) },
      hit() { console.log('[nuxtjs-yandex-metrika] hit:', arguments) },
      notBounce() { console.log('[nuxtjs-yandex-metrika] notBounce:', arguments) },
      params() { console.log('[nuxtjs-yandex-metrika] params:', arguments) },
      reachGoal() { console.log('[nuxtjs-yandex-metrika] reachGoal:', arguments) },
      replacePhones() { console.log('[nuxtjs-yandex-metrika] replacePhones:', arguments) },
      setUserID() { console.log('[nuxtjs-yandex-metrika] setUserID:', arguments) },
      userParams() { console.log('[nuxtjs-yandex-metrika] userParams:', arguments) }
    }

    ctx.$metrika = metrikaFunctions
    inject('metrika', metrikaFunctions)
  }
}
