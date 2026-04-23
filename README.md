# Art Gallery Mobile App

## 项目简介

Art Gallery是一个基于Angular框架开发的移动应用，用于展示和管理艺术品。该应用提供了直观的用户界面，支持商品展示、库存管理、浏览历史记录和商品管理等功能。

## 功能特性

- 📦 **商品展示**：浏览所有艺术品，查看详细信息，支持搜索和分类筛选
- 📊 **库存管理**：查看所有商品的库存状态，包括库存数量和状态
- 🕒 **浏览历史**：记录用户浏览过的商品
- ⚙️ **商品管理**：添加新商品，删除现有商品

## 技术栈

- **前端框架**：Angular 17
- **语言**：TypeScript
- **样式**：CSS3
- **数据获取**：Angular HttpClientModule
- **状态管理**：服务（Services）
- **搜索功能**：实时搜索和分类筛选

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
- **浏览商品**：查看所有艺术品
- **搜索功能**：在搜索框中输入关键词，实时搜索商品名称、类别或供应商
- **分类筛选**：从下拉菜单中选择商品类别进行筛选
- **查看详情**：点击「查看详情」按钮查看商品详情并记录到浏览历史

### 库存管理
- **库存概览**：查看总商品数、有货商品数、缺货商品数和总库存量
- **商品详情**：查看每个商品的详细信息，包括价格、供应商和库存状态
- **库存状态**：通过颜色区分不同的库存状态（有货、低库存、缺货）

### 浏览历史
- **历史记录**：查看最近浏览过的商品
- **快速访问**：点击商品直接查看详情

### 商品管理
- **添加商品**：填写商品信息表单，添加新商品
- **删除商品**：点击「删除」按钮移除现有商品

## 项目结构

```
art-gallery-app/
├── src/
│   ├── app/
│   │   ├── components/           # 组件
│   │   │   ├── cart/             # 库存管理组件（原购物车组件）
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

## 数据结构

商品数据存储在 `src/assets/items.json` 文件中，包含以下字段：

- `item_id`：商品ID
- `item_name`：商品名称
- `category`：商品类别
- `quantity`：库存数量
- `price`：商品价格
- `supplier_name`：供应商名称
- `stock_status`：库存状态（In stock, Low stock, Out of stock）
- `featured_item`：是否为特色商品（0或1）
- `special_note`：特殊备注

## 构建项目

运行以下命令构建项目：

```bash
ng build
```

构建产物将存储在 `dist/` 目录中。

## 进一步帮助

要了解更多关于Angular CLI的信息，请使用 `ng help` 或查看 [Angular CLI 概述和命令参考](https://angular.io/cli) 页面。