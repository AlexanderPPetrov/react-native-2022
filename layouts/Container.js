
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "../colors";

export default function Container(props) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient style={styles.gradient}
              colors={[colors.primary, colors.primaryDark]}>
            </LinearGradient>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
})