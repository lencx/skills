---
title: "Impeccable"
description: "帮助 AI 编码代理塑造、评审、审计和完善前端体验的设计指导与实用命令。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Impeccable

[pbakaus/impeccable](https://github.com/pbakaus/impeccable)

标签: #design · #quality

Stars: 58,314 · Forks: 3,558

分析版本: `ae388ac` · GitHub 快照: 2026年8月12日

> Impeccable 把设计变成一套权威来源与渲染证据系统，而不是一组只会要求 Agent“把页面做得更好看”的提示词。

每次会话先解析 PRODUCT.md、DESIGN.md、对应 surface brief 和平台指南，再只加载一个负责当前任务的命令 playbook；真正修改 UI 前还会加载独立 craft floor。确定性 detector 与浏览器实时变体用于补充纯模型评审无法提供的证据。

## 每次 UI 修改背后的权威栈

每一层回答不同问题。分开之后，重新设计可以替换视觉方向而不篡改产品事实，机械检查也只负责支撑设计判断，而不会冒充判断本身。

### PRODUCT.md

_产品事实_

用户、任务、证据、使用环境、约束与无障碍要求保持稳定。

### DESIGN.md + surface brief

_视觉事实_

产品级视觉世界与某个具体页面的独有决策彼此分离。

### 命令 Playbook

_一种判断_

critique、audit、polish、harden 等命令只加载当前任务真正需要的方法。

### Craft floor

_修改之前_

独立质量底线约束排版、对比度、间距、图标和常见设计捷径。

### Detector + 实时浏览器

_渲染证据_

确定性规则捕获机械缺陷；live 模式比较真实渲染出的备选方案。

证据: [Why Impeccable](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/README.md#why-impeccable) · [命令与示例](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/SKILL.md#setup) · [实时浏览器迭代](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/reference/live.md)

## 它比“做好设计”具体在哪里

### 产品事实与视觉方向分离

重新设计可以替换视觉世界，但仍必须保留作为产品事实记录的用户、用途、证据、内容和约束。

### 不同命令负责不同判断

critique 判断体验，audit 检查技术质量，polish 收口发布缺口，harden 处理错误、i18n、溢出和边界状态。

### 工具支撑的渲染证据

Detectors 捕获机械缺陷；live 模式操作真实预览，包括元素选择、备选方案、标注与接受或拒绝。

## 根据需要的判断选择命令

1. 先运行 impeccable init，让后续命令获得真实品牌和产品上下文。
2. 把命令限定到具体目标，例如 audit blog、polish settings 或 harden checkout。
3. 用 critique 判断体验，用 audit 执行确定性的技术检查；不要把两者混为一谈。

## 采用方法，但不要泄露私有上下文

### 适合用于

需要设计塑形、UX 评审、技术审计或发版前完善的 Landing Page、作品集、应用界面和 Dashboard。

### 共享前检查

安装可能加入项目 hooks。Codex 用户需要审查并批准，hook 定义变化后可能要重新批准。

## 参考来源

- [Why Impeccable](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/README.md#why-impeccable)
- [命令与示例](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/SKILL.md#setup)
- [实时浏览器迭代](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/reference/live.md)

Source: https://skills.lencx.me/zh/collections/impeccable/index.mdx
