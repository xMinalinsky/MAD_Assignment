import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput,ScrollView} from 'react-native'


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const CreateAcc = ({navigation}) =>{
    return(
        <ScrollView>
        <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
        <View style = {styles.container}>
            <View style = {styles.buttoncontainer}>
            <Text style ={styles.labeltext}>Username</Text>
            <TextInput placeholder='Enter Username' style={styles.InputStyle} ></TextInput>
            <Text style ={styles.labeltext}>Email Address</Text>
            <TextInput placeholder='Enter Email' style={styles.InputStyle} ></TextInput>
            <Text style ={styles.labeltext}>Email Address (Confirmation)</Text>
            <TextInput placeholder='Confirm Email' style={styles.InputStyle}></TextInput>
            <Text style ={styles.labeltext}>Password</Text>
            <TextInput placeholder='Password' style={styles.InputStyle } secureTextEntry={true}></TextInput>
            <Text style ={styles.labeltext}>Confirm Password (Confirmation)</Text>
            <TextInput placeholder='Confirm Password' style={styles.InputStyle} secureTextEntry={true}></TextInput>
            <TouchableOpacity style = {styles.ButtonStyle} onPress={()=>navigation.navigate("Login")}>
                
              <Text style={styles.ButtonText}>Confirm</Text>
            </TouchableOpacity>
            </View>

        </View> 
        </ImageBackground>
        </ScrollView>

    )
}

export default CreateAcc

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
      flex:1
    },
    logocontainer:{
      flex:8
    },
    buttoncontainer:{
      flex:10
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
    labeltext:{
      fontSize: 16,
      color: '#30D5C8',
      backgroundColor:"#FFFF00",
      marginVertical:10,
      borderColor:'#000000',
      borderWidth:1,
      borderRadius:45,
      marginVertical:10,
      width:150,
      textAlign:'center',
      fontWeight:'bold',
      marginRight:200
    },
    InputStyle:{
      backgroundColor:'white',
      width:300,
      borderColor:'#000000',
      borderWidth:3,
    },
    ButtonStyle:{
      backgroundColor:'#FFA500',
      width:300,
      padding:15,
      marginVertical:15,
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