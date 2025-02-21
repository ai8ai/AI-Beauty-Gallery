import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const subcategoriesMap: Record<string, string[]> = {
    Nature: ['Forests', 'Mountains', 'Oceans'],
    Architecture: ['Bridges', 'Skyscrapers', 'Ancient'],
    People: ['Portraits', 'Street Life', 'Fashion'],
    Animals: ['Wildlife', 'Pets', 'Birds'],
    Technology: ['Gadgets', 'AI', 'Space'],
    Art: ['Paintings', 'Sculptures', 'Digital'],
    Food: ['Desserts', 'Drinks', 'Dishes'],
    Travel: ['Beaches', 'Cities', 'Countryside'],
    Sports: ['Football', 'Basketball', 'Swimming'],
    Abstract: ['Patterns', 'Textures', 'Colors'],
};

export default function SubcategoryScreen() {
    const { category } = useLocalSearchParams();
    const subcategories = subcategoriesMap[category as string] || [];

    const handleSubcategoryPress = (subcategory: string) => {
        router.push(`/category/${category}/${subcategory}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Subcategories of {category}</Text>
            <FlatList
                data={subcategories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.subcategoryItem} onPress={() => handleSubcategoryPress(item)}>
                        <Text style={styles.subcategoryText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    subcategoryItem: { padding: 15, backgroundColor: '#f5f5f5', margin: 5, borderRadius: 10 },
    subcategoryText: { fontSize: 18, fontWeight: 'bold' },
});
