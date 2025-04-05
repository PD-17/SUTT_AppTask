import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    name: keyof typeof MaterialIcons.glyphMap,
  onPress: () => void;
};

export default function CircleButton({ name,onPress}: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name={name} size={30} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
},
  circleButton: {
    flex: 1,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
