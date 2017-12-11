const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "less-loader" }
            ]
        }, {
            test: /\.css/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        port: 9000,
        overlay: true,
    }
};