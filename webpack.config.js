const path = require('path');
const webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: [
        "./app.js"
    ],
    output: {
        path: "build/",
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
           test: /\.html$/,
           loader: "raw-loader"
       }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack'
            ]
        }]
    },
    resolve: {
        extensions: ['', '.css', '.js', '.styl', '.json', 'index.js']
    }
};
