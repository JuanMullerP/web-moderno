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
        liveReload: true,
        proxy: [
            {
              context: ['/docs/post/imagens.json', '/upload'],
              target: 'http://localhost:9001',
            },
          ],
        // {
        //     "http://localhost:9000/docs/post/imagens.json":"http://localhost:9001/"
        // }
    },
    optimization: {
        minimizer: [
            new terserWebpackPlugin({
                parallel: false,
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
                    { context: 'src/', from: 'imgs/**/*' ,noErrorOnMissing:true},
                    { context: './', from: 'docs/**/*.json' }
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
    },
    resolve: {
        fallback: {
          fs: false,
          os: false,
          path: false
        }
      },
}