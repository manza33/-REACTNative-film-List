import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import FilmInput from "./FilmInput";

export default function FilmToWatchList() {
  const [films, setFilms] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addFilmHandler = (FilmTitle) => {
    setFilms((currentFilms) => [
      ...currentFilms,
      { id: Math.random().toString(), value: FilmTitle },
    ]);
    setIsAddMode(false);
  };

  const removeFilmHandler = (filmId) => {
    setFilms((currentFilms) => {
      return currentFilms.filter((film) => film.id !== filmId);
    });
  };

  const cancelFilmAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          title="Add new movie"
          onPress={() => setIsAddMode(true)}
          color="hotpink"
        />
      </View>
      <FilmInput
        visible={isAddMode}
        onAddFilm={addFilmHandler}
        onCancel={cancelFilmAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={films}
        renderItem={(itemData) => (
          <FilmItem
            id={itemData.item.id}
            onDelete={removeFilmHandler}
            title={itemData.item.value}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 30,
    backgroundColor: "midnightblue",
    height: "100%",
  },
  button: {
    marginBottom: 10,
  },
});
