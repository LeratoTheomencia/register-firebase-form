import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView } from 'react-native';
 import {firebase} from '../../Firebase/Conflig';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DisplayList from './DisplayList';

function Bookmark({navigation}) {

  const [album, setAlbum] = useState('');
  // const handleChangeAlbum = e => {setAlbum(e.target.value); };

  const [artist, setArtist] = useState('');
  // const handleChangeArtist = e => { setArtist(e.target.value); };

  const [track, setTrack] = useState('');
  // const handleChangeTrack = e => { setTrack(e.target.value); };

  const [genre, setGenre] = useState('');
  // const handleChangeGenre = e => { setGenre(e.target.value); };

  const [year, setYear] = useState('');
  // const handleChangeYear = e => { setYear(e.target.value); };
  
  const [link, setLink] = useState('');
  // const handleChangeLink = e => { setLink(e.target.value); };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.handleSubmit(album,artist,track,genre,year,link); 
  
  // };

  // const handleDelete = e => {
  //   e.preventDefault();
  //   props.handleDelete (album,artist,track,genre,year,link); 
  
  // };
const NextPage = () => {
  {navigation.navigate('DisplayList')} 
}

  const [uid, setUid] = useState();

useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user)
              setUid(user.uid)
            }
          });
        //   Code below is to store the data that was inserted into the bookmark
    })
     var db = firebase.firestore();
   const setData =()=>{
    db.collection("Bookmark").doc(uid).collection('music').add({artist:artist,album:album,year:year,track:track,genre:genre,link:link}).then(() => {
        alert('Bookmark added successfully')
    })
    .catch((error) => {
        alert.error("Error adding bookmark: ", error);
    });
   }
//    Code below is to retrieve the data that was inserted into the bookmark
 const displayData = () =>{
     alert("displaying data")
    firebase.firestore().collection("Bookmark").doc('rKTBTf8ADZZ7IdFkfMbtRJQAH3D2').collection('music').get().then((data)=>{
     data.docs.forEach((item)=>{
      console.log(item.data())
     })
    }).catch((error)=>{
     console.log(error)
    })
 }  

  return (

    <SafeAreaView style={styles.container}>

    <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, paddingVertical: 10, paddingHorizontal: 80}}> Bookmark </Text>
          <TextInput  style={styles.input}
          placeholder={"album"}
          onChangeText={(text) => setAlbum(text)}
          
         />
         <TextInput  style={styles.input}
          placeholder={"artist"}
          onChangeText={(artist) => setArtist(artist)}

         />
          <TextInput  style={styles.input}
          placeholder={"track"}
          onChangeText={(track) => setTrack(track)}
         />
        <TextInput  style={styles.input}
          placeholder={"genre"}
          onChangeText={(genre) => setGenre(genre)}
         />
         <TextInput  style={styles.input}
          placeholder={"year"}
          onChangeText={(year) => setYear(year)}
         />
         <TextInput  style={styles.input}
          placeholder={"link"}
          onChangeText={(link) => setLink(link)}
         />
<TouchableOpacity style={styles.button} onPress={setData} >
          <Text> Add Bookmark</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>NextPage()} >
          <Text> View Display </Text>
        </TouchableOpacity>
        
   </View>

  </SafeAreaView>
    // <div className=" container form-group mt-6">
    //   <form onSubmit={handleSubmit} id="contact-form">
    //   <h2 className="formTitle">Favorite Playlist</h2>

    //     <input
    //       type="text"
    //       placeholder="Album"
    //       className="form-control w-75"
    //       onChange={handleChangeAlbum}
    //     />
    //     <input
          
    //       type="text"
    //       placeholder="Artist"
    //       className="form-control w-75"
    //       onChange={handleChangeArtist}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Track"
    //       className="form-control w-75"
    //       onChange={handleChangeTrack}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Genre"
    //       className="form-control w-75"
    //       onChange={handleChangeGenre}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Year"
    //       className="form-control w-75"
    //       onChange={handleChangeYear}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Link"
    //       className="form-control w-75"
    //       onChange={handleChangeLink}
    //     />
    //     <div className="leftContent">
    //       <form> 
            
    //         <div>
             
    //         </div>
          
    //       </form>
    //     <input type="submit" value="Add" className="mt-3" />{' '}
    //     <input type="submit" value="Reset" className="mt-3" />{' '}
    //     </div>
    //   </form>
    // </div>
  );
}

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
    textAlign:"center",
   
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

export default Bookmark;