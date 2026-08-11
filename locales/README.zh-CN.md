<p align="center">
  <img src="../assets/lencx-skills.svg" alt="lencx skills logo" width="160">
</p>

<h1 align="center">lencx-skills</h1>

<p align="center">
  <a href="https://skills.sh/lencx/skills"><img src="https://skills.sh/b/lencx/skills" alt="skills.sh"></a>
</p>

> 💡 源自 lencx 的实践沉淀，让知识成为可靠的执行力。

[English](../README.md) | 中文

## 安装

请选择 skills 安装器或原生插件中的一种；同时使用会让每个技能重复出现。

### 快速安装（推荐）

```bash
npx skills@latest add lencx/skills
```

### 特定安装（全局）

```bash
# Claude Code
npx skills@latest add lencx/skills -a claude-code -g

# Codex
npx skills@latest add lencx/skills -a codex -g
```

### 插件安装

#### Codex

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

#### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## 更新与版本

`@latest` 选择安装器版本，不决定 skill 内容。

```bash
# 更新已安装的 skill
npx skills@latest update keel coding-protocol -p  # 项目
npx skills@latest update keel coding-protocol -g  # 全局

# 可复现安装
npx skills@latest add "lencx/skills#v1.4.0" --skill keel coding-protocol -a codex -g -y        # Codex
npx skills@latest add "lencx/skills#v1.4.0" --skill keel coding-protocol -a claude-code -g -y  # Claude Code
```

`update` 只刷新已安装的 skill；安装新 skill 或切换 tag 时使用 `add`。

## 技能

- [keel](../skills/keel)：面向新建与既有系统的承重架构设计、评审与治理，覆盖权责、契约、依赖与状态边界、恢复、结构变更、漂移、守卫、迁移和删除。
- [coding-protocol](../skills/coding-protocol)：面向仓库范围内的编码执行与代码证据判断的风险分级约束，覆盖授权、目标范围、证据、用户工作保护、环境假设、验证与如实说明（参考：[Andrej Karpathy 的公开观察](https://x.com/karpathy/status/2015883857489522876)）。

### 推荐搭配

`coding-protocol` 与 `keel` 可配合以下技能集合使用：

- [Matt Pocock's Skills](https://github.com/mattpocock/skills)：软件工程工作流。
- [Impeccable](https://github.com/pbakaus/impeccable)：设计与 UI/UX 工作流。

组合使用可扩展产品设计、工程实践、架构治理与风险分级执行的覆盖范围。这些是相互独立的项目，需要分别安装。

提示：使用时，建议说明目标、成功标准和必要约束，再让 agent 自主规划执行步骤。例如：“完成这个修改，并确保相关测试通过。”

## 许可证

MIT
