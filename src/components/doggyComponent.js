import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
} from "react-native";
import axios from 'axios';

const DoggyScreen = () => {
    const [breeds, setBreeds] = useState({});

    axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) =>{
        const breedsObject = data.message;
        const breedKeys = Object.keys(breedsObject);
        const assemledBreedsObject = {};

        breedKeys.map(key => {
            if(breedsObject[key].length > 0){


                breedsObject[key].forEach(subBreed => {
                    assemledBreedsObject[key + '_' + subBreed] = key + '/' + subBreed;
                });
            }else{
                assemledBreedsObject[key] = key;
            }
        });
        // console.log('breeds', assemledBreedsObject);

        setBreeds(assemledBreedsObject);
    });


    const styles = StyleSheet.create({
        container: {
        // width: 360,
        // height: 660
        flex: 1
        // marginTop: Constants.statusBarHeight,
        },
        row: {
        height: 150,
        flexDirection: "row"
        },
        box: {
        width: 200,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 0,
        borderRadius: 0,
        overflow: "hidden"
        },
    });
};

export default DoggyScreen;