import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import styles from '../../style';
import Inquiry from './Inquiry';
import TermsOfservice from './TermsOfservice';
import PrivacyPolicy from './PrivacyPolicy';
const NAME = {
  Inquiry: '문의하기',
  PrivacyPolicy: '개인정보 처리방침',
  TermsOfservice: '이용약관',
};
const ClinetIssueService = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Button
        mode="text"
        color="#777777"
        style={styles.button}
        onPress={() => {
          navigation.navigate('개인정보 처리방침');
        }}>
        개인정보 처리방침
      </Button>
      <Button
        mode="text"
        color="#777777"
        style={styles.button}
        onPress={() => {
          navigation.navigate('문의하기');
        }}>
        문의하기
      </Button>
      <Button
        mode="text"
        color="#777777"
        style={styles.button}
        onPress={() => {
          navigation.navigate('이용약관');
        }}>
        이용약관
      </Button>
    </View>
  );
};

export const ClinetIssueServicePages = {
  Inquiry,
  PrivacyPolicy,
  TermsOfservice,
};

export default ClinetIssueService;
