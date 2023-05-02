const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 불러오려는 server 의 api path
    createProxyMiddleware({
      target:
        "https://76ecdeb2-4fdd-4b73-b72a-1a3caa0ceb95.mock.pstmn.io/users", // server 주소를 넣어주면 된다.
      changeOrigin: true,
    })
  );
};
