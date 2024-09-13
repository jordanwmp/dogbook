import { View, Text, Button, Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import styles from './styles'

function Detail() {

    const navigate = useNavigation()
    const route = useRoute()

    const {
        name, 
        image_link, 
        
        energy,
        protectiveness, 
        max_life_expectancy,
        min_weight_male,

        good_with_children,
        good_with_strangers,
        trainability,
        
    } = route.params

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image_link }}
                style={styles.petImage}
            />

            <View style={styles.cardInfo}>

                <Text style={styles.petName} >{name}</Text>

                <Text style={styles.textLabel}>Physical characteristics</Text>    

                <Text style={styles.petInfo}>Energy: {energy}</Text>
                <Text style={styles.petInfo}>Protectiveness: {protectiveness}</Text>
                <Text style={styles.petInfo}>Min weight: {min_weight_male}</Text>
                <Text style={styles.petInfo}>Min weight: {min_weight_male}</Text>


                <Text style={styles.textLabel}>Behavioral characteristics</Text> 

                <Text style={styles.petInfo}>Energy: {energy}</Text>
                <Text style={styles.petInfo}>Protectiveness: {protectiveness}</Text>
                <Text style={styles.petInfo}>Min weight: {min_weight_male}</Text>

            </View>
        </View>
    )
}

export default Detail