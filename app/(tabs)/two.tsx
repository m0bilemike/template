import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Header } from '@/components/ui/Header';

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
      </View>
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
