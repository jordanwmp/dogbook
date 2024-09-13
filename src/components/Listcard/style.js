import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    card:{
        height: 120,
        elevation: 1,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 8
    },
    infoContainer:{
        width: 100,
        height: 100,
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 8,
    },
    petName:{
        fontWeight: 'bold',
        fontSize: 18
    },
    imageContainer:{
        width: 100,
        height: 100,
    },
    petImage:{
        width: 100,
        height: 100,
        borderRadius: 12,
        resizeMode: 'cover',
        color: '#000'
    }

})

export default style