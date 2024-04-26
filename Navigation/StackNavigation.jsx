import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "../Screen/HomeScreen";
import SinglePost from "../Screen/SinglePostScreen";
// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  
  return (
    
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="singlePost" component={SinglePost}/>
    </Stack.Navigator>
    
    );
}
