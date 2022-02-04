import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput} from 'react-native'


const Session = ({navigation}) =>{
    return(
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headertext}>Marina Bay Sands  </Text>
        </View>
        <View style = {styles.otherbox}>
            <Text style = {styles.buyinbox}>Buy in</Text>
            <Text style = {styles.currentstackbox}> Current Stack</Text>
        </View>
        <View style = {styles.otherbox}>
            <Text style = {styles.numberbox}>5000</Text>
            <Text style = {styles.othernumberbox}> 3650</Text>
        </View>
        <View style = {styles.otherbox}>
            <View style = {styles.flopbox}>
                <Text style = {styles.floptext}>
                    Flop
                </Text>
            </View>
            <Text style = {styles.handbox}>Hand</Text>
        </View>
        <View style = {styles.otherbox}>
                <Text style = {styles.flopinput}>(AS) (5S) (2C) (10C) (QC)</Text>
            <Text style = {styles.handinputwin}>(AC) (AC)</Text>
        </View>
        <View style = {styles.otherbox}>
            <View style = {styles.flopbox}>
                <Text style = {styles.floptext}>
                    Flop
                </Text>
            </View>
            <Text style = {styles.handbox}>Hand</Text>
        </View>
        <View style = {styles.otherbox}>
                <Text style = {styles.flopinput}>(AS) (5S) (2C) (10C) (QC)</Text>
            <Text style = {styles.handinputlose}>(AC) (AC)</Text>
        </View>
        <View style = {styles.otherbox}>
            <View style = {styles.flopbox}>
                <Text style = {styles.floptext}>
                    Flop
                </Text>
            </View>
            <Text style = {styles.handbox}>Hand</Text>
        </View>
        <View style = {styles.otherbox}>
                <Text style = {styles.flopinput}>(AS) (5S) (2C) (10C) (QC)</Text>
            <Text style = {styles.handinputwin}>(AC) (AC)</Text>
        </View>

        <View style = {styles.buttons}>
            <TouchableOpacity  onPress={()=>navigation.navigate("Session Input")}>
                <Text style = {styles.inputbutton}>Input Hand</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {styles.endbutton}>End Session</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.endbox}>

        </View>
    </View>
    )
}

export default Session

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        backgroundColor:'black',
    },
    otherbox:{
        flex:1,
        flexDirection:'row'
    },
    buttons:{
        flex:2,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15
    },
    inputbutton:{
        fontSize:20,
        borderColor:'black',
        borderWidth:3,
        width:150,
        textAlign:'center',
        color:'black'
    },
    endbutton:{
        fontSize:20,
        borderColor:'black',
        borderWidth:3,
        width:200,
        textAlign:'center',
        color:'black'
    },
    endbox:{
        flex:2
    },
    headertext:{
        fontSize:38,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',

    },
    buyinbox:{
        flex:3,
        textAlign:'center',
        backgroundColor:'black',
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        marginTop:1
    },
    currentstackbox:{
        flex:5,
        textAlign:'center',
        backgroundColor:'black',
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        marginTop:1
    },
    numberbox:{
        flex:3,
        borderWidth:5,
        borderColor:'black',
        fontSize:32,
        color:'black',
        fontWeight:'bold',
        textAlign:'center'
    },
    othernumberbox:{
        flex:5,
        borderWidth:5,
        borderColor:'black',
        fontSize:32,
        color:'black',
        fontWeight:'bold',
        textAlign:'center'
    },
    flopbox:{
        flex:7,
        backgroundColor:'black',        
    },
    floptext:{
        color:'white',
        fontSize:34,
        fontWeight:'bold',
        marginLeft:27
    },
    handbox:{
        flex:3,
        backgroundColor:'black',
        color:'white',
        fontSize:34,
        fontWeight:'bold',
    },
    flopinput:{
        flex:7,
        borderColor:'black',
        borderWidth:5,
        color:'black',
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold'
    },
    handinputwin:{
        flex:3,
        borderColor:'black',
        borderWidth:5,
        color:'black',
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold',
        backgroundColor:'green'
    },
    handinputlose:{
        flex:3,
        borderColor:'black',
        borderWidth:5,
        color:'black',
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold',
        backgroundColor:'red'
    }



})