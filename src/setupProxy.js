const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/', // rewrite path
            },
        }),
    );
    app.use(
        '/files',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        }),
    )
};