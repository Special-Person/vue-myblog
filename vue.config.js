module.exports = {
    devServer: {
        host: "192.168.123.78",
        port: 8080,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:12306/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};
