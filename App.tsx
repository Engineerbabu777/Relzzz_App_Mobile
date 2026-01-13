



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId:'1076122205215-csqq0gkfg8k9j4hs2upp4cg1oeivbgqg.apps.googleusercontent.com',
  forceCodeForRefreshToken:true,
  offlineAccess:false
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})