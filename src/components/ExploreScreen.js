
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

    const ExploreScreen = ({navigation}) =>{
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Explore Screen</Text>
            <Button title="Explore Screen" onPress={() => navigation.navigate("Details")}></Button>
            </View>
        );
    };

export default ExploreScreen;