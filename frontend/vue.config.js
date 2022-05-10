const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '^/character': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
})