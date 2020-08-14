
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

    const BookmarkScreen = ({navigation}) =>{
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Bookmark Screen</Text>
            <Button title="Bookmark Screen" onPress={() => navigation.navigate("Setting")}></Button>
            </View>
        );
    };

export default BookmarkScreen;