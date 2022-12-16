import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const MapScreen = () => {
    
    return (<View style={styled.container}>
        <Text>MapScreen</Text>
    </View>)
};

const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MapScreen;