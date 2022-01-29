import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, View, Text } from "react-native";

export default function Header(props) {
    return  (
            <View style={styles.container}>
                <View style={styles.iconLeft}>
                   <Ionicons name="ios-menu-outline" size={24} color="white" />
                </View>
                <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Home
                </Text>
                </View>
                <View style={styles.iconRight}>

                </View>
            </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#005e79',
    height: 55,
  },
  iconLeft: {
      padding: 15,
  },
  textContainer: {
      padding: 15,
  },
  text: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
  }
});