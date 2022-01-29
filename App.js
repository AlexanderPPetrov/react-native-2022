import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import MoviesScreen from "./screens/MoviesScreen";
import TVSeriesScreen from "./screens/TVSeriesScreen";
import SettingsScreen from "./screens/SettingsScreen";

import DrawerContent from "./components/DrawerContent";
import { navigationRef } from "./RootNavigation";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer ref={navigationRef} >
        <StatusBar style="light" backgroundColor="#0287a3"/>
        <Drawer.Navigator 
          initialRouteName="Home" 
          drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Movies" component={MoviesScreen} />
          <Drawer.Screen name="TVSeries" component={TVSeriesScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}