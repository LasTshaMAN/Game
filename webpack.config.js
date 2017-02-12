const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    devtool: 'source-map',

    entry: './src/bootstrap.ts',
    output: {
        path: './target/dist',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};