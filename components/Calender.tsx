import moment from 'moment-timezone'
import { View, StyleSheet, Platform } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'

/**
 * @see https://github.com/BugiDev/react-native-calendar-strip
 */
export const Calender = () => {
  /**
   * TODO Snapshot from Cloud Firestore
   * Dry Days Dates for
   * Region: West Bengal
   * Month: October
   */
  const dryDayDatesArray = ['2022-10-02', '2022-10-05', '2022-10-09', '2022-10-24']
  const markedDatesArray = dryDayDatesArray.map((item) => {
    return { date: item, lines: [{ color: 'cyan' }] }
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
            highlightColor: '#6082B6',
          }}
          style={styles.calenderStripContainer}
          calendarHeaderStyle={{ color: '#87CEEB' }}
          calendarColor={'#191970'}
          dateNumberStyle={{ color: '#FFFFF0' }}
          dateNameStyle={{ color: '#FFDEAD' }}
          highlightDateNumberStyle={{ color: 'cyan' }}
          highlightDateNameStyle={{ color: '#F0FFFF' }}
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
            highlightColor: '#6082B6',
          }}
          style={styles.calenderStripContainer}
          calendarHeaderStyle={{ color: '#87CEEB', fontSize: 30 }}
          calendarColor={'#191970'}
          dateNumberStyle={{ color: '#FFFFF0' }}
          dateNameStyle={{ color: '#FFDEAD' }}
          highlightDateNumberStyle={{ color: 'cyan' }}
          highlightDateNameStyle={{ color: '#F0FFFF' }}
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
  calenderStripContainer: {
    height: 200,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20,
  },
})
