import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

const ProductItems = (Props) => {
  return (
    <View style={styles.touchableCmp}>
      <TouchableNativeFeedback onPress={Props.onSelect} useForeground>
        <View style={styles.product}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: Props.image}} />
          </View>
          <Text style={styles.title}>{Props.title}</Text>
          <Text style={styles.price}>${Props.price}</Text>
          <View style={styles.action}>{Props.children}</View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 370,
    backgroundColor: 'white',
    elevation: 5,
    margin: 15,
    paddingBottom: 8,
    borderRadius: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  price: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appButtonContainercart: {
    backgroundColor: '#995eff',
    borderRadius: 30,
    width: '25%',
    margin: 10,
    padding: 8,
    marginTop: 10,
  },
  imageContainer: {
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  touchableCmp: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ProductItems;
