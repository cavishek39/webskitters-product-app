import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {editProductRequest} from '../redux/actions/productActions';
import {RootState} from '../redux/reducers';
import {RootStackNavigationProp} from '../navigation/AppNavigator';
import {Button, TextInput, Text, HelperText} from 'react-native-paper';

const EditProductScreen: React.FC<{
  navigation: RootStackNavigationProp;
  route: any;
}> = ({navigation, route}) => {
  const product = route.params.product;
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.products.error);
  const createdBy = useSelector(
    (state: RootState) => state.auth.user?.args?.[0],
  );

  const handleEditProduct = () => {
    if (name && price) {
      dispatch(editProductRequest(product.id, {name, price, createdBy}));
      navigation.goBack();
    }
  };

  console.log('product', product);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Product</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        inputMode="numeric"
        label="Price"
        value={price?.toString()}
        onChangeText={setPrice}
        style={styles.input}
        mode="outlined"
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <Button
        mode="contained"
        onPress={handleEditProduct}
        style={styles.button}>
        Update
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
  },
});

export default EditProductScreen;
