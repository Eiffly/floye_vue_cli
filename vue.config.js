module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,
    // 开启代理服务器：方法一
    /* devServer: {
        // 这里是说代理服务器要把请求转发给proxy
        proxy: 'http://localhost:5000'
    } */

    // 开启代理服务器：方法二
    /*  devServer: {
         proxy: {
             // 完整版本
             '/api': {   //请求前缀api，表示走代理（前缀指的是端口号后面的那个）
                 target: 'http://localhost:5000',
                 // 路径重写
                 pathRewrite: { '^/api': '' },
                 // 用于支持web socket
                 ws: true,
                 //  true说谎 false如实回答,用于控制请求头中的host值
                 changeOrigin: true
             },
             '/demo': {   //请求前缀api，表示走代理（前缀指的是端口号后面的那个）
                 target: 'http://localhost:5001',
                 // 路径重写
                 pathRewrite: { '^/demo': '' },
                 // 用于支持web socket
                 ws: true,
                 //  true说谎 false如实回答,用于控制请求头中的host值
                 changeOrigin: true
             },
         }
     } */
}