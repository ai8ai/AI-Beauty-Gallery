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

    sliderNavigation: {
        position: 'absolute',
        top: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    sliderNavButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 10,
        borderRadius: 5,
    },
    sliderNavText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
    },

    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
 
    // modalContainer: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    // },
    // modalContent: {
    //     width: screenWidth * 0.70,
    //     padding: 20,
    //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //     borderRadius: 10,
    //     alignItems: 'flex-start',
    // },

    // modalOverlay: {
    //     flex: 1,
    //     backgroundColor: 'rgba(0, 0, 0, 0.6)',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },













    

    // modalOption: {
    //     fontSize: 18,
    //     padding: 15,
    //     textAlign: 'center',
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#ddd',
    // },
    




















    albumContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    albumCover: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    albumTitle: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    permissionText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginTop: 20,
    },


    // loading: {
    //     flex: 1,
    //     justifyContent: 'center',
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
    //     fontSize: 16,
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
    // screenContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     fontSize: 20,
    // },
    





    // imageContainer1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#121212', // Dark mode friendly
    // },
    // imageWrapper: {
    //     borderRadius: 15,
    //     overflow: 'hidden',
    // },
    // image1: {
    //     width: 300,
    //     height: 400,
    //     borderRadius: 15,
    //     resizeMode: 'cover',
    // },
    // modalCard: {
    //     width: '85%',
    //     backgroundColor: '#fff',
    //     padding: 20,
    //     borderRadius: 15,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 4 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 5,
    //     elevation: 5,
    // },
    // modalTitle: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     marginBottom: 10,
    //     textAlign: 'center',
    //     color: '#333',
    // },
    // inputRow1: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     marginBottom: 15,
    // },
    // label1: {
    //     fontSize: 16,
    //     color: '#444',
    // },
    // textInputInterval: {
    //     flex: 1,
    //     flexGrow: 0,  // Prevents it from stretching too much
    //     minWidth: 80,
    //     maxWidth: 100,
    //     backgroundColor: '#f0f0f0',
    //     padding: 8,
    //     borderRadius: 8,
    //     marginLeft: 20,
    //     fontSize: 16,
    // },
    // saveButton: {
    //     backgroundColor: '#007AFF',
    //     padding: 12,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     marginBottom: 10,
    //     width: screenWidth*0.6
    // },
    // savePictureButton: {
    //     backgroundColor: '#34C759',
    //     padding: 12,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     marginBottom: 10,
    //     width: screenWidth*0.6, 
    // },
    // closeButton: {
    //     backgroundColor: '#FF3B30',
    //     padding: 12,
    //     borderRadius: 10,
    //     alignItems: 'center',
    // },
    // buttonText: {
    //     color: '#fff',
    //     fontSize: 16,
    //     fontWeight: '600',
    // },
});

export default styles;

