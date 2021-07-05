
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'xuni'
    },
    devServer: {
        port: 8080,
        contentBase: 'public'
    }
}