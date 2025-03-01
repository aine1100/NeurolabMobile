import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(false); // Track loading state

  const handleTabChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulate a delay for loading (can be adjusted)
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Loading spinner conditionally shown */}
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0061FF" />
        </View>
      )}

      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: !['/home', '/analytics', '/reports', '/profile', '/recommendations'].includes(pathname), // Fix header visibility
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            borderTopColor: '#0061FF1A',
            borderTopWidth: 1,
            minHeight: 70,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: ['/home', '/analytics', '/reports', '/profile', '/recommendations'].includes(pathname) ? 'flex' : 'none', // Corrected logic
          },
        }}
        onTabPress={handleTabChange} // Trigger the loading state when switching tabs
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
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: 10,
  },
});

export default Tabslayout;
