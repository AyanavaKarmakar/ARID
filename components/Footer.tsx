import { Linking, Text } from 'react-native'

export const Footer = () => {
  return (
    <Text style={{ paddingTop: 10, color: '#E0FFFF', textAlign: 'center' }}>
      &copy; 2022 &lt;Project ARID&gt; by
      <Text
        onPress={() => Linking.openURL('https://github.com/AyanavaKarmakar')}
        style={{ color: 'cyan' }}
      >
        {' '}
        Ayanava Karmakar
      </Text>
    </Text>
  )
}
