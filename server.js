const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure the proxy
const apiProxy = createProxyMiddleware({
    target: 'https://lime-wealth-953247.framer.app/', // Replace with your target domain
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Remove '/proxy' from the request path
    },
    onProxyReq: (proxyReq, req, res) => {
        // You can modify the request here if needed
    },
    onProxyRes: (proxyRes, req, res) => {
        // You can modify the response here if needed
    }
});

// Use the proxy for routes starting with /proxy
app.use('/', apiProxy);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
