const path = require('path');

module.exports = env => ({
    mode: env.dev ? 'development' : 'production',
    entry: env.wiki ? './src/wiki/wiki.js' :  './src/main.js',
    cache:  env.dev ? { type: 'filesystem' } : false,
    output: {
        path: path.join(__dirname, 'build'),
        filename: env.wiki ? 'wiki.js' : 'index.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/',
        },
    }
});
