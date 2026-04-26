# Art Gallery Mobile App

## 项目简介

Art Gallery是一个基于Angular + Capacitor框架开发的移动应用，用于展示和管理艺术品。该应用提供了直观的用户界面，支持商品展示、库存管理、商品管理和搜索历史等功能。

## 功能特性

- 📦 **商品展示**：浏览所有艺术品，查看详细信息，支持搜索和分类筛选
- 🔍 **搜索功能**：支持按回车键或点击搜索按钮进行搜索，自动保存搜索历史
- 📊 **库存管理**：查看所有商品的库存状态，包括库存数量和状态，支持按供应商、库存状态和特色商品分类
- ⚙️ **商品管理**：添加新商品、修改现有商品信息、删除现有商品，支持搜索商品名称，包含完整的输入验证
- 🔒 **隐私协议**：应用的隐私政策说明
- ❓ **帮助系统**：每个页面都有相关的帮助按钮，提供页面功能说明
- 📱 **移动端适配**：完美适配各种屏幕尺寸，包括高DPI设备

## 技术栈

- **前端框架**：Angular 17
- **移动端框架**：Capacitor
- **语言**：TypeScript
- **样式**：CSS3
- **数据获取**：Angular HttpClientModule
- **状态管理**：服务（Services）
- **搜索功能**：搜索历史记录和分类筛选
- **移动平台**：Android

## 安装步骤

### 1. 克隆项目
```bash
git clone https://github.com/hhx63com/PMS-Mobile-Terminal.git
cd PMS-Mobile-Terminal
git checkout Double-Intercommunication
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器（Web端）
```bash
ng serve
```
打开浏览器，导航到 `http://localhost:4200/`

## Android端使用方法

### 前提条件
- Android Studio 已安装并配置好
- Android SDK 已配置
- Node.js 和 npm 已安装

### 同步前端代码到Android项目

每次修改前端代码后，需要同步到Android项目：

```bash
npx cap sync android
```

### 在Android Studio中运行

1. **打开Android项目**
   - 打开Android Studio
   - 选择 "Open an existing project"
   - 选择项目中的 `android` 文件夹

2. **同步Gradle**
   - Android Studio 会自动同步 Gradle
   - 等待同步完成

3. **运行应用**
   - 连接Android设备或启动模拟器
   - 点击 Android Studio 中的 "Run" 按钮（绿色三角形）
   - 选择目标设备
   - 应用将安装并运行

### 首次设置Android项目

如果是首次从Git拉取项目，需要先初始化Capacitor：

```bash
npm install
npx cap add android
npx cap sync android
```

然后在Android Studio中打开 `android` 文件夹，构建并运行。

### 更新Android项目

当修改了Angular代码后：

```bash
ng build
npx cap sync android
```

然后在Android Studio中重新运行应用。

## 使用说明

### 商品列表
- **浏览商品**：查看所有艺术品
- **搜索功能**：在搜索框中输入关键词，按回车键或点击搜索按钮进行搜索
- **搜索历史**：点击搜索框可查看历史搜索记录，点击历史记录项可直接使用
- **分类筛选**：从下拉菜单中选择商品类别进行筛选
- **查看详情**：点击「查看详情」按钮查看商品详情

### 库存管理
- **库存概览**：查看总商品数、有货商品数、缺货商品数和总库存量
- **商品详情**：查看每个商品的详细信息，包括价格、供应商和库存状态
- **库存状态**：通过颜色区分不同的库存状态（有货、低库存、缺货）
- **分类功能**：支持按供应商、库存状态和是否为特色商品进行分类筛选
- **重置过滤**：一键清除所有过滤条件，回到默认视图

### 商品管理
- **添加商品**：在顶部表单中填写商品信息，点击"添加商品"按钮添加新商品
- **搜索商品**：在搜索框中输入商品名称，按回车键或点击搜索按钮进行搜索
- **修改商品**：点击商品卡片的"编辑"按钮，表单自动切换到编辑模式，修改后点击"保存修改"
- **删除商品**：点击商品卡片的"删除"按钮移除现有商品
- **表单重置**：点击"取消"按钮可放弃当前操作并重置表单
- **输入验证**：表单包含完整的输入验证，确保数据的正确性
  - 商品名称：必填，1-100个字符
  - 类别：必填
  - 数量：必填，≥0，必须是整数
  - 价格：必填，≥0，最多两位小数
  - 供应商：必填，1-100个字符
  - 库存状态：必填
  - 特殊说明：最多200个字符

### 隐私协议
- **隐私政策**：查看应用的隐私协议，包括数据收集、使用和保护等内容

### 帮助系统
- **帮助按钮**：每个页面右上角都有一个帮助按钮（带有问号图标的圆形按钮）
- **点击帮助**：点击帮助按钮会弹出与当前页面相关的帮助信息
- **关闭帮助**：点击帮助窗口右上角的关闭按钮或点击窗口外部可关闭帮助
- **页面帮助内容**：
  - **商品列表**：搜索功能、分类筛选、历史搜索、商品卡片说明
  - **库存管理**：库存状态说明、统计指标解释、分类功能使用
  - **商品管理**：添加/编辑/删除操作指南、表单填写说明、输入验证规则
  - **隐私协议**：隐私协议各部分概述、数据存储说明、安全措施

## 项目结构

```
art-gallery-app/
├── src/
│   ├── app/
│   │   ├── components/           # 组件
│   │   │   ├── cart/             # 库存管理组件
│   │   │   ├── history/          # 隐私协议组件
│   │   │   ├── item-list/        # 商品列表组件
│   │   │   └── item-management/  # 商品管理组件
│   │   ├── models/               # 数据模型
│   │   │   ├── cart-item.model.ts
│   │   │   ├── history-item.model.ts
│   │   │   └── item.model.ts
│   │   ├── services/             # 服务
│   │   │   ├── cart.service.ts
│   │   │   ├── history.service.ts
│   │   │   ├── image.service.ts
│   │   │   └── item.service.ts
│   │   ├── app.component.ts      # 根组件
│   │   ├── app.config.ts         # 应用配置
│   │   └── app.routes.ts         # 路由配置
│   ├── assets/                   # 静态资源
│   │   ├── product-images/       # 商品图片
│   │   │   └── [商品图片文件]
│   │   └── items.json            # 商品数据
│   ├── index.html                # HTML入口
│   └── styles.css                # 全局样式
├── android/                      # Android原生项目
│   ├── app/                      # 应用模块
│   ├── gradle/                   # Gradle配置
│   └── [其他Android配置文件]
├── angular.json                  # Angular配置
├── package.json                  # 项目依赖
├── capacitor.config.ts           # Capacitor配置
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

## 商品图片

商品图片存储在 `src/assets/product-images/` 目录中，图片文件与商品名称对应。

图片服务（ImageService）会自动根据商品名称匹配对应的图片文件。如果没有找到对应的图片，将根据商品类别显示默认图片。

### 支持的商品图片

应用支持以下商品类别的图片显示：
- **电子产品（Electronics）**：手机、平板、电脑、耳机等
- **家具（Furniture）**：桌子、椅子、书架等
- **服装（Clothing）**：T恤、包包等
- **工具（Tools）**：锤子、钳子、电烙铁等
- **图书（Books）**：书籍等

## 构建项目

### Web端构建
```bash
ng build
```
构建产物将存储在 `dist/` 目录中。

### Android端构建
```bash
npx cap sync android
```

然后在Android Studio中选择 "Build" > "Build Bundle(s) / APK(s)" > "Build APK(s)" 构建APK文件。

## 进一步帮助

- Angular CLI命令：`ng help` 或查看 [Angular CLI 概述和命令参考](https://angular.io/cli)
- Capacitor文档：[Capacitor 官方文档](https://capacitorjs.com/docs)
