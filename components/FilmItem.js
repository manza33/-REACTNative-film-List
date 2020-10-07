import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FilmItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "pink",
    borderColor: "violet",
    borderWidth: 1,
    marginVertical: 1,
  },
});
