/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store';

const PaperTheme = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#417D7A',
    accent: '#ffd32d',
  },
};

const CombinedDefaultTheme = merge(NavigationDefaultTheme, PaperTheme);
const index = () => {
  return (
    // <ReduxProvider store={store}>
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <App />
      </NavigationContainer>
    </PaperProvider>
    // </ReduxProvider>
  );
};
AppRegistry.registerComponent(appName, () => index);
