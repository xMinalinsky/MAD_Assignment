import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import Home from "./screens/Home"
import CreateAcc from "./screens/CreateAcc"
import FPW from "./screens/ForgetPassword"
import Login from "./screens/NewLogin"
import CedricNotes from './screens/CedricNotes'
import Notes from './screens/Notes'
import Session from './screens/Session'
import History from './screens/History'
import SessionInput from './screens/SessionInput'
import HistoryLocation from './screens/HistoryLocation'

const Stack = createStackNavigator()

const FirstScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
             <Stack.Screen
                name="Forgot Password"
                component={FPW}
            />
            <Stack.Screen
            name = "Create Account"
            component = {CreateAcc}
            />
        </Stack.Navigator>
    )
}
export {FirstScreenNavigator}

const SecondScreenNavigator = () => {
    return(
      <Stack.Navigator>
            <Stack.Screen
        name = "Notes"
        component = {Notes}
        />
        <Stack.Screen
        name = "Cedric Notes"
        component = {CedricNotes}
        />
      </Stack.Navigator>
        
    )
}

export {SecondScreenNavigator}

const ThirdScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
        name = "Session"
        component = {Session}
        />
            <Stack.Screen
        name = "Session Input"
        component = {SessionInput}
        />
        

      </Stack.Navigator>
    )   
}

export {ThirdScreenNavigator}

const FourthScreenNavigator = () =>{
    return(
        <Stack.Navigator>
                <Stack.Screen
        name = "History"
        component = {History}
        />
        <Stack.Screen
        name = "Location History"
        component = {HistoryLocation}
        />  
        </Stack.Navigator>
    )
}

export {FourthScreenNavigator}