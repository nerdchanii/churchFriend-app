/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import style from './src/style';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {Colors, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/layout/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sign from './src/components/auth';
import {Button, DarkTheme} from 'react-native-paper';

const Stack = createNativeStackNavigator();
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
import {
  Link,
  NativeRouter,
  Route,
  Routes,
  useNavigate,
} from 'react-router-native';
import Landing from './src/pages/Landing';
import Home from './src/pages/Home';
import {useSelector} from 'react-redux';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const loggined = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {!loggined && <Landing />}
      {loggined && <Home />}
    </>
  );
};

export default App;
