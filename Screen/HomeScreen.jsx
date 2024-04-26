import React from "react";
import { StatusBar } from "expo-status-bar"
import { View, StyleSheet, Text, ScrollView, Button } from "react-native"
import Card from "../components/card";
import cardData from "../card.json";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        
            <ScrollView >       
                {
                cardData.map((item) => (           
                 <Card 
                    title={item.title} 
                    content={item.content} 
                    ImageSource={item.imageSource} 
                    postId={item.id} 
                 />
                ))
                }       
            </ScrollView>
            
            <StatusBar style="auto" />
      
        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "2%",
    },
    
  });

export default HomeScreen;