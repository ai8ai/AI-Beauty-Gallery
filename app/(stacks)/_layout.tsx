// (stacks)/_layout.tsx
import React, { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";

export default function StackLayout() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "itemffftitle",
        });
    }, [navigation]);

return (
    <Stack>
        <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
        <Stack.Screen name="CatScreen" options={{ headerTitle: 'CatS', title: 'DAsian2 Beauty', headerShown: false }} />
    </Stack>
);
}
