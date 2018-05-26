import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import { Colors } from "../constants/colors";

export default class DrawerContainer extends React.Component {

    constructor() {
      super();
      this.state = {
        loading: false,
        text: '',
      }
    }

    onChangeText = (text) => {
       this.setState({
         text,
       })
       this.search();
     }

   search = () => {
       this.setState({
         loading: true,
       })
       setTimeout(() => {
         this.setState({
           loading: false,
         });
       }, 500);
   }

   // if user login then set logout user data when need
    logout = () => {
      const actionToDispatch = NavigationActions.reset({
        index: 0,
        key: null,  // black magic
        actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
      })
      this.props.navigation.dispatch(actionToDispatch)
    }

  render() {
            const { navigation } = this.props
            return (
               <View style={styles.container}>
                  <SearchBar
                    value={this.state.text}
                    onChangeText={this.onChangeText}
                    placeholder='Search'
                    clearIcon={this.state.text !== ''}
                    showLoadingIcon={this.state.loading}
                  />

                  <View style={styles.drawerRow}>

                        <Image source={require('../images/ic_home.png')}
                         style={styles.drawerIcon}
                         >
                        </Image>

                       <Text
                        onPress={() => navigation.navigate('Home')}
                        style={styles.drawerItem}
                        >
                        Home
                       </Text>

                  </View>
              </View>
             )
          }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',

    },
    containerNew: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingTop: 5,
      paddingLeft:18,
      fontSize: 18,
    },
    drawerItem: {
      flex:1,
      fontSize: 18,
      color: Colors.BLACK,
      padding: 10,
      textAlign: 'justify',
      },
    drawerRow: {
     flexDirection: "row",
     borderRadius: 2,
     borderColor: Colors.GRAY,
     borderBottomWidth:2,
     paddingLeft:20
   },
   drawerIcon:{
     height: 24,
     width:24,
     alignSelf: "stretch",
     justifyContent: "center",
     alignItems: "center",
     marginTop:10
   }
})
