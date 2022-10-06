import moment from 'moment-timezone'
import { useContext } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import { RegionContext } from '../RegionContext'

import { DB } from '../StaticData'

/**
 * Adapted from react-native-calender-strip
 * @see https://github.com/BugiDev/react-native-calendar-strip
 */
export const Calender = () => {
  const { region } = useContext(RegionContext)

  /**
   * Filters object for West Bengal Region
   */
  const dryDatesForWestBengalObjectArray = DB.filter((item) => item.stateName === region)

  /**
   * Finds out number of dry days for West Bengal Region
   */
  const dryDatesArrayLenght = dryDatesForWestBengalObjectArray.map((item) => {
    return item.dryDates.length
  })

  /**
   * Fetching array of dry days dates
   */
  const dryDatesArray = dryDatesForWestBengalObjectArray.map((item) => {
    const tempArray = []
    for (let i = 0; i < dryDatesArrayLenght[0]; ++i) {
      tempArray.push(item.dryDates[i].date)
    }
    return tempArray
  })

  const markedDatesArray = dryDatesArray[0].map((item) => {
    return { date: item, lines: [{ color: '#E0FFFF' }] }
  })

  return (
    <View>
      {(Platform.OS === 'android' || Platform.OS === 'ios') && (
        <CalendarStrip
          scrollable
          scrollerPaging
          selectedDate={moment().toDate()}
          startingDate={moment().toDate()}
          markedDates={markedDatesArray}
          calendarAnimation={{ type: 'sequence', duration: 100 }}
          daySelectionAnimation={{
            type: 'background',
            duration: 200,
            highlightColor: '#000000',
          }}
          style={styles.calenderStripContainerAndroidAndIos}
          calendarHeaderStyle={{ color: '#87CEEB', fontWeight: 'bold', fontSize: 25 }}
          calendarColor={'#000000'}
          dateNameStyle={{ color: '#FFDEAD', fontWeight: 'bold' }}
          dateNumberStyle={{ color: '#FFFFF0' }}
          highlightDateNameStyle={{ color: '#E0FFFF', fontWeight: 'bold' }}
          highlightDateNumberStyle={{ color: '#E0FFFF' }}
          iconLeft={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1634/1634157.png',
          }}
          iconRight={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1634/1634158.png',
          }}
          iconContainer={{ flex: 0.1 }}
        />
      )}
      {Platform.OS === 'web' && (
        <CalendarStrip
          scrollable
          scrollerPaging
          selectedDate={moment().toDate()}
          startingDate={moment().toDate()}
          markedDates={markedDatesArray}
          calendarAnimation={{ type: 'sequence', duration: 100 }}
          daySelectionAnimation={{
            type: 'background',
            duration: 200,
            highlightColor: '#000000',
          }}
          style={styles.calenderStripContainerWeb}
          calendarHeaderStyle={{ color: '#87CEEB', fontWeight: 'bold', fontSize: 25 }}
          calendarColor={'#000000'}
          dateNameStyle={{ color: '#FFDEAD', fontWeight: 'bold' }}
          dateNumberStyle={{ color: '#FFFFF0' }}
          highlightDateNameStyle={{ color: '#E0FFFF', fontWeight: 'bold' }}
          highlightDateNumberStyle={{ color: '#E0FFFF' }}
          iconLeft={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1634/1634157.png',
          }}
          iconRight={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1634/1634158.png',
          }}
          iconContainer={{ flex: 0.1 }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  calenderStripContainerWeb: {
    height: 200,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20,
  },
  calenderStripContainerAndroidAndIos: {
    height: 150,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20,
  },
})
