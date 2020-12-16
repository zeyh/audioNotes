<!-- <p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p> -->

<!-- <h3 align="center">Audio Notes App</h3> -->
<!-- <div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div> -->

<!-- --- -->

<!-- <p align="center"> under construction...
    <br> 
</p> -->

# 🎵Audio Notes App
🔨description under construction...


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)


## 🧐 About <a name = "about"></a>

TODO

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

yarn & expo

```bat
$ brew install yarn //install yarn
$ npm install --global expo-cli //install expo
$ expo init [ProjectName] // in project folder level
$ expo start 
```

### getting started for firebase hosting
```bat
$ yarn global add firebase-tools
$ expo install firebase
$ npx expo-optimize
$ firebase init
$ expo build:web
$ firebase deploy
//test  
$ npx serve web-build //open http://localhost:5000
$ firebase serve --only hosting
```

add the following in package.json
```bat
"scripts": {
  /* ... */
  "predeploy": "expo build:web",
  "deploy-hosting": "npm run predeploy && firebase deploy --only hosting",
}
```

in firebase.json
```bat
//redirecting to the App.js rather than the default public/index.html
"hosting": {
    "public": "web-build",
}
```
### getting started for other libraries
```bat
$ yarn add react-native-paper

// for screens and navigation
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ expo install @react-navigation/native @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
```

## 🔧 Running the tests <a name = "tests"></a>

### installing testing with jest
```bat
$ yarn add jest-expo --dev
$ yarn add react-test-renderer --dev
```

in package.json, include
```bat
"scripts": {
  ...
  "test": "jest"
},
"jest": {
  "preset": "jest-expo"
}
```

## 🎈 Usage <a name="usage"></a>

https://audionote-be6f3.web.app/

## 🚀 Deployment <a name = "deployment"></a>


```bat
$ expo build:web
$ firebase deploy
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Firebase](https://firebase.google.com/) - Database
- [React Native](https://reactnative.dev/) - Mobile App Framework
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Cross-platform Material Design



