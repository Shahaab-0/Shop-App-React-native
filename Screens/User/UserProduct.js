import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItems from '../../Components/Shop/ProductItems';
import * as productActions from '../../Store/actions/Products';

const UserProduct = ({navigation}) => {
  const dispatch = useDispatch();

  const userProducts = useSelector((state) => state.products.userProducts);
  const onPressDetail = (id, title) => {
    navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };

  const EditProduct = (id) => {
    navigation.navigate('EditProduct', {
      productId: id,
    });
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
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
              EditProduct(item.id);
            }}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteHandler(item.id);
            }}
            style={styles.appButtonContainerCart}>
            <Text style={styles.appButtonText}>Delete</Text>
          </TouchableOpacity>
        </ProductItems>
      )}
    />
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#995eff',
    borderRadius: 30,
    width: '24%',
    margin: 10,
    padding: 8,
    marginTop: 10,
    marginLeft: 20,
  },
  appButtonContainerCart: {
    backgroundColor: 'red',
    borderRadius: 30,
    width: '25%',
    margin: 10,
    padding: 8,
    marginTop: 10,
    marginRight: 20,
  },
  appButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  touchableCmp: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default UserProduct;
