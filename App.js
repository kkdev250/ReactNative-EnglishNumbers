import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from './components/CustomButton';
import NativeSpeech from './components/NativeSpeech';

const App = () => {
  const drawANumber = () => Math.floor(Math.random() * 10000);
  const [drawnNumber, setDrawnNumber] = useState(drawANumber());
  const [enteredNumber, setEnteredNumber] = useState('');
  const [usersGuess, setUsersGuess] = useState(null);

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const isNewGuess = !usersGuess;
  const isCorrect = +usersGuess === drawnNumber;
  const isWrong = usersGuess && +usersGuess !== drawnNumber;

  const checkHandler = () => {
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* <Text>{drawnNumber.toString()}</Text> */}
        <NativeSpeech
          title="Listen to a number"
          text={`${drawnNumber}`}
          disabled={!isNewGuess}
        />
        <TextInput
          style={styles.input}
          blurOnSubmit={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="Enter the number you heard"
          onChangeText={numberInputHandler}
          onSubmitEditing={checkHandler}
          value={enteredNumber}
          editable={isNewGuess}
        />
        <View>
          {isNewGuess && (
            <CustomButton
              onPress={checkHandler}
              bgColor="blue"
              disabled={!enteredNumber}
            >
              <Text style={styles.buttonText}>Check</Text>
            </CustomButton>
          )}
          {isCorrect && (
            <CustomButton onPress={correctHandler} bgColor="green">
              <View style={styles.button}>
                <Icon name="emoticon-happy-outline" size={35} color="white" />
                <Text style={styles.buttonText}>Correct!</Text>
              </View>
            </CustomButton>
          )}
          {isWrong && (
            <CustomButton onPress={wrongHandler} bgColor="red">
              <View style={styles.button}>
                <Icon name="emoticon-sad-outline" size={35} color="white" />
                <Text style={styles.buttonText}>Try again...</Text>
              </View>
            </CustomButton>
          )}
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
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default App;
