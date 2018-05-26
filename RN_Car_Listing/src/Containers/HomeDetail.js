import React,{Component} from "react";
import { AppRegistry, Alert ,StyleSheet,Platform,View,Image,TextInput} from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";


export default class HomeDetail extends Component {

  render() {

      var params = this.props.navigation.state.params.response
     console.log(' Car Detail Selceted Response', params);

        return (
          <Container>
              <Header>
                <Left>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Title>   {`${params.make}`} </Title>
                </Body>
                <Right />
              </Header>

              <Content padder>

              <View>
                  <Image
                      style={{flex: 1, height: 150,marginBottom:10}}
                      source={{uri:
                        `${params.picture}`
                    }}/>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>id</Text>
                      <Text style={styles.txtValue}>{`${params.id}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>make</Text>
                      <Text style={styles.txtValue}>{`${params.make}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>model </Text>
                      <Text style={styles.txtValue}>{`${params.model }`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>category </Text>
                      <Text style={styles.txtValue}>{`${params.category}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>year </Text>
                      <Text style={styles.txtValue}>{`${params.year}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>regno</Text>
                      <Text style={styles.txtValue}>{`${params.regno}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>seats</Text>
                      <Text style={styles.txtValue}>{`${params.seats}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>doors</Text>
                      <Text style={styles.txtValue}>{`${params.doors}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>gearType</Text>
                      <Text style={styles.txtValue}>{`${params.gearType}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>aircondition</Text>
                      <Text style={styles.txtValue}>{`${params.aircondition}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>location </Text>
                      <Text style={styles.txtValue}>{`${params.location}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>pricePerDay </Text>
                      <Text style={styles.txtValue}>{`${params.pricePerDay}`}</Text>
                  </View>

                  <View style={styles.row}>
                      <Text style={styles.txtLabel}>isavailable </Text>
                      <Text style={styles.txtValue}>{`${params.isavailable}`}</Text>
                  </View>
            </View>

              </Content>
          </Container>
        );
    }
}

const styles = StyleSheet.create ({
     container: {
        marginTop: 100,
        padding: 20
     },
     text: {
        color: '#41cdf4',
     },
     row: {
      flex: 1,
      flexDirection: "row"
    },
    txtLabel: {
      flex: 1,
      borderColor: "#cccccc",
      borderBottomWidth: 1,
      marginBottom: 10
    },
    txtValue: {
      borderColor: "#cccccc",
      borderBottomWidth: 1,
      marginBottom: 10,
    },
})
