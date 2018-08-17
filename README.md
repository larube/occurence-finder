# occurence-finder

Works on Browser and Node

```
npm run build
```

In `dist` folder, you will find node version(`occurence-finder.js`) and browser version(`occurence-finder.umd.js`)

## API

Module exports a simple function

```javascript

/**
 * findNbOccurencesInText
 *
 * @description
 * Returns the number occurences of a word in a text
 *
 * * @param {string} text
 * * @param {string} needle
 *
 * @returns {int}
 */

function findNbOccurencesInText(text[], needle[])

```

## Usage

```javascript
const occurenceFinder = require('occurrence-finder')

const text = 'Lorem ipsum ...'

const nbOcurrncesInText = occurenceFinder(text, 'lorem')
```

## License

MIT
