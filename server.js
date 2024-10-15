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
        // Add custom headers here
        proxyReq.setHeader('X-Custom-Header', 'YourValue'); // Add your custom header
        proxyReq.setHeader('Authorization', 'Bearer YOUR_TOKEN'); // Example of adding an Authorization header

        // You can log headers if you want to see them
        console.log('Request Headers:', req.headers);
    },
    onProxyRes: (proxyRes, req, res) => {
        // Modify the response if needed
        console.log('Response Headers:', proxyRes.headers);
    }
});

// Use the proxy for routes starting with /proxy
app.use('/', apiProxy);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
