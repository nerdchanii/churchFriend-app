import React, { useEffect } from 'react';
import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store/store';
import { ThemeProvider } from '@rneui/themed';
import rneTheme from './src/theme/rne.theme';

const index = () => {
  const scheme = useColorScheme();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={rneTheme}>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <App />
        </NavigationContainer>
      </ThemeProvider>
    </ReduxProvider >
  );
};
AppRegistry.registerComponent(appName, () => index);
