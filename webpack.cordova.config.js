var cordovaConfig = require('./cordova.config');
var webpack = require('webpack');

module.exports = {
    debug: false,
    entry: './app/scripts/main.js',
    output: {
        path: __dirname + '/' + cordovaConfig.targetDirectory + '/www/js',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            //{test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        })
    ]
};