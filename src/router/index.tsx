import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../views/authSecen/SignInScreen';
import SignupScreen from '../views/authSecen/SignupScreen';
import HomeScreen from '../views/HomeScreen';
import ProfileScreen from '../views/ProfileScreen';
import SettingsScreen from '../views/SettingsScreen';
import {useSelector} from 'react-redux';
import {AuthState} from '../store/reducers/auth.reducer';
import {Text} from '@rneui/themed';
import {View} from 'react-native';
import {AuthRouteStack} from './types';
type Props = {};

const Index = () => {
  const Stack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator<AuthRouteStack>();
  const isLoggedIn = useSelector<{auth: AuthState}>(
    state => state.auth.isLoggedIn,
  );
  if (isLoggedIn) {
    return (
      <View style={{flex: 1}}>
        <Text h1>로그인중</Text>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Text>로그아웃중</Text>
      <AuthStack.Navigator initialRouteName="signin">
        <AuthStack.Screen
          name="signin"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen name="signup" component={SignupScreen} />
      </AuthStack.Navigator>
    </View>
  );
};

export default Index;
