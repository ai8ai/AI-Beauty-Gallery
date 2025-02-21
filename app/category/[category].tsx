import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryScreen() {
    const { category } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category: {category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold' },
});