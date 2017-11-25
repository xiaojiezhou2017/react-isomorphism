const vendor = [ 'react', 'react-router', 'react-dom', 'redux' ];
const LIBRARYNAME = '[name]_[hash]';
const path = require('path');
const webpack = require('webpack');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const options = {
    entry: {
        vendor
    },
    output: {
        path: path.resolve(process.cwd(), 'static/vendor'),
        filename: '[name]-[hash:8].js', 
        library: LIBRARYNAME 
    },
    plugins: [
        new webpack.DllPlugin({ context: __dirname,
            context: __dirname,
            name: LIBRARYNAME,
            path: path.resolve(process.cwd(), 'build/manifest.json')
        }),
        new NyanProgressPlugin(),
        new CleanWebpackPlugin(['static/vendor'],{
            root:  process.cwd()
        }),
        new AssetsWebpackPlugin({
            path: path.join(process.cwd(), 'build'),
            filename: 'vendor.json'
        })
    ]
}

const pro = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
console.log('---pro====', pro);

if (pro) {
    options.plugins.push(
        new UglifyJsPlugin({
            cache: true,
            parallel: true
        }),    
        new new webpack.DefinePlugin({
            NODE_ENV: 'production' 
        }),
    )
}
module.exports = options;