var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8081',
        path.resolve(__dirname, 'public/src/app/app.js')
    ],
    resolve: {
        root: [__dirname, path.join(__dirname, 'public/src/')],
        alias: {
            // scalejs

            'scalejs.application': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.application.js'),
            'scalejs.core': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.core.js'),
            'scalejs.sandbox': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.sandbox.js'),

            // extensions
            'scalejs.extensions': path.join(__dirname, 'public/src/extensions/scalejs.extensions.js')

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
                    path.join(__dirname, 'public/src')
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
