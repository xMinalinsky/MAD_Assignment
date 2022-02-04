//import React from "react";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default class HandRank extends Component {
  render() {
    return (
        <ScrollView style={styles.scrollView }>
          <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
    <View style = {styles.piccontainer}>
        <Text style={styles.h2}>Royal Flush </Text>
        <Image source={require('../images/poker1.png')} style={{ alignSelf: 'center', }}  />
        </View>
        <View style = {styles.piccontainer}>
        <Text style={styles.h2}>Straight Flush </Text>
        <Image source={require('../images/poker2.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Four of a kind </Text>
        <Image source={require('../images/poker3.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Full House </Text>
        <Image source={require('../images/poker4.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Flush </Text>
        <Image source={require('../images/poker5.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Straight </Text>
        <Image source={require('../images/poker6.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Three of a kind </Text> 
        <Image source={require('../images/poker7.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          <Text style={styles.h2}>Two pair </Text>
        <Image source={require('../images/poker7.png')} style={{ alignSelf: 'center', }}  />
          </View>
          <View style = {styles.piccontainer}>
          
        <Text style={styles.h2}>One Pair </Text>
        <Image source={require('../images/poker7.png')} style={{ alignSelf: 'center', }}  />
        </View>
          </View>
      </ImageBackground>
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  piccontainer:{
    flex:1
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
  backgroundImage:{
    height: windowHeight,
    width: windowWidth,

},
  input: {
    width: 350,
    height: 40,
    backgroundColor: '#F1E9E5',
    margin: 5,
    padding: 4,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  h1: {
    color: '#000000',
    fontSize: 38,
    fontWeight: "bold",
    backgroundColor:'yellow',
    borderColor:'#000000',
      borderWidth:3,
      borderRadius:70,
      width:300,
      padding:25,
      fontWeight:'bold'
  },
  h2: {
    color: '#000000',
    fontSize: 25,
    fontWeight:'bold',
    backgroundColor:'yellow',
    borderColor:'#000000',
      width:230,
       fontWeight:'bold',
       textAlign:'center',
       borderColor:'#000000',
       borderWidth:3,
       borderRadius:70,
       marginLeft:80
   
  },
  image: {
    width: 300,
    height: 220,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor:'black',
  },
  topContainer: {
    flex: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
    margin: 8,
  },
  scrollView: {
    marginHorizontal: 2,
    flex:1
  },
});