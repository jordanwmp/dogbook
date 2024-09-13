import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import style from "./style";

import { useNavigation } from "@react-navigation/native";

function ListCard({ dog }) {

    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback
            onPress={ ()=> navigation.navigate('Detalhes', {...dog})}
        >
            <View style={style.card}>
                <View style={style.infoContainer}>
                    <Text style={style.petName}>{dog.name}</Text>
                    <Text>Protectiveness: {dog.protectiveness}</Text>
                    <Text>Energy: {dog.energy}</Text>
                </View>
                <View style={style.imageContainer}>
                    <Image
                        source={{ uri: dog.image_link }}
                        style={style.petImage}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListCard