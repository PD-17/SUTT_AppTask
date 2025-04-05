import { Pressable, StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import CircleButton from './CircularButton';
import selecteditemsID from "@/Data/cartitems";

type Props = {
  id: number;
  name: string;
  price: number;
    image: ImageSource;
    description?: string;
};

export default function Product({id, name, price, image,description }: Props) {
    const desp=description ? description : 'No description available';
    const router = useRouter();


    const handlePress = () => {
        router.push({
            pathname: '/(tabs)/ProductDetails',
            params: {id},
        });
    };
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
        <Text style={styles.desp}>{desp}</Text>
      <Text style={styles.price}>${price}</Text>
      </Pressable>
      <View style={styles.button}>
      <CircleButton name="add" onPress={()=> {
        selecteditemsID.push(id);
        alert("Item added to cart");
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  },
  container: {
    top: 110,
    width: 200,
    height: 300,
    borderRadius: 18,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
  },
  name: {
    left : 10,
    fontSize: 25,
    fontWeight: '400',
    marginTop: 5,
  },
  price: {  
    top: 250,
    position: 'absolute',
    left : 10,
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  desp: {
    position: 'absolute',
    left: 10,
    top: 230,
    fontSize: 12,
    color: 'lightbrown',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    bottom: -11,
    left: 170,
    padding: 5,
  },



});