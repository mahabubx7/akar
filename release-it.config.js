module.exports = {
  git: {
    tagName: "v${version}",
    commitMessage: "chore(release): v${version}",
    requireUpstream: true,
    requireCleanWorkingDir: true,
    tagAnnotation: "v${version}",
    push: true
  },
  github: {
    release: true,
    web: true,
    releaseName: "v${version}",
    releaseNotes: "CHANGELOG.md"
  },
  npm: {
    publish: true,
    publishPath: "./",
    skipChecks: false,
    access: "public",
    tag: "latest"
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "feat", section: "Features" },
          { type: "fix", section: "Bug Fixes" },
          { type: "perf", section: "Performance Improvements" },
          { type: "revert", section: "Reverts" },
          { type: "docs", section: "Documentation" },
          { type: "style", section: "Styles" },
          { type: "refactor", section: "Code Refactoring" },
          { type: "test", section: "Tests" },
          { type: "build", section: "Build System" },
          { type: "ci", section: "Continuous Integration" },
          { type: "chore", section: "Chores" },
          { type: "breaking", section: "Breaking Changes", hidden: true }
        ]
      },
      whatBump: (commits) => {
        let level = 2
        let reason = "0 breaking changes, 0 features"

        commits.forEach((commit) => {
          if (commit.notes.length > 0) {
            level = 0
            reason = "There are breaking changes"
          } else if (commit.type === "feat") {
            level = 1
            reason = "There are features"
          }
        })

        return {
          level: level,
          reason: reason
        }
      }
    }
  }
}
