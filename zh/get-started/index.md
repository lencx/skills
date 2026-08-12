---
title: "开始使用"
description: "通过 skills 安装器或原生插件安装一次 lencx-skills。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# 开始使用

请选择 skills 安装器或原生插件中的一种；同时使用会让每个技能重复出现。

## 快速安装（推荐）

```bash
npx skills@latest add lencx/skills
```

## 特定安装（全局）

```bash
# Claude Code
npx skills@latest add lencx/skills -a claude-code -g

# Codex
npx skills@latest add lencx/skills -a codex -g
```

## 原生插件安装

### Codex

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## 更新 Skills

请沿用安装时选择的方式。

### Skills 安装器

```bash
# 更新所选的项目级或全局 Skills
npx skills@latest update
```

只更新项目级 Skills 时使用 `-p`，只更新全局 Skills 时使用 `-g`。

### 原生插件

```bash
# Codex：刷新 marketplace，再从中重新安装
codex plugin marketplace upgrade lencx
codex plugin add lencx-skills@lencx

# Claude Code：更新后请重启 Claude Code
claude plugin update lencx-skills@lencx
```

更新 Codex 插件后请开启新任务；更新 Claude Code 插件后请重启 Claude Code。

安装后，请在任务中说明目标、成功标准与必要约束，再让 agent 选择适用的技能。

Source: https://skills.lencx.me/zh/get-started/index.mdx
