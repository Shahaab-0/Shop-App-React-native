import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../Components/Shop/CartItem';
import * as cartActions from '../../Store/actions/cart';
import * as orderActions from '../../Store/actions/Order';

const CartScreen = ({navigation}) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    const transformedCartItems = [];

    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1,
    );
  });
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Cart}>
          <Text style={styles.orderDetail}>
            Total : ${cartTotalAmount.toFixed(2)}
          </Text>
          <Text style={styles.orderDetailAmount}> </Text>
          <Button
            disabled={cartItems.length === 0}
            color="#995eff"
            title="Order Now"
            onPress={() => {
              dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
            }}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={({item}) => (
            <CartItem
              quantity={item.quantity}
              title={item.productTitle}
              price={item.sum}
              deletable
              onRemove={() => {
                dispatch(cartActions.removeFromCart(item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 9,
  },
  orderDetail: {
    fontWeight: 'bold',
    fontSize: 15,
    flexDirection: 'row',
    color: 'black',
    marginTop: 8,
  },
  Cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
export default CartScreen;
