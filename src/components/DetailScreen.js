import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Button,
    Text,
  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

    const DetailScreen = ({navigation}) =>{
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
            <Button title="Back" onPress={() => navigation.goBack()}></Button>
            </View>
        );
    };

export default DetailScreen;