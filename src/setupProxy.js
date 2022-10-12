const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://restful-booker.herokuapp.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware(proxy)
  );

  app.use(
    '/booking',
    createProxyMiddleware(proxy)
  )
};
