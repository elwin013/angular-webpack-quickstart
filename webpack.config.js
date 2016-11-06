'use strict';
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig() {
    var config = {};

    config.entry = {
        app: './src/app/app.module.js'
    };

    config.resolve = {
        modulesDirectories: ['node_modules', 'app']
    }

    config.output = {
        path: './dist/',
        filename: '[name].bundle.js'
    };

    config.devtool = 'source-map';

    config.devServer = {
        inline: true
    };

    config.module = {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    };

    config.plugins = [];

    config.plugins.push(
        new copyWebpackPlugin([{
            from: './src/public'
        }])
    );

    return config;
}();
