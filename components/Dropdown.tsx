import { useState, useContext } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RegionContext } from '../RegionContext'
import { regionNames } from '../StaticData'

/**
 * @see https://github.com/hoaphantn7604/react-native-element-dropdown
 */
export const DropdownComponent = () => {
  const [isFocus, setIsFocus] = useState(false)
  const { region, setRegion } = useContext(RegionContext)

  const renderLabel = () => {
    if (region || isFocus) {
      return <Text style={[styles.label, isFocus && { color: '#E0FFFF' }]}>Select Region</Text>
    }
    return null
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#E0FFFF' }]}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        activeColor={'#393D47'}
        data={regionNames}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus === true ? 'Select State or Union Territory' : ''}
        searchPlaceholder='Search...'
        value={region}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setRegion(item.value)
          setIsFocus(false)
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus === false ? '#E0FFFF' : '#ffffff'}
            name='downcircleo'
            size={20}
          />
        )}
        flatListProps={{
          ListEmptyComponent: () => (
            <View>
              <ActivityIndicator size={'large'} color='gray' />
            </View>
          ),
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 16,
  },
  containerStyle: { backgroundColor: '#000000' },
  itemContainerStyle: { backgroundColor: '#1F2022' },
  itemTextStyle: { color: '#ffffff' },
  dropdown: {
    height: 50,
    borderColor: '#E0FFFF',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#000000',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    borderRadius: 10,
    color: '#E0FFFF',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#fff',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#E0FFFF',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#E0FFFF',
  },
})
