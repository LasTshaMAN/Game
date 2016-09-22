var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {

    devtool: 'source-map',
    debug: true,

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'raw'},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /pixi.js/, loader: "script" },
            { test: /p2.js/, loader: "script" },
            { test: /phaser-split.js/, loader: "script" }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.css'],
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("app.bundle.css")
    ]

};