# react-interval-hook

A custom React Hook to use `setInterval` efficiently.

## Installation
copy the script to your project (for example in hook folder)

## Usage

Here is a basic setup.

```js
useInterval(callback, delay, limit);
```

### Parameters

Here are the parameters that you can use.

| Parameter  | Description                                                                               |
| :--------- | :-----------------------------------------------------------------------------------------|
| `callback` | A function that will be called every `delay` milliseconds.                                |
| `delay`    | A number representing the delay in msecs. Set to `null` to "pause" the interval.          |
| `limi`     | Limit the number of run. Set to `null` to "run" the interval infinitely.                  |

### Return

This hook returns the intervalk if you need to clear it manually.

## Example

Let's look at some sample code. Here is a `Counter` component that counts up every second.

```js
import React, { useState } from 'react';
import useInterval from '../hooks/use-interval';

const Counter = ({ delay = 1000 }) => {
  const [counter, setCounter] = useState(0);

  useInterval((count) => {
    setCounter(count);
  }, delay);

  return <h1>{counter}</h1>;
};

export default Counter;
```

## Live demo

You can view/edit the sample code above on CodeSandbox.

[![Edit demo app on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)]([https://codesandbox.io/s/use-interval-fmy1i5-fmy1i5](https://codesandbox.io/s/use-interval-fmy1i5-fmy1i5))

## License

**[MIT](LICENSE)** Licensed

