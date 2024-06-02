
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View, Image, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';

type ProductListItemProps = {
    product: Product;
    };


export const ProductListItem = ({ product }: ProductListItemProps)  => {
  return (
    <View style={styles.container}>
      <Image 
      source={product.image} 
      style={styles.image}
      resizeMode='contain' /> 
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
    flex: 1,
    margin: 5,
    maxWidth: '45%',
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  image : {
    width: '100%',
    height: 150,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
    
  },

});
