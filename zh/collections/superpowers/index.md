---
title: "Superpowers"
description: "由可组合 Skills 构成的编码代理软件开发方法，覆盖设计、规划、测试、评审和交付。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Superpowers

[obra/superpowers](https://github.com/obra/superpowers)

标签: #engineering · #delivery · #quality

Stars: 270,806 · Forks: 24,194

分析版本: `44c9b2d` · GitHub 快照: 2026年8月12日

> 安装 Superpowers 等于接受一套带硬门槛的开发制度：设计确认、隔离环境、TDD、独立评审和新鲜验证都是要求，而不是可选技巧。

Brainstorming 与人工设计确认是规划和编码前的硬门槛。实现随后进入隔离 worktree，以 TDD 执行窄任务，并把实现者自审、规格评审和代码质量评审分开；只有刚刚重新执行且读完结果的证明命令，才能支持完成声明。

## 一项改动在完成前必须通过的路径

顺序之所以重要，是因为每个门槛都会生成下一步依赖的证据。即使改动看起来很小，跳步仍被视为流程失败。

### 梳理问题

澄清意图并比较方案。

### 确认设计

在规划之前由人确认预期行为。

### 隔离环境

使用 worktree 并建立干净基线。

### 拆解计划

写出包含文件和证明命令的窄任务。

### TDD

通过 red、green、refactor 实现。

### 两层评审

先检查规格符合性，再检查代码质量。

### 重新验证

在声明完成前立即重跑证明命令。

证据: [仓库概览](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/README.md) · [Brainstorming 工作流](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/brainstorming/SKILL.md#the-process) · [完成前验证](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/verification-before-completion/SKILL.md#the-iron-law)

## 这些门槛为何不可省略

### 设计确认是硬门槛

即便是小型行为变更，也要先解决意图、备选方案和可读设计，之后才能开始脚手架、规划或实现。

### 实现与评审职责分离

每个任务都依次经历实现、自审、规格符合性评审、代码质量评审，并在修复后重新评审。

### 验证必须时间新鲜

只有刚刚重新运行证明命令，并读完完整输出和退出状态，才能支持完成声明。

## 用一项真实改动试运行

1. 先完成 brainstorming 和设计确认，再让 Agent 编写实现计划。
2. 优先复用现有隔离环境，修改前运行项目 setup 与 baseline tests。
3. 坚持 red、green、refactor，并在声明完成前重新执行能直接证明结论的命令。

## 采用它会改变工作如何被批准

### 值得承担成本的场景

需要严格规格、隔离实现、TDD、子代理协作与评审闭环的功能开发或 Bug 修复。

### 流程冲突

其仓库把这些工作流定义为 mandatory，而非可选建议。采用前应确认这种流程接管程度符合项目既有规则。

## 参考来源

- [仓库概览](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/README.md)
- [Brainstorming 工作流](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/brainstorming/SKILL.md#the-process)
- [完成前验证](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/verification-before-completion/SKILL.md#the-iron-law)

Source: https://skills.lencx.me/zh/collections/superpowers/index.mdx
