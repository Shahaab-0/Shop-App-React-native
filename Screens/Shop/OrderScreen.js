import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../Components/Shop/OrderItem';

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.order);

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({item}) => (
          <OrderItem
            items={item.items}
            total={item.totalAmount}
            date={item.readableDate}
          />
        )}
      />
    </View>
  );
};

export default OrderScreen;
