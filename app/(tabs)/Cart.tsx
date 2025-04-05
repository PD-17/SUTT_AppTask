import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { Image, ImageSource } from "expo-image";
import selecteditemsID from "@/Data/cartitems";
import pdtData from "../../Data/data";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const typedPdtData = pdtData as {
  id: number;
  name: string;
  price: number;
  image: ImageSource;
}[];

export default function Cart() {
  const cartItems = typedPdtData.filter((item) => selecteditemsID.includes(item.id));
const [cartItems1, setCartItems] = useState(
    typedPdtData.filter((item) => selecteditemsID.includes(item.id))
);

const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    const remove = selecteditemsID.indexOf(id);
    if (remove > -1) selecteditemsID.splice(remove, 1);
};
  const renderItem = ({ item }: { item: typeof typedPdtData[0] }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    <Pressable onPress={() => removeItemFromCart(item.id)}>
      <Ionicons name="trash-bin-outline" size={25} color="black" />
    </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    flexGrow: 1,
  },
  price: {
    right: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});
