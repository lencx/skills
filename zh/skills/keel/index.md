---
title: "Keel"
description: "面向承重架构设计、评审与治理的工作流。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# Keel

> 本页是中文职责概要。[完整英文规范](/skills/keel/)与仓库中的
> [`skills/keel/SKILL.md`](https://github.com/lencx/skills/blob/main/skills/keel/SKILL.md)
> 是可执行行为的事实源。

Keel 用于新建与既有系统中的承重架构判断，覆盖责任与决策权、接口与契约、依赖和状态边界、
恢复机制、结构切面、守卫与例外、漂移与腐化、迁移、退役、删除以及重写风险。

## 何时使用

- 仍需选择或比较一个会长期影响系统的结构方向。
- 需要评审既有架构是否满足已声明的标准与边界。
- 需要决定恢复、保留、迁移、退役或移除某项架构安排。

## 何时不使用

当架构已经由请求与有效约束明确固定，剩余工作只是实现、调试、调优或验证时，Keel
会退出并把任务交给相应执行工作流。

## 核心边界

Keel 负责承重架构判断，不会因为自动加载而获得修改权限，也不会接管领域工作流的专业方法、
执行流程或完成标准。

Source: https://skills.lencx.me/zh/skills/keel/index.mdx
