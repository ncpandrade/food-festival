const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode
//The entry point is the root of the bundle and the beginning of the dependency graph
// output that bundled code to a folder that we specify
//provide the mode in which we want webpack to run
module.exports = {
    entry:  {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.jpg$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name (file) {
                    return "[path][name].[ext]"
                  },
                  publicPath: function(url) {
                    return url.replace("../", "/assets/")
                  }
                } 
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          }
        ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
      ],
      mode: 'development'
    };