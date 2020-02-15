// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("outer test", (test) => {
  test.pass();
  test.test("inner test", (inner) => {
    inner.pass();
    inner.fail("inner");
    inner.end();
  });
  test.fail("outer");
  test.end();
});
