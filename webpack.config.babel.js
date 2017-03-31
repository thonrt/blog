const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, 'blog'),
    output: {
        path: __dirname,
        filename: './build/blog.js'
    },
    devServer: {
        inline: true,
        port: 8090
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'blog'),
            query: {
                presets: ['es2015']
            }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?sourceMap'
      },
      {
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      },
      {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=819200'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './blog/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
