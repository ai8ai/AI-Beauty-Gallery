import { router } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
    'Nature', 'Architecture', 'People', 'Animals', 'Technology',
    'Art', 'Food', 'Travel', 'Sports', 'Abstract'
];

export default function HomeScreen() {
    const handleCategoryPress = (category: string) => {
        router.push(`/category/${category}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photo Categories</Text>
            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item) => item}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    categoryItem: { width: '45%', aspectRatio: 1, margin: 10, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
    categoryText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});
