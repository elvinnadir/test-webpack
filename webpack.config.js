const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    //This property defines where the application starts
    entry: { bundle: path.resolve(__dirname, "src") },

    //This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ test: /\.scss$/, use: 'raw-loader' }],
    },

    //Setup loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.js$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'jsx',  // Remove this if you're not using JSX
                    target: 'es2015'  // Syntax to compile to (see options below for possible values)
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },

    // Setup plugin to use a HTML file for serving bundled js files
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}