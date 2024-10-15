const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure the proxy
const apiProxy = createProxyMiddleware({
    target: 'https://lime-wealth-953247.framer.app', // Replace with your target domain
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/', // Adjust this if you want to change the route structure
    },
    onProxyReq: (proxyReq, req, res) => {
        // Modify the request here if needed
    },
    onProxyRes: (proxyRes, req, res) => {
        // Modify the response here if needed
    }
});

// Use the proxy for routes starting with /api
app.use('/api', apiProxy); // Proxy all requests starting with /api

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
