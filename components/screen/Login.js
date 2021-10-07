import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import { firebase } from '../../Firebase/Conflig';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navsign = () => {
    navigation.navigate('signup');
  };

  const SignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('successfull logged in');
        {
          navigation.navigate('Home');
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            paddingVertical: 10,
            paddingHorizontal: 100,
          }}
          onPress>
          {' '}
          Login{' '}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={SignIn}>
          <Text> Login </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 30 }}>
          Do you have an account?
          <Button
            style={styles.button}
            type="submit"
            title="Sign Up"
            onPress={navsign}></Button>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#daa520',
  },
  input: {
    borderWidth: 4,
    borderColor: 'gray',
    marginTop: 5,
    backgroundColor: '#f5fffa',
    fontSize: 18,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#fffff0',
    marginLeft: 48,
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
