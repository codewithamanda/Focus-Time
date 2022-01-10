import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, paddingSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { RoundedButton } from '../../components/RoundedButton';


//Debug here, HistoryItem.status was throwing errors, I deleted,
//now it's not knowing the difference between a complete and cancelled status
const HistoryItem = ({ item, index }) => {
  return <Text style={HistoryItem}>{item.subject}</Text>;
};

const historyItemStyles = (status) => ({
  color: status > 1 ? '#fff' : '#333',
  fontSize: fontSizes.md,
});

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={70}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: paddingSizes.md,
  },
});
