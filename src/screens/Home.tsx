import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import axios from 'axios';

const Home = () => {
  const [webview, setWebview] = useState(false);

  const openWebview = () => {
    setWebview(true);
  };

  const handleBackButtonClick = () => {
    setWebview(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleActivityApi = async () => {
    try {
      await axios.get(
        `http://192.168.0.7:8000/garmin/user-activity-api?userId=${'d9de2632-1c42-438a-b161-d98980f22c00'}`,
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleHealDailiesApi = async () => {
    try {
      await axios.get(
        `http://192.168.0.7:8000/garmin/user-health-api?userId=${'d9de2632-1c42-438a-b161-d98980f22c00'}&endpoint=${'dailies'}`,
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleHealDailiesBloodPressures = async () => {
    try {
      await axios.get(
        `http://192.168.0.7:8000/garmin/user-health-api?userId=${'d9de2632-1c42-438a-b161-d98980f22c00'}&endpoint=${'bloodPressures'}`,
      );
    } catch (error) {
      console.error(error);
    }
  };

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
          <TouchableOpacity
            style={[styles.button, {marginTop: 10}]}
            onPress={handleActivityApi}>
            <Text style={styles.text}>Activity API</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {marginTop: 10}]}
            onPress={handleHealDailiesApi}>
            <Text style={styles.text}>Health Dailies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {marginTop: 10}]}
            onPress={handleHealDailiesBloodPressures}>
            <Text style={styles.text}>Health Blood Pressures</Text>
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
    padding: 20,
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
