import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItems from '../../Components/Shop/ProductItems';
import * as cartActions from '../../Store/actions/cart';

const ProductsOverview = ({navigation}) => {
  const Products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const onPressDetail = (id, title) => {
    navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      data={Products}
      renderItem={({item}) => (
        <ProductItems
          title={item.title}
          price={item.price}
          image={item.imageUrl}
          onSelect={() => {
            onPressDetail(item.id, item.title);
          }}>
          <TouchableOpacity
            onPress={() => {
              onPressDetail(item.id, item.title);
            }}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>View Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(cartActions.addToCart(item));
            }}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>To Cart</Text>
          </TouchableOpacity>
        </ProductItems>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonContainer: {
    backgroundColor: '#995eff',
    borderRadius: 30,
    width: '32%',
    margin: 10,
    padding: 8,
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
export default ProductsOverview;
