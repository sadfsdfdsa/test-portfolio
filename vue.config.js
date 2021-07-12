module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  // TODO enable this for publishing to github pages
  // ! but disable if to netlify
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/test-portfolio/'
  // : '/'
}
