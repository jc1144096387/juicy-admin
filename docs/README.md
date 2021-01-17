# juicy-admin
juicy-admin是一个通用的权限管理系统
![An image](~@/assets/vip.png)
## 所用技术栈
前端使用vue.js开发
后端使用基于koa的egg.js开发
数据库采用mysql、mongodb
缓存数据库采用redis
权限校验采用
代码风格校验采用eslint
版本控制采用git，并采用gitlab flow作为git工作流程规范
采用gitlab作为项目管理和代码托管平台，并集成CICD功能
采用nginx作为web服务器
采用docker作为应用容器引擎
采用Kubernetes作为容器编排引擎

## 架构设计
### 总体架构
访问层：客户端（PC端、移动端）
Web层：nginx（vue应用、其他静态资源）
服务层：基于docker的服务集群（egg应用）
组件层：基于Kubernetes基础组件（mysql、mongodb、redis、elasticsearch、zookeeper...）
硬件层：服务器资源

### 前端架构
单应用架构 -> 基于qiankun的微前端架构

### 后端架构
单应用架构 -> 微服务架构 -> serveless架构

## 功能介绍
- 基于组织-角色-权限的权限管理，提供菜单权限、功能（接口）权限
  + 菜单权限：路由拦截、菜单隐藏
  + 功能（接口）权限：元素隐藏、事件拦截
- 快速开发辅助
  + vue、egg等代码生成器
  + vue、egg等代码模板
  + 应用生成器
  + (待定)项目附加器（上传一个指定类型的项目，通过选择需要附加的功能，即可为该项目附加相关功能的文件和代码）
    - eslint
    - .gitignore
    - package.json

- 字典管理
- 日志管理

- 数据源管理
- 视图管理
- 报表管理

- 分支管理
- 发布管理

- 服务器管理
- 基础组件管理
- 数据库管理
- 应用管理

- 视频剪辑

- 代码质量分析

- 消息管理
- 社交账号管理与单点登录
- 文件管理
- 定时任务
- 系统监控

- Activiti工作流

