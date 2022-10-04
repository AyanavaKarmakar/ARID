import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRootStackParamList } from '../App'
import { Calender, DropdownComponent } from '../components'

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
      <View style={styles.calenderContainer}>
        <Calender />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  calenderContainer: {
    paddingStart: 25,
    paddingEnd: 25,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
})
