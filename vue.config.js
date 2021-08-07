module.exports = {
    devServer: {
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
