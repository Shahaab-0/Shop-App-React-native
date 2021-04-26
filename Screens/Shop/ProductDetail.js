import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../Store/actions/cart';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const ProductDetail = ({route}) => {
  const {productId} = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />

      <TouchableOpacity
        onPress={() => {
          dispatch(cartActions.addToCart(selectedProduct));
        }}
        style={styles.appButtonContainercart}>
        <Text style={styles.appButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>{selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  image: {
    height: WINDOW_WIDTH - BASE_PADDING * 4,
    width: WINDOW_WIDTH - BASE_PADDING * 2,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
    color: 'black',
    margin: 10,
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: -5,
    color: '#888',
    margin: 10,
  },
  appButtonContainercart: {
    backgroundColor: '#995eff',
    borderRadius: 30,
    width: '25%',
    margin: 10,
    padding: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
  appButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
export default ProductDetail;
