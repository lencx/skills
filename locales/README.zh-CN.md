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
- [keel](../skills/keel)：面向系统结构、边界、契约、迁移和长期代码库健康的架构设计与治理协议；让承重主链长期保持小巧、有主、受检、可删除。

## 兼容性

技能遵循开放的 Agent Skills 格式（带 `name`/`description` frontmatter 的 `SKILL.md`），且不引用任何 agent 专属工具，因此可用于任何支持该格式的 agent——Claude Code、Codex、Cursor 等。`npx skills add` 会处理各 agent 的安装。

提示：这些技能与声明式提示词配合最佳——给出成功标准（"让这些测试通过"），而不是步骤式指令。

## 开发

- `node scripts/validate-skills.mjs`——两层校验：对所有 skill 的普适检查（frontmatter、体积上限、引用文件、章节交叉引用），加上自动推导的形态包（`protocol`：规则 ↔ 失败模式 ↔ evals 覆盖）。CI 在每次 push 和 PR 时运行。
- [`evals/`](../evals)——项目级行为 A/B 评测场景。`evals/<skill>.md` 与 `skills/<skill>` 对应；`evals/manifest.json` 只存放覆盖配置和跨 skill 协作边界等项目级例外。只有明确不属于自动推导形态包的 skill 才使用 `archetype: "none"`。
- 每次已安装的技能内容发生变化时（`SKILL.md` 或该技能目录下的文件），都要同步更新该技能 `SKILL.md` 中的 `version`。
- Claude Code 本地开发：用 symlink 让已安装副本始终跟随仓库（若偏好拷贝方式则改用重跑 `npx skills add`）：

  ```bash
  ln -sfn "$(pwd)/skills/coding-protocol" ~/.claude/skills/coding-protocol
  ln -sfn "$(pwd)/skills/keel" ~/.claude/skills/keel
  ```

## 许可证

MIT
