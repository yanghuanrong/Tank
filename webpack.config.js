const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],

    module: {
        rules: [{
            test: /\.css/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "images/[name].[ext]"
                }
            }]
        },]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true,
        port: 9000,
        overlay: true,
    }
};