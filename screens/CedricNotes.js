import React, {useEffect, useState} from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput,ScrollView} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY_CNOTES = '@save_cnotes'

const CedricNotes = ({navigation}) =>{

    const [cnotes, setcnotes] = useState('')

    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY_CNOTES, cnotes)
            alert('Note saved!')
        } catch(e){
            alert('Failed to save the data to the storage')
        }
    }


    const readData = async () => {
        try{
            const userCnotes = await AsyncStorage.getItem(STORAGE_KEY_CNOTES)

            
        if (userCnotes !== null){
            setcnotes(userCnotes)
        }
        } catch (e){
            alert('Failed to fetch the data from storage!')
        }
    }

    useEffect(() => {
        readData()
      }, [])

      const clearStorage = async () => {
        try {
          await AsyncStorage.clear()
          alert('Storage successfully cleared!')
        } catch (e) {
          alert('Failed to clear the async storage.')
        }
      }
    

      const onChangeCnotes = userCnotes => setcnotes(userCnotes)

      const onSubmitEditing = () => {
          if (!cnotes) return

          saveData(cnotes)
          setcnotes('')
      }
     return(
     <ScrollView>
        <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
        <View style = {styles.header}>
        <Text style ={styles.name}>Cedric</Text>
     </View>
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profiletext}> Opponent tends to bluff a lot. When bluffing he tends to bet big</Text>
     </View>
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profiletext}> Opponent will play a conventionally when he has a playable hand</Text>
     </View>
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profiletext}> This guy is so stupid i dont know what he is thinking sometimes</Text>
     </View>    
      <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext} onPress={clearStorage}>X</Text>
</TouchableOpacity>
<Text style = {styles.profiletext}>{cnotes} </Text>
     </View>
     
     <View style = {styles.profileheader}>
     <TextInput placeholder='Insert Text Here...'
      style={styles.profiletext} 
      onChangeText={onChangeCnotes} 
      onSubmitEditing={onSubmitEditing} ></TextInput>
     </View>
     <View style = {styles.header2}>
         <TouchableOpacity style = {styles.submitbutton}>
             <Text style ={styles.submittext}>Submit</Text>
         </TouchableOpacity>
     </View> 
        </ImageBackground>
        </ScrollView>
    )
}

export default CedricNotes


const styles = StyleSheet.create({
    backgroundImage:{
        height: windowHeight,
        width: windowWidth,
    },
    header:{
        flex:1,
        backgroundColor:'black',
    },
    header2:{
        flex:2,
        backgroundColor:'white',
        
    },
    profileheader:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        borderColor:'black',
        borderWidth:6,
        
    },
    box:{
        backgroundColor:'white',
        flex:6,

    },
    box2:{
            backgroundColor:'white',
            flex:2,
            borderColor:'black',
            borderWidth:4,
        
    },
    profiletext:{
        fontSize:20,
        color:'black',
        marginTop:5,
        flex:10,
        marginLeft:15
    },
    profilebuttons:{
        flex:2,
    },
    profilename:{
        flex:6,
        fontSize:22,
        color:'black',
        fontWeight:'bold',
        marginTop:10
    },
    buttontext:{
        fontSize:60,
        marginLeft:10,
        color:'black',
        fontWeight:'bold'
    },
    name:{
fontSize:60,
color:'white',
alignSelf:'center',
fontWeight:'bold'
    },
    InsertText:{
        fontSize:20,
        color:'black',
    },
    submitbutton:{
        borderWidth:4,
        borderColor:'black',
        marginTop:10,
        width:300,
        alignSelf:'center'
    },
    submittext:{
        fontSize:24,
        alignSelf:'center',
        fontWeight:'bold',
        color:'black',
    }

})