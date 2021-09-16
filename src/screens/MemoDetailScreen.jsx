import React from 'react';
// eslint-disable-next-line object-curly-newline
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={Styles.container}>
      <AppBar />
      <View style={Styles.memoHeader}>
        <Text style={Styles.memoTitle}>買い物リスト</Text>
        <Text style={Styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={Styles.memoBody}>
        <Text style={Styles.memoText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然になるかも。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160 }}>+</CircleButton>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
