var path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'./src/entry.js'),
    output: {
        path: path.join(__dirname, '/static'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] }
        ]
    }
}