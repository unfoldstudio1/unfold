import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLayout } from 'hooks';

import BillItem from './BillItem';

import { IBill } from './type';
import { data_bills } from './data';

interface UpcomingProps {}

const Upcoming: React.FC<UpcomingProps> = ({}) => {
  const { width } = useLayout();

  const renderItem = React.useCallback(({ item }: { item: IBill }) => {
    return <BillItem item={item} style={styles.item} />;
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <FlatList
        data={data_bills}
        renderItem={renderItem}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingTop: 24,
    paddingHorizontal: 8,
    paddingBottom: 4 + 56 + 8,
  },
  item: {
    marginBottom: 8,
  },
});
