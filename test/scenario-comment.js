// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("comment test", (test) => {
  test.plan(2);
  test.pass();
  test.comment("comment message");
  test.pass();
});
