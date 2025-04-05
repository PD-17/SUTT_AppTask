import { Text, View, Image, StyleSheet } from "react-native";
import categories from "@/Data/categories";
import { FlatList, GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import { ImageSource } from "expo-image";

type Category = {
  id: number;
  name: string;
  image: ImageSource; 
};

export default function CategoryScreen() {
  const typedCategories = categories as Category[];

  const renderItem = ({ item }: { item: Category }) => (
    <View style={styles.itemContainer}>
      <Pressable onPress={()=> alert("Work in Progress")}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {typedCategories.length > 0 ? (
          <FlatList
            data={typedCategories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.emptyText}>No categories available.</Text>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#10f1",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    top: 20,
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
    color: "green",
    flexGrow: 1,
    left: 150,
    bottom: 60,
  },
  emptyText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 50,
  },
});
