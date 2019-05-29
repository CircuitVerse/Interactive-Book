workflow "lint, test, publish" {
  on = "push"
  resolves = ["lint", "test", "publish"]
}

action "install" {
  uses = "actions/npm@master"
  args = ["--unsafe-perm", "ci"]
}

action "lint" {
  needs = "install"
  uses = "actions/npm@master"
  args = "run lint"
}

action "test" {
  needs = "install"
  uses = "actions/npm@master"
  args = ["--unsafe-perm", "test"]
}

action "publish" {
  needs = "test"
  uses = "primer/publish@v1.0.0"
  secrets = [
    "GITHUB_TOKEN",
    "NPM_AUTH_TOKEN",
  ]
}
