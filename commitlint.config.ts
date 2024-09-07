module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "wip",
                "patch",
                "build",
                "brew",
                "ci",
                "chore",
                "docs",
                "style",
                "refactor",
                "perf",
                "test",
                "revert",
            ],
        ],
    },
}
