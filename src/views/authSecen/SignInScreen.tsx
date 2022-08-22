import React from 'react';
import ScreenContainer from '../ScreenContainer';
import LoginForm from '../../components/Login/LoginForm';
import {fetchLogin} from '../../store/reducers/auth.reducer';
import {useAppDispatch} from '../../hooks/hooks';

type Props = {};

const SignInScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  return (
    <ScreenContainer>
      <LoginForm
        navigation={navigation}
        onLogin={() => dispatch(fetchLogin({email: '', password: ''}))}
      />
    </ScreenContainer>
  );
};

export default SignInScreen;
