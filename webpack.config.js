const webpack = require('webpack');
const path = require("path");
const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    devtool: 'source-map',
    debug: true,

    entry: './dist/src/main.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },

    loaders: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            "Phaser": path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            "PIXI": path.join(phaserModulePath, 'build/custom/pixi.js'),
            "p2": path.join(phaserModulePath, 'build/custom/p2.js'),
        }),
        new CopyWebpackPlugin([
            { from: './assets', to: 'assets' }
        ])
    ]
};