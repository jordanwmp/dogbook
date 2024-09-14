import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import { useNavigation } from '@react-navigation/native'

function HorizontalCard({ dog }) {

    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback 
        onPress={()=> navigation.navigate('Detalhes', {...dog})}
        >
            <View style={styles.card}>
                <Image
                    source={{ uri: dog.image_link }}
                    style={styles.petImage}
                />
                {dog.name.trim().split(' ').length == 1 ? 
                            (<Text style={styles.petName}>{dog.name} </Text>) : 
                            (<Text style={styles.petName}>{dog.name.split(' ')[0]}... </Text>)}

                <Text style={styles.petInfo}>Protection: {dog.protectiveness}</Text>
                <Text styles={styles.petInfo}>Energy: {dog.energy}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default HorizontalCard