import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as productActions from '../../Store/actions/Products';

const CreateProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [titleIsValid, setTitleIsValid] = useState('');

  const [description, setDescription] = useState('');
  const submitHandler = () => {
    if (!titleIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        {text: 'Okay'},
      ]);
      return;
    }
    dispatch(productActions.createProduct(title, imageUrl, description, price));
    navigation.goBack();
  };

  const changeHandler = (text) => {
    if (text.trim().length === 0) {
      setTitleIsValid(false);
    } else {
      setTitleIsValid(true);
    }
    setTitle(text);
  };

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

        <Text style={styles.headerText}>Create Products</Text>
        <TouchableOpacity
          onPress={() => {
            submitHandler();
          }}
          style={styles.checkIcon}>
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
              returnKeyType="next"
              onChangeText={changeHandler}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={(text) => setImageUrl(text)}
              returnKeyType="next"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={price.toString()}
              onChangeText={(text) => setPrice(text)}
              returnKeyType="next"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
              returnKeyType="done"
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

export default CreateProduct;
