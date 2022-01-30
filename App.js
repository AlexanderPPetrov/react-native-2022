import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { screens } from "./screens";
import { getHeaderTitle } from '@react-navigation/elements';
import DrawerContent from "./components/DrawerContent";
import { navigationRef } from "./RootNavigation";

const Drawer = createDrawerNavigator();
export default function App() {

  const getScreens = () => {
    return screens.map(screen => {
      return <Drawer.Screen 
        key={screen.name}
        name={screen.name} 
        component={screen.component} />
    })
  }

  return (
    <>
      <NavigationContainer ref={navigationRef} >
        <StatusBar style="light" backgroundColor="#0287a3"/>
        <Drawer.Navigator 
          screenOptions={
            {
              header: () => null
            }
          }
          initialRouteName="Home" 
          drawerContent={props => <DrawerContent {...props}/>}>
          {getScreens()}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}