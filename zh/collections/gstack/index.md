---
title: "gstack"
description: "一套基于角色的 Claude Code 操作系统，让产品意图持续流向规划、浏览器 QA、发布、部署和文档。"
language: "zh-CN"
---

> 文档索引
> 完整中文索引：https://skills.lencx.me/zh/llms.txt
> 请先通过索引发现可用页面，再继续读取具体内容。

# gstack

[garrytan/gstack](https://github.com/garrytan/gstack)

标签: #engineering · #design · #delivery

Stars: 127,596 · Forks: 19,216

分析版本: `94993f7` · GitHub 快照: 2026年8月12日

> gstack 与其说是松散的 Skills 目录，不如说是一支被命令化的创业团队：产物从产品追问一路流向真实浏览器 QA、部署健康、发布文档和复盘。

其关联 Sprint 是 Think → Plan → Build → Review → Test → Ship → Reflect。不同命令分别承担组织角色，office-hours 与各类 plan review 的产物会传递给工程、浏览器 QA、发布、部署、canary 和文档阶段；其中多个阶段能够改代码、提交、推送、创建或合并 PR，甚至部署。

## 首尾相连的完整 Sprint

真正的区别是产物流转：上游产品与计划决策会成为工程、QA、发布和运维的输入，而不是在一次对话后被丢弃。

### office-hours

_Think_

追问问题、用户与产品判断。

### 多视角计划评审

_Plan_

CEO、工程、设计、DX 和安全视角分别挑战不同假设。

### 实现

_Build_

已确认的产物指导代码修改。

### 静态与独立评审

_Review_

评审代码，并可按需引入第二模型。

### 浏览器 QA

_Test_

在 Chromium 中复现、修复、重跑并增加回归证据。

### PR → 部署 → Canary

_Ship_

让结果穿过 CI、生产部署和上线后健康检查。

### 文档与复盘

_Reflect_

发现过期文档，并把经验带入下一轮 Sprint。

证据: [Sprint 与角色流水线](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L171-L235) · [Skills 深入说明](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/docs/skills.md)

## 这条 Sprint 如何超越写代码

### 浏览器进入主 QA 流程

QA 驱动真实 Chromium，记录缺陷、以原子提交修复、重跑失败路径并增加回归测试；qa-only 保留纯报告模式。

### 发布闭环不止于 Review

Ship 在开 PR 前审计测试和覆盖率；land-and-deploy 等待 CI 与部署，canary 观察线上，document-release 检查过期文档。

### 规划使用不同组织视角

CEO、工程、设计、DX 与安全评审分别挑战不同假设，不把所有问题压缩成一个泛化 planning prompt。

## 低风险评估这套系统

1. 先用 office-hours → plan-ceo-review → review → qa 低成本体验，再决定是否采用完整 Sprint。
2. 在明确授权修改代码、提交、推送和部署前，优先使用 qa-only 等纯报告模式。
3. 生产事故或严格限定改动范围的任务使用 guard。

## 区分纯报告使用与交付权限

### 最适合

希望一个 Claude Code 环境覆盖产品思考、实现评审、实时 QA、发布、部署、文档和复盘的技术创始人或小团队。

### 权限边界

主要体验围绕 Claude Code，安装可能修改全局或受跟踪的 Agent 状态，且多个命令拥有高权限写操作。About 中的 23 应作为受控描述保留，而不能当作实时清单数量。

## 参考来源

- [Sprint 与角色流水线](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L171-L235)
- [Skills 深入说明](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/docs/skills.md)
- [隐私与遥测](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L444-L456)

Source: https://skills.lencx.me/zh/collections/gstack/index.mdx
