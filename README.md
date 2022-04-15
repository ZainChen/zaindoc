# Zaindoc

## 开发/构建/部署

```bash
# 安装依赖
npm i

# 开发
npm run start

# 构建
npm run build

# 部署
# 设置好 github ssh, 可直接用这条命令, 自动构建并 push 到 github 的 gh-pages 分支中触发页面更新
USE_SSH=true npm run deploy
```

### 自动部署配置



## 参考资料

- 官方文档(多语言): https://docusaurus.io
- 触发 GitHub Actions 自动部署: https://docusaurus.io/zh-CN/docs/deployment#triggering-deployment-with-github-actions
