import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const FilmInput = (props) => {
  const [enteredFilm, setEnteredFilm] = useState("");

  const filmInputHandler = (enteredText) => {
    setEnteredFilm(enteredText);
  };

  const addFilmHandler = () => {
    props.onAddFilm(enteredFilm);
    setEnteredFilm("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Film à voir"
          style={styles.inputText}
          onChangeText={filmInputHandler}
          value={enteredFilm}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="pink" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addFilmHandler} color="grey" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilmInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 30,
  },
  inputText: {
    borderColor: "pink",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "45%",
  },
});
