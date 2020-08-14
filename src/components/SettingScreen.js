
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

    const SettingScreen = ({navigation}) =>{
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Setting Screen</Text>
            <Button title="Setting Screen" onPress={() => navigation.navigate("Setting")}></Button>
            </View>
        );
    };

export default SettingScreen;