import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { NavigationAction, Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';



import { IntroButtonProps } from 'types/element-types';
import { FinanceStackParamList } from 'types/navigation-types';
import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

const FinanceIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<FinanceStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: 'Finance 01',
      onPress: () => {
        navigate('Finance01');
      },
    },
    {
      title: 'Finance 02',
      onPress: () => {
        navigate('Finance02');
      },
    },
    {
      title: 'Finance 03',
      onPress: () => {
        navigate('Finance03');
      },
    },
    {
      title: 'Finance 04',
      onPress: () => {
        navigate('Finance04');
      },
    },
    {
      title: 'Finance 05',
      onPress: () => {
        navigate('Finance05');
      },
    },
    {
      title: 'Finance 06',
      onPress: () => {
        navigate('Finance06');
      },
    },
    {
      title: 'Finance 07',
      onPress: () => {
        navigate('Finance07');
      },
    },
    {
      title: 'Finance 08',
      onPress: () => {
        navigate('Finance08');
      },
    },
    {
      title: 'Finance 09',
      onPress: () => {
        navigate('Finance09');
      },
    },
    {
      title: 'Finance 10',
      onPress: () => {
        navigate('Finance10');
      },
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="Finance" />
    </Container>
  );
});

export default FinanceIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
