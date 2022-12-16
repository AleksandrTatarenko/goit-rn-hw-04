import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';

import Home from './screens/main/Home';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};
