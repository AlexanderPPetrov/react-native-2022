import DrawerItem from "./DrawerItem";
import {StyleSheet, ScrollView, SafeAreaView} from "react-native";

export default function DrawerContent(props) {

    const drawerItems = [
      {
        title: 'Home',
        icon: '',
      },
      {
        title: 'Movies',
        icon: '',
      }
    ]

    function getDrawerItems() {
      return drawerItems.map((item, index) => {
        return <DrawerItem key={index} title={item.title}/>
      })
    }
    return  (
        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            {getDrawerItems()}
          </SafeAreaView>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});