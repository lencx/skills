---
title: "Anthropic Agent Skills"
description: "Anthropic 公开的 Agent Skills 示例与参考实现，覆盖创意、技术、企业和文档工作流。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Anthropic Agent Skills

[anthropics/skills](https://github.com/anthropics/skills)

标签: #reference · #quality

Stars: 168,206 · Forks: 20,038

分析版本: `f17010c` · GitHub 快照: 2026年8月12日

> 它不是一套软件交付制度。它真正有价值的地方，是用一手文件展示 Skill 如何打包、渐进加载，以及如何与 baseline 对照评估。

每项 Skill 都是可独立加载的目录：名称与 description 常驻用于发现，触发后才加载 SKILL.md，脚本、references 与 assets 按需使用。仓库中的 skill-creator 还会让真实提示分别运行启用 Skill 与 baseline，评估断言和输出质量，再根据人工反馈迭代。

## 什么内容会在何时进入上下文

Skill 的目录结构本质上是一份上下文预算契约：发现成本要低，触发后才加载主流程，较重的知识和工具只在任务真正需要时出现。

### name + description

_始终可见_

发现元数据同时告诉模型这个 Skill 做什么，以及何时应该选择它。

### SKILL.md

_触发之后_

只有触发条件匹配后，主决策流程才进入上下文。

### scripts / references / assets

_按需使用_

确定性操作、可选知识和输出素材保持在主提示之外，直到被引用或执行。

证据: [基础 Skill 模板](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/template/SKILL.md) · [Skill Creator](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/skills/skill-creator/SKILL.md#test-cases)

## 这个仓库真正教会你的 Skill 设计

### 三级上下文加载

发现元数据始终可见，触发后才加载 SKILL.md，附带资源只在真正需要时进入上下文或执行。

### 行为与 Baseline 对照评估

skill-creator 让真实提示分别启用与不启用 Skill，评估断言、输出、成本和耗时，并提供人工 Review。

### 从极简到生产型示例

极简模板与 Claude 实际使用、包含脚本和素材的文档工作流并列，也明确揭示不同许可边界。

## 先评估行为，再润色文字

1. 从模板开始，description 要同时说明 Skill 做什么，以及什么情况下应当触发。
2. 把主流程留在 SKILL.md，将重复操作、按需知识和输出素材分别放入 scripts、references 与 assets。
3. 把触发失败与输出失败分开诊断：description 使用触发 eval，正文使用任务断言和人工 Review。

## 把它当作参考资料库，而不是流程接管者

### 适合在

学习 Agent Skill 结构、创建 Claude Skill，或研究成熟的文档与工作流实现。

### 不要默认

Anthropic 明确说明多数内容用于演示与教育。应在自己的环境中验证；部分文档 Skills 仅为 source-available。

## 参考来源

- [仓库概览](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/README.md#about-this-repository)
- [基础 Skill 模板](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/template/SKILL.md)
- [Skill Creator](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/skills/skill-creator/SKILL.md#test-cases)

Source: https://skills.lencx.me/zh/collections/anthropic-agent-skills/index.mdx
