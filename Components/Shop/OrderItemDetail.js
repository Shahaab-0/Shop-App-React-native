import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import ProductItemDetails from './ProductItems';

const OrderItemDetail = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View styles={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.row}>
          <Text style={styles.normal}>Total Amount: </Text>
          <Text style={styles.bold}>${props.total.toFixed(2)}</Text>
        </View>
        <Ripple
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
          style={styles.appButtonContainer}
          borderRadius="30">
          <Text style={styles.appButtonText}>View Detail</Text>
        </Ripple>
        {showDetails && (
          <View>
            {props.items.map((cartItem) => (
              <ProductItemDetails
                quantity={cartItem.quantity}
                price={cartItem.sum}
                title={cartItem.productTitle}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  appButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  appButtonContainer: {
    backgroundColor: '#995eff',
    borderRadius: 30,
    width: '32%',
    marginTop: 10,
    padding: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  normal: {
    fontSize: 15,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  shadow: {
    marginTop: 15,
    alignSelf: 'center',
    height: 300,
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
    borderRadius: 10,
  },
});

export default OrderItemDetail;
