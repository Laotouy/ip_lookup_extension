# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
本文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

**重要提示：请使用中文回答所有问题和进行所有交流。**

## 项目概述

这是一个 Chrome 扩展程序（Manifest V3），它在右键菜单中添加了 IP 地址查询选项。用户选中文本并右键点击时，可以通过 ip138.com 查询选中的 IP 地址。

## 架构说明

- **manifest.json**：Chrome 扩展清单文件，定义权限和后台服务工作器
- **background.js**：服务工作器，处理右键菜单创建和点击事件
  - 创建"查询 IP 地址"右键菜单项
  - 在弹出窗口中打开 ip138.com 查询服务来查看 IP 地址信息

## 开发命令

### 加载扩展程序
1. 打开 Chrome 浏览器并访问 `chrome://extensions/`
2. 启用"开发者模式"
3. 点击"加载已解压的扩展程序"并选择此目录

### 测试更改
- 修改代码后，在 `chrome://extensions/` 中点击扩展程序的刷新图标
- 选中文本后右键点击以测试右键菜单功能

## 关键技术细节

- 使用 Manifest V3 和服务工作器（而非后台页面）
- 需要 `contextMenus` 和 `activeTab` 权限
- 右键菜单仅在选中文本时显示（`contexts: ["selection"]`）
- IP 查询通过 `chrome.windows.create()` 在弹出窗口中打开