import DrawerItem from "./DrawerItem";
import {StyleSheet, View, SafeAreaView, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import constants from "expo-constants";

export default function DrawerContent(props) {

    const drawerItems = [
      {
        title: 'Начало',
        icon: 'home',
        screen: 'Home',
      },
      {
        title: 'Филми',
        icon: 'movie',
        screen: 'Movies',
      },
      {
        title: 'Сериали',
        icon: 'live-tv',
        screen: 'TVSeries',
      },
      {
        title: 'Настройки',
        icon: 'settings',
        screen: 'Settings',
      },
    ]

    function getDrawerItems() {
      return drawerItems.map((item, index) => {
        return <DrawerItem 
          key={index} 
          icon={item.icon}
          screen={item.screen}
          title={item.title}/>
      })
    }
    return  (
            <LinearGradient 
              style={styles.gradient}
              colors={['#0286a2', '#005d78']}>
                <View style={styles.container}>
                  <Image style={styles.logo} source={require('../assets/components/drawer.png')}></Image>
                  <View style={styles.menuContainer}>
                    {getDrawerItems()}
                  </View>
                </View>
            </LinearGradient>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: constants.statusBarHeight + 20,
    paddingLeft: 15,
  },
  menuContainer: {
    paddingTop: 10,
    marginTop: 10,
    flex: 1,
    alignItems: 'flex-start'
  },
  logo: {
    width: 170,
    height: 47,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});