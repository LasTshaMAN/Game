var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/app/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'raw'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

};