import React from "react";
import { Text, TextInput, View } from "react-native";
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import {Tab} from  '@react-navigation/native'


export default function Navigator() {
  return (
    <View
      style={{
        alignContent: "center",
        flex: 1,
      }}
    >
      <Text>navigator</Text>
      <TextInput></TextInput>
    </View>
  );
}

export const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator tabBarOption={
            {
                style:{
                    height:65,
                    justifyContent:'center',
                    paddingVertical
                }
            }
        }>

        </Tab.Navigator>
    )
}