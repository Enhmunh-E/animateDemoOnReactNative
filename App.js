/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
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
  useNativeDriver,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ExcludeDown from './src/svgs/Excludedownbg.svg';
import Girl from './src/svgs/GIRL.svg';
import GirlShadow from './src/svgs/SHADOW.svg';
import City from './src/svgs/city.svg';
import Track from './src/svgs/TRACK.svg';
import Rectangles from './src/svgs/RECTANGLES.svg';
import Pause from './src/svgs/PAUSE.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [opened, setOpened] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const stretchAnimation = useRef(new Animated.Value(0)).current;
  const openAnimation = useRef(new Animated.Value(64)).current;
  const cityAnimation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const deesheeAnimation = useRef(new Animated.Value(0)).current;
  const diskLocation = useRef(new Animated.ValueXY({ x: 0, y: 8 })).current;
  const rectanglesLocation = useRef(new Animated.ValueXY({ x: 72, y: -35 })).current;
  const pauseLocation = useRef(new Animated.ValueXY({ x: windowWidth-103, y:  -78})).current;
  const scaleBottomValue = stretchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });
  const floatingGirlValue = stretchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, -100],
  });
  const shadow = stretchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1.8, 1],
  });
  const shadowY = stretchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, -10],
  });
  const diskRotate = stretchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '120deg'],
  });
  const diskScale = openAnimation.interpolate({
    inputRange: [64, 448],
    outputRange: [1, 3.5]
  });
  const rectanglesScale = openAnimation.interpolate({
    inputRange: [64, 448],
    outputRange: [1, 1.4]
  })
  const bigger = () => {
    Animated.parallel([
      Animated.timing(openAnimation, {
        toValue: 512,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(deesheeAnimation, {
        toValue: -448,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(diskLocation, {
        toValue: { x: (windowWidth-30-75)/2, y: 30 },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(rectanglesLocation, {
        toValue: { x: 100, y: 300 },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(pauseLocation, {
        toValue: { x: (windowWidth - 100)/2, y:  350},
        duration: 800,
        useNativeDriver: false,
      })
    ]).start();
    allAnimation.reset();
    allAnimation.stop();
  };
  const smaller = () => {
    Animated.parallel([
      Animated.timing(openAnimation, {
        toValue: 64,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(deesheeAnimation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(diskLocation, {
        toValue: { x: 0, y : 8 },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(rectanglesLocation, {
        toValue: { x: 72, y: -35 },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(pauseLocation, {
        toValue: { x: windowWidth-103, y:  -78},
        duration: 800,
        useNativeDriver: false,
      })
    ]).start();
    allAnimation.start();
  };
  const allAnimation = Animated.loop(
    Animated.parallel([
      Animated.sequence([
        Animated.timing(stretchAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(stretchAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      Animated.sequence([
        Animated.timing(cityAnimation, {
          toValue: {x: -2, y: -25},
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(cityAnimation, {
          toValue: {x: 2, y: -50},
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(cityAnimation, {
          toValue: {x: -2, y: -25},
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(cityAnimation, {
          toValue: {x: 0, y: 0},
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ]),
  );
  useEffect(() => {
    console.log(opened);
    if (opened) {
      bigger();
    } else {
      smaller();
    }
  }, [opened]);
  useEffect(() => {
    allAnimation.start();
  }, []);
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <Animated.View 
        style={[
          styles.topsection,
          {
            transform: [
              {translateY: deesheeAnimation}
            ]
          }
          ]}>
        <Animated.View
          style={[
            styles.exludecontainer,
            {
              transform: [
                {
                  translateY: scaleBottomValue,
                },
              ],
            },
          ]}>
          <ExcludeDown style={[styles.exludedown]} />
        </Animated.View>
        <Animated.View
          style={[
            styles.gilrcontainer,
            {
              transform: [
                {
                  translateY: floatingGirlValue,
                },
              ],
            },
          ]}>
          <Girl />
          <Animated.View
            style={[
              styles.shadow,
              {
                transform: [
                  {
                    translateY: shadowY,
                  },
                  {
                    scale: shadow,
                  },
                ],
              },
            ]}>
            <GirlShadow />
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.city,
            {
              transform: [
                {
                  translateX: cityAnimation.x,
                },
                {
                  translateY: cityAnimation.y,
                },
              ],
            },
          ]}>
          <City />
        </Animated.View>
      </Animated.View>
      <AnimatedPressable
        style={[
          styles.playercontainer,
          {
            height: openAnimation,
            // flexDirection: opened ? "column" : "row"
          },
        ]}
        onPress={() => setOpened(!opened)}>
        <Animated.View
          style={{
            transform: [
              // {
              //   rotate: diskRotate,
              // },
              {
                scale: diskScale,
              },  
              {
                translateX: diskLocation.x,
              },
              {
                translateY: diskLocation.y,
              },
            ],
          }}>
            <Track />
        </Animated.View>
        <Animated.View 
          style={{
            transform: [
              {
                translateX: rectanglesLocation.x,
              },
              {
                translateY: rectanglesLocation.y
              },
              {
                scale: rectanglesScale,
              }
            ]
          }}
        >
          <Rectangles />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: pauseLocation.x,
              },
              {
                translateY: pauseLocation.y,
              }
            ]
          }}
        >
          <Pause />
        </Animated.View>
      </AnimatedPressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exludecontainer: {
    zIndex: 2,
  },
  exludedown: {
    height: windowHeight,
    width: windowWidth,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE2AB',
    margin: 9,
    overflow: 'hidden',
  },
  gilrcontainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 3,
  },
  shadow: {
    zIndex: 4,
  },
  city: {
    zIndex: 1,
    position: 'absolute',
    bottom: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  playercontainer: {
    width: windowWidth - 18 - 20,
    height: 64,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    zIndex: 3,
    marginHorizontal: 10,
    borderRadius: 8,
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  topsection: {
    flex: 1,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  }
});

export default App;
