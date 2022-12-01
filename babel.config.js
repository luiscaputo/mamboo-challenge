module.exports = {
    presets: [
      [
        '@babel/preset-env', {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['babel-plugin-transform-typescript-metadata'],
      [
        'module-resolver', {
          alias: {
            '~': "./src",
          }
        }
      ],
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties"]
    ],
    ignore: [
      "__tests__",
    ]
  }