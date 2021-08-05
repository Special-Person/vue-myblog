module.exports = {
    devServer: {
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
