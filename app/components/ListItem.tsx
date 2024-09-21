import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";


interface ListItemProps {
  title: string;
  subTitle?: string; // 선택적으로 사용할 수 있도록 `?` 추가
  image?: any; // 이미지는 선택적으로 사용할 수 있도록 `?` 추가
  onPress?: (event: GestureResponderEvent) => void; // onPress는 선택적이며 함수 타입
  renderRightActions?: () => React.ReactNode; // 오른쪽 액션을 렌더링하는 함수, 선택적
  IconComponent?: React.ReactNode; // 아이콘 컴포넌트, 선택적
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
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
    backgroundColor: colors.white,

  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
