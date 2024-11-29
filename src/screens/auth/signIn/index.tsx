import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import LogoSvg from '../../../assets/logo/logo.svg';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../component/Button/Button';

const SignInScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isAutoLogin, setIsAutoLogin] = React.useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LogoSvg />
        <TextInput placeholder="이메일" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="로그인" onPress={() => console.log('로그인')} />
        <View>
          <BouncyCheckbox
            text="로그인 유지"
            isChecked={isAutoLogin}
            onPress={(isChecked: boolean) => setIsAutoLogin(isChecked)}
          />
          <TouchableOpacity>
            <Text>FORGOT PASSWORD? {'>'}</Text>
          </TouchableOpacity>

          <View
            style={{
              alignSelf: 'stretch',
              borderWidth: 0.5,
              marginHorizontal: 10,
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default SignInScreen;
