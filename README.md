
# react-native-auto-start-manager-android

## Getting started

`$ npm install react-native-auto-start-manager-android --save`

### Mostly automatic installation

`$ react-native link react-native-auto-start-manager-android`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAutoStartManagerAndroidPackage;` to the imports at the top of the file
  - Add `new RNAutoStartManagerAndroidPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-auto-start-manager-android'
  	project(':react-native-auto-start-manager-android').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-auto-start-manager-android/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-auto-start-manager-android')
  	```


## Usage
```javascript
import RNAutoStartManagerAndroid from 'react-native-auto-start-manager-android';

// TODO: What to do with the module?
RNAutoStartManagerAndroid;
```
  