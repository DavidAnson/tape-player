// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("ok test", (test) => {
  test.ok(1);
  test.ok(2, "2 message");
  test.ok(0);
  test.ok(false, "false message");
  test.end();
});

tape("notOk test", (test) => {
  test.notOk(0);
  test.notOk(false, "false message");
  test.notOk(1);
  test.notOk(2, "2 message");
  test.end();
});

tape("error test", (test) => {
  test.error(0);
  test.error(false, "false message");
  test.error(1);
  test.error(2, "2 message");
  const err = Error("error instance");
  err.stack = "stack";
  test.error(err);
  test.error(err, "error message");
  test.end();
});
