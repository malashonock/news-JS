const path = require('path');

module.exports = {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
    },
};
