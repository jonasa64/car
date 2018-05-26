import React, { Component } from 'react';
import { StatusBar,StyleSheet, View, Text, ActivityIndicator, FlatList, Alert, Platform,Image,TouchableHighlight } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { StackNavigator ,Navigator} from "react-navigation";
import { ListItem } from 'react-native-elements';
import HomeDetail from "./HomeDetail.js";
import * as ReduxActions from '../actions'; //Import your actions
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends React.Component {

      constructor(props)
      {
          super(props);
          this.state = {
          loading: true
         };
      }

      componentDidMount() {
        this.props.getCarList(); //call our action
        console.log('componentDidMount');
      };

      render() {

          if (this.props.loading) {
              console.log('  loading ');
              return (
                        <View style={styles.ActivityIndicator_Style}>
                          <ActivityIndicator
                            size="large"
                            />
                        </View>
                    );
            }
            else{
                  console.log('Car List API RESPONSE FROM HOME SCREEN: ',this.props.resCarList);
                  return (
                      <Container>
                        <Content padder>
                              <View style={styles.MainContainer}>
                                    <FlatList
                                        data={ this.props.resCarList }
                                        renderItem={({item}) =>
                                                <View style={styles.GridViewBlock}>

                                                  <TouchableHighlight style={styles.RowImages}

                                                  onPress={() =>this.props.navigation.navigate("HomeDetail",{response:item})} >
                                                  <Image source={{ uri: item.picture }}
                                                    style={styles.RowImages}
                                                  >
                                                  </Image>

                                                  </TouchableHighlight>


                                                    <Text
                                                    style={styles.GridViewItemTitle}
                                                    onPress={() =>this.props.navigation.navigate("HomeDetail",{response:item})} >

                                                      {item.make}

                                                    </Text>
                                                    <Text
                                                    style={styles.GridViewItemSubText}
                                                    onPress={() =>this.props.navigation.navigate("HomeDetail",{response:item})} >

                                                      {item.model}

                                                    </Text>
                                                </View>
                                              }
                                       keyExtractor={i => i.id.toString()}
                                       onEndThreshold={0}
                                       onEndReachedThreshold={0.1}
                                       numColumns={2}
                                       />
                                </View>
                        </Content>
                      </Container>

                  );
             }
      }
}



  // The function takes data from the app current state,
  // and insert/links it into the props of our component.
  // This function makes Redux know that this component needs to be passed a piece of the state
  function mapStateToProps(state, props) {
    return {
        loading: state.carListReducer.loading,
        resCarList: state.carListReducer.resCarList
    }
  }



  // Doing this merges our actions into the component’s props,
  // while wrapping them in dispatch() so that they immediately dispatch an Action.
  // Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
  function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReduxActions, dispatch);
  }


  //Connect everything
  export default connect(mapStateToProps, mapDispatchToProps)(Home);


  const styles = StyleSheet.create({

    MainContainer :{
      justifyContent: 'center',
      flex:1,
      margin: 0,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },

    ActivityIndicator_Style:{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },

   GridViewBlock: {
      justifyContent: 'center',
      flex:1,
      height: 200,
      margin: 5,
      backgroundColor: '#323233'
    },

    GridViewItemTitle: {
       color: '#fff',
       fontWeight: 'bold',
       padding: 5,
       justifyContent: "flex-start",
       fontSize: 12,
     },

     GridViewItemSubText: {
        color: '#fff',
        padding: 5,
        fontSize: 10,
      },

     RowImages:{
       flex:1,
       height: 150,
       alignSelf: "stretch",
     },

  });
