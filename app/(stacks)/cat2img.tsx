import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { genImgList } from '@/dat/genImageList'

export default function SlideshowScreen() {
    const { subCatId, imgPath, count } = useLocalSearchParams();
    // "count": "10",   "id": "ar2",    "path": "abspecialtaste/finger/fi"}

    const images = genImgList(imgPath as string, Number(count));

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleSwipeLeft = () => {
        goToNextImage();
    };

    const handleSwipeRight = () => {
        console.log(images[currentIndex]);
        goToPrevImage();
    };

    return (
        <View style={styles.container}>
            {images.length > 0 ? (
                <Image source={{ uri: images[currentIndex] }} style={styles.image} />
            ) : (
                <Text style={styles.noImageText}>No images available</Text>
            )}
            <View style={styles.navigation}>
                <TouchableOpacity onPress={handleSwipeRight} style={styles.navButton}>
                    <Text style={styles.navText}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSwipeLeft} style={styles.navButton}>
                    <Text style={styles.navText}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 20,
        left: 10,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    },
    noImageText: {
        color: '#fff',
        fontSize: 18,
    },
    navigation: {
        position: 'absolute',
        top: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    navButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    navText: {
        color: '#fff',
        fontSize: 30,
    },
});
