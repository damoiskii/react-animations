import { ChevronDown } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

interface ExpandableViewProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableView = ({ title, children }: ExpandableViewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const maxHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // Adjust the output range as needed
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View className='w-95 border border-gray-300 rounded-lg shadow-md '>
      <View
        className={`w-full p-4 bg-gray-300 rounded-t-md ${isExpanded ? "rounded-b-none" : "rounded-b-md"}`}
      >
        <TouchableOpacity
          onPress={toggleExpand}
          className='flex-row items-center justify-between'
        >
          <Text className='text-lg font-semibold'>{title}</Text>
          <Animated.View style={{ transform: [{rotate}]}}>
            <ChevronDown />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* {isExpanded && (
        <View className='w-full p-4 bg-gray-100 rounded-b-lg'>
          <View className='w-full'>{children}</View>
        </View>
      )} */}
      <Animated.View
        style={{ maxHeight, opacity }}
        className='w-full rounded-b-lg'
      >
        <View className='w-full p-4'>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default ExpandableView;
