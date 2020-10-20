import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FilmItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "black",
    borderTopColor: "hotpink",
    borderBottomColor: "hotpink",
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  text: {
    color: "aqua",
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
