import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/HomeIcon';
import WatchlistIcon from './assets/WatchListIcon';
import { HomeScreen } from './src/screens/HomeScreen';
import { WatchList } from './src/screens/WatchList';
import { TMDBHeader } from './src/components/TMDBHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TMDBHeader />
      </SafeAreaView>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#042541' },
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'homeScreen')
              return <HomeIcon width={size} height={size} fill={color} />;
            if (route.name === 'watchList')
              return <WatchlistIcon width={size} height={size} fill={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#aaa',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="homeScreen" component={HomeScreen} />
        {/* <Tab.Screen name="homeScreen" component={WatchList} /> */}
        <Tab.Screen name="watchList" component={WatchList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
