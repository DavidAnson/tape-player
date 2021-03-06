// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("first test", (test) => {
  test.plan(1);
  test.pass();
});

tape.skip("test.skip test", (test) => {
  test.plan(2);
  test.pass();
  test.pass();
});

tape("opts.skip test", { "skip": true }, (test) => {
  test.plan(2);
  test.pass();
  test.pass();
});

tape("last test", (test) => {
  test.pass();
  test.end();
});
