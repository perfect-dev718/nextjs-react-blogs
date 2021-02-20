require('dotenv').config();
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const Url = require('url-parse');
const url = new Url(process.env.API_ENDPOINT);

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    '/graphql',
    createProxyMiddleware({
      target: url.origin,
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/graphql': url.pathname },
    }),
  );

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
