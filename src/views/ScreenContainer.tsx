import {useTheme} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {children: React.ReactNode};

const ScreenContainer = ({children}: Props) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default ScreenContainer;
