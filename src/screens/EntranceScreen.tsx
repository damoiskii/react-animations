import { useEffect, useRef } from "react";
import { Animated, Image, View } from "react-native";

const STARTING_POSITION = -500;
const ENDING_POSITION = 0;
const ANIMATION_CONFIG = {
    duration: 1500, // Duration of the animation in milliseconds
    useNativeDriver: true, // Use native driver for better performance
}

const EntranceScreen = () => {
  const PlaneImage = require("@/assets/images/airplane.png");

  const translateX = useRef(new Animated.Value(STARTING_POSITION)).current;

  const animateX = () => {
    Animated.timing(translateX, {
        toValue: ENDING_POSITION,
        ...ANIMATION_CONFIG,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
        animateX();
    }, 2000);
  }, []);

  return (
    <View className='flex-1 w-full items-center justify-center'>
      <Animated.Image
        source={PlaneImage}
        style={{ width: 200, height: 200, transform: [{ translateX }] }}
        resizeMode='contain'
      />
    </View>
  );
};

export default EntranceScreen;
