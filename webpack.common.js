const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    entry:"./src/index.js",
    output:
    {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module:
    {
        rules:
        [{
            test:/\.css$/,
            use:
            [
                {loader:"style-loader"},
                {loader:"css-loader"}
            ]
        },
        {
            test:/\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
            use:
            [
                {loader: "file-loader"}
            ]
        }]
    },
    plugins:
    [
        new HtmlWebpackPlugin
        ({
            template:"./src/index.html",
            filename:"index.html"
        })
    ]
};
