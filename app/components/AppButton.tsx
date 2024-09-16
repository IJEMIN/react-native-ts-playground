import React from "react";
import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import colors from "../config/colors";

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void; // onPress는 필수이며 함수 타입
  color?: keyof typeof colors; // color는 선택적이며 colors 객체의 키 중 하나
}

const AppButton: React.FC<AppButtonProps> = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
