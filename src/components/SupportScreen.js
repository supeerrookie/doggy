
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

    const SupportScreen = ({navigation}) =>{
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Support Screen</Text>
            <Button title="Support Screen" onPress={() => navigation.navigate("Support")}></Button>
            </View>
        );
    };

export default SupportScreen;