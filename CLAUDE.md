@AGENTS.md
---
name: Conventional commit prefix style
description: All commits must use conventional commit prefixes (fix, feat, chore, refactor, docs, etc.)
type: feedback
---

Always use conventional commit format: `prefix: message`

Prefixes: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `test`, `ci`, etc.

Message language: 基本は日本語。"Add hoge" や "Fix hoge" など4単語以下で簡潔に収まる場合のみ英語でよい。

**Why:** User explicitly requested this convention across all projects.

**How to apply:** Every single commit, no exceptions, regardless of project.

# Git
- コミットメッセージに `Co-Authored-By` を絶対に含めないこと
- 実装完了時は、ユーザーの明示的な指示待ちをせずコミットまで行うこと

# Implementation
- 変更は常に最小限にとどめること（不要なリファクタや広範囲変更を避ける）
- 責務ごとにファイルを分けること（単一ファイルへ過度に詰め込まない）
- Web開発のベストプラクティスに沿い、可読性を最優先した実装にすること
