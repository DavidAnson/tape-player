// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("end", (test) => {
  test.end("end error");
});

tape("pass fail", (test) => {
  test.pass("pass message");
  test.fail("fail message");
  test.end();
});

tape("skip", (test) => {
  test.plan(3);
  test.pass("before message");
  test.skip("skip message");
  test.pass("after message");
});
