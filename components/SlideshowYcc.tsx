import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Animated, Pressable, Modal, Text, TextInput, Button } from 'react-native';
import styles from '@/styles/styles';

import { AnimationType, getAnimationStyle } from '@/styles/animationStyles';
import useScaleAnimation from '@/hooks/useAnimations';
import useInterval from '@/hooks/useInterval';
import useModalActions from '@/hooks/useModalActions';

interface SlideshowYccProps {
    images: string[]; // Accept images array as a prop
}

const SlideshowYcc: React.FC<SlideshowYccProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [animationType, setAnimationType] = useState<AnimationType>(AnimationType.Scale);

    const { scaleAnim, animateImageChange } = useScaleAnimation();
    const { savedIntervalValue, intervalInput, handleIntervalChange, saveInterval, intervalDuration } = useInterval();
    const { modalVisible, setModalVisible, isIntervalInputVisible, setIsIntervalInputVisible, modalOptions } =
        useModalActions(images, currentIndex, () => {});

    useEffect(() => {
        if (images.length > 0 && !firstImageLoaded) {
            setFirstImageLoaded(true);
            const animationTypes = Object.values(AnimationType);
            const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
            setAnimationType(randomAnimation);
            animateImageChange(() => setCurrentIndex(0));
        }
    }, [images, firstImageLoaded, animateImageChange]);

    useEffect(() => {
        if (firstImageLoaded) {
            const interval = setInterval(() => {
                const newIndex = (currentIndex + 1) % images.length; // Cyclic index
                const animationTypes = Object.values(AnimationType);
                const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
                setAnimationType(randomAnimation);
                animateImageChange(() => setCurrentIndex(newIndex));
            }, intervalDuration);

            console.log(`Current image path: ${images[currentIndex]}`);
            
            return () => clearInterval(interval);
        }
    }, [firstImageLoaded, images, animateImageChange, intervalDuration, currentIndex]);

    if (images.length === 0) {
        return <ActivityIndicator style={styles.loading} size="large" color="#000" />;
    }

    return (
        <View style={styles.imageContainer}>
            <Animated.View style={[styles.image, getAnimationStyle(animationType, scaleAnim)]}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Animated.Image source={{ uri: images[currentIndex] }} style={styles.image} />
                </Pressable>
            </Animated.View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Handles Android back button
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Interval (1 - 99 s):</Text>
                            <TextInput
                                style={styles.textInput}
                                value={intervalInput}
                                onChangeText={handleIntervalChange}
                                keyboardType="numeric"
                            />
                            <Button title="Save" onPress={() => { saveInterval(); setModalVisible(false); }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SlideshowYcc;
