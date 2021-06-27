import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const CustomButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback
        activeOpacity={0.6}
        onPress={props.onPress}
        disabled={props.disabled}
      >
        <View
          style={[
            styles.button,
            { backgroundColor: props.bgColor },
            props.disabled ? styles.buttonDisabled : null,
          ]}
        >
          {props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 8,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
});

export default CustomButton;
