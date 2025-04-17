import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  View,
} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import Animated from 'react-native-reanimated';
import {useLayout} from 'hooks';
import {Text} from 'components';

interface Props {
  title: string;
  notification: ImageSourcePropType;
}

interface ITabBarProps {
  tabs: Props[];
  level?: string;
  style?: ViewStyle;
  activeIndex: number;
  onChange(index: number): void;
}

const TabBar = ({style, activeIndex, onChange, tabs}: ITabBarProps) => {
  const theme = useTheme();
  const AniButton = Animated.createAnimatedComponent(TouchableOpacity);
  const {width} = useLayout();
  const changeIndex = React.useCallback(
    (i: number) => {
      return onChange(i);
    },
    [activeIndex],
  );
  const refScrollView = React.useRef<ScrollView>(null);
  React.useEffect(() => {
    refScrollView.current?.scrollTo({
      x: activeIndex * 120 + 8 - (width - 250) / 2,
      animated: true,
    });
  }, [activeIndex]);
  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.container, style]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}>
        {tabs.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <AniButton
              key={index}
              style={[
                styles.btn,
                {
                  borderColor: theme['background-basic-color-2'],
                  backgroundColor: isActive
                    ? theme['color-primary-default']
                    : theme['background-basic-color-2'],
                },
              ]}
              onPress={() => changeIndex(index)}
              activeOpacity={0.7}>
              <Text
                capitalize
                category="h6"
                status={isActive ? 'white' : 'platinum'}>
                {item.title}
              </Text>
              {item.notification > 0 && (
                <Text
                  capitalize
                  category="h6"
                  status={isActive ? 'white' : 'platinum'}>
                  ({item.notification})
                </Text>
              )}
            </AniButton>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  btn: {
    marginRight: 16,
    flexDirection: 'row',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  icon: {
    width: 30,
    height: 24,
  },
});
