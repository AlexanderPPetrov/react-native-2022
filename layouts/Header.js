import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { navigationRef } from "../RootNavigation";
import { useNavigation } from '@react-navigation/native';
import { screens } from "../screens";
export default function Header(props) {
    
    const navigation = useNavigation();
    const currentRoute = navigationRef.current?.getCurrentRoute().name;

    function toggleDrawer() {
        navigation.toggleDrawer();
    }
    function getTitle() {
        if(currentRoute) {
            return screens.find(screen => screen.name === currentRoute).title
        }
        return null;
    }
    return  (
            <View style={styles.container}>
                <View style={styles.iconLeft}>
                    <TouchableOpacity onPress={() => toggleDrawer()}>
                        <Ionicons name="ios-menu-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {getTitle()}
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
      color: colors.textPrimary,
      fontWeight: 'bold',
  }
});