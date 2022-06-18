<h1 align="center">kill-port</h1>
<div align="center">
  <strong>Kill the process running on given port</strong>
</div>
<br>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save @devjskit/kill-port
# OR
$ yarn add @devjskit/kill-port
```

## Usage

```js
const kill = require("@devjskit/kill-port");
const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Hi!");
});

server.listen(port, () => {
  setTimeout(() => {
    // Currently you can kill ports running on TCP or UDP protocols
    kill(port, "tcp").then(console.log).catch(console.log);
  }, 1000);
});
```

## API

The module exports a single function that takes a port number as argument. It returns a promise.

## CLI

```sh
$ npm install --global @devjskit/kill-port
# OR
$ yarn global add @devjskit/kill-port
```

Then:

```sh
$ kill-port --port 8080
# OR
$ kill-port 9000
# OR you can use UDP
$ kill-port 9000 --method udp
```

You can also kill multiple ports:

```sh
$ kill-port --port 8080,5000,3000
# OR
$ kill-port 9000 3000 5000
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

## License

Licensed under the MIT License.
