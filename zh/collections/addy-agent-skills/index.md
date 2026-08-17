---
title: "Addy Osmani’s Agent Skills"
description: "一套生产工程生命周期 Skills，包含明确门槛、反合理化规则、专业角色和分阶段 Brownfield 采用路径。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Addy Osmani’s Agent Skills

[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

标签: #reference · #engineering · #quality

Stars: 87,770 · Forks: 9,404

分析版本: `be42637` · GitHub 快照: 2026年8月17日

> 它的独特性不在目录规模，而在每个工作流都会公开 Agent 常见的合理化借口、红旗和退出证据，让工程纪律可以被检查，而不是停留在口号。

命令将 Define、Plan、Build、Verify、Review 与 Ship 映射到专注 Skills 和专业 personas。using-agent-skills 负责路由，并约束假设、技术反驳、范围和证据；单个 Skill 遵循触发 → 流程 → 合理化借口 → 红旗 → 验证，命令可以组合多项纪律，但 persona 不递归调用 persona。

## 谁决定何时做、如何做、从什么视角做

仓库把流程编排、可复用方法和专家判断分开。这个边界让多 Agent 评审可以被理解，也防止 persona 递归产生隐藏流程。

### Command

_何时_

把 Define、Plan、Build、Verify、Review、Ship 等生命周期阶段映射到多项能力。

### Skill

_如何_

提供一种可复用流程，包含触发条件、步骤、合理化借口、红旗和验证。

### Persona

_谁来判断_

提供一种专家评审视角，但不会递归编排更多 personas。

证据: [生命周期与 Skills 目录](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/README.md) · [Brownfield 采用](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/docs/adoption-guide.md#L73-L128) · [Doubt-driven Review](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/skills/doubt-driven-development/SKILL.md#L49-L181)

## 这些工作流为何可审计

### 可审计的质量门槛

强制步骤、常见借口与反驳、红旗及明确退出证据，让每项工作流都能被检查，而不是停留在口号。

### 分阶段 Brownfield 采用

既有代码库从上下文、只读评审和针对下一次变更的特征测试开始，避免一次加载全部 Skills 或大爆炸重写。

### 独立怀疑循环

小型高风险产物可交给新上下文，只提供产物和契约，再把发现重新与一手内容核对。

## 分阶段采用这套目录

1. 既有代码库先做 context engineering、只读评审，以及围绕下一项改动的 characterization tests。
2. 只加载当前阶段需要的 Skills；仓库明确反对每次会话都注入完整目录。
3. 只需一种专家判断时直接使用 persona，需要组合多种评审纪律时使用命令。

## 按阶段使用生命周期，不要一次全量加载

### 适合

希望在 Greenfield 与 Brownfield 仓库中统一规格、实现、验证、评审和发布门槛的生产型团队。

### 注意边界

这套方法刻意具有规定性且阶段较多。单独复制某个 Skill 可能漏掉根目录共享 references，不同 Harness 的命令、personas、hooks 和插件能力也不完全一致。

## 参考来源

- [生命周期与 Skills 目录](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/README.md)
- [Brownfield 采用](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/docs/adoption-guide.md#L73-L128)
- [Doubt-driven Review](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/skills/doubt-driven-development/SKILL.md#L49-L181)

Source: https://skills.lencx.me/zh/collections/addy-agent-skills/index.mdx
