import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { getImageFromApi } from "../API/TMDBApi";

const SearchFilmItem = (props) => {
  return (
    //<TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.main_container}>
      <View style={styles.content_container}>
        <Image
          style={styles.image}
          source={{ uri: getImageFromApi(props.film.poster_path) }}
        />
        <View style={styles.header_container}>
          <Text style={styles.title_text} numberOfLines={1}>
            {props.film.title}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Details"
              //onPress={props.onCancel}
              color="darkslateblue"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              //onPress={addFilmHandler}
              color="hotpink"
            />
          </View>
        </View>
      </View>
    </View>
    //</TouchableOpacity>
  );
};

export default SearchFilmItem;

const styles = StyleSheet.create({
  main_container: {
    borderColor: "hotpink",
    borderWidth: 1,
    margin: 2.5,
    marginTop: 5,
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "pink",
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 15,
    flex: 1,
    flexWrap: "wrap",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "45%",
  },
});
