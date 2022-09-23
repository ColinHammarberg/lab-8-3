import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const MainApp = () => {
  const [number, inputNumber] = React.useState(null);
  const [day, whichday] = React.useState(null);
  const weekDays = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  };

  function weekdays() {
    if (number == 1) return whichday(weekDays.Monday);
    if (number == 2) return whichday(weekDays.Tuesday);
    if (number == 3) return whichday(weekDays.Wednesday);
    if (number == 4) return whichday(weekDays.Thursday);
    if (number == 5) return whichday(weekDays.Friday);
    if (number == 6) return whichday(weekDays.Saturday);
    return number == 7 ? whichday(weekDays.Sunday) : false;
  }
  return (
    <View style={styles.container}>
      <Text> Give me a number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number) => inputNumber(number)}
        placeholder="Choose a number"
        keyboardType="numeric"
        onSubmitEditing={weekdays}
      />
      <Text> Day of week: {day}</Text>
    </View>
  );
};
export default MainApp;

const styles = StyleSheet.create({
  input: {
    color: "red",
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
