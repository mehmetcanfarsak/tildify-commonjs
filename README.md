# tildify-commonjs

* Convert an absolute path to a tilde path: `/Users/YourUserName/dev` → `~/dev`
* Inspired by [tilify](https://github.com/sindresorhus/tildify) by [Sindre Sorhus](https://github.com/sindresorhus)
* Since tildify uses ES6 syntax, I created this package to for those who use CommonJS environment.

  
## Install

```sh
npm install tildify-commonjs
```

## Usage

```js
const tildify = require('tildify-commonjs');

tildify('/Users/YourUserName/dev');
//=> '~/dev'
```

## Related

See [untildify-commonjs](https://github.com/mehmetcanfarsak/untildify-commonjs) for the inverse.