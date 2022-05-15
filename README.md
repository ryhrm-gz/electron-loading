[![npm](https://img.shields.io/npm/v/electron-loading)](https://www.npmjs.com/package/electron-loading)
[![npm](https://img.shields.io/npm/dm/electron-loading)](https://www.npmjs.com/package/electron-loading)

# Usage

## 1. Instsll

```
yarn add electron-loading
```

or

```
npm install electron-loading
```

## 2. Import this library in `preload`

- **main process**

  ```javascript
  const win = new BrowserWindow({
    // ...
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  ```

- **preload.js**

  ```javascript
  import { createLoading } from "electron-loading";

  const { startLoading, stopLoading } = createLoading();
  ```

## 3. Run `startLoading` and expose `stopLoading` to renderer process

- **preload.js**

  ```javascript
  import { useLoading } from "electron-loading";
  import { contextBridge } from "electron";

  const { startLoading, stopLoading } = createLoading();

  startLoading();

  contextBridge.exposeInMainWorld("stopLoading ", stopLoading);
  ```

## 4. Run `stopLoading` on renderer process

- **for React**

  ```javascript
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './App'

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  window.stopLoading();
  ```

## Loader options

- Default option

```javascript
createLoading({
  loader: "plane",
  color: "#000",
  backgroundColor: "#fff",
  // px
  size: 40,
  message: undefined,
  messageColor: undefined,
  // px
  messageFontSize: 14,
  // ms
  duration: 0,
});
```

- Loader type

```
"plane"
"chase"
"bounce"
"wave"
"pulse"
"flow"
"swing"
"circle"
"circle-fade"
"grid"
"fold"
"wander";
```

### Loader designed by

https://tobiasahlin.com/spinkit

### Inspired by

https://github.com/electron-vite/electron-vite-react
