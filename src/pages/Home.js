import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ScrollViewContext from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';

export default function Home() {
  return (
    <SafeAreaView mode="margin">
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
