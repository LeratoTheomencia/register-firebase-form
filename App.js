import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import Signup from './components/screen/Signup';
import Login from './components/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Firebase} from 'firebase';
import Home from './components/screen/Home'
import DisplayList from './components/screen/DisplayList';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const App = () => {





  return (
  
   <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
        name="login"
        component={Login}/>

          <Stack.Screen
        name="signup"
        component={Signup}
        />
        

           <Stack.Screen
          name="Home"
          component={Home}
          />

            <Stack.Screen
          name="DisplayList"
          component={DisplayList}
          />

        </Stack.Navigator>
      </NavigationContainer>

      
  
  

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ba55d3',
    justifyContent: 'center',
    
  }
});

export default App;