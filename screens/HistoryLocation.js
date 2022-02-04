import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ImageBackground,TextInput, Button,ScrollView} from 'react-native'

const HistoryLocation = ({navigation}) =>{
    return(
        <ScrollView>
                    <View style = {styles.header}>
            <View style = {styles.container}>
                <Text style = {styles.locationtext}>Marina Bay Sands</Text>
            </View>
            <View style = {styles.historybox}>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.flopbox}>Flop</Text>
                    <Text style = {styles.handbox}>Hand</Text>
                </View>
                <View style = {styles.historyboxinput}>
                <Text style = {styles.flopinputbox}>(AS) (5S) (5C) (10C) (QC)</Text>
                <Text style = {styles.handinputbox}>(AC) (AC)</Text>
                </View>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.openingtext}>Opening</Text>
                    <Text style = {styles.openingtext}>Bet 1</Text>
                    <Text style = {styles.openingtext}>Bet 2</Text>
                    <Text style = {styles.openingtext}>Bet 3</Text>
                    <Text style = {styles.openingtext}>Pot</Text>
                </View>
                <View style = {styles.historyboxinput}>
                    <Text style = {styles.openinginput}>150</Text>
                    <Text style = {styles.openinginput}>0</Text>
                    <Text style = {styles.openinginput}>80</Text>
                    <Text style = {styles.openinginput}>300</Text>
                    <Text style = {styles.openinginput}>1400</Text>
                </View>
            </View>
            <View style = {styles.historybox}>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.flopbox}>Flop</Text>
                    <Text style = {styles.handbox}>Hand</Text>
                </View>
                <View style = {styles.historyboxinput}>
                <Text style = {styles.flopinputbox}>(AS) (5S) (5C) (10C) (QC)</Text>
                <Text style = {styles.handinputbox}>(AC) (AC)</Text>
                </View>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.openingtext}>Opening</Text>
                    <Text style = {styles.openingtext}>Bet 1</Text>
                    <Text style = {styles.openingtext}>Bet 2</Text>
                    <Text style = {styles.openingtext}>Bet 3</Text>
                    <Text style = {styles.openingtext}>Pot</Text>
                </View>
                <View style = {styles.historyboxinput}>
                    <Text style = {styles.openinginput}>150</Text>
                    <Text style = {styles.openinginput}>0</Text>
                    <Text style = {styles.openinginput}>80</Text>
                    <Text style = {styles.openinginput}>300</Text>
                    <Text style = {styles.openinginput}>1400</Text>
                </View>
            </View>
            <View style = {styles.historybox}>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.flopbox}>Flop</Text>
                    <Text style = {styles.handbox}>Hand</Text>
                </View>
                <View style = {styles.historyboxinput}>
                <Text style = {styles.flopinputbox}>(AS) (5S) (5C) (10C) (QC)</Text>
                <Text style = {styles.handinputbox}>(AC) (AC)</Text>
                </View>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.openingtext}>Opening</Text>
                    <Text style = {styles.openingtext}>Bet 1</Text>
                    <Text style = {styles.openingtext}>Bet 2</Text>
                    <Text style = {styles.openingtext}>Bet 3</Text>
                    <Text style = {styles.openingtext}>Pot</Text>
                </View>
                <View style = {styles.historyboxinput}>
                    <Text style = {styles.openinginput}>150</Text>
                    <Text style = {styles.openinginput}>0</Text>
                    <Text style = {styles.openinginput}>80</Text>
                    <Text style = {styles.openinginput}>300</Text>
                    <Text style = {styles.openinginput}>1400</Text>
                </View>
            </View>
            <View style = {styles.historybox}>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.flopbox}>Flop</Text>
                    <Text style = {styles.handbox}>Hand</Text>
                </View>
                <View style = {styles.historyboxinput}>
                <Text style = {styles.flopinputbox}>(AS) (5S) (5C) (10C) (QC)</Text>
                <Text style = {styles.handinputbox}>(AC) (AC)</Text>
                </View>
                <View style = {styles.historytextbox}>
                    <Text style = {styles.openingtext}>Opening</Text>
                    <Text style = {styles.openingtext}>Bet 1</Text>
                    <Text style = {styles.openingtext}>Bet 2</Text>
                    <Text style = {styles.openingtext}>Bet 3</Text>
                    <Text style = {styles.openingtext}>Pot</Text>
                </View>
                <View style = {styles.historyboxinput}>
                    <Text style = {styles.openinginput}>150</Text>
                    <Text style = {styles.openinginput}>0</Text>
                    <Text style = {styles.openinginput}>80</Text>
                    <Text style = {styles.openinginput}>300</Text>
                    <Text style = {styles.openinginput}>1400</Text>
                </View>
            </View>
        </View>
        </ScrollView>

    )
}

export default HistoryLocation

const styles = StyleSheet.create({
    header:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:'black'
    },
    historybox:{
        flex:3,
        borderColor:'white',
        borderWidth:5,
    },
    locationtext:{
        fontSize:42,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    flopbox:{
        flex:7,
        color:'white',
        fontSize:28,
        fontWeight:'bold'
    },
    handbox:{
        flex:3,
        color:'white',
        fontSize:28,
        fontWeight:'bold'
    },
    historytextbox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'black'
    },
    openingtext:{
        flex:1,
        color:'white',
        textAlign:'center',
        fontSize:14
    },
    openinginput:{
        flex:1,
        borderColor:'black',
        borderWidth:3,
        textAlign:'center',
        fontSize:20,
    },
    handinputbox:{
        flex:3,
        borderColor:'black',
        borderWidth:5,
        height:50,
        textAlign:'center',
        fontSize:20
    },
    flopinputbox:{
        flex:7,
        borderColor:'black',
        borderWidth:5,
        height:50,
        textAlign:'center',
        fontSize:20
    },
    historyboxinput:{
        flex:4,
        flexDirection:'row',
        height:50,
    },

})