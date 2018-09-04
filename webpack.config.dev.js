const merge = require('webpack-merge');
const path = require('path');

// configs
const baseConfig = require('./webpack.config');

// variables
const sourcePath = path.join(__dirname, './src');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-sourcemap",
    devServer: {
        contentBase: sourcePath,
        compress: true,
        port: 9000,
        stats: 'minimal',
        clientLogLevel: 'warning'
    }
});
