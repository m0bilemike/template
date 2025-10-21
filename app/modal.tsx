import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import SettingsCard from '@/components/settings/SettingsCard';
import { Text, View } from '@/components/Themed';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export default function ModalScreen() {
  const appUsage = useSelector((state: RootState) => state.appUsage);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <SettingsCard label="App Opens" value={appUsage.totalOpens} icon="📱" />
      <SettingsCard label="Daily Streak" value={appUsage.streak} icon="🔥" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
