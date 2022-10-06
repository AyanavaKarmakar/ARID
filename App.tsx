import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Home } from './screens'
import { RegionContext } from './RegionContext'
import { useState } from 'react'

export type NativeRootStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<NativeRootStackParamList>()

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#420075' },
  headerTitleStyle: { color: '#E0FFFF' },
}

export default function App() {
  const [region, setRegion] = useState('West Bengal')

  const toggleRegion = (newRegion: string) => {
    setRegion(newRegion)
  }

  const contextValue = { region: region, setRegion: toggleRegion }

  return (
    <RegionContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </RegionContext.Provider>
  )
}
