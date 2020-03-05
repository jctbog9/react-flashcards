var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: "",
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/javascript/testHelper.js'
    ],
    preprocessors: {
      'spec/javascript/testHelper.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'eval-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.json$/,
            include: [
              /node_modules/,
              path.resolve(__dirname, '..')
            ],
            loader: 'json-loader'
          }
        ]
      },
      resolve: {
        modules: ['app/javascript', 'node_modules']
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'spec',
      'coverage'
    ],
    specReporter: {
      maxLogLines: 1,
      suppressPassed: true
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      type: 'html'
    },
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
      'react/addons': true
    }
  })
}