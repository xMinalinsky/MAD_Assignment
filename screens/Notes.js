import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput,ScrollView} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Notes = ({navigation}) =>{
    return(
     
        <ImageBackground source ={require('../images/pokerbackground_vectorstock.png')} style={styles.backgroundImage}>
        <View style = {styles.header}>
        <TouchableOpacity style = {styles.box}>
            <Text style ={styles.profiletext}>Create Profile...   + </Text>
        </TouchableOpacity>
     </View>
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profilename}> Alex</Text>
<TouchableOpacity style ={styles.profilebuttons} onPress={()=>navigation.navigate("Cedric Notes")}>
    <Text style = {styles.buttontext}> > </Text>
</TouchableOpacity>
     </View>
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profilename}> Ben</Text>
<TouchableOpacity style ={styles.profilebuttons} onPress={()=>navigation.navigate("Cedric Notes")}>
    <Text style = {styles.buttontext}> > </Text>
</TouchableOpacity>
     </View>
     
     <View style = {styles.profileheader}>

<TouchableOpacity style = {styles.profilebuttons}>
    <Text style={styles.buttontext}>X</Text>
</TouchableOpacity>
<Text style = {styles.profilename}> Cedric</Text>
<TouchableOpacity style ={styles.profilebuttons} onPress={()=>navigation.navigate("Cedric Notes")}>
    <Text style = {styles.buttontext}> > </Text>
</TouchableOpacity>
     </View>
     
     
     <View style = {styles.header2}>
     </View>
        </ImageBackground>
    )
}

export default Notes


const styles = StyleSheet.create({
    backgroundImage:{
        height: windowHeight,
        width: windowWidth,
    },
    header:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        margin:1
    },
    header2:{
        flex:5,
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
        borderColor:'black',
        borderWidth:6,
    },
    box2:{
            backgroundColor:'white',
            flex:2,
            borderColor:'black',
            borderWidth:4,
        
    },
    profiletext:{
        fontSize:43,
        color:'black',
        marginTop:10,
        flex:10,
        marginLeft:5,
        fontWeight:'bold'
    },
    profilebuttons:{
        flex:2,
    },
    profilename:{
        flex:6,
        fontSize:42,
        color:'black',
        fontWeight:'bold',
        marginTop:10
    },
    buttontext:{
        fontSize:60,
        marginLeft:10,
        color:'black',
        fontWeight:'bold'
    }

})