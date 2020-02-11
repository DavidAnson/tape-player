// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("single test", (test) => {
  test.plan(1);
  test.ok(true);
});
