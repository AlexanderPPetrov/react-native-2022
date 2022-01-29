import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { navigate, navigationRef } from "../RootNavigation";

export default DrawerItem = (props) => {
    const currentRoute = navigationRef.current?.getCurrentRoute().name;
    return (
        <TouchableOpacity
            style={[
                styles.container, 
                currentRoute === props.screen ? styles.containerActive : null,
            ]}
            onPress={() => {
                console.log(navigationRef.current.getCurrentRoute())
                navigate(props.screen);
            }}
            >
            <MaterialIcons name={props.icon} color="white" size={22}/>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: '100%'
    },
    containerActive: {
        backgroundColor: '#00526a',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    wrapperCustom: {
        backgroundColor: '#0097b7',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8, 
    }
  });