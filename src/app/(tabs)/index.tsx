
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View, Image, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import petuniaImage from '@/assets/images/petunia.jpeg';

const products = [
  {
    id: '1',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
  {
    id: '2',
    title: 'Petunia vaso 12cm',
    price: '5,99 €',
    image: petuniaImage,
  },
  {
    id: '3',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
  {
    id: '4',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
  {
    id: '5',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
  {
    id: '6',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
];

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} /> 
      <Text style={styles.title}>
        {product.title}
      </Text>
      <Text style={
        styles.price
      
      }>
        {product.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  image : {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
    
  },

});
