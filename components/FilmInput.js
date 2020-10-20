import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  FlatList,
  Text,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import SearchFilmItem from "./SearchFilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

const FilmInput = (props) => {
  let SearchedFilm = "";

  const [enteredFilm, setEnteredFilm] = useState("");
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [SearchedFilmHook, setSearchedFilmHook] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const filmInputHandler = (enteredText) => {
    setEnteredFilm(enteredText);
  };

  const addFilmHandler = () => {
    props.onAddFilm(enteredFilm);
    setEnteredFilm("");
  };

  const _loadFilms = () => {
    if (SearchedFilmHook.length > 0) {
      setIsLoading(true);
      getFilmsFromApiWithSearchedText(SearchedFilmHook, page + 1).then(
        (data) => {
          setPage(data.page);
          setTotalPages(data.total_pages);
          //setFilms(films.concat(data.results));
          setFilms((prevMovie) => [...prevMovie, ...data.results]);
          setIsLoading(false);
        }
      );
    }
  };

  const _searchTextInputChanged = (inputText) => {
    SearchedFilm = inputText;
  };

  const _resetFilms = () => {
    setSearchedFilmHook(SearchedFilm);
    setFilms([]);
    setTotalPages(0);
    setPage(0);
  };

  const _searchFilms = () => {
    _resetFilms();
  };

  useEffect(() => {
    _loadFilms();
  }, [SearchedFilmHook]);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Titre du film"
          style={styles.inputText}
          //onChangeText={filmInputHandler}
          onChangeText={_searchTextInputChanged}
          onSubmitEditing={() => _searchFilms}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="darkslateblue"
            />
          </View>
          <View style={styles.button}>
            <Button title="Search" onPress={_searchFilms} color="hotpink" />
          </View>
          <View style={styles.button}>
            <Button title="Reset" onPress={_resetFilms} color="pink" />
          </View>
        </View>
      </View>
      <View style={styles.filmContainer}>
        <FlatList
          data={films}
          renderItem={({ item }) => <SearchFilmItem film={item} />}
          numColumns={2}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log(page + " / " + totalPages);
            if (page < totalPages) {
              _loadFilms();
            }
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      {isLoading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="deeppink" />
        </View>
      ) : null}
    </Modal>
  );
};

export default FilmInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 5,
    backgroundColor: "midnightblue",
  },
  inputText: {
    textAlign: "center",
    borderColor: "hotpink",
    borderWidth: 1,
    padding: 5,
    width: "100%",
    marginBottom: 5,
    color: "aqua",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    marginTop: -5,
  },
  filmContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "midnightblue",
    height: "100%",
    marginBottom: 100,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
