import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/actions/authActions';
import ProductItem from '../components/ProductItem';
import {Button, Text, Card, Title, Paragraph} from 'react-native-paper';
import {deleteProductRequest} from '../redux/actions/productActions';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProductRequest(id));
  };

  const totalProducts = products.length;
  const totalPrice = products.reduce(
    (acc, product: any) => Number(acc) + Number(product.price),
    0,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Total Products: {totalProducts}</Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 16,
                color: 'green',
              }}>
              Total Price: ₹{totalPrice}
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <ProductItem
              product={item}
              onEdit={() => navigation.navigate('EditProduct', {product: item})}
              onDelete={() => {
                handleDeleteProduct(item.id);
              }}
            />
          </Card>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('AddProduct')}
        style={styles.button}>
        Add Product
      </Button>
      <Button mode="text" onPress={handleLogout} style={styles.button}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
