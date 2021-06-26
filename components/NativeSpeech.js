import React from 'react';
import {Button} from 'react-native';
import Tts from 'react-native-tts';

Tts.setDefaultLanguage('en-US');

const NativeSpeech = props => (
  <Button disabled={props.disabled} title={props.title} onPress={() => Tts.speak(props.text)} />
);

export default NativeSpeech;
