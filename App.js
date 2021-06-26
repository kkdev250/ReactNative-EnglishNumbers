import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import NativeSpeech from './components/NativeSpeech';

const App = () => {
  const drawANumber = () => Math.floor(Math.random() * 10000);
  const [drawnNumber, setDrawnNumber] = useState(drawANumber());
  const [enteredNumber, setEnteredNumber] = useState('');
  const [usersGuess, setUsersGuess] = useState(null);

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const isNewGuess = usersGuess === null;
  const isCorrect = +usersGuess === drawnNumber;
  const isWrong = usersGuess && +usersGuess !== drawnNumber;

  const guessHandler = () => {
    setUsersGuess(enteredNumber);
  };

  const correctHandler = () => {
    setUsersGuess(null);
    setEnteredNumber('');
    setDrawnNumber(drawANumber());
  };

  const wrongHandler = () => {
    setUsersGuess(null);
    setEnteredNumber('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        {/* <Text>{drawnNumber.toString()}</Text> */}
        <NativeSpeech title="Listen to a number" text={`${drawnNumber}`} disabled={!isNewGuess} />
        <TextInput
          style={styles.input}
          blurOnSubmit={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="enter the number you heard"
          onChangeText={numberInputHandler}
          value={enteredNumber}
          editable={isNewGuess}
        />
        <View>
          {isNewGuess && <Button title="Check" onPress={guessHandler} />}
          {isCorrect && <Button color='green' title="OK! :-)" onPress={correctHandler} />}
          {isWrong && <Button color='red' title=":-( Try again..." onPress={wrongHandler} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
});

export default App;
