// @ts-check

"use strict";

const fs = require("fs");
const path = require("path");
const execa = require("execa");
const tape = require("tape");
require("../index.js");

const utf8Encoding = { "encoding": "utf8" };

const createTestForFile = (file) => (test) => {
  test.plan(2);
  Promise.all([
    execa("node", [ file ], { "stripFinalNewline": false }),
    fs.promises.readFile(file.replace(/.js$/iu, ".stdout"), utf8Encoding)
  ]).
    then((results) => {
      const [ child, stdout ] = results;
      test.equal(child.stdout, stdout);
      test.equal(child.stderr, "");
    });
};

const testdir = "./test";
fs.readdirSync(testdir).
  filter((file) => (/^scenario-.+\.js$/iu).test(file)).
  forEach((file) => tape(file, createTestForFile(path.join(testdir, file))));
