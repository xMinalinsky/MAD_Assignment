import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput} from 'react-native'


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FPW = ({navigation}) =>{
    return(
        <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
        <View style = {styles.container}>
            
            <Image source={require('../images/pokerapp.jpg')} style={styles.logo}/>
            <Text style={styles.text}>PokerTrack</Text>
            <TextInput placeholder='Enter Email' style={styles.InputStyle} ></TextInput>
            <TextInput placeholder='Confirm Email' style={styles.InputStyle} secureTextEntry={true}></TextInput>
            <TouchableOpacity style = {styles.ButtonStyle} onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.ButtonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>

    )
}

export default FPW

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
  });