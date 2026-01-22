/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

GoogleSignin.configure({
  webClientId:
    '1076122205215-csqq0gkfg8k9j4hs2upp4cg1oeivbgqg.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
});

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
