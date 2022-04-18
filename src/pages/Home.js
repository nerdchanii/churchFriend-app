import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ScrollViewContext from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView mode="margin">
      <View>
        <Text>Home</Text>
        <Button mode="contained" onPress={() => dispatch(logout())}>
          logout
        </Button>
      </View>
    </SafeAreaView>
  );
}
