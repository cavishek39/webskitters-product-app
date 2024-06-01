import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProductRequest} from '../redux/actions/productActions';
import {RootState} from '../redux/reducers';
import {RootStackNavigationProp} from '../navigation/AppNavigator';
import {Button, TextInput, Text, HelperText} from 'react-native-paper';

const AddProductScreen: React.FC<{navigation: RootStackNavigationProp}> = ({
  navigation,
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(undefined);
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.products.error);

  const handleAddProduct = () => {
    if (name && !!price) {
      dispatch(addProductRequest({name, price}));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
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
        onChangeText={text => setPrice(Number(text))}
        style={styles.input}
        mode="outlined"
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      <Button mode="contained" onPress={handleAddProduct} style={styles.button}>
        Add
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

export default AddProductScreen;
