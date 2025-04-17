import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FinanceStackParamList } from 'types/navigation-types';

import FinanceIntro from 'screens/finance/FinanceIntro';
import Finance01 from 'screens/finance/Finance01';
import Finance02 from 'screens/finance/Finance02';
import Finance03 from 'screens/finance/Finance03';
import Finance04 from 'screens/finance/Finance04';
import Finance05 from 'screens/finance/Finance05';
import Finance06 from 'screens/finance/Finance06';
import Finance07 from 'screens/finance/Finance07';
import Finance08 from 'screens/finance/Finance08';
import Finance09 from 'screens/finance/Finance09';
import Finance10 from 'screens/finance/Finance10';

const Stack = createNativeStackNavigator<FinanceStackParamList>();

const FinanceNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FinanceIntro">
      <Stack.Screen name="FinanceIntro" component={FinanceIntro} />
      <Stack.Screen name="Finance01" component={Finance01} />
      <Stack.Screen name="Finance02" component={Finance02} />
      <Stack.Screen name="Finance03" component={Finance03} />
      <Stack.Screen name="Finance04" component={Finance04} />
      <Stack.Screen name="Finance05" component={Finance05} />
      <Stack.Screen name="Finance06" component={Finance06} />
      <Stack.Screen name="Finance07" component={Finance07} />
      <Stack.Screen name="Finance08" component={Finance08} />
      <Stack.Screen name="Finance09" component={Finance09} />
      <Stack.Screen name="Finance10" component={Finance10} />
    </Stack.Navigator>
  );
};
export default FinanceNavigator;
