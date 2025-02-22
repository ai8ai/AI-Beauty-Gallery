// (stacks)/_layout.tsx
import React, { useEffect } from "react";
import { Stack, useNavigation, useLocalSearchParams } from "expo-router";

export default function StackLayout() {
    const navigation = useNavigation();
    const { catId, catTitle } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: catTitle,
        });
    }, [navigation, catTitle]);

return (
    <Stack>
        <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
        <Stack.Screen name="CatScreen" options={{ headerTitle: 'CatS', title: 'DAsian2 Beauty', headerShown: false }} />
    </Stack>
);
}
