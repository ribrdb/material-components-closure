workspace(name = "com_ribrdb_mccl")

http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "dbe0da2cca88194d13dc5a7125a25dd7b80e1daec7839f33223de654d7a1bcc8",
    strip_prefix = "rules_closure-ba3e07cb88be04a2d4af7009caa0ff3671a79d06",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/ba3e07cb88be04a2d4af7009caa0ff3671a79d06.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/ba3e07cb88be04a2d4af7009caa0ff3671a79d06.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

# omit_com_google_closure_stylesheets = True
closure_repositories()

http_archive(
    name = "build_bazel_rules_nodejs",
    strip_prefix = "rules_nodejs-0.3.1",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_nodejs/archive/0.3.1.tar.gz",
        "https://github.com/bazelbuild/rules_nodejs/archive/0.3.1.tar.gz",
    ],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "npm_install")

node_repositories(package_json = ["//third_party/material-components-web:package.json"])

npm_install(
    name = "mcw_npm",
    package_json = "//third_party/material-components-web:package.json",
)
