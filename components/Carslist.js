import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import info from "../assets/data/info";
import Car from "./Car";

const Carslist = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={info}
        renderItem={({ item }) => <Car car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default Carslist;

const styles = StyleSheet.create({});
