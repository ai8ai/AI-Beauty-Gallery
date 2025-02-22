import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const imagesMap: Record<string, string[]> = {
    Forests: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac2.jpg',
        'https://ai8ai.github.io/abcat/anran/ac3.jpg',
    ],
    Mountains: [
        'https://ai8ai.github.io/abcat/anran/ac4.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac11.jpg',
    ],
    Oceans: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Architecture: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    People: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Animals: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Art: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Technology: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Travel: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
    Sports: [
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
        'https://ai8ai.github.io/abcat/anran/ac1.jpg',
    ],
};

export default function SlideshowScreen() {
    const { category, subcategory } = useLocalSearchParams();
    const images = imagesMap[subcategory as string] || [];
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
        console.log(images[currentIndex])
        goToPrevImage();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{subcategory}</Text>
            <Image source={{ uri: images[currentIndex] }} style={styles.image} />
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
        resizeMode: 'contain', // Changed from 'cover' to 'contain'
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
