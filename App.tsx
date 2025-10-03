import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';

import { HomeScreen } from './src/screens/HomeScreen';
import { TMDBHeader } from './src/components/TMDBHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetailScreen } from './src/screens/MovieDetailScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    homeScreen: { screen: HomeScreen },
    detailsScreen: {
      screen: MovieDetailScreen,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TMDBHeader />
      </SafeAreaView>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
