import React, { useState } from "react";
import {
    Text, 
    View, 
    Image, 
    StyleSheet, 
    Button, 
    TouchableOpacity, 
    Modal
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function Card({title,content,ImageSource, postId}) {
    const [modal, SetModal] = useState(false);
    const navigation = useNavigation()
    return (
        <View style={styles.cardContainer}>
            <Image 
                style={styles.image}
                source={{uri:ImageSource}}
            />
            <TouchableOpacity onPress={()=>{navigation.navigate('singlePost',{postid:postId} )}}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardContent}>{content}</Text>
            </TouchableOpacity>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        console.log(1);
                    }}
                >
                    <Icon name="heart"size={20}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        SetModal(true);
                    }}
                >
                    
                    <Icon name="comment" size={20} />
                </TouchableOpacity>
                
            </View>
            <Modal animationType="slide" visible={modal}>
                <View style={styles.newModal}>
                    <Text> NEW MODAL </Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 400,
        borderRadius: 5,
        backgroundColor: "fff",
        shadowColor: "#000",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        

        
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 5,

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:10,
        paddingLeft: 20,
        alignSelf: "flex-start"

    },
    cardContent: {
        fontSize: 18,
        paddingLeft: 20,
        marginBottom : 20,
        paddingRight : 10
    },
    buttonContainer: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        


    },
    newModal: {
        alignItems: "center",
        justifyContent: "center",
        
    }
});

export default Card;