import React from "react";
import { Text, View, Image, StyleSheet} from "react-native"
import { useRoute } from "@react-navigation/native";
import postData from "../card.json"
function SinglePost() {
    const route = useRoute();
    const { postid } = route.params;
    const post = postData.filter(item=>item.id==postid)
    
    return ( 
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={post[0].imageSource} 
            />
            <Text style={styles.cardTitle} >{post[0].title}</Text>
            <Text style={styles.cardContent}>{post[0].content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%"
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
    
});

export default SinglePost;