///
/*
"release-it": {
    "git": {
      "tagName": "v${version}",
      "commitMessage": "chore(release): v${version}",
      "requireUpstream": true,
      "requireCleanWorkingDir": true,
      "tagAnotation": "v${version}",
      "push": true
    },
    "github": {
      "release": true,
      "web": true
    },
    "npm": {
      "publish": true,
      "publishPath": "./",
      "skipChecks": false
    },
    "plugins": {
      "@release-it/conventional-changelog": {
        "preset": "angular",
        "infile": "CHANGELOG.md",
        "whatBump": {
          "level": 2,
          "reason": "0 breaking changes, 0 features"
        }
      }
    }
  },
*/
///
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
    web: true
  },
  npm: {
    publish: true,
    publishPath: "./",
    skipChecks: false
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md",
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
