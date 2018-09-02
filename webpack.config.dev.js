const baseConfig = require('./webpack.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-sourcemap",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
});
