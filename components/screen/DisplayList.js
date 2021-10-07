import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView, ListItemDeleteButton } from 'react-native';
import {firebase} from '../../Firebase/Conflig';
import Home from './Home';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


const DisplayList = () => {


const user = firebase.auth().currentUser
const id = user.uid
  const [array, setArray] = useState([])
  useEffect(() => {
    firebase
    .firestore()
    .collection("Bookmark").doc(id).collection('music')
    .onSnapshot(snapshot => {
      const lists = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setArray(lists)
    })
  }, [])

  const handleOnDelete = user => {
    firebase
      .firestore()
      .collection("Bookmark").doc(id).collection('music')
      .doc(user) 
      .delete()
  }

    const handleUpdate = user => {
    firebase
      .firestore()
      .collection("Bookmark").doc(id).collection('music')
      .doc(user) 
      .delete()
  }

  const displ = array.map(list => {
    return(
    
      <View style={styles.container}>
       <View style={styles.lists}>
            <Text>{list.album}</Text>
            <Text>{list.artist}</Text>
            <Text>{list.track}</Text>
            <Text>{list.gerne}</Text>
            <Text>{list.year}</Text>
            <Text>{list.link}</Text>
            <View>
           <TouchableOpacity onPress={() =>handleOnDelete(list.id)}>
              *
        </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() =>handleUpdate(list.id)}>
              <Text>Update</Text>
            </TouchableOpacity>
            </View>
          </View>
           
     )
   })
   return (

     <View>
      {displ} 
     </View>
   )
}
 const styles= StyleSheet.create({
   container: {
     backgroundColor: '#daa520',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 })

 


export default DisplayList;


  





