import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Entypo from "react-native-vector-icons/Entypo"

export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backGroudStyle}>

      <Entypo style={styles.iconStyle} name="magnifying-glass" size={30} onPress={() => { //
      }} />
      <TextInput
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      value={term}
      placeholder='Yaprak Döner'
        autoCorrect={false}
        style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({

  backGroudStyle: {
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    borderRadius: 50,
  },
  
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    borderRadius: 50,
  },

});
