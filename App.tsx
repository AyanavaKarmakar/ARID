import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens'
import { RegionContext } from './src/utils/RegionContext'
import { useState, useEffect } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type NativeRootStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<NativeRootStackParamList>()

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#420075' },
  headerTitleStyle: { color: '#E0FFFF' },
}

export default function App() {
  const defaultRegion = 'West Bengal'
  const [region, setRegion] = useState(defaultRegion)

  const toggleRegion = (newRegion: string) => {
    setRegion(newRegion)
  }

  const contextValue = { region: region, setRegion: toggleRegion }

  /**
   * @see https://react-native-async-storage.github.io/async-storage/docs/usage#storing-data
   * @param value
   */
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('region', value)
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * @see https://react-native-async-storage.github.io/async-storage/docs/usage#reading-string-value
   */
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('region')
      if (value !== null) {
        setRegion(value)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (region !== defaultRegion) {
      storeData(region)
    }
  }, [region])

  return (
    <RegionContext.Provider value={contextValue}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
          <StatusBar style='light' />
        </NavigationContainer>
      </PaperProvider>
    </RegionContext.Provider>
  )
}
