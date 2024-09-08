import { View, Text, FlatList } from 'react-native'

import styles from './styles'

import { useNavigation } from '@react-navigation/native'

import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

import data from '../../data/data'

function Dogs(){

    const navigation = useNavigation()

    function callDetail(){
        navigation.navigate('Detalhes', { name: 'Husk Siberiano'})   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Highlights</Text>
            <FlatList
              data={data}
              keyExtractor={ (item) => item.name } 
              renderItem={ ({item}) =>  <HorizontalCard dog={item} />} 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}   

export default Dogs