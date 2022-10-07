import { Card, Paragraph, Title } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const Info = () => {
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
        <Title style={styles.cardContentTitleStyle}>Region Selected: Region</Title>
        <Paragraph style={styles.cardContentParagraphStyle}>Extra Info</Paragraph>
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
    textAlign: 'center',
    color: '#E0FFFF',
  },
})
