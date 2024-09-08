import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

function HorizontalCard( { dog } ) {
    
    return (
        <View style={styles.card}>
            <Image
                source={{uri: dog.image_link}}
                style={styles.petImage}
            />
            <Text style={styles.petName}>{dog.name} </Text>
            <Text style={styles.petInfo}>Protectiveness: {dog.protectiveness}</Text>
            <Text styles={styles.petInfo}>Energy: {dog.energy}</Text>
        </View>
    )
}

export default HorizontalCard