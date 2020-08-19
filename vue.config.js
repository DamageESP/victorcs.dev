module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/_variables.scss";',
      },
    },
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/about', '/projects', '/404'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
}
