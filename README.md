# react-media-query

> a package that allows you to see if a given media query matches

[![NPM](https://img.shields.io/npm/v/react-media-query.svg)](https://www.npmjs.com/package/react-media-query) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-media-query
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMediaQuery } from 'react-media-query'

const Example = () => {
  const matches = useMediaQuery('(max-width: 600px)')
  return (
    <div>{matches && <span>Mobile</span>}</div>
  )
}
```

## License

MIT © [](https://github.com/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
