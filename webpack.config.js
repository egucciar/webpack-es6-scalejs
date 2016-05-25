var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server' , './es6/app/app.js'],
    resolve: {
        root: [__dirname, path.join(__dirname, 'es6/')],
        alias: {
            // scalejs
            'scalejs.application': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.application.js'),
            'scalejs.core': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.core.js'),
            'scalejs.sandbox': path.join(__dirname, 'node_modules/scalejs/dist/scalejs.sandbox.js'),
            
            // extensions
            'scalejs.extensions': path.join(__dirname, 'es6/extensions/scalejs.extensions.js')
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
                test: [
                    path.join(__dirname, 'es6'),
                    path.join(__dirname, 'node_modules/scalejs')
                ],
                exclude: /\.html?$/,
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
