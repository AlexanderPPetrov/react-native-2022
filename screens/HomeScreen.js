import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../colors';
import DefaultLayout from "../layouts/Default";

export default function HomeScreen() {
  return (
    <DefaultLayout>
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  text: {
      color: colors.textSecondary
  }
});
