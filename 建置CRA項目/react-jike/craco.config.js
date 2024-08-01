//擴展webpack配置(寫法固定)
const path = require('path')

//引入輔助函數
const { whenProd, pluginByName, getPlugin } = require('@craco/craco') 

module.exports = {
    //webpack配置
    webpack:{
        //配置別名
        alias:{
            //約定:使用 @ 表示src 文件所在路徑
            '@' : path.resolve(__dirname, 'src')
        },
        // 配置CDN
        configure: (webpackConfig) => {
            let cdn
            whenProd(() => {
                //key: 不參與打包(由dependencies依賴項中的key決定)
                //value: cdn文件中 掛載於全局的變量名稱 為了替換之前在開發環境下
                webpackConfig.externals = {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
                //配置現成的cdn資源地址
                //實際開發的時候 用公司自己花錢買的cdn服務器
                cdn = {
                    js: [
                        'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js'
                    ]
                }
            })

            //通過htmlWebpackPlugin插件 在public/index.html注入cdn資源url
            const { isFound, match } = getPlugin(
                webpackConfig,
                pluginByName('HtmlWebpackPlugin')
            )

            if (isFound) {
                //找到HtmlWebpackPlugin的插件
                match.userOptions.cdn = cdn
            }

            return webpackConfig
        }
    }
}