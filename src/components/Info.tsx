import { Card, Paragraph, Title } from 'react-native-paper'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { RegionContext } from '../utils/RegionContext'
import { DB } from '../utils/StaticData'
import moment from 'moment-timezone'

export const Info = () => {
  const [isDryDay, setIsDryDay] = useState(false)
  const { region } = useContext(RegionContext)

  /**
   * Filters object for Selected Region
   */
  const dryDatesForRegionObjectArray = DB.filter((item) => item.stateName === region)

  /**
   * Finds out extra info for the Selected Region
   */
  const regionExtraInfo = dryDatesForRegionObjectArray.map((item) => {
    return item.extraInfo
  })

  /**
   * Finds out number of dry days for the Selected Region
   */
  const dryDatesArrayLength = dryDatesForRegionObjectArray.map((item) => {
    return item.dryDates.length
  })

  /**
   * Fetching array of dry days dates
   */
  const dryDatesArray = dryDatesForRegionObjectArray.map((item) => {
    const tempArray = []
    for (let i = 0; i < dryDatesArrayLength[0]; ++i) {
      tempArray.push(item.dryDates[i].date)
    }
    return tempArray
  })

  const today = moment().format('YYYY-MM-DD')

  const findDryDay = (currentDate: string, dryDatesArray: string[][]) => {
    for (let index = 0; index < dryDatesArrayLength[0]; ++index) {
      if (currentDate === dryDatesArray[0][index]) {
        return true
      }
    }
    return false
  }

  useEffect(() => {
    setIsDryDay(findDryDay(today, dryDatesArray))
  }, [region])

  return (
    <Card mode='elevated' elevation={3} style={styles.cardContainer}>
      <Card.Title
        title={isDryDay === true ? 'DRY DAY' : 'NOT A DRY DAY'}
        subtitle={isDryDay === true ? 'Hope your fridge aint empty!' : 'Yay! Drink up!! Cheers!!!'}
        titleNumberOfLines={1}
        titleVariant={'headlineSmall'}
        titleStyle={{
          ...styles.cardTitleStyle,
          color: `${isDryDay === true ? '#FF2400' : '#0FFF50'}`,
        }}
        subtitleNumberOfLines={2}
        subtitleVariant={'bodyLarge'}
        subtitleStyle={styles.cardSubtitleStyle}
      />
      <Card.Content style={styles.cardContentStyle}>
        <Title style={styles.cardContentTitleStyle}>{region}</Title>
        {(regionExtraInfo !== null || regionExtraInfo !== undefined) && (
          <Paragraph style={styles.cardContentParagraphStyle}>{regionExtraInfo}</Paragraph>
        )}
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: '#1F2022',
  },
  cardTitleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 5,
  },
  cardSubtitleStyle: {
    textAlign: 'center',
    color: '#E0FFFF',
  },
  cardContentStyle: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  cardContentTitleStyle: {
    textAlign: 'center',
    color: '#87CEEB',
  },
  cardContentParagraphStyle: {
    textAlign: 'justify',
    color: '#E0FFFF',
  },
})
