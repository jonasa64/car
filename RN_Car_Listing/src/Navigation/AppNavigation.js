import React from 'react';
import { Icon,Button } from "native-base";
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from '../Containers/Home'
import HomeDetail from '../Containers/HomeDetail'
import DrawerContainer from '../Containers/DrawerContainer'
import { Colors } from "../constants/colors";


// drawer stack
const DrawerStack = DrawerNavigator({
  Home   : { screen: Home    },

}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

// Drawer Menu Button handle
const drawerButton = (navigation) =>
    <Button
        transparent
        onPress={() => {
                          if (navigation.state.index === 0) {
                            navigation.navigate('DrawerOpen')
                          } else {
                            navigation.navigate('DrawerClose')
                          }
                      }
                }
   >
    <Icon name="menu"  style={{color: Colors.WHITE }}/>
  </Button>


  const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack },
    HomeDetail :  { screen: HomeDetail , navigationOptions: { header: null } }
  }, {
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: Colors.FB_BLUE},
      title: 'Home',
      headerTintColor: Colors.WHITE,
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  })

export default DrawerNavigation
