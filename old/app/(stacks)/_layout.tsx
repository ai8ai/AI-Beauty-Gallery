import React from 'react';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="st" options={{ headerShown: false, }} />
            </Stack>
            <StatusBar style="light" translucent />
        </>
    );
}
