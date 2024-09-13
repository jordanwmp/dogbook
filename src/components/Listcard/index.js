import React from "react";
import { View, Text, Image } from 'react-native'
import style from "./style";

function ListCard( { dog } ){
    console.log('dog on list ', dog[0])
    return(
        <View style={style.card}>
            <View style={style.infoContainer}>
                <Text style={style.petName}>{dog.name}</Text>
                <Text>Protectiveness: {dog.protectiveness}</Text>
                <Text>Energy: {dog.energy}</Text>
            </View>
            <View style={style.imageContainer}>
                <Image
                    source={{uri: dog.image_link}}
                    style={style.petImage}
                />
            </View>
        </View>
    )
}

export default ListCard