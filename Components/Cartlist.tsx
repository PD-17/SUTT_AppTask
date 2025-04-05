
import { Text, View } from 'react-native';
import pdtData from '@/Data/data';

const typedPdtData = pdtData as { id: number; name: string, price:number }[]; 
export default function Cartlist({ id }: { id: number }) { 

    const product = typedPdtData.find((item) => item.id === id);

    return (
        <View>
            {product ? (
                <><Text>{product.name}</Text><Text>{product.price}</Text></>
            ) : (
                <Text>Product not found</Text>
            )}
        </View>
    );
}