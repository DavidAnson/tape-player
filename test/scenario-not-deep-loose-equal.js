// @ts-check

"use strict";

const tape = require("tape");
require("../index.js");

tape("equal test", (test) => {
  test.equal(1, 1);
  test.equal(1, 1, "1 message");
  test.equal(1, 2);
  test.equal(1, 2, "2 message");
  test.end();
});

tape("notEqual test", (test) => {
  test.notEqual(1, 2);
  test.notEqual(1, 2, "2 message");
  test.notEqual(1, 1);
  test.notEqual(1, 1, "1 message");
  test.end();
});

tape("deepEqual test object", (test) => {
  const aa = { "property": 1 };
  const bb = { "property": 1 };
  const cc = { "property": 2 };
  test.deepEqual(aa, bb);
  test.deepEqual(aa, bb, "bb message");
  test.deepEqual(bb, cc);
  test.deepEqual(bb, cc, "cc message");
  test.end();
});

tape("notDeepEqual test object", (test) => {
  const aa = { "property": 1 };
  const bb = { "property": 1 };
  const cc = { "property": 2 };
  test.notDeepEqual(aa, bb);
  test.notDeepEqual(aa, bb, "bb message");
  test.notDeepEqual(bb, cc);
  test.notDeepEqual(bb, cc, "cb message");
  test.end();
});

tape("deepEqual test array", (test) => {
  const aa = [ 1, 2 ];
  const bb = [ 1, 2 ];
  const cc = [ 1, 2, 3 ];
  test.deepEqual(aa, bb);
  test.deepEqual(aa, bb, "bb message");
  test.deepEqual(bb, cc);
  test.deepEqual(bb, cc, "cc message");
  test.end();
});

tape("notDeepEqual test array", (test) => {
  const aa = [ 1, 2 ];
  const bb = [ 1, 2 ];
  const cc = [ 1, 2, 3 ];
  test.notDeepEqual(aa, bb);
  test.notDeepEqual(aa, bb, "bb message");
  test.notDeepEqual(bb, cc);
  test.notDeepEqual(bb, cc, "cb message");
  test.end();
});

tape("deepLooseEqual test", (test) => {
  const aa = { "property": 1 };
  const bb = { "property": "1" };
  const cc = { "property": 2 };
  test.deepLooseEqual(aa, bb);
  test.deepLooseEqual(aa, bb, "bb message");
  test.deepLooseEqual(bb, cc);
  test.deepLooseEqual(bb, cc, "cc message");
  test.end();
});

tape("notDeepLooseEqual test", (test) => {
  const aa = { "property": 1 };
  const bb = { "property": "1" };
  const cc = { "property": 2 };
  test.notDeepLooseEqual(aa, bb);
  test.notDeepLooseEqual(aa, bb, "bb message");
  test.notDeepLooseEqual(bb, cc);
  test.notDeepLooseEqual(bb, cc, "cc message");
  test.end();
});
