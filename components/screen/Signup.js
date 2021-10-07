import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, SafeAreaView, } from 'react-native';
import Login from './Login';
import Home from './Home';

import {firebase} from '../../Firebase/Conflig'

var db = firebase.firestore();
const Signup = ({navigation}) => {
  const [fullnames, setFullNames] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirmpassword, setConfirmPassWord] = useState('')



const navsign =()=>{
  navigation.navigate('Signup')
};

 const Login = () => {
   firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
     alert("successfully signed up")
   }).catch(error=>{
     alert(error)
   })
 }

 

  return (

      <SafeAreaView style={styles.container}>

    <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, paddingVertical: 10, paddingHorizontal: 80}}> Sign In </Text>
          <TextInput  style={styles.input}
          placeholder={"Full Name"}
          onChangeText={(text) => setFullNames(text)}
          onPress={"Full Name"}
         />
         <TextInput  style={styles.input}
          placeholder={"Email"}
          onChangeText={(text) => setEmail(text)}
          onPress={"Email"}
         />
          <TextInput  style={styles.input}
          placeholder={"Password"}
          onChangeText={(text) => setPassWord(text)}
          onPress={"Password"}
          secureTextEntry
         />
        <TextInput  style={styles.input}
          placeholder={"Confirm Password"}
          onChangeText={(text) => setConfirmPassWord(text)}
          onPress={"Confirm Password"}
          secureTextEntry
         />
<TouchableOpacity style={styles.button} onPress={Login}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        

      
    
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
  input:{
    borderWidth:4,
    borderColor:'gray',
    marginTop:5, 
    backgroundColor: '#f5fffa',
    fontSize: 18,
   
  },
  button :{
    marginTop:25,
    backgroundColor:'#fffff0',
    marginLeft:48,
    width:200,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
});

export default Signup;