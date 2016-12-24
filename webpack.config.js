const webpack = require('webpack');
const path = require("path");
const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    devtool: 'source-map',
    debug: true,

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },

    resolve: {
        extensions: ['', '.ts']
    },

    loaders: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        },
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
        new CopyWebpackPlugin([
            { from: './assets', to: 'assets' }
        ])
    ]
};