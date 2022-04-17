import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClinetIssueService, {
  ClinetIssueServicePages,
} from '../../components/ClientIssueService';
import Landing from './Landing';

const Stack = createNativeStackNavigator();

function LandingPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="개인정보 처리방침"
        component={ClinetIssueServicePages.PrivacyPolicy}
      />
      <Stack.Screen
        name="문의하기"
        component={ClinetIssueServicePages.Inquiry}
      />
      <Stack.Screen
        name="이용약관"
        component={ClinetIssueServicePages.TermsOfservice}
      />
    </Stack.Navigator>
  );
}

export default LandingPage;
