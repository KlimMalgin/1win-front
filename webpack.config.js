const path              = require('path');
const glob              = require('glob');
const readYaml          = require('read-yaml');
const webpack           = require('webpack');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
let options = {};

module.exports = {
    entry  : { index: path.resolve( __dirname, 'index.babel.js' ) },
    output : {
        path       : path.resolve( __dirname, './dist/' ),
        publicPath : '/dist/',
        filename   : '[name].js',
    },
    module : {
        rules : [
            {
                test    : /\.vue$/,
                loader  : 'vue-loader',
                options : {
                    loaders : {
                        'less' : 'vue-style-loader!css-loader!less-loader',
                        'css'  : 'style-loader!css-loader',
                    },
                },
            },

            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader',
            },

            {
                test   : /\.less$/,
                loader : 'style-loader!css-loader!less-loader',
            },

            {
                test    : /\.js$/,
                loader  : 'babel-loader',
                exclude : /node_modules/,
            },
            {
                test    : /\.(png|jpg|gif|svg)$/,
                loader  : 'file-loader',
                options : { name: '[name].[ext]?[hash]' },
            },

            {
                test : /\.yaml$/,
                use  : [
                    {
                        loader  : 'dict-loader',
                        options : {
                            babelfish : {
                                fallback      : 'ru',
                                testNamespace : /^([\w-]+)\.js/,
                                testLocale    : /([a-z]{2})_[A-Z]{2}\.\w+/,
                            },

                            typograf : {
                                rules : {
                                    disabled : [
                                        'common/space/afterPunctuation',
                                        'ru/space/afterPunctuation',
                                    ],
                                },
                            },

                            markdown : { html: true },

                            bemFilters : [],
                        },
                    },
                    'yaml-loader',
                ],
            },
        ],
    },
    resolve : {
        unsafeCache : true,
        modules     : [
            path.resolve('./node_modules'),
        ],
        alias : { '@components': path.join( __dirname, 'app/components' ) },
    },
    devServer : {
        historyApiFallback : true,
        noInfo             : true,
    },
    performance : { hints: false },
    devtool     : '#eval-source-map',
};

if ( process.env.NODE_ENV === 'production' ) {
    options.devtool = '#source-map';

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = ( module.exports.plugins || [] ).concat( [
        new webpack.DefinePlugin( { 'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"` } } ),
        new webpack.optimize.UglifyJsPlugin( { sourceMap: options.devtool && options.devtool.indexOf('source-map') >= 0 } ),
    ] );
}
