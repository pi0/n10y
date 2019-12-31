# n10y (Numeronymify)

Converts `internasionalization` to `i18n` (where 18 stands for the number of letters between the first i and the last n in the word internationalization) and `Wombat` to `W4t`!

## Usage

Install:

```
yarn add n10y
npm i n10y
```

Import:

```js
import n10y from 'n10y'

const n10y = require('n10y')
```

Use:

```js
console.log(n10y('wombat'))
```

## Common Abbreviations

- internasionalization (i18n)
- localization (l10n)
- globalization (g11n)
- localizability (l12y)

## Different implementations

Do you have another crazy idea? Open a PR! Everything working is accepted!

First (@pi0):

```js
const i18fy = s => s[0] + (s.length - 2) + s[s.length - 1]
```

Shift/Pop (@pi0):

```js
const i18fy = s => s.split('').shift() + (s.length - 2) + s.split('').pop()
```

Replace (@pimlie)
```js
const i18fy = s => s.replace(/^(\S)(\S*)(\S)$/, (_, st, nd, rd) => st + (nd.length > 1 ? nd.length : nd) + rd)
```

## Related Projects

- [n10y](https://github.com/foriequal0/n10y) - Numeronymify everything

## License

MIT

Inspired by a [tweet](https://twitter.com/IMAC2/status/1211606044788572162) from [@alvarotrigo](https://github.com/alvarotrigo). Also thanks to [Harald Atteneder](https://twitter.com/urbantrout) for package name suggestion.

