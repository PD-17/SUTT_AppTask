import { StyleSheet, Text, View, FlatList, Pressable} from "react-native";
import Product from "@/Components/Product";
import { ImageSource } from "expo-image";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import pdtData from "@/Data/data";


const typedPdtData = pdtData as {
  id: number;
  name: string;
  price: number;
  image: ImageSource;
  description: string;
}[];


export default function Index() {
  interface ProductData {
    id: number;
    name: string;
    price: number;
    image: ImageSource;
    description: string;
  }
  
  const rndritem=({item}: { item: ProductData }) => (
    <Product
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
    />
  )

  const router = useRouter();
  return (
    <View
      style={styles.container}
    >
      <Pressable style={styles.button} onPress={() => router.push("/(tabs)/Cart")} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>

        <Ionicons name="cart" size={30} color="white" />

      </Pressable>
      <Text style={styles.headertext}>Get Healthy,</Text>
      <Text style={styles.head2}>Its the Best Investment!</Text>
      <Text style={styles.head3}>Recommendations:</Text>
      <FlatList
        data={typedPdtData}
        renderItem={rndritem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headertext: {
    fontSize: 40,
    fontWeight: "500",
    color: "black",
    top: 50,
    left: 20,
  },
  head2: {
    fontSize: 25,
    fontWeight: "500",
    color: "green",
    top: 40,
    left: 20,
    
  },
  head3: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "500",
    color: "darkblue",
    top: 160,
    left: 20,
  },
  button: {
    left: 340,
    top: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "green",
  },
});