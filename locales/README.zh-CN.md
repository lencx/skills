<p align="center">
  <img src="../assets/lencx-skills.svg" alt="lencx skills logo" width="160">
</p>

<h1 align="center">lencx-skills</h1>

> 📚 一组为 AI agent 准备的精选技能集合，将隐性的经验沉淀为可靠的执行。

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

需要 Codex CLI 0.146.0 或更高版本。

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

#### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## 发布

在仓库根目录直接验证 Claude Code 插件与 Marketplace：

```bash
claude plugin validate . --strict
```

构建不包含 Claude 专属 manifest 的干净 Codex 提交包：

```bash
./scripts/package-codex-plugin.sh
```

产物位于 `dist/lencx-skills-codex.zip`。

## 技能

- [coding-protocol](../skills/coding-protocol)：按风险分级的编码执行约束，覆盖授权范围、证据、用户工作保护、验证与交付说明（参考：[Andrej Karpathy 的公开观察](https://x.com/karpathy/status/2015883857489522876)）。
- [keel](../skills/keel)：审查并治理由仓库定义的承重事实、边界、契约、迁移、守卫与删除路径。

提示：这些技能与声明式提示词配合最佳——给出成功标准（"让这些测试通过"），而不是步骤式指令。

## 许可证

MIT
