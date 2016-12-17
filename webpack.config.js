var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var phaserModulePath = path.join(__dirname, '/node_modules/phaser/');


module.exports = {

    devtool: 'source-map',
    debug: true,

    entry: './dist/src/main.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            "Phaser": path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            "PIXI": path.join(phaserModulePath, 'build/custom/pixi.js'),
            "p2": path.join(phaserModulePath, 'build/custom/p2.js'),
        })
    ]
};