// CustomButton.tsx
import React from 'react';
import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 12,
  },
});

export default CustomButton;
