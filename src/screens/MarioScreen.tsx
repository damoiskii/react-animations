import { useRef, useState } from "react";
import { Animated, Button, View } from "react-native";

const MarioScreen = () => {
  const MarioImage = require("@/assets/images/mario.png");

  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const [horizontalPosition, setHorizontalPosition] = useState(0);

  const moveRight = () => {
    const newPosition = horizontalPosition + 20; // Move 200 units to the right
    setHorizontalPosition(newPosition);

    Animated.timing(translateX, {
      toValue: newPosition,
      duration: 300, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // Reset the position after the animation completes
      //   setHorizontalPosition(0);
      //   translateX.setValue(0);
    });
  };

  const moveLeft = () => {
    const newPosition = horizontalPosition - 20;
    setHorizontalPosition(newPosition);

    Animated.timing(translateX, {
      toValue: newPosition, // Move 200 units to the right
      duration: 300, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // Reset the position after the animation completes
      //   setHorizontalPosition(0);
      //   translateX.setValue(0);
    });
  };

  return (
    <View className='flex-1 w-full items-center justify-center'>
      {/* <Image source={MarioImage} style={{ width: 100, height: 100 }} resizeMode="contain" /> */}
      <Animated.Image
        source={MarioImage}
        style={{
          width: 100,
          height: 100,
          transform: [{ translateX }, { translateY }],
        }}
        resizeMode='contain'
      />
      <View className='w-full h-1 border-b border-gray-300 mb-2' />

      <View className='flex-row justify-between w-1/2'>
        <Button title='Move Left' onPress={moveLeft} />
        <Button title='Move Right' onPress={moveRight} />
      </View>
    </View>
  );
};

export default MarioScreen;
