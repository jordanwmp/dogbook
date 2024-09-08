import {View, Text, Button} from 'react-native'
import { globalContainer } from '../../global/globalStyles'

import { useNavigation } from '@react-navigation/native'

function Dogs(){

    const navigation = useNavigation()

    function callDetail(){
        navigation.navigate('Detalhes', { name: 'Husk Siberiano'})   
    }

    return (
        <View style={globalContainer.container}>
            <Text>DOG LIST</Text>
            <Button
                title="IR PARA DETALHES"
                onPress={callDetail}
            />
        </View>
    )
}   

export default Dogs