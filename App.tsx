import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/HomeIcon';
import WatchlistIcon from './assets/WatchListIcon';
import { HomeScreen } from './src/screens/HomeScreen';
import { WatchList } from './src/screens/WatchList';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
        <Tab.Screen name="watchList" component={WatchList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
