// @ts-check

"use strict";

const tape = require("tape");
const { EOL } = require("os");
const { inspect } = require("util");
const { stdout } = process;
const inspectOptions = {
  "breakLength": Infinity,
  "compact": true
};

let tests = 0;
let assertions = 0;
let failures = 0;

tape.
  createStream({ "objectMode": true }).
  on("data", (data) => {
    if (data.type === "test") {
      tests++;
      stdout.write(`${data.name}${EOL}`);
    } else if (typeof data.id !== "undefined") {
      assertions++;
      if (!data.ok) {
        failures++;
        const lines = [
          `  ${data.file}`,
          `  Message:  ${data.name}`,
          `  Operator: ${data.operator}`
        ];
        if (Object.prototype.hasOwnProperty.call(data, "expected")) {
          lines.push(`  Expected: ${inspect(data.expected, inspectOptions)}`);
        }
        if (Object.prototype.hasOwnProperty.call(data, "actual")) {
          lines.push(`  Actual:   ${inspect(data.actual, inspectOptions)}`);
        }
        lines.push("");
        stdout.write(lines.join(EOL));
      }
    }
  }).
  on("close", () => {
    stdout.write([
      "",
      `Tests:    ${tests}`,
      `Asserts:  ${assertions}`,
      `Failures: ${failures}`,
      ""
    ].join(EOL));
  });
