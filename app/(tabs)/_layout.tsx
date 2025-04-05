import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: 'green',
    
    headerStyle: {
      backgroundColor: 'white',

    },
    headerShadowVisible: false,
    headerTintColor: 'darkgreen',
    headerTitleStyle: {
      fontWeight: '300',
      fontSize: 40,
    },
    tabBarStyle: {
    backgroundColor: 'white',
    },
  }}
>

      <Tabs.Screen
        name="index"
        options={{
          title: 'EasyMart',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'grid-sharp' : 'grid-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
       href: null,
        }}
      />
      <Tabs.Screen
        name="ProductDetails"
        options={{
          href: null,
        }}
      />
    </Tabs>
    
  );
}
