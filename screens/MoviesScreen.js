import { StyleSheet, Text, View } from 'react-native';
import DefaultLayout from "../layouts/Default";

export default function MoviesScreen() {
  return (
    <DefaultLayout>
        <View style={styles.container}>
            <Text>Movies Screen</Text>
        </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
