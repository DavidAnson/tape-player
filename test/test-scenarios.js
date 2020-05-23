// @ts-check

"use strict";

const fs = require("fs");
const path = require("path");
const execa = require("execa");
const tape = require("tape");
require("../index.js");
const packageJson = require("../package.json");

const tapeVersion =
  packageJson.devDependencies.tape.replace(/^.?(\d+)\.\d+\.\d+$/u, "$1");
const scenarioTestRe =
  new RegExp(`^scenario-[^.]+\\.(?:tape-${tapeVersion}\\.)?js$`, "iu");
const pathPrefixRe = /\s\s\S*[/\\]/gu;
const jsExtensionRe = /.js$/iu;
const crRe = /\r/gu;

const createTestForFile = (file) => (test) => {
  test.plan(2);
  Promise.all([
    execa("node", [ file ], {
      "reject": false,
      "stripFinalNewline": false
    }),
    fs.promises.readFile(
      file.replace(jsExtensionRe, ".stdout"),
      "utf8"
    ).catch(() => null),
    fs.promises.readFile(
      file.replace(jsExtensionRe, `.tape-${tapeVersion}.stdout`),
      "utf8"
    ).catch(() => null)
  ]).
    then((results) => {
      const [ child, stdout, versionedStdout ] = results;
      test.equal(
        child.stdout.replace(crRe, "").replace(pathPrefixRe, "  "),
        (versionedStdout || stdout).toString().replace(crRe, "")
      );
      test.equal(child.stderr, "");
    });
};

const testdir = "./test";
fs.readdirSync(testdir).
  filter((file) => scenarioTestRe.test(file)).
  forEach((file) => tape(file, createTestForFile(path.join(testdir, file))));
