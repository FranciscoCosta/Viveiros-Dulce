
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import Colors from '@/src/constants/Colors';
import petuniaImage from '@/assets/images/petunia.jpeg';
import { ProductListItem } from '@/src/components/ProductListItem';
import { Product } from '@/src/types';

const products = [
  {
    id: '1',
    title: 'Petunia vaso 12cm',
    price: '4,99 €',
    image: petuniaImage,
  },
  {
    id: '2',
    title: 'Petunia vaso 15cm',
    price: '5,99 €',
    image: petuniaImage,
  },
  {
    id: '3',
    title: 'Petunia vaso 20cm',
    price: '6,99 €',
    image: petuniaImage,
  },
  {
    id: '4',
    title: 'Petunia vaso 25cm',
    price: '7,99 €',
    image: petuniaImage,
  },
  {
    id: '5',
    title: 'Petunia vaso 30cm',
    price: '8,99 €',
    image: petuniaImage,
  },
  {
    id: '6',
    title: 'Petunia vaso 35cm',
    price: '9,99 €',
    image: petuniaImage,
  },
];





export default function TabOneScreen() {
  return (
     
        <FlatList 
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap : 10 , padding: 10}}
        columnWrapperStyle={{ gap:10 }}
        />
  );
}

