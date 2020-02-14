// @ts-check

"use strict";

const fs = require("fs");
const path = require("path");
const execa = require("execa");
const tape = require("tape");
require("../index.js");

const utf8Encoding = { "encoding": "utf8" };
const scenarioTestRe = /^scenario-.+\.js$/iu;
const pathPrefixRe = /\S*[/\\]/gu;
const jsExtensionRe = /.js$/iu;
const crRe = /\r/gu;

const createTestForFile = (file) => (test) => {
  test.plan(2);
  Promise.all([
    execa("node", [ file ], {
      "reject": false,
      "stripFinalNewline": false
    }),
    fs.promises.readFile(file.replace(jsExtensionRe, ".stdout"), utf8Encoding)
  ]).
    then((results) => {
      const [ child, stdout ] = results;
      test.equal(
        child.stdout.replace(crRe, "").replace(pathPrefixRe, ""),
        stdout.toString().replace(crRe, "")
      );
      test.equal(child.stderr, "");
    });
};

const testdir = "./test";
fs.readdirSync(testdir).
  filter((file) => scenarioTestRe.test(file)).
  forEach((file) => tape(file, createTestForFile(path.join(testdir, file))));
