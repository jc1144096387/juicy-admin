// 注：修改配置之后，需要重新npm run dev才能生效

const path = require("path")

module.exports = {
  title: 'juicy-admin',
  description: '通用权限管理系统',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname)
      }
    }
  }
}