# 科研实验室网站

这是一个使用 Next.js 构建的科研实验室网站。

## 开发

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行生产版本
npm run start

# 清理构建缓存
npm run clean
```

## 技术栈

- Next.js 14
- React 18
- TailwindCSS
- Framer Motion

## 部署注意事项

### 解决 npm 警告

项目已配置为处理以下常见警告：

1. **`.next` 目录警告**：
   - `.next` 目录已添加到 `.gitignore`，确保不会上传到仓库
   - 在部署平台上，将自动构建项目，无需上传 `.next` 目录

2. **已弃用包警告**：
   - 使用 `overrides` 在 package.json 中强制使用较新版本的 `glob` 和 `rimraf`
   - 更新了 ESLint 及其相关包到最新版本
   - 使用 `fs-extra` 替代 `rimraf` 进行目录清理

### 服务器端渲染 (SSR) 和 客户端交互

为解决 "Event handlers cannot be passed to Client Component props" 错误：

1. 已移除 `next.config.js` 中的 `output: 'export'` 配置
2. 创建了 `ClientWrapper` 组件作为客户端/服务器组件的边界
3. 使用 `ClientWrapper` 包装所有带有交互的组件
4. 为页面组件启用了服务器渲染以提高初始加载性能

### 图像优化

配置了图像优化设置：
- 使用 Next.js 内置的图像优化而非 `unoptimized` 选项
- 配置了远程模式支持所有来源的图像

## 许可

私有项目 - 版权所有 