import * as React from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  useStyleSheet,
  Button,
  Icon,
  useTheme,
  TopNavigation,
} from "@ui-kitten/components";
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  LinearGradientText,
  NavigationAction,
  VStack,
} from "components";
import TabBar from "./TabBar";
// ----------------------------- VictoryChart -----------------------------------
import { LinearGradient, Stop } from "react-native-svg";
import {
  VictoryChart,
  VictoryAxis,
  VictoryBar,
  VictoryLabel,
} from "victory-native";

const FitnessHealth10 = () => {
  const { goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={32} mt={20}>
          <LinearGradientText
            text={`What is\nyour weight`}
            textStyle={styles.title}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <TabBar
            tabs={["Kg", "Lb"]}
            index={selectedIndex}
            setIndex={setSelectedIndex}
          />
        </VStack>
        <VStack level="2" border={16} mt={42}>
          <VictoryChart
            animate={{
              duration: 1000,
              onLoad: { duration: 500 },
            }}
            width={width - 48}
            height={391}
            domainPadding={{ x: 10 }}
            padding={{ left: 24, bottom: 32, right: 120, top: 24 }}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent", size: 0 },
                tickLabels: {
                  fill: "url(#gradient1)",
                  fontSize: 12,
                },
              }}
              tickFormat={[]}
            />
            <VictoryBar
              horizontal
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPressIn: () => {
                      return [
                        {
                          target: "data",
                          eventKey: "all",
                          mutation: () => ({
                            style: { fill: "#E8E9EB20" },
                          }),
                        },
                        {
                          target: "labels",
                          eventKey: "all",
                          mutation: () => ({
                            style: {
                              fill: "transparent",
                              fontSize: 12,
                            },
                          }),
                        },
                        {
                          target: "data",
                          mutation: () => ({
                            style: { fill: "url(#gradient1)" },
                          }),
                        },
                        {
                          target: "labels",
                          mutation: () => ({
                            style: {
                              fill: "url(#gradient1)",
                              fontSize: 32,
                            },
                          }),
                        },
                      ];
                    },
                    onPressOut: () => {
                      return [];
                    },
                  },
                },
              ]}
              labels={({ datum }) => datum.y.toFixed(0)}
              data={selectedIndex === 0 ? data_chart : data_chart_1}
              x="time"
              colorScale={"qualitative"}
              barWidth={24}
              labelComponent={
                <VictoryLabel
                  style={{ fill: "transparent", fontSize: 0 }}
                  x={width / 1.35}
                  textAnchor="start"
                  verticalAnchor="middle"
                />
              }
              cornerRadius={{ bottom: 8, top: 8 }}
              style={{
                data: {
                  fill: "#E8E9EB20",
                },
                labels: {
                  fill: "transparent",
                  fontSize: 12,
                },
              }}
            />
            <LinearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="10%">
              <Stop offset="10%" stopColor="#FFFDE1" />
              <Stop offset="100%" stopColor="#CFE1FD" />
            </LinearGradient>
          </VictoryChart>
        </VStack>
      </Content>
      <Button
        style={styles.button}
        children={"Next"}
        onPress={goBack}
        accessoryRight={<Icon pack="assets" name={"caret-right"} />}
      />
    </Container>
  );
};
export default FitnessHealth10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "SpaceGrotesk-Bold",
  },
});
const data_chart = [
  { x: "1", y: 33 },
  { x: "2", y: 44 },
  { x: "3", y: 65 },
  { x: "4", y: 69 },
  { x: "5", y: 50.5 },
  { x: "6", y: 70 },
  { x: "7", y: 48 },
  { x: "8", y: 38 },
  { x: "9", y: 28 },
];
const data_chart_1 = [
  { x: "1", y: 53 },
  { x: "2", y: 34 },
  { x: "3", y: 75 },
  { x: "4", y: 29 },
  { x: "5", y: 30.5 },
  { x: "6", y: 40 },
  { x: "7", y: 28 },
  { x: "8", y: 18 },
  { x: "9", y: 28 },
];
