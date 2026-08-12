---
title: "Matt Pocock’s Skills"
description: "一组面向日常软件工程工作流、可组合且易于调整的 Skills。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Matt Pocock’s Skills

[mattpocock/skills](https://github.com/mattpocock/skills)

标签: #engineering · #delivery

Stars: 213,970 · Forks: 18,468

分析版本: `84fdeff` · GitHub 快照: 2026年8月12日

> 这套集合刻意拒绝成为统一生命周期：显式 orchestrator 负责组合流程，自动选中的 Skill 只贡献一种工程纪律，而仓库 setup 让两者服从项目本身的约定。

grill-with-docs、implement 等用户调用 Skills 负责组织流程；诊断、TDD、research 和 code review 等模型调用 Skills 只提供一项可复用纪律。首次 setup 会先记录 issue tracker、triage 标签，以及领域上下文与 ADR 的位置，后续流程必须遵循这些仓库约定。

## 三种不能混在一起的职责

最重要的设计选择是调用边界。它防止一个自动触发的辅助 Skill 在不知不觉中接管整个工程流程。

### 流程编排器

_用户显式调用_

grill-with-docs、to-spec 与 implement 负责用户明确要求的一段流程。

### 工程纪律

_模型按需调用_

诊断、TDD、research、领域建模与评审分别只提供一种可复用方法。

### Setup 契约

_仓库拥有_

后续流程开始依赖之前，先记录 tracker、triage 词汇，以及 CONTEXT.md 或 ADR 的位置。

证据: [仓库概览](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/README.md#reference) · [仓库 Setup](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/setup-matt-pocock-skills/SKILL.md#process)

## 可以单独借鉴的工程机制

### 领域语言成为仓库状态

grill-with-docs 会在 CONTEXT.md 中磨清术语，并把重要决策写入 ADR，让后续会话沿用代码库自己的名词。

### 诊断从可变红的命令开始

diagnosing Skill 在一个无人值守命令准确复现症状前拒绝推测，之后再最小化复现并检验可证伪假设。

### 架构使用精确模块词汇

codebase-design 在明确且可测试的 seam 上寻找深模块——用小接口隐藏大量行为，而不是泛泛建议重写。

## 先完成仓库 Setup，再选择一种纪律

1. 托管的 Claude 插件和可编辑的 skills.sh 安装方式二选一，避免重复加载。
2. 首次使用时完成仓库 setup，明确 issue tracker、标签和领域文档位置。
3. 困难 Bug 先让一个快速命令稳定复现准确症状，再排列三到五个可证伪假设。

## 选择模块化控制，而不是统一生命周期

### 适合

需要更好规格、领域建模、任务拆分、TDD、困难问题诊断或代码评审的仓库。

### 采用成本

工程 Skills 假设已经完成仓库级 setup；缺少 tracker、标签与文档约定时，默认流程可能与项目错位。

## 参考来源

- [仓库概览](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/README.md#reference)
- [Skills 参考](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/diagnosing-bugs/SKILL.md#phase-1--build-a-feedback-loop)
- [仓库 Setup](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/setup-matt-pocock-skills/SKILL.md#process)

Source: https://skills.lencx.me/zh/collections/matt-pocock-skills/index.mdx
