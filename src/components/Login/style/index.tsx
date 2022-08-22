import {
  useTheme,
  Image,
  Text,
  Input,
  InputProps,
  Button,
  ThemeConsumer,
  TextProps,
  ButtonProps,
  useThemeMode,
  ImageProps,
} from '@rneui/themed';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Container = ({children}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.conatiner} behavior="height">
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const Header = ({children}: Props) => {
  return (
    <Text h1 style={{paddingVertical: 16}}>
      {children}
    </Text>
  );
};

const EmailInput = ({onChangeText, value}: InputProps) => {
  return (
    <Input onChangeText={onChangeText} value={value} placeholder="Email" />
  );
};

const PasswordInput = ({onChangeText, value}: InputProps) => {
  return (
    <Input
      onChangeText={onChangeText}
      value={value}
      placeholder="Password"
      secureTextEntry={true}
    />
  );
};

const CaptionBox = ({children}: Props) => {
  return <View style={styles.cationBox}>{children}</View>;
};

const Caption = ({children, onPress}: TextProps) => {
  return (
    <Text h4 onPress={onPress}>
      {children}
    </Text>
  );
};

const PriorityButton = ({size, title, onPress}: ButtonProps) => {
  return <Button onPress={onPress} type="solid" title={title} size={size} />;
};

const TextButton = ({children, onPress, ...props}: TextProps) => {
  const {theme} = useTheme();
  return (
    <Text
      h4
      {...props}
      onPress={onPress}
      {...props}
      style={{color: theme.colors.grey3}}>
      {children}
    </Text>
  );
};

const Logo = () => {
  return (
    <Image
      source={require('../../../assets/images/logo50.png')}
      containerStyle={{
        alignSelf: 'center',
        height: 50,
        width: 50,
        marginTop: 16,
      }}
      style={styles.logo}
    />
  );
};

export default {
  Logo,
  Container,
  EmailInput,
  PasswordInput,
  Header,
  PriorityButton,
  CaptionBox,
  Caption,
  TextButton,
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingVertical: 20,
    padding: 16,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  cationBox: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});
