import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
const Home = ({navigation}) =>{
    const STORAGE_KEY_NAME = '@save_name'

    const [name, setName] = useState('')
  
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY_NAME, name)
        
        alert('Data successfully saved')
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

  useEffect(() => {
    readData()
  }, [])
    
    return(
        <View style = {styles.container}>
            <View style = {styles.welcomebox}>
                <Text style = {styles.welcomebacktext}>Welcome Back</Text>
                <Text style = {styles.welcomebacktext}>{name}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style = {styles.logouttext}>
                        Log out
                    </Text>
                </TouchableOpacity>

            </View>
           <View style ={styles.usessionbox}>
               <View style = {styles.uheader}>
                   <Text style = {styles.utitle}>Upcoming Sessions</Text>
                  <TouchableOpacity style = {styles.plus}>
                  <Text style = {styles.plustext} >+</Text>
                  </TouchableOpacity>
               </View>
               <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>Date</Text>
                   <Text style = {styles.locationbox}>Location</Text>
                   <Text style = {styles.timebox}>Time</Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>27/11/2021</Text>
                   <Text style = {styles.locationbox}>Marina Bay Sands</Text>
                   <Text style = {styles.timebox}>13:00</Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>30/11/2021</Text>
                   <Text style = {styles.locationbox}>Resort Worlds Genting</Text>
                   <Text style = {styles.timebox}>15:00</Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.timebox}></Text>
                   <TouchableOpacity style = {styles.xbox}>
                       <Text style = {styles.xtext}>X</Text>
                   </TouchableOpacity>
                   </View>
            </View>
            <View style = {styles.psessionbox}>
           <View style = {styles.uheader}>
                   <Text style = {styles.utitle}>Previous Sessions</Text>
               </View>
               <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>Date</Text>
                   <Text style = {styles.locationbox}>Location</Text>
                   <Text style = {styles.timebox}>Buy In</Text>
                   <Text style = {styles.timebox}>Cash Out</Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>17/11/2021</Text>
                   <Text style = {styles.locationbox}>Marina Bay Sands</Text>
                   <Text style = {styles.buyin}>5000</Text>
                   <Text style = {styles.cashoutlose}>2350</Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>13/11/2021</Text>
                   <Text style = {styles.locationbox}>Resort Worlds Genting</Text>
                   <Text style = {styles.buyin}>5000</Text>
                   <Text style = {styles.cashoutwin}>8768</Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}>11/11/2021</Text>
                   <Text style = {styles.locationbox}>Resort Worlds Sentosa</Text>
                   <Text style = {styles.buyin}>7000</Text>
                   <Text style = {styles.cashoutwin}>12100</Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.buyin}></Text>
                   <Text style = {styles.buyin}></Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.buyin}></Text>
                   <Text style = {styles.buyin}></Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.buyin}></Text>
                   <Text style = {styles.buyin}></Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.buyin}></Text>
                   <Text style = {styles.buyin}></Text>
                   </View>
                   <View style = {styles.ubox}>
                   <Text style = {styles.datebox}></Text>
                   <Text style = {styles.locationbox}></Text>
                   <Text style = {styles.buyin}></Text>
                   <Text style = {styles.buyin}></Text>
                   </View>
      

            </View>
        </View>
        

    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    welcomebox:{
        flex:4,
        borderWidth:5,
        borderColor:'black'
    },
    usessionbox:{
        flex:6,
        borderWidth:5,
        borderColor:'black'
    },
    psessionbox:{
        flex:6,
        borderWidth:5,
        borderColor:'black'
    },
    welcomebacktext:{
        fontSize:45,
        color:'black',
        marginLeft:15
    },
    logouttext:{
        fontSize:18,
        marginLeft:20,
        marginTop:10,
        color:'blue'
    },
    ubox:{
        flex:1,
        flexDirection:'row'
    },
    uheader:{
        flex:2,
        flexDirection:'row'
    },
    utitle:{
        flex:7,
        backgroundColor:'black',
        fontSize:28,
        color:'white',
    },
    plus:{
        flex:1,
        backgroundColor:'black',
    },
    plustext:{
        color:'white',
        textAlign:'center',
        fontSize:29
    },
    datebox:{
        flex:6,
        borderWidth:3,
        borderColor:'black',
        textAlign:'center',
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    locationbox:{
        flex:12,
        borderWidth:3,
        borderColor:'black',
        textAlign:'center',
        color:'black',
        fontSize:17,
        fontWeight:'bold'
    },
    timebox:{
        flex:3,
        borderWidth:3,
        borderColor:'black',
        textAlign:'center',
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    xbox:{
        flex:3,
        borderWidth:3,
        borderColor:'black',
    },
    xtext:{
        textAlign:'center',
        fontSize:15,
        color:'black',
        fontWeight:'bold'
    },
    buyin:{
        flex:3,
        borderWidth:3,
        borderColor:'black',
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    },
    cashoutwin:{
        flex:3,
        borderWidth:3,
        borderColor:'black',
        backgroundColor:'green',
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    },
    cashoutlose:{
        flex:3,
        borderWidth:3,
        borderColor:'black',
        backgroundColor:'red',
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
    }
  });