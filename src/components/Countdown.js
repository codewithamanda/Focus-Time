import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from '../utils/colors';
import { paddingSizes } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;

// const formatTime = 

export const Countdown = ({
  minutes = 20,
  isPaused,
  onProgress,
  onEnd
}) => {

  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
    }
    const timeLeft = time - 1000;
    onProgress(timeLeft / minutesToMillis(minutes))
    return timeLeft;
    })
  }

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  useEffect(() => {
    if(isPaused) {
      if(interval.current) clearInterval(interval.current); 
        return;
    }
    
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current)
  }, [isPaused])


  const [millis, setMillis] = useState (minutesToMillis(minutes));
  const formatTime = (time) => time < 10 ? ("0" + time) : time;

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: paddingSizes.lg,
    backgroundColor: "#5584AC",
  }
})