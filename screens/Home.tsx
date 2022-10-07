import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect, useState, useEffect } from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'
import { NativeRootStackParamList } from '../App'
import { Calender, DropdownComponent, Info, Loading, Footer } from '../components'

type Props = NativeStackScreenProps<NativeRootStackParamList, 'Home'>

export const Home = (props: Props) => {
  const { navigation } = props
  const [isLoading, setIsLoading] = useState(true)
  const DELAY_MS = 1000
  const { width, height } = Dimensions.get('screen')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ARID',
      headerTitleAlign: 'center',
    })
  }, [navigation])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((previousState) => !previousState)
    }, DELAY_MS)
  }, [])

  return (
    <View style={{ ...styles.container, width: width, height: height - 500 }}>
      {isLoading === true && <Loading />}
      {isLoading === false && (
        <>
          <DropdownComponent />
          <View style={styles.calenderContainer}>
            <Calender />
          </View>
          <View style={styles.infoContainerWeb}>{Platform.OS === 'web' && <Info />}</View>
          <View style={styles.infoContainerAndroidAndIos}>
            {(Platform.OS === 'ios' || Platform.OS === 'android') && <Info />}
          </View>
        </>
      )}
      <View style={{ width: width, height: 500 }}>
        <Footer />
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
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
  },
  infoContainerWeb: {
    paddingStart: 25,
    paddingEnd: 25,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
  },
  infoContainerAndroidAndIos: {
    paddingStart: 30,
    paddingEnd: 30,
    justifyContent: 'center',
  },
})
