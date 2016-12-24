// const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {

//     devtool: 'source-map',
//     debug: true,

//     entry: './src/main.ts',
//     output: {
//         path: './dist',
//         filename: 'bundle.js'
//     },

//     resolve: {
//         extensions: ["", ".ts", ".js"]
//     },

//     module: {
//         loaders: [
//             {
//                 test: /\.tsx?$/,
//                 loader: "ts-loader",
//                 exclude: /node_modules/
//             }
//         ]
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new CopyWebpackPlugin([
//             { from: './assets', to: 'assets' }
//         ])
//     ]
// };