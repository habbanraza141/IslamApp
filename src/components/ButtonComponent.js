import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonComponent = ({btnText, style = {}, textStyle = {}}) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...style}}>
      <Text style={{ ...styles.btnTextStyle, ...textStyle}}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    justifyContent: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.24,
    shadowRadius: 1.384,
    elevation: 1.7
  },

  btnTextStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },

});
