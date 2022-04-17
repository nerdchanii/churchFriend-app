import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import ClientIssueService from '../../components/ClientIssueService';

const Landing = ({navigation}) => {
  return (
    <SafeAreaView mode="padding" style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 0.8, width: '80%'}}>
          <Image
            source={require('../../assets/images/logo50.png')}
            style={{alignSelf: 'center', padding: 10, marginTop: 20}}
          />
          <Text style={{...styles.grayText, fontSize: 16}}>
            교회 친구 만들 땐
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#417D7A',
              textAlign: 'center',
              marginVertical: 10,
              marginBottom: 20,
            }}>
            교회 친구
          </Text>
          <TextInput
            label="아이디"
            mode="outlined"
            dense={true}
            style={{
              width: '80%',
              alignSelf: 'center',
              fontSize: 16,
              backgroundColor: '#eeeeee',
            }}
          />
          <TextInput
            label="비밀번호"
            mode="outlined"
            onFocus={() => {}}
            dense={true}
            style={{
              width: '80%',
              alignSelf: 'center',
              color: '#EEEEEE',
              fontSize: 16,
            }}
          />
          <Button
            style={{
              marginTop: 24,
              width: '80%',
              alignSelf: 'center',
              borderRadius: 20,
            }}
            mode="contained">
            교회 친구 로그인
          </Button>
          <Button
            style={{
              marginTop: 12,
              width: '80%',
              alignSelf: 'center',
            }}
            color="#777777"
            mode="text">
            아이디/비밀번호 찾기
          </Button>
          <Button
            style={{
              marginTop: 12,
              width: '80%',
              alignSelf: 'center',
            }}
            mode="text">
            회원가입
          </Button>
        </View>
      </View>
      {/* <ClientIssueService navigation={navigation} /> */}
      <ClientIssueService />
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  grayText: {
    // fontSize: 16,
    fontWeight: 'normal',
    color: '#777777',
    textAlign: 'center',
    marginVertical: 10,
  },
});
