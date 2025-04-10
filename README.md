# 科研实验室展示网站

这是一个基于Next.js和Tailwind CSS开发的科研实验室展示网站，主要用于展示实验室的研究方向、团队成员、科研成果和联系方式。

## 特点

- 现代极简设计风格，响应式布局
- 流畅的动画效果和交互体验
- 完整的内容展示模块：首页、研究方向、团队成员、科研成果、联系方式
- 支持搜索和过滤功能
- 表单验证和提交功能

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [React Icons](https://react-icons.github.io/react-icons/) - 图标库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的JavaScript

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 文件结构

```
lab-website/
├── public/            # 静态资源 (图片等)
├── src/               # 源代码
│   ├── app/           # 页面文件
│   │   ├── page.tsx   # 首页
│   │   ├── research/  # 研究方向页面
│   │   ├── team/      # 团队成员页面
│   │   ├── publications/ # 科研成果页面
│   │   └── contact/   # 联系我们页面
│   ├── components/    # 组件
│   └── styles/        # 样式文件
├── package.json       # 项目配置文件
├── tailwind.config.js # Tailwind配置
└── README.md          # 项目说明文档
```

## 部署

该网站可以部署在Vercel平台上，只需连接到GitHub仓库即可自动部署。

## 未来改进

- 添加管理后台，用于内容更新
- 增加中英文切换功能
- 优化图片加载性能

## 许可证

MIT 