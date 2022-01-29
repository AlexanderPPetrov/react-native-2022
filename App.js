import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import MoviesScreen from "./screens/MoviesScreen";
import DrawerContent from "./components/DrawerContent";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light"/>
        <Drawer.Navigator 
          initialRouteName="Home" 
          drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="MoviesScreen" component={MoviesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}