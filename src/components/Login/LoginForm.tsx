import React from 'react';
import Style from './style';
import {Link, useNavigation} from '@react-navigation/native';
import {Button, Divider, Input, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

type Props = {
  onLogin: () => void;
  navigation: any;
};

const LoginForm = ({onLogin, navigation}: Props) => {
  console.log(typeof navigation);
  return (
    <Style.Container>
      <Style.Logo />
      <Style.Header>로그인</Style.Header>
      <Style.EmailInput onChangeText={e => console.log(e)} />
      <Style.PasswordInput onChangeText={e => console.log(e)} />
      <Style.PriorityButton onPress={onLogin} title="로그인" size="lg" />
      <Style.CaptionBox>
        <Style.Caption>비밀번호를 잊으셨나요?</Style.Caption>
        <Style.TextButton>비밀번호 찾기</Style.TextButton>
      </Style.CaptionBox>
      <Style.CaptionBox>
        <Style.Caption>비회원이신가요?</Style.Caption>
        <Style.TextButton>회원가입</Style.TextButton>
      </Style.CaptionBox>
    </Style.Container>
  );
};

export default LoginForm;
