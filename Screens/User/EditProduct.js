import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as productActions from '../../Store/actions/Products';

const EditProduct = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {productId} = route.params;

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id == productId),
  );

  const [title, setTitle] = useState(editedProduct.title);
  const [imageUrl, setImageUrl] = useState(editedProduct.imageUrl);
  const [price, setPrice] = useState(editedProduct.price);

  const [description, setDescription] = useState(editedProduct.description);

  const submitHandler = useCallback(() => {
    dispatch(
      productActions.updateProduct(
        productId,
        title,
        imageUrl,
        description,
        price,
      ),
    );
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back-outline" size={25} color={'white'} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Edit Products</Text>
        <TouchableOpacity onPress={() => {}} style={styles.checkIcon}>
          <Ionicons name="checkmark-done-outline" size={25} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={(text) => setImageUrl(text)}
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price.toString()}
              onChangeText={(text) => setPrice(text).toString()}
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginLeft: 20,
  },
  formControl: {
    width: '95%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: -5,
    marginTop: 20,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: '#995eff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 5,
    marginTop: 12,
  },
  backIcon: {
    paddingLeft: 15,
    marginTop: 13,
  },
  checkIcon: {
    marginTop: 12,
    marginRight: 10,
  },
});

export default EditProduct;
