var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server' , './es6/app/app.js'],
    resolve: {
        root: [__dirname, path.join(__dirname, 'es6/')],
        alias: {
            'scalejs.application': path.join(__dirname, 'es6/extensions/scalejs.application.js'),
            'scalejs.core': path.join(__dirname, 'es6/extensions/scalejs.core.js'),
            'scalejs.sandbox': path.join(__dirname, 'es6/extensions/scalejs.sandbox.js'),
            'scalejs.extensions': path.join(__dirname, 'es6/extensions/scalejs.extensions.js'),
            'scalejs.functional': path.join(__dirname, 'es6/extensions/scalejs.functional.js')
        }
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    publicPath: '/es6/',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: 'es2015',
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
