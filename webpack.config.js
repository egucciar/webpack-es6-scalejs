var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'public/es6/app/app.js')
    ],
    resolve: {
        root: [__dirname, path.join(__dirname, 'public/es6/')],
        alias: {
            // scalejs
            'scalejs.application': path.join(__dirname, 'node_modules/scalejs/src/scalejs.application.js'),
            'scalejs.core': path.join(__dirname, 'node_modules/scalejs/src/scalejs.core.js'),
            'scalejs.sandbox': path.join(__dirname, 'node_modules/scalejs/src/scalejs.sandbox.js'),

            // extensions
            'scalejs.extensions': path.join(__dirname, 'public/es6/extensions/scalejs.extensions.js'),
            'scalejs.functional': path.join(__dirname, 'public/es6/extensions/scalejs.functional.js')
        }
    },
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: [
                    path.join(__dirname, 'public/es6'),
                    path.join(__dirname, 'node_modules/scalejs')
                ],
                exclude: /\.html?$/,
                query: {
                  presets: 'es2015',
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('main.css')
    ],
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
