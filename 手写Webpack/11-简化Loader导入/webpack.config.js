const path = require("path");

module.exports = {
    devtool: "none",
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "bundle")
    },
    resolveLoader:{
        // modules: [ 'node_modules', './loader'],  // 先在node_modules中查找，如果没有找到则在./loader中查找
        alias: {
            ReplaceLoader: path.resolve(__dirname, 'loader/ReplaceLoader.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    // loader: path.resolve(__dirname, 'loader/ReplaceLoader.js'),
                    loader: 'ReplaceLoader',
                    options: {
                        name: "lnj"
                    }
                }]
            }
        ]
    }
};