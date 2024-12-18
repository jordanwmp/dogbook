import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
    },
    petImage: {
        width: '90%',
        height: 300,
        borderRadius: 15,
        marginBottom: 20,
    },
    cardInfo: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
        elevation: 3,
    }, 
    petName: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: '#333333', 
        marginBottom: 15, 
    }, 
    textLabel: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#555555', 
        marginBottom: 10, 
    }, 
    petInfo: { 
        fontSize: 16, 
        color: '#666666', 
        marginBottom: 10, 
    }
})

export default styles