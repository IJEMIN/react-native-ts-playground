import React from "react";
import { View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        subTitle="My subtitle"
        ImageComponent={<Icon  name="email"/>}
      ></ListItem>
    </Screen>
  );
}
