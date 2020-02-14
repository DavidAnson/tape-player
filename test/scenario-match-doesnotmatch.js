// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("match test", (test) => {
  test.match("string", /s.r.n./u);
  test.match("string", /s.r.n./u, "srn message");
  test.match("string", /n.t/u);
  test.match("string", /n.t/u, "nt message");
  test.end();
});

tape("doesNotMatch test", (test) => {
  test.doesNotMatch("string", /n.t/u);
  test.doesNotMatch("string", /n.t/u, "nt message");
  test.doesNotMatch("string", /s.r.n./u);
  test.doesNotMatch("string", /s.r.n./u, "srn message");
  test.end();
});
