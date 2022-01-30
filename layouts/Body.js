import {ScrollView, StyleSheet} from "react-native";

export default function Body (props) {
    return (
        <ScrollView style={styles.container}>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    }
})