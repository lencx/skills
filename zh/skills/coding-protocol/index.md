---
title: "Coding Protocol"
description: "面向仓库执行与代码证据工作的风险分级约束。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Coding Protocol

> 本页是中文职责概要。[完整英文规范](/skills/coding-protocol/)与仓库中的
> [`skills/coding-protocol/SKILL.md`](https://github.com/lencx/skills/blob/main/skills/coding-protocol/SKILL.md)
> 是可执行行为的事实源。

Coding Protocol 为仓库范围内的实现、调试、代码评审与 Git 修改提供按风险扩展的执行约束，
重点保护授权边界、目标范围、证据真实性、用户已有工作、环境假设与验证结果。

## 何时使用

- 任务授权了代码、配置、测试或 Git 状态的修改。
- 需要基于仓库证据做诊断或代码评审。
- 任务同时包含专业工作流与实际仓库执行，需要为执行部分提供通用安全边界。

## 何时不使用

纯解释、架构判断或不改变契约的文字编辑不需要进入该协议。它不会因为被加载就扩大用户授权，
也不会替代负责当前专业判断的工作流。

## 核心原则

从证据出发，做最小完整修改，保留用户工作，按风险验证，并如实报告未完成、失败或未验证的部分。

Source: https://skills.lencx.me/zh/skills/coding-protocol/index.mdx
