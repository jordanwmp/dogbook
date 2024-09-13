import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    petImage:{
        width: '90%',
        height: 200,
        borderRadius: 12
    },
    cardInfo: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 12,
        width: '90%',
        minHeight: 300,
        paddingTop: 30,
        paddingHorizontal:8
    },
    petName:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15
    },
    petInfo:{
        color: '#666',
        borderBottomWidth: 0.5,
        borderBottomColor: '#666',
        fontSize: 14,
        paddingBottom: 5,
        marginBottom: 10
    },
    textLabel:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15
    }
})

export default styles