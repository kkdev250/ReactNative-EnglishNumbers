import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tts from 'react-native-tts';

Tts.setDefaultLanguage('en-US');

const NativeSpeech = (props) => (
  <CustomButton
    icon={<Icon name="volume-up" size={15} color="white" />}
    disabled={props.disabled}
    onPress={() => Tts.speak(props.text)}
    bgColor="blue"
  >
    <View style={styles.contentWrapper}>
      <Icon name="volume-up" size={35} color="white" />
      <Text style={styles.buttonText}>{props.title}</Text>
    </View>
  </CustomButton>
);

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default NativeSpeech;
