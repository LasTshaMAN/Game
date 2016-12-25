const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    devtool: 'source-map',
    debug: true,

    entry: './out/src/bootstrap.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ["", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};