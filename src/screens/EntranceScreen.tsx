import { useEffect, useRef } from "react";
import { Animated, Image, View } from "react-native";

const ANIMATION_CONFIG = {
    duration: 1500, // Duration of the animation in milliseconds
    useNativeDriver: true, // Use native driver for better performance
}

const EntranceScreen = () => {
  const PlaneImage = require("@/assets/images/airplane.png");
  const BlueFireImage = require("@/assets/images/fire-blue.png");

  const translateX = useRef(new Animated.Value(-500)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const animateX = () => {
    Animated.timing(translateX, {
        toValue: 0,
        ...ANIMATION_CONFIG,
    }).start();
  };

  const animateOpacity = () => {
    Animated.timing(opacity, {
        toValue: 1,
        ...ANIMATION_CONFIG,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
        animateOpacity();
        animateX();
    }, 2000);
  }, []);

  return (
    <View className='flex-1 w-full items-center justify-center'>
      <Animated.Image
        source={PlaneImage}
        style={{ width: 300, height: 300, transform: [{ translateX }] }}
        resizeMode='contain'
      />
      <Animated.Image
        source={BlueFireImage}
        style={{ width: 500, height: 500, opacity }}
        resizeMode='contain'
        className='absolute bottom-[-200] right-[-200]'
      />
    </View>
  );
};

export default EntranceScreen;
