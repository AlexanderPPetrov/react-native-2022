import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../colors";

export default function Loader({requestName}) {

    const activeRequests = useSelector(state => state.activeRequests);
    console.log(activeRequests)
    function getLoader() {
        if(activeRequests.includes(requestName)){
            return <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color={colors.action} />
                </View>
        }
        return null;
    }
    return (
        <>
            {getLoader()}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
});
  