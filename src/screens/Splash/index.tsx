import React, { memo } from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

// ----------------------------- @Types -----------------------------------
import { RootStackParamList } from "types/navigation-types";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";
// ----------------------------- Elements -----------------------------------
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";
// ----------------------------- Components -----------------------------------
import { Container } from "components";

const SplashScreen = memo(() => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const data = [
    { title: "Onboarding", onPress: () => navigate("Onboarding") },
    { title: "Authenticate", onPress: () => navigate("Auth") },
    { title: "Profile", onPress: () => navigate("Profile") },
    { title: "Social", onPress: () => navigate("Social") },
    { title: "Finance", onPress: () => navigate("Finance") },
    { title: "Food", onPress: () => navigate("Food") },
    { title: "Fitness & Health", onPress: () => navigate("FitnessHealth") },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
      />
      <IntroList
        contentContainerStyle={styles.content}
        data={data}
        title={""}
      />
    </Container>
  );
});

export default SplashScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  logo: {
    width: 40,
    height: 40,
  },
  topNavigation: {
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 20,
  },
});
