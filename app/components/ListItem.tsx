import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  ImageSourcePropType,
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
  image?: ImageSourcePropType; // ImageSourcePropType으로 이미지 타입 설정
  onPress?: (event: GestureResponderEvent) => void; // onPress는 선택적이며 함수 타입
  renderRightActions?: () => React.ReactNode; // 오른쪽 액션을 렌더링하는 함수, 선택적
  ImageComponent?: any; // 이미지 컴포넌트, 선택적
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
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
