import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    card:{
        elevation: 5,
        backgroundColor: '#fff',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 32,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 28
    },
    cardText: {
        marginTop: 18,   
        fontWeight: '400'
    },
    button:{
        backgroundColor: '#292929',
        padding: 8,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        marginTop: 120
    },
    textButton:{
        color: '#fff',
    }
})

export default styles