const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure the proxy
const apiProxy = createProxyMiddleware({
    target: 'https://static-slides-288062.framer.app/', // Replace with your target domain
    changeOrigin: true,
    pathRewrite: {},
    
    onProxyReq: (proxyReq, req, res) => {
        // Add custom headers here
        proxyReq.setHeader('X-Custom-Header', 'Rbxstats'); // Custom request header
        console.log('Request Headers:', req.headers); // Optional log
    },

    onProxyRes: (proxyRes, req, res) => {
        // Set custom response headers
        proxyRes.headers['X-Service-Name'] = 'rbxstats';
        proxyRes.headers['X-Description'] = 'Your all in one provider for Roblox exploits and tools';
        proxyRes.headers['X-Logo'] = 'https://cdn.discordapp.com/avatars/1288634350547763275/7f5befea345dbaddacaf4da2468d4baa.webp?size=80';

        console.log('Response Headers:', proxyRes.headers); // Optional log
    }
});

// Use the proxy for all incoming requests
app.use('/', apiProxy);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
