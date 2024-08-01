//擴展webpack配置(寫法固定)
const path = require('path')

module.exports = {
    //webpack配置
    webpack:{
        //配置別名
        alias:{
            //約定:使用 @ 表示src 文件所在路徑
            '@' : path.resolve(__dirname, 'src')
        }
    }
}