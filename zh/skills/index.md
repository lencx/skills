---
title: "技能"
description: "根据当前需要的判断职责选择 lencx-skills 工作流。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# 技能

每项技能都有明确的职责和适用性入口。先描述目标与约束，再让 agent
加载真正负责当前判断的工作流。

## 按职责选择

| 技能 | 适用场景 | 完整规范 |
| --- | --- | --- |
| [Keel](/zh/skills/keel/) | 承重架构的设计、评审或长期治理仍有开放判断。 | [英文规范](/skills/keel/) |
| [Coding Protocol](/zh/skills/coding-protocol/) | 仓库执行或代码证据工作需要按风险控制。 | [英文规范](/skills/coding-protocol/) |

## 组合使用

Keel 负责架构判断，Coding Protocol 负责安全的仓库执行。一个任务同时包含两者时，先由
Keel 收敛承重设计，再由 Coding Protocol 完成已经授权的修改与验证。

当前中文页面提供入口与职责概要；可执行规则仍以仓库中的英文 `SKILL.md` 为准。

工程工作流可以搭配 [Matt Pocock's Skills](https://github.com/mattpocock/skills)，
产品与界面工作可以搭配 [Impeccable](https://github.com/pbakaus/impeccable)。
两者都是独立项目，需要单独安装。

Source: https://skills.lencx.me/zh/skills/index.mdx
