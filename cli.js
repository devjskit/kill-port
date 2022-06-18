#!/usr/bin/env node
// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";

const args = require("get-them-args")(process.argv.slice(2));
const kill = require("./");

const verbose = args.verbose || false;
let port = args.port ? args.port.toString().split(",") : args.unknown;
const method = args.method || "tcp";

if (!Array.isArray(port)) {
  port = [port];
}

Promise.all(
  port.map((current) => {
    return kill(current, method)
      .then((result) => {
        console.log(`Process on port ${current} killed`);
        verbose && console.log(result);
      })
      .catch((error) => {
        console.log(`Could not kill process on port ${port}`);
        verbose && console.log(error);
      });
  }),
);
