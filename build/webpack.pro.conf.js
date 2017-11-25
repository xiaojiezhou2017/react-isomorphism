const path = require('path');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const vendorName = require('./assert.json').vendor.js;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: './src/entry-client.js'
    }, 
    output: {
        path: path.resolve(process.cwd(), 'static'),
        filename: '[name]-[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: ['cache-loader', 'babel-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: 'production' 
        }),
        new NyanProgressPlugin(),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest: require('./manifest.json')       
        }),
        new AssetsWebpackPlugin({
            path: path.join(process.cwd(), 'build'),
            filename: 'assets.json'
        }) ,
        new CleanWebpackPlugin(['static'], {
            root: process.cwd(),
            exclude: [ 'vendor' ],
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: true
        }) 
    ],
    devtool: 'hidden-souce-map'
}