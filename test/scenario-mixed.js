// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("passing test", (test) => {
  test.plan(1);
  test.pass();
});

tape("failing test", (test) => {
  test.plan(1);
  test.fail("oops");
});

tape("passing test", (test) => {
  test.plan(1);
  test.pass();
});
