import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRootStackParamList } from '../App'
import { DropdownComponent } from '../components'

type Props = NativeStackScreenProps<NativeRootStackParamList, 'Home'>

export const Home = (props: Props) => {
  const { navigation } = props

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ARID',
      headerTitleAlign: 'center',
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <DropdownComponent />
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
})
