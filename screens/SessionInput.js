import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput, Button} from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const SessionInput = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.container}>
                <Text style = {styles.titletext}>Marina Bay Sands</Text>
            </View>
            <View style = {styles.container}>
            <View style = {styles.container}>
                <Text style = {styles.obtext}>Opening Bet</Text>
                <TextInput style = {styles.opinput}></TextInput>
            </View>
           </View>
           <View style = {styles.container}>
           <Text style = {styles.floptext}>Flop</Text>
               <View style = {styles.flopbox}>
               <TextInput style = {styles.opinput}></TextInput>
               <TextInput style = {styles.opinput}></TextInput>
               <TextInput style = {styles.opinput}></TextInput>
               </View>
           </View>
           <View style = {styles.container}>
           <Text style = {styles.obtext}>Bet 1</Text>
                <TextInput style = {styles.opinput}></TextInput>
           </View>
           <View style = {styles.containerbox}>
           <View style = {styles.flopbox}>
           <Text style = {styles.floptext}>Turn</Text>
           <Text style = {styles.floptext}>Bet 2</Text>
           </View>
           </View>
           <View style = {styles.container}>
               <View style = {styles.flopbox}>
               <Text style = {styles.obtext}>Turn</Text>
               <Text style = {styles.obtext}>Bet 2</Text>
               </View>
              <View style = {styles.flopbox}>
              <TextInput style = {styles.opinput}></TextInput>
              <TextInput style = {styles.opinput}></TextInput>  
              </View>
           </View>
           <View style = {styles.container}>
               <View style = {styles.flopbox}>
               <Text style = {styles.obtext}>River</Text>
               <Text style = {styles.obtext}>Bet 3</Text>
               </View>
              <View style = {styles.flopbox}>
              <TextInput style = {styles.opinput}></TextInput>
              <TextInput style = {styles.opinput}></TextInput>  
              </View>
           </View>
           <View style = {styles.buttonbox}>
               <View style = {styles.flopbox}>
               <TouchableOpacity>
                      <Text style = {styles.winbox}> Win</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style = {styles.losebox}>Lose</Text>
                  </TouchableOpacity>
               </View>

               <View style = {styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Session")}>
                        <Text style = {styles.inputbox}>Input Hand</Text>
                    </TouchableOpacity>

               </View>
           </View>

        </View>
    )
}


export default SessionInput


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    openingbox:{
        flex:1
    },
    flopbox:{
        flex:1,
        flexDirection:'row',
    },
    buttonbox:{
        flex:2,
        justifyContent:'space-around',
        alignItems:'center'
    },
    titletext:{
        color:'white',
        backgroundColor:'black',
        fontSize:48,
        fontWeight:'bold',
        textAlign:'center',
        flex:1,  
    },
    obtext:{
        color:'white',
        backgroundColor:'black',
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        flex:2
    },
    opinput:{
        flex:1,
        borderColor:'black',
        borderWidth:5,
        textAlign:'center',
        
    },
    floptext:{
        color:'white',
        backgroundColor:'black',
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        flex:1,
    },
    winbox:{
        borderColor:'black',
        borderWidth:5,
        width:70,
        backgroundColor:'green',
        textAlign:'center',
        marginTop:20
    },
    losebox:{
        borderColor:'black',
        borderWidth:5,
        width:70,
        backgroundColor:'red',
        textAlign:'center',
        marginTop:20
    },
    inputbox:{
        borderColor:'black',
        borderWidth:5,
        textAlign:'center',
        width:140
    }

})