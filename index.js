
import { NativeModules, Platform } from 'react-native'

const { RNAutoStartManagerAndroid } = NativeModules

function requestPermission() {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      RNAutoStartManagerAndroid.requestPermission()
      .then(isNeed => {
        resolve(isNeed)
      })
      .catch(err => {
        reject(err)
      })
    } else {
      resolve(false)
    }
  })
}

function openAutoStart() {
  if (Platform.OS === 'android') {
    RNAutoStartManagerAndroid.openAutoStart()
  }
}

export {
  requestPermission,
  openAutoStart
}
