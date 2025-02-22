import { Modal, View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    mainGrid: {
        justifyContent: 'space-between',
        paddingBottom: 20,
    },

    catContainer: {
        alignItems: 'center',
        width: '48%',
        aspectRatio: 9 / 16,
        marginBottom: 10,
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,
    },
    catCoverImg: {
        height: '88%',
        width: '100%',
        aspectRatio: 10 / 16,
        borderRadius: 8,
    },
    catTitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },

});

export default styles;





    // albumContainer: {
    //     flex: 1,
    //     margin: 5,
    //     alignItems: 'center',
    //     borderRadius: 10,
    //     backgroundColor: '#fff',
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 5,
    //     elevation: 2,
    // },
    // albumCover: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 10,
    // },
    // albumTitle: {
    //     marginTop: 8,
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: '#333',
    // },
    // permissionText: {
    //     textAlign: 'center',
    //     color: '#999',
    //     fontSize: 16,
    //     marginTop: 20,
    // },


    // imageContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // image: {
    //     width: '100%',
    //     height: '100%',
    //     resizeMode: 'cover',
    // },
    // loading: {
    //     flex: 1,
    //     justifyContent: 'center',
    // },
    // modalContainer: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    // },
    // modalContent: {
    //     width: screenWidth * 0.85,
    //     padding: 20,
    //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //     borderRadius: 10,
    //     alignItems: 'flex-start',
    // },
    // inputContainer: {
    //     marginBottom: 10,
    // },
    // optionButton: {
    //     padding: 10,
    //     marginVertical: 5,
    //     backgroundColor: '#2196F3',
    //     borderRadius: 5,
    //     alignItems: 'center',
    // },
    // optionText: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: 16,
    // },
    // inputRow: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     color: 'white',
    //     marginBottom: 10,
    // },
    // label: {
    //     fontSize: 12,
    //     color: 'white',
    //     marginRight: 2,
    // },
    // textInput: {
    //     borderWidth: 1,
    //     fontWeight: 'bold',
    //     color: 'white',
    //     borderColor: 'white',
    //     borderRadius: 5,
    //     padding: 18,
    //     fontSize: 16,
    //     flex: 1,
    //     marginRight: 18,
    // },
    
    // loadingContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // errorContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // errorText: {
    //     color: 'red',
    //     fontSize: 18,
    // },

    // grid: {
    //     justifyContent: 'space-between',
    // },
