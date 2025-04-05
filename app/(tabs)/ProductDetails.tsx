import { Image, type ImageSource } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import pdtData from "../../Data/data";
import CircleButton from "@/Components/CircularButton";
import selecteditemsID from "@/Data/cartitems";


const typedPdtData = pdtData as {
  id: number;
  name: string;
  price: number;
  image: ImageSource;
  description: string;
}[];

export default function ProductDetails() {
  const { id } = useLocalSearchParams() ;
  const item = typedPdtData.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Product not found</Text>
      </View>
    );
  }

  const { name, price, image, description } = item;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.con2} >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desp}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
        <Pressable style={styles.button} onPress={() => {
          selecteditemsID.push(Number(id));
          alert("Item added to cart");
        }}>
          <Text>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  desp: {
    fontSize: 20,
    fontWeight: "400",
    color: "darkgreen",
    top: 10,
  },
  price: {
    fontSize: 45,
    fontWeight: "400",
    color: "green",
    top: 200,
    left: 10,
  },
  image: {
    flex: 0.5,
    width: 400,
    borderRadius: 18,
  },
  con2: {
    flex: 0.5,
    width: 400,
    borderRadius: 18,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
  },
  button: {
    top: 150,
    left: 300,
    padding: 20,
  },
});
