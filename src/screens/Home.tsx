import {
  StyleSheet,
  Text,
  View,
  Linking,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useLinkTo} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const Home = () => {
  const [webview, setWebview] = useState(false);

  const openWebview = () => {
    setWebview(true);
  };

  function handleBackButtonClick() {
    setWebview(false);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {webview ? (
        <WebView
          source={{uri: 'https://www.runpass.run/home'}}
          style={{flex: 1}}
        />
      ) : (
        <View style={styles.centered}>
          <TouchableOpacity style={styles.button} onPress={openWebview}>
            <Text style={styles.text}>Iniciar Autorização</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#a032e4',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});
