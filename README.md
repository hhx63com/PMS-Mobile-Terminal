# Art Gallery Mobile App

## 项目简介

Art Gallery是一个基于Angular框架开发的移动应用，用于展示和管理艺术品。

## 功能特性

- 📦 商品展示：浏览所有艺术品，查看详细信息
- 🛒 购物车：添加商品到购物车，调整数量，删除商品
- 🕒 浏览历史：记录用户浏览过的商品
- ⚙️ 商品管理：添加新商品，删除现有商品

## 技术栈

- **前端框架**：Angular 17
- **语言**：TypeScript
- **样式**：CSS3
- **数据获取**：Angular HttpClientModule
- **状态管理**：服务（Services）

## 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/hhx63com/PMS-Mobile-Terminal.git
   cd PMS-Mobile-Terminal
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   ng serve
   ```

4. **访问应用**
   打开浏览器，导航到 `http://localhost:4200/`

## 使用说明

### 商品列表
- 浏览所有艺术品
- 点击「查看详情」查看商品详情
- 点击「添加到购物车」将商品添加到购物车

### 购物车
- 查看购物车中的商品
- 调整商品数量
- 删除购物车中的商品
- 清空购物车
- 查看订单摘要

### 浏览历史
- 查看最近浏览过的商品
- 点击商品查看详情

### 商品管理
- 添加新商品
- 删除现有商品

## 项目结构

```
art-gallery-app/
├── src/
│   ├── app/
│   │   ├── components/           # 组件
│   │   │   ├── cart/             # 购物车组件
│   │   │   ├── history/          # 浏览历史组件
│   │   │   ├── item-list/        # 商品列表组件
│   │   │   └── item-management/  # 商品管理组件
│   │   ├── models/               # 数据模型
│   │   │   ├── cart-item.model.ts
│   │   │   ├── history-item.model.ts
│   │   │   └── item.model.ts
│   │   ├── services/             # 服务
│   │   │   ├── cart.service.ts
│   │   │   ├── history.service.ts
│   │   │   └── item.service.ts
│   │   ├── app.component.ts      # 根组件
│   │   ├── app.config.ts         # 应用配置
│   │   └── app.routes.ts         # 路由配置
│   ├── assets/                   # 静态资源
│   │   └── items.json            # 商品数据
│   ├── index.html                # HTML入口
│   └── styles.css                # 全局样式
├── angular.json                  # Angular配置
├── package.json                  # 项目依赖
└── README.md                     # 项目说明
```

## 构建项目

运行以下命令构建项目：

```bash
ng build
```

构建产物将存储在 `dist/` 目录中。

## 进一步帮助

要了解更多关于Angular CLI的信息，请使用 `ng help` 或查看 [Angular CLI 概述和命令参考](https://angular.io/cli) 页面。
