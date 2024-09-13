import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card:{
        width: 180,
        height: 200,
        elevation: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,  
        marginRight: 15,
        borderRadius: 12,
        paddingHorizontal: 8
    },
    petImage:{
        width: 100,
        height: 100,
        borderRadius: 12,
        resizeMode: 'cover'
    },
    petName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#292929',
        marginTop: 10
    },
    petInfo: {
        color: '#424242'
    }
})

export default styles