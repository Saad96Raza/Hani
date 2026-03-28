const glob = require('glob');
const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rspack  = require('@rspack/core')
const { ImageMinimizerPlugin  } = require('@rsbuild/plugin-image-compress')
const pugPages = glob.sync('src/views/pages/*.pug')
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry : path.resolve(__dirname, "src/apps/index.js"),
    output :{
        path : path.resolve(__dirname,'dist'),
        chunkFilename: 'js/vendor/[name].js',
        filename:'js/[name].bundle.js',
        clean: true,
    },

    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),            
        },
        client: {
            overlay: {
              errors: true,
              warnings: false,
              
            },
        },
        compress: true,
        hot:false,
        port: 2000,
         
    },

    devtool: false,
    module:{
        rules:[
            {
                test: /\.(glb|gltf)$/,
                type: 'asset/resource', 
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: 'builtin:swc-loader'
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                type: 'asset/source'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    rspack.CssExtractRspackPlugin.loader, 
                    "css-loader",
                    "postcss-loader",              
                    "sass-loader",
                ],
            },           
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                exclude: /src\/styles/, 
                type: 'asset/resource',
                generator: {
                    filename: 'media/[name][ext]', 
                },                  
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:"asset/resource",
                generator:{
                    filename:"fonts/[name][ext]"
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                format: {
                    comments: false, // Removes all comments
                },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                use: 'webp', 
                test: /\.(jpe?g|png)$/i, // Which files to process
                quality: 75, // Your desired quality setting
            }),
        ],
    },
    plugins: [
        new rspack.CssExtractRspackPlugin({
            filename: "css/[name].css", 
        }),
        new rspack.CopyRspackPlugin({
            patterns: [
                { from: 'src/media', to: 'media'},
            ],
        }),
        ...pugPages.map((file) => {
            const pageName = path.basename(file, '.pug')
            return new HtmlWebpackPlugin({
              title: pageName.charAt(0).toUpperCase() + pageName.slice(1),
              template: file,
              filename: (pageName === 'home') ? 'index.html' : pageName + '.html',
              inject: 'body',
               chunks: 'all'
            })
        }),
    ],
    
}
