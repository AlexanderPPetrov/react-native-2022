import Header from "../components/Header";
import {StyleSheet, View} from "react-native";

export default function Default(props) {
    return  (
            <View style={styles.container}>
                <Header/>
                {props.children}
            </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});