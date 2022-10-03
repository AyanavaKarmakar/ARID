import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRootStackParamList } from '../App'

type Props = NativeStackScreenProps<NativeRootStackParamList, 'Home'>

export const Home = (props: Props) => {
  const { navigation } = props

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#E0FFFF',
  },
})
