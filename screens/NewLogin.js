import React , { useState, useEffect }from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput,ScrollView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Login = ({navigation}) =>{

  const STORAGE_KEY_NAME = '@save_name'

  const [name, setName] = useState('')

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_NAME, name)
      
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async() =>{
    try{
      const userName = await AsyncStorage.getItem(STORAGE_KEY_NAME)

      if (userName!==null){
        setName(userName)
      }
    }

   catch(e)
    {
      alert("Failed to fetch data from storage")
    }
  }

  const onChangeTextName =userName => setName(userName)

  
const onSubmitEditing = () => {
  if (!name) return

  saveData(name)
  setName('')

}


    return(
      <ScrollView>
        <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
        <View style = {styles.container}>
            
            <Image source={require('../images/pokerapp.jpg')} style={styles.logo}/>
            <Text style={styles.text}>PokerTrack</Text>
            <TextInput placeholder='Username' style={styles.InputStyle} onChangeText = {onChangeTextName}onSubmitEditing={onSubmitEditing}></TextInput>
            <TextInput placeholder='Password' style={styles.InputStyle} secureTextEntry={true}></TextInput>
            <TouchableOpacity style = {styles.ButtonStyle} onPress={()=>navigation.navigate("Home")}>
              <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.OtherButtonStyle} onPress={()=>navigation.navigate("Create Account")}>
              <Text style={styles.ButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.OtherButtonStyle} onPress={()=>navigation.navigate("Forgot Password")}>
              <Text style={styles.ButtonText}>Reset Password</Text>
            </TouchableOpacity>

        </View>
        </ImageBackground>
        </ScrollView>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    backgroundImage:{
        height: windowHeight,
        width: windowWidth,

    },
    logo: {
      height: 200,
      width: 200,
      resizeMode: 'cover',
    },
  
    text: {
      fontSize: 38,
      color: '#30D5C8',
      backgroundColor:"#FFFF00",
      marginVertical:10,
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:35,
      marginVertical:10,
      width:250,
      padding:20,
      fontWeight:'bold'
    },
    newmembertext:{
      fontSize: 38,
      color: '#30D5C8',
      backgroundColor:"#FFFF00",
      marginVertical:10,
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:35,
      marginVertical:10,
      width:350,
      padding:20,
      fontWeight:'bold'
    },
    InputStyle:{
      backgroundColor:'white',
      width:300,
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:50,
      marginVertical:10,
      padding:15
    },
    ButtonStyle:{
      backgroundColor:'#FFA500',
      width:300,
      padding:15,
      marginVertical:5,
      alignItems:'center',
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:50,
    },
    ButtonText:{
      fontWeight:'bold',
      color:'white',
      fontSize:18,
      marginLeft:10
    },
    OtherButtonStyle:{
      backgroundColor:'#4169e1',
      width:150,
      padding:15,
      marginVertical:5,
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:50,
      marginTop:5,
      marginRight:145
    },
  });