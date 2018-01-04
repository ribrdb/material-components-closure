licenses(["notice"])

exports_files(["package.json"])

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_library",
    "closure_js_binary",
)

closure_js_library(
    name = "mcw",
    srcs = glob([
        "packages/mdc-animation/*.js",
        "packages/mdc-base/*.js",
        "packages/mdc-checkbox/*.js",
        "packages/mdc-form-field/*.js",
        "packages/mdc-icon-toggle/*.js",
        "packages/mdc-menu/**/*.js",
        "packages/mdc-radio/*.js",
        "packages/mdc-ripple/*.js",
        "packages/mdc-selection-control/*.js",
        "packages/mdc-textfield/**/*.js",
    ]),
    convention = "NONE",
    suppress = [
        "reportUnknownTypes",  #FIXME maybe
        "JSC_JSDOC_MISSING_TYPE_WARNING",  #FIXME
        "JSC_IMPLICITLY_NULLABLE_JSDOC",
        "lintChecks",
        "accessControls",  # TODO: They really should fix this.
    ],
    visibility = ["//visibility:public"],
)

closure_js_library(
    name = "tests_lib",
    srcs = glob([
        "closure_unit_test_externs.js",
        "test/unit/helpers/*.js",
        "test/unit/mdc-animation/*.js",
        "test/unit/mdc-base/*.js",
        "test/unit/mdc-checkbox/*.js",
        "test/unit/mdc-form-field/*.js",
        "test/unit/mdc-icon-toggle/*.js",
        "test/unit/mdc-menu/*.js",
        "test/unit/mdc-radio/*.js",
        "test/unit/mdc-ripple/*.js",
        "test/unit/mdc-selection-control/*.js",
        "test/unit/mdc-textfield/*.js",
    ]),
    convention = "NONE",
    suppress = [
        "reportUnknownTypes",
        "JSC_IMPLICITLY_NULLABLE_JSDOC",
        "JSC_JSDOC_MISSING_TYPE_WARNING",
        "lintChecks",
        "missingOverride",
        "visibility",
        # "missingSourcesWarnings",
    ],
    deps = [":mcw"],
)

closure_js_binary(
    name = "tests",
    compilation_level = "ADVANCED",
    debug = True,
    output_wrapper = "(function(){%output%}).call(this);//# sourceMappingURL=tests.js.map",
    deps = [":tests_lib"],
)

nodejs_binary(
    name = "browserify",
    entry_point = "browserify/bin/cmd",
    node_modules = "@mcw_npm//:node_modules",
)

nodejs_binary(
    name = "karma",
    data = [
        "ribrdb/karma.conf.js",
        ":test_deps",
        ":tests",
    ],
    entry_point = ".bin/karma",
    node_modules = "@mcw_npm//:node_modules",
)

sh_test(
    name = "run_karma",
    size = "small",
    srcs = ["ribrdb/run_karma.sh"],
    data = [
        ":karma",
    ],
    tags = ["local"],
)

genrule(
    name = "build_bel",
    srcs = ["@mcw_npm//:node_modules/bel/browser.js"],
    outs = ["bel.js"],
    cmd = "$(location :browserify) $(location @mcw_npm//:node_modules/bel/browser.js) -s bel -o $@",
    tools = [":browserify"],
)

closure_js_library(
    name = "test_deps_lib",
    srcs = [
        "bel.js",
        "@mcw_npm//:node_modules/chai/chai.js",
        "@mcw_npm//:node_modules/lolex/lolex.js",
        "@mcw_npm//:node_modules/mocha/mocha.js",
        "@mcw_npm//:node_modules/testdouble/dist/testdouble.js",
    ],
    no_closure_library = True,
    suppress = [
        "lintChecks",
        "nonStandardJsDocs",
        "checkTypes",
        "JSC_MISPLACED_ANNOTATION",
    ],
)

closure_js_binary(
    name = "test_deps",
    compilation_level = "WHITESPACE",
    defs = ["--jscomp_off=*"],
    output_wrapper = "(function(){%output%}).call(this);//# sourceMappingURL=test_deps.js.map",
    deps = [":test_deps_lib"],
)
