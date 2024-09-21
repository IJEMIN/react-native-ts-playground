import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

interface AccountScreenProps {}

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },  
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },  
    }
]

const AccountScreen: React.FC<AccountScreenProps> = ({}) => {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem
                title="Mosh Hamedani"
                subTitle="Hello"
                image={require("../assets/mosh.jpg")}
            />
        </View>
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={(menuItem) => menuItem.title}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </View>
        <ListItem
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d" />
            }
        />
    </Screen>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen : {
        backgroundColor: colors.light,
    }

});

export default AccountScreen;