import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../redux/actions/authActions';
import {RootState} from '../redux/reducers';
import {RootStackNavigationProp} from '../navigation/AppNavigator';
import {Button, TextInput, Text, HelperText} from 'react-native-paper';

const LoginScreen: React.FC<{navigation: RootStackNavigationProp}> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleLogin = () => {
    dispatch(loginRequest(email, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('Signup')}
        style={styles.register}>
        Don't have an account? Sign up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
  },
  register: {
    marginTop: 10,
  },
});

export default LoginScreen;
