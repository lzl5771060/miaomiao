module.exports = {
    devServer: {
        proxy: {
            '/dianying|/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true,
                secure: true
            }
        }
    }
}