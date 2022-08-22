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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import MainRouter from './src/router';
import {useThemeMode} from '@rneui/themed';

const App = ({barstyle}: {barstyle: 'dark-content' | 'light-content'}) => {
  const scheme = useColorScheme();
  const {setMode} = useThemeMode();
  useEffect(() => {
    setMode(scheme === 'dark' ? 'dark' : 'light');
  }, [scheme]);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar />
      <MainRouter />
    </SafeAreaView>
  );
};

export default App;
