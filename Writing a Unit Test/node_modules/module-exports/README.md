# module-exports

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Through stream which wraps input with `module.exports`:

```js
var stream = require('module-exports')
process.stdin.pipe(stream()).pipe(process.stdout)
```

Example input:

`"foo"`

Output:

`module.exports = "foo";`

## Usage

[![NPM](https://nodei.co/npm/module-exports.png)](https://nodei.co/npm/module-exports/)

#### `stream([options])`

Returns a transform stream that prefixes the input with `"module.exports"`, and suffixes with an optional semicolon `;`.

Options:

- `semicolon` default true, whether to end with semicolon

## CLI

You can also use this as a standalone CLI:

`npm i module-exports -g`

```
Usage: module-exports input

Options:
  -a, --asi   do not end with semi colon
  -h, --help  Show help  
```

Example with Unix:

```
printf `expr 10 / 2` | module-exports > five.js
```

This will write the following to `five.js`:

```js
module.exports = 5;
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/module-exports/blob/master/LICENSE.md) for details.
