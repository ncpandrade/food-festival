const path = require("path");
const webpack = require("webpack");

//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode
//The entry point is the root of the bundle and the beginning of the dependency graph
// output that bundled code to a folder that we specify
//provide the mode in which we want webpack to run
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
      mode: 'development'
    };