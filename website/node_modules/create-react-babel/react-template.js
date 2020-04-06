// Template for React App package.json
// Create prompts in default-input.js

module.exports = {
  "buildOutDir": "lib",
  "buildSrcDir": "src",
  "scripts": {
    "build": "babel $npm_package_buildSrcDir -d $npm_package_buildOutDir --presets=react-app/prod",
    "dev": "babel $npm_package_buildSrcDir -d $npm_package_buildOutDir --watch --presets=react-app/dev"
  },
  "devDependencies": {
    "babel-cli": "^6",
    "babel-preset-react-app": "^3",
  }
}
