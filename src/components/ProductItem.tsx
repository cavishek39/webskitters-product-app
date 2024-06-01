import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Product} from '../redux/types/productTypes';

interface ProductItemProps {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.name}>{product.name}</Text>
        <TouchableOpacity onPress={onEdit}>
          <Text
            style={{
              color: 'blue',
              marginBottom: 8,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 12}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.price}>Price - ₹{product.price}</Text>
        <TouchableOpacity
          onPress={onDelete}
          style={{
            alignSelf: 'flex-end',
          }}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  delete: {
    color: 'red',
  },
});

export default ProductItem;
