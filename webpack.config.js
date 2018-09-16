const path = require('path');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: sourcePath,
    entry: {
        'creational/abstract-factory': './creational/abstract-factory/main.ts',
        'creational/builder': './creational/builder/main.ts',
        'creational/factory-method': './creational/factory-method/main.ts',
        'creational/prototype': './creational/prototype/main.ts',
        'creational/singleton': './creational/singleton/main.ts',
        'structural/composite': './structural/composite/main.ts',
        'structural/bridge': './structural/bridge/main.ts'
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
            { from: './creational/abstract-factory/index.html', to: './creational/abstract-factory/' },
            { from: './creational/builder/index.html', to: './creational/builder/' },
            { from: './creational/factory-method/index.html', to: './creational/factory-method/' },
            { from: './creational/prototype/index.html', to: './creational/prototype/' },
            { from: './creational/singleton/index.html', to: './creational/singleton/' },
            { from: './structural/composite/index.html', to: './structural/composite/' },
            { from: './structural/bridge/index.html', to: './structural/bridge/' }
        ])
    ],
    cache: false
};
