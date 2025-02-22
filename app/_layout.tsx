// app/layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    const hiddenScreens = ["detail", "(stacks)", "about"];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer screenOptions={({ route }) => ({
                    drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
                })}>
                    <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'AI Beauty', headerShown: true }} />
                    <Drawer.Screen name="(stacks)" options={{ drawerLabel: 'Category', title: 'Category1', headerShown: true }}/>
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}
