import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import image from '@/constants/image';

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', height: 30 }}> 
    <Image
      source={icon}
      tintColor={focused ? '#064E3B' : '#000'} // Dark green when focused
      resizeMode="contain"
      style={{ width: 30, height: 30 }} // Uniform size for all icons
    />
  </View>
);

const Tabslayout = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: !['/home', '/analytics','/reports', '/profile','/recommendations'].includes(pathname), // Fix header visibility
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: ['/home', '/analytics','/reports', '/profile','/recommendations'].includes(pathname) ? 'flex' : 'none', // Corrected logic
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={image.home} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={image.analy} focused={focused} />,
        }}
      />
       <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Recommendations',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={image.recommend} focused={focused} />,
        }}
      />
       <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={image.rep} focused={focused} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={image.profile} focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
