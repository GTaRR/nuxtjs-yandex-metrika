export default ({ app: { router } }, inject) => {
  let ready = false

  router.onReady(() => {
    // Mark when the router has completed the initial navigation.
    ready = true
  })

  function create() {
    if (process.env.NODE_ENV === 'production') {
      window['yaCounter<%= options.id %>'] = new Ya.Metrika( <%= JSON.stringify(options) %>
    )
      router.afterEach((to, from) => {
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
    } else {
      console.warn('[vue-yandex-metrika] Tracking is disabled, because env option is not "production"')
      inject('metrika', {
        addFileExtension() { console.log('[vue-yandex-metrika] addFileExtension:', arguments)},
        extLink() { console.log('[vue-yandex-metrika] extLink:', arguments) },
        file() { console.log('[vue-yandex-metrika] file:', arguments) },
        getClientID() { console.log('[vue-yandex-metrika] getClientID:', arguments) },
        hit() { console.log('[vue-yandex-metrika] hit:', arguments) },
        notBounce() { console.log('[vue-yandex-metrika] notBounce:', arguments) },
        params() { console.log('[vue-yandex-metrika] params:', arguments) },
        reachGoal() { console.log('[vue-yandex-metrika] reachGoal:', arguments) },
        replacePhones() { console.log('[vue-yandex-metrika] replacePhones:', arguments) },
        setUserID() { console.log('[vue-yandex-metrika] setUserID:', arguments) },
        userParams() { console.log('[vue-yandex-metrika] userParams:', arguments) }
      })
    }
  }

  if (window.Ya && window.Ya.Metrika) {
    // Yandex.Metrika API is already available.
    create()
  } else {
    // Yandex.Metrika has not loaded yet, register a callback.
    (function (w, c) {
      (w[c] = w[c] || []).push(create)
    })(window, 'yandex_metrika_callbacks')
  }
}
