import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput} from 'react-native'

const History = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.topbox}>
                <Text style = {styles.datetext}>Date</Text>
                <Text style = {styles.locationtext}>Location</Text>
            </View>
            <View style = {styles.otherbox}>
                <View style = {styles.dateinput}>
                    <Text style = {styles.dateinputtext}>17/11/2021</Text>
                </View>
                <TouchableOpacity style = {styles.locationinput}  onPress={()=>navigation.navigate("Location History")}>
                    <Text style = {styles.locationinputtext}>Marina Bay Sands</Text>
                    <Text style = {styles.arrowbox}> ></Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.otherbox}>
                <View style = {styles.dateinput}>
                    <Text style = {styles.dateinputtext}>18/11/2021</Text>
                </View>
                <TouchableOpacity style = {styles.locationinput} onPress={()=>navigation.navigate("Location History")}>
                    <Text style = {styles.locationinputtext}>Marina Bay Sands</Text>
                    <Text style = {styles.arrowbox}> ></Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.otherbox}>
                <View style = {styles.dateinput}>
                    <Text style = {styles.dateinputtext}>19/11/2021</Text>
                </View>
                <TouchableOpacity style = {styles.locationinput} onPress={()=>navigation.navigate("Location History")}>
                    <Text style = {styles.locationinputtext}>Marina Bay Sands</Text>
                    <Text style = {styles.arrowbox}> ></Text>
                </TouchableOpacity>
            </View>    
            <View style = {styles.otherbox}>
                <View style = {styles.dateinput}>
                    <Text style = {styles.dateinputtext}>20/11/2021</Text>
                </View>
                <TouchableOpacity style = {styles.locationinput} onPress={()=>navigation.navigate("Location History")}>
                    <Text style = {styles.locationinputtext}>Marina Bay Sands</Text>
                    <Text style = {styles.arrowbox}> ></Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.endbox}>

            </View>

        </View>
    )
}

export default History

const styles = StyleSheet.create({
container:{
    flex:1
},
topbox:{
    flex:1,
    flexDirection:'row',
    
},
datetext:{
    flex:4,
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    fontSize:38,
    fontWeight:'bold'
},
locationtext:{
    flex:7,
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    fontSize:38,
    fontWeight:'bold'
},

dateinput:{
    flex:4,
    borderColor:'black',
    borderWidth:4,
},
dateinputtext:{
    textAlign:'center',
    color:'black',
    fontSize:25,
    marginTop:15,
    fontWeight:'bold'
},
locationinput:{
    flex:7,
    borderColor:'black',
    borderWidth:4,
    flexDirection:'row'
},
locationinputtext:{
    flex:7,
    fontSize:36,
    marginLeft:10,
    color:'black',
    fontWeight:'bold'
},
arrowbox:{
    flex:2,
    fontSize:36,
    color:'black',
    fontWeight:'bold',
},
otherbox:{
    flex:2,
    flexDirection:'row'
},
endbox:{
    flex:5
}

})