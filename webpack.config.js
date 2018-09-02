module.exports = {
    context: __dirname + '/src/',
    entry: "./main.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` extension will be handled by `ts-loader`
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
    ],
    cache: false
};
