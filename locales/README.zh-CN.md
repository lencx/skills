# lencx-skills

> 📚 一组为 AI agent 准备的精选技能集合，将隐性的经验沉淀为可靠的执行。

[English](../README.md) | 中文

## 安装

### 快速安装（推荐）

```bash
npx skills add lencx/skills
```

### 特定安装（全局）

```bash
# Claude Code
npx skills add lencx/skills -a claude-code -g

# Codex
npx skills add lencx/skills -a codex -g
```

## 技能

- [coding-protocol](../skills/coding-protocol)：默认应用、按风险分级的编码执行协议（参考：[Andrej Karpathy 的公开观察](https://x.com/karpathy/status/2015883857489522876)）。

## 兼容性

技能遵循开放的 Agent Skills 格式（带 `name`/`description` frontmatter 的 `SKILL.md`），且不引用任何 agent 专属工具，因此可用于任何支持该格式的 agent——Claude Code、Codex、Cursor 等。`npx skills add` 会处理各 agent 的安装。

提示：该协议与声明式提示词配合最佳——给出成功标准（"让这些测试通过"），而不是步骤式指令。

## 开发

- `node scripts/validate-skills.mjs`——结构校验：frontmatter、体积上限、引用文件、章节交叉引用。CI 在每次 push 和 PR 时运行。
- [`evals/coding-protocol.md`](../evals/coding-protocol.md)——行为 A/B 评测场景，每个失败模式对应一条。协议有实质修改后运行并记录结果。
- Claude Code 本地开发：用 symlink 让已安装副本始终跟随仓库（若偏好拷贝方式则改用重跑 `npx skills add`）：

  ```bash
  ln -sfn "$(pwd)/skills/coding-protocol" ~/.claude/skills/coding-protocol
  ```

## 许可证

MIT
