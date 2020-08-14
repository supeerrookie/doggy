import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    FlatList,
    RefreshControl,
    ToastAndroid
} from "react-native";
import axios from 'axios';
import { Title } from 'react-native-paper';

import newAPI from '../model/News';

const HomeScreen = ({navigation}) =>{
    const [news, setNews] = useState({});
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(()=>{
        getNewsFromAPI()
    }, []);
  

    function getNewsFromAPI(){
      newAPI.get('/top-headlines?country=id&apiKey=1dee536e30ff43a8a6388fa7b44cc5ad')
      .then(async function (response)  {
           setNews(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }

    const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      if (news.length < 10) {
        try {
          let response = await fetch(
            newAPI.get('/top-headlines?country=id&apiKey=1dee536e30ff43a8a6388fa7b44cc5ad'),
          );
          setNews(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      else{
        ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
        setRefreshing(false)
      }
    }, [refreshing]);

    return (
      <View style={styles.container}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.following}>
              <Text style={styles.text}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popular}>
              <Text style={styles.text}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Explore</Text>
            </TouchableOpacity>
          </View>
         
            <FlatList style={styles.categories} data={news.articles} keyExtractor={(item, index) => 'key' + index}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              contentContainerStyle={styles.list}
              renderItem={({item}) => {
                return( 
                    <View style={styles.column} item={item.source}>
                      <View style={styles.row}>
                        <TouchableOpacity style={styles.box}>
                          <ImageBackground
                            source={{uri:item.urlToImage}}
                            resizeMode="cover"
                            style={styles.image}
                            imageStyle={styles.image_imageStyle}
                          >
                            <View style={styles.filler}></View>
                            <View style={styles.rect}>
                              <Text style={styles.text2}>{item.source.name} | {item.author}</Text>
                              <Text style={styles.paragraph}>{item.title}</Text>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                );
              }}
            />
         
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      // width: 360,
      // height: 660
      flex: 1
      // marginTop: Constants.statusBarHeight,
    },
    row: {
      height: 280,
      flexDirection: "row"
    },
    box: {
      width: 400,
      height: 280,
      backgroundColor: "rgba(230, 230, 230,1)",
      elevation: 0,
      borderRadius: 0,
      overflow: "hidden",
    },
    tabs: {
      height: 80,
      backgroundColor: "rgba(202, 46, 85, 1)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      elevation: 0,
      shadowOffset: {
        height: 0,
        width: 0
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowRadius: 0
    },
    following: {
      width: 100,
      height: 38,
      backgroundColor: "rgba(247,247,247,0)",
      alignSelf: "center",
      borderRadius: 0,
      borderColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      justifyContent: "center"
    },
    text: {
      color: "rgba(255,255,255,1)",
      alignSelf: "center",
    },
    filler: {
      flex: 1
    },
    rect: {
      height: 280,
      backgroundColor: "rgba(21,19,19,0.5)",
      justifyContent: "center"
    },
    column: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
    },
    popular: {
      width: 100,
      height: 38,
      backgroundColor: "rgba(247,247,247,0)",
      alignSelf: "center",
      borderRadius: 0,
      justifyContent: "center"
    },
    text2: {
      color: "rgba(255,255,255,1)",
      alignSelf: "baseline",
      fontSize: 16,
      textTransform: 'uppercase',
      marginLeft:15
    },
    button: {
      width: 100,
      height: 38,
      backgroundColor: "rgba(247,247,247,0)",
      alignSelf: "center",
      borderRadius: 0,
      justifyContent: "center"
    },
    
    categories: {
      backgroundColor: "rgba(255,255,255,1)",
      flex: 1
    },
    
    image: {
      flex: 1
    },
    image_imageStyle: {},
    rect8Filler: {
      flex: 1
    },
    paragraph: {
      color: "white",
      textDecorationColor: "yellow",
      textShadowColor: "red",
      textShadowRadius: 1,
      margin: 24
    },
  });
  

export default HomeScreen;