var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');

module.exports = function () {
    var bundleStart = null;
    var compiler = webpack(webpackConfig);

    compiler.plugin('compile', function() {
        bundleStart = Date.now()
        console.log('building... ',bundleStart);
    });

    compiler.plugin('done', function () {
        console.log('building complete in ', Date.now() - bundleStart);
    });

    var bundler = new webpackDevServer(compiler, {
        publicPath: '/build/',
        hot: true,
        quiet: false,
        noInfo: false,
        stats: {
            colors: true
        }
    });

    bundler.listen(8081, 'localhost', function () {
        console.log('bundling project, please wait...');
    });
}