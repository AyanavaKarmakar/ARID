import { Card, Paragraph, Title } from 'react-native-paper'
import { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { RegionContext } from '../RegionContext'
import { DB } from '../StaticData'

export const Info = () => {
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

  return (
    <Card mode='elevated' elevation={3} style={styles.cardContainer}>
      <Card.Title
        title='NOT a dry day!'
        subtitle='Next dry day is in X days'
        titleNumberOfLines={1}
        titleVariant={'headlineSmall'}
        titleStyle={styles.cardTitleStyle}
        subtitleNumberOfLines={1}
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
    color: '#87CEEB',
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
