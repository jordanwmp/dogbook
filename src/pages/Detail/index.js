import {View, Text, Button} from 'react-native'
import { globalContainer } from '../../global/globalStyles'

import { useRoute, useNavigation } from '@react-navigation/native'

function Detail(){

    const navigate = useNavigation()
    const route = useRoute()

    return (
        <View style={globalContainer.container}>
            <Text>VOLTAR PARA A LISTA</Text>
            <Text>Raça: {route.params.name}</Text>
            <Button
                title="VOLTAR PARA A LISTA"
                onPress={() => navigate.goBack()}
            />
        </View>
    )
}

export default Detail