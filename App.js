/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  Animated,
  useNativeDriver
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ExcludeDown from './src/svgs/Excludedownbg.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const stretchAnimation = useRef(new Animated.Value(1)).current;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(stretchAnimation, {
    //       toValue: 200,
    //       duration: 2000,
    //       useNativeDriver
    //     }),
        Animated.timing(stretchAnimation, {
          toValue: 2,
          duration: 2000,
          useNativeDriver
        })
    //   ])
    // )
  }, []);
  return (
    <View style={[styles.ultraContainer]}>
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <Animated.View style={[styles.exludecontainer], {
          scaleY: stretchAnimation
        }}>
          <ExcludeDown style={[styles.exludedown]}/>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    exludecontainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    exludedown: {
      // position: 'absolute',
      // bottom: 0,
      marginLeft: 16,
      // zIndex: 2,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 9,
      backgroundColor: '#FFE2AB'
    },
    ultraContainer: {
      flex: 1,
      backgroundColor: "#FFEDCB",
    }
});

export default App;
