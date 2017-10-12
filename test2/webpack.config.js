const path = require("path");

const config = {
    entry:path.resolve(__dirname,"./src/index.jsx"),
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"./static/")
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
        {
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};

module.exports = config;