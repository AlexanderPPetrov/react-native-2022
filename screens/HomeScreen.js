import { StyleSheet, Text, View } from 'react-native';
import DefaultLayout from "../layouts/Default";
export default function HomeScreen() {
  return (
    <DefaultLayout>
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
    </DefaultLayout>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
  },
});
