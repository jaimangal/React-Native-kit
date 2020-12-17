import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.welcometext}> Welcome to App </Text>
        </View>
        <View
            style={[styles.footer, {
                backgroundColor: "#fff"
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: 'black'
            }]}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                  <View
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>Get Started</Text>

                  </View>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  welcometext: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 28,
      fontWeight: 'bold'
  },
  text: {
      color: 'green',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      borderWidth: 2,
      borderColor: '#009387',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: '#009387',
      fontWeight: 'bold'
  }
});
