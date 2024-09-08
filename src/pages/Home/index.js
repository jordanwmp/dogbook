import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles  from './styles'
import { useNavigation } from '@react-navigation/native'

function Home() {

    const navigation = useNavigation()
    //navigation.navigate('Lista')

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/images/dog_home.png')}
                    style={styles.image}
                />
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Welcome</Text>
                    <Text style={styles.cardText}>Find the best pet and chose your favorite</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Lista')}
                style={styles.button}
            >
                <Text style={styles.textButton}>Let's Start</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home