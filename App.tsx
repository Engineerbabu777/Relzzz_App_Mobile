/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, StatusBar } from 'react-native';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

GoogleSignin.configure({
  webClientId:
    '1076122205215-csqq0gkfg8k9j4hs2upp4cg1oeivbgqg.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
});

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent={Platform.OS === 'ios'}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
