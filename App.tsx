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
import {useThemeMode} from '@rneui/themed';
import MainRouter from './src/router';

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
