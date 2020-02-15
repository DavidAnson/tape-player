# tape-player

> A simple, terse, in-process reporter for the `tape` test harness for Node.js.

## But why tho?

The [Test Anything Protocol (TAP)](https://testanything.org/) used by many test
harnesses is versatile, but it's not much to look at - or rather, it's _too
much_ to look at. There are
[many custom formatters](https://www.npmjs.com/package/tape#pretty-reporters)
that work with the [`tape` test harness](https://github.com/substack/tape), but
most work by
[piping process output](https://en.wikipedia.org/wiki/Pipeline_(Unix)). This is
a useful technique, but interferes with the
[exit status](https://en.wikipedia.org/wiki/Exit_status) of the test harness
which is a problem in scripts that are meant to fail when tests fail (like
[`npm test`](https://docs.npmjs.com/misc/scripts)). (Though there are
[workarounds](https://unix.stackexchange.com/questions/14270/get-exit-status-of-process-thats-piped-to-another)
for this, they are shell- and platform-specific.)

Fortunately, `tape` offers an alternative logging mechanism via its
[`createStream` API](https://www.npmjs.com/package/tape#var-stream--testcreatestreamopts).
This technique is easy to use and runs in-process so it doesn't interfere with
the exit status of the test harness. `tape-player` takes advantage of this to
produce a concise test log that's easy to enable.

## Hook me up!

Install `tape-player` via:

    npm install tape-player --save-dev

And add it to one or more `tape`-based test files via:

    require("tape-player")
    // Ignore return value

That's it - run those tests and you'll see nicely formatted output on the
[standard output device](https://en.m.wikipedia.org/wiki/Standard_streams)!

`tape-player` works with the `tape` CLI or directly in `tape`-based files (as
with `node test-file.js`).

## Show me what you got...

Example output:

    passing test
    failing test
      /home/user/project/test/example.js:15:8
      Message:  oops
      Operator: fail
    passing test

    Tests:    3
    Asserts:  5
    Failures: 1
