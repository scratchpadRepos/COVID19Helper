# create-react-babel

> _A fork of [npm/init-package-json](https://github.com/npm/init-package-json)_

Initialize an NPM project with Babel set up to build React files

1. 💻 **CLI Command**

```sh
npm init react-babel # npm 6 and up
npx create-react-babel # npm 5 and up
npm install --global create-react-babel # npm 4
```

2. ↳ **Follow prompts**

3. 🎬 **`package.json` is created**

```
Is this OK? (yes)
{
  "name": "test-babel-react",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "babel $npm_package_buildSrcDir -d $npm_package_buildOutDir --presets=react-app/prod",
    "dev": "babel $npm_package_buildSrcDir -d $npm_package_buildOutDir --watch --presets=react-app/dev"
  },
  "author": "",
  "buildSrcDir": "src",
  "buildOutDir": "lib",
  "devDependencies": {
    "babel-cli": "^6",
    "babel-preset-react-app": "^3"
  },
  "dependencies": {},
  "description": ""
}


Your React build system is ready to go!

Now run:

  ⚡️ Install dependencies:
     npm install

  🚦 Production build:
     npm run build

  🚧 Development build (watcher):
     npm run dev
```
