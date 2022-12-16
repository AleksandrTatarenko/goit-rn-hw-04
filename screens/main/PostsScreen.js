import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const PostsScreen = ({}) => {
    
    return (<View style={styled.container}>
        <View style={styled.container}>
            <Text>PostsScreen</Text>
        </View>
    </View>)
};

const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default PostsScreen;