import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import YccGallery  from '@/components/D1_YccGallery';
import LocalGallery  from '@/components/D2_LocalGallery';
import RateTheApp from '@/components/D5_Rate5Star';

import { TITLES } from '@/constants/Titles';

const Drawer = createDrawerNavigator();

export default function MainPage() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    width: 250,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
            }}
        >
            <Drawer.Screen name="YccGallery"   component={YccGallery}   options={{ title: TITLES.YCC_GALLERY }} />
            <Drawer.Screen name="LocalGallery" component={LocalGallery}   options={{ title: TITLES.LOCAL_GALLERY }} />
            <Drawer.Screen name="Rate"         component={RateTheApp}  options={{ title: TITLES.RATE }} />
        </Drawer.Navigator>
    );
}