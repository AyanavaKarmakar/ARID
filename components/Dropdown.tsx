import { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
  { label: 'Andhra Pradesh', value: '1' },
  { label: 'Arunachal Pradesh', value: '2' },
  { label: 'Assam', value: '3' },
  { label: 'Bihar', value: '4' },
  { label: 'Chhattisgarh', value: '5' },
  { label: 'Goa', value: '6' },
  { label: 'Gujarat', value: '7' },
  { label: 'Haryana', value: '8' },
  { label: 'Himachal Pradesh', value: '9' },
  { label: 'Jharkhand', value: '10' },
  { label: 'Karnataka', value: '11' },
  { label: 'Kerala', value: '12' },
  { label: 'Madhya Pradesh', value: '13' },
  { label: 'Maharashtra', value: '14' },
  { label: 'Manipur', value: '15' },
  { label: 'Meghalaya', value: '16' },
  { label: 'Mizoram', value: '17' },
  { label: 'Nagaland', value: '18' },
  { label: 'Odisha', value: '19' },
  { label: 'Punjab', value: '20' },
  { label: 'Rajasthan', value: '21' },
  { label: 'Sikkim', value: '22' },
  { label: 'Tamil Nadu', value: '23' },
  { label: 'Telangana', value: '24' },
  { label: 'Tripura', value: '25' },
  { label: 'Uttar Pradesh', value: '26' },
  { label: 'Uttarakhand', value: '27' },
  { label: 'West Bengal', value: '28' },
  { label: 'Andaman and Nicobar Islands', value: '29' },
  { label: 'Chandigarh', value: '30' },
  { label: 'Dadra Nagar Haveli and Daman Diu', value: '31' },
  { label: 'Delhi', value: '32' },
  { label: 'Jammu and Kashmir', value: '33' },
  { label: 'Ladakh', value: '34' },
  { label: 'Lakshadweep', value: '35' },
  { label: 'Puducherry', value: '36' },
]

/**
 * @see https://github.com/hoaphantn7604/react-native-element-dropdown
 */
export const DropdownComponent = () => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const renderLabel = () => {
    if (value || isFocus) {
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
        activeColor={'darkgrey'}
        data={data}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus === true ? 'Select State or Union Territory' : ''}
        searchPlaceholder='Search...'
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value)
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
    fontSize: 14,
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
