import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../../styles/colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};

const Button = ({title, onPress, color}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]}>
      {title}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
export default Button;
