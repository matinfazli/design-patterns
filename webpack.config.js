const path = require('path');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: sourcePath,
    entry: {
        'structural/composite': './structural/composite/main.ts'
    },
    output: {
        path: outPath,
        filename: '[name]/main.js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', 'tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './index.html', to: './' },
            { from: './structural/composite/index.html', to: './structural/composite/' }
        ])
    ],
    cache: false
};
