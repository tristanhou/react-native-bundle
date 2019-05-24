# react-native-bundle
基于 react-native 官方打包工具 [metro bundler](https://facebook.github.io/metro/) 处理拆包，可以针对组件打包为独立 bundle 文件，以模块方式按需加载，实现增量包热更新。

### install
```
//推荐使用 yarn 安装依赖包， npm 慢的离谱
yarn install | npm install
```

### run 
bundle 文件已经打包, 可以通过以下命令运行, 事先配置好虚拟机或是真机
```
// android
react-native run-android 

// ios 
react-ios run-ios

```
### to bundle
#### android
```
// 基础包
node ./node_modules/react-native/local-cli/cli.js bundle --platform android --dev false --entry-file platformDep.js --bundle-output ./android/app/src/main/assets/platform.android.bundle --assets-dest android/app/src/main/res/ --config /{你的绝对路径}/platform57.config.js

// 业务包
node ./node_modules/react-native/local-cli/cli.js bundle --platform android --dev false --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --config {你的绝对路径}/buz57.config.js
```
#### ios
```
// 基础包
node ./node_modules/react-native/local-cli/cli.js bundle --platform ios --dev false --entry-file platformDep.js --bundle-output ./ios/platform.ios.bundle --assets-dest ./ios/ --config /{你的绝对路径}/platform57.config.js

// 业务包
node ./node_modules/react-native/local-cli/cli.js bundle --platform ios --dev false --entry-file index.js --bundle-output ./ios/index.ios.bundle --assets-dest ./ios/ --config /{你的绝对路径}/buz57.config.js
```
### 说明
如果你的项目没有修改名称并放在了根目录， 那么你的绝对路径应该是 `/react-native-bundle/`
