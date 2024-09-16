import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, GestureResponderEvent, ImageSourcePropType } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

interface ListItemProps {
  title: string;
  subTitle?: string; // 선택적으로 사용할 수 있도록 `?` 추가
  image: ImageSourcePropType; // ImageSourcePropType으로 이미지 타입 설정
  onPress?: (event: GestureResponderEvent) => void; // onPress는 선택적이며 함수 타입
  renderRightActions?: () => React.ReactNode; // 오른쪽 액션을 렌더링하는 함수, 선택적
}

const ListItem: React.FC<ListItemProps> = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
