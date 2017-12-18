const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/tracker.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'tracker.js'
    },
    plugins: [
        new UglifyJsPlugin({
          uglifyOptions: {
            ie8: false,
            ecma: 5,
            mangle: true,
            output: {
              comments: false,
              beautify: false,
            },
            compress: true,
            warnings: true
          }
        })
      ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: [
                            require('babel-plugin-transform-object-rest-spread')
                        ]
                    }
                }
            }
        ]
    }
}