import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { navigationRef } from "../RootNavigation";
import { useNavigation } from '@react-navigation/native';
import { screens } from "../screens";
import { FontAwesome5 } from '@expo/vector-icons'; 
import LoginForm from "../components/forms/LoginForm";
import { useDispatch } from "react-redux";
import { setLoginDialogOpened } from "../redux/actions";

export default function Header(props) {

    const navigation = useNavigation();
    const currentRoute = navigationRef.current?.getCurrentRoute().name;
    const dispatch = useDispatch();
    
    function toggleDrawer() {
        navigation.toggleDrawer();
    }

    function getTitle() {
        if(currentRoute) {
            //TODO check warning require cycle
            return ''
            //return screens.find(screen => screen.name === currentRoute).title
        }
        return null;
    }

    function openUserMenu() {
        dispatch(setLoginDialogOpened(true));
    }

    return  (
            <View style={styles.container}>
                <View style={styles.iconLeft}>
                    <TouchableOpacity onPress={() => toggleDrawer()}>
                        <Ionicons 
                            name="ios-menu-outline" 
                            size={32} 
                            color={colors.textPrimary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>
                            {getTitle()}
                        </Text>
                    </View>
                </View>
                <View style={styles.iconRight}>
                    <TouchableOpacity onPress={() => openUserMenu()}>
                    <FontAwesome5 
                        name="user-circle" 
                        size={28} 
                        color={colors.textPrimary} />
                    </TouchableOpacity>
                </View>
                <LoginForm></LoginForm>
            </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
  },
  iconLeft: {
    padding: 15,
    width: 60,
  },
  iconRight: {
    padding: 15,
    width: 60,
  },
  textContainer: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  text: {
      fontSize: 18,
      color: colors.textPrimary,
      fontWeight: 'bold',
  },
  textWrapper: {
      borderBottomColor: colors.textPrimary,
      borderBottomWidth: 3,
      paddingBottom: 5,
  }
});