const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')
const minimizerCssWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, './build'),
          },
        port: 9000,
    },
    optimization: {
        minimizer: [
            new terserWebpackPlugin({
                parallel: true,
                terserOptions:{
                    ecma:6
                }
            }),
            new minimizerCssWebpackPlugin({})
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin({
                patterns:[
                    { context: 'src/', from: '**/*.html' },
                    { context: 'src/', from: 'imgs/**/*' }
                ]
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}