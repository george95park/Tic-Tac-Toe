const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        })
    ]
}
