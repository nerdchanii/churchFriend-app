import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from './ScreenContainer';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ScreenContainer>
      <Text style={styles.text}>HomeScreen</Text>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    backgroundColor: 'red',
  },
});
