import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Home } from './screens'
import { store } from './store'
import { Provider } from 'react-redux'

export type NativeRootStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<NativeRootStackParamList>()

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#420075' },
  headerTitleStyle: { color: '#E0FFFF' },
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </Provider>
  )
}
