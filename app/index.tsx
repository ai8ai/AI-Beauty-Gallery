// index.tsx
import { router } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import CatInterface      from '@/types'; 
import styles   from '@/styles/styles';
import HomeList from '@/dat/HomeList'; // Import the Home Listed Categories

export default function HomeScreen() {
    const handleCategoryPress = (cat: CatInterface) => {
        router.push({
            pathname: "/CatScreen",
            params: { catId: cat.id, catTitle: cat.shorttitle },
        });
    };

    const renderItem = ({ item }: { item: CatInterface }) => (
        <TouchableOpacity
            style={styles.catContainer}
            onPress={() => handleCategoryPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.catCoverImg} />
            <Text style={styles.catTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={HomeList}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.mainGrid}
            />
        </View>
    );
}
