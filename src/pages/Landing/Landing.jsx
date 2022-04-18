import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import ClientIssueService from '../../components/ClientIssueService';
import {useDispatch} from 'react-redux';
import {login, logout} from '../../redux/actions';
const Landing = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

  const handleLogin = () => {
    if (user.email && user.pwd) {
      console.log(user);
      dispatch(login(user));
    }
  };

  return (
    <SafeAreaView mode="padding" style={{backgroundColor: '#ffffff', flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {}}>
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
                style={styles.input}
                onChangeText={text => setUser({...user, email: text})}
              />
              <TextInput
                label="비밀번호"
                mode="outlined"
                secureTextEntry
                dense={true}
                style={styles.input}
                onChangeText={text => setUser({...user, pwd: text})}
              />
              <Button
                style={styles.button}
                mode="contained"
                onPress={handleLogin}>
                교회 친구 로그인
              </Button>
              <Button style={styles.button} color="#777777" mode="text">
                아이디/비밀번호 찾기
              </Button>
              <Button style={styles.button} mode="text">
                회원가입
              </Button>
            </View>
          </View>
          {/* <ClientIssueService navigation={navigation} /> */}
          <ClientIssueService />
        </View>
      </TouchableWithoutFeedback>
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
  button: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 10,
    padding: 0,
    borderColor: '#777777',
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
    color: '#222222dfg',
    fontSize: 16,
  },
});
