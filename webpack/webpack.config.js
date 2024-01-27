const modoDev= process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: modoDev?"development":"production",
    entry:"./src/principal.js",
    output: {
        filename:'principal.js',
        path: __dirname + '/public'
    },
    optimization:{
        minimizer:[

            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel:true,
                terserOptions:{
                    ecma:6
                }
            })
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'estilo.css'
        })
    ],
    module:{
        rules:[
            {
                test: /\.s?[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    //'style-loader',// adiciona tag style na DOM
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    }
}