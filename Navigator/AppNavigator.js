import React, {useCallback} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsOverview from '../Screens/Shop/ProductsOverview';
import ProductDetail from '../Screens/Shop/ProductDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CartScreen from '../Screens/Shop/CartScreen';
import OrderScreen from '../Screens/Shop/OrderScreen';
import UserProduct from '../Screens/User/UserProduct';
import EditProduct from '../Screens/User/EditProduct';
import CreateProduct from '../Screens/User/CreateProduct';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = ({route}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Products"
          component={NestedDrawerTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={({navigation: {goBack}}) => ({
            headerTitle: 'Your Cart',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#995eff',
            },

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  goBack();
                }}
                style={{marginLeft: 1}}>
                <View style={styles.container}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={27}
                    color={'white'}
                  />
                  <Text style={styles.text}>All Products</Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({navigation}) => ({
            headerTitle: 'Product Details',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#995eff',
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CartScreen');
                }}
                style={{marginRight: 10}}>
                <Ionicons name="cart-outline" size={23} color={'white'} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            headerTitle: 'Products',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#995eff',
            },
          }}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={({navigation, route}) => ({
            headerShown: false,
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 10}}>
                <Ionicons
                  name="checkmark-done-outline"
                  size={23}
                  color={'white'}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateProduct"
          component={CreateProduct}
          options={({navigation}) => ({
            headerShown: false,
            // headerTitle: 'Create Products',
            // headerTintColor: '#fff',
            // headerStyle: {
            //   backgroundColor: '#995eff',
            // },
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => {}} style={{marginRight: 10}}>
            //     <Ionicons
            //       name="checkmark-done-outline"
            //       size={23}
            //       color={'white'}
            //     />
            //   </TouchableOpacity>
            // ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const NestedDrawerTab = ({navigation}) => (
  <Drawer.Navigator
    initialRouteName="ProductsOverview"
    screenOptions={{headerTitleAlign: 'center'}}
    drawerType={'front'}
    drawerStyle={{width: '60%'}}
    drawerContentOptions={{
      activeBackgroundColor: '#e6e6e6',
      activeTintColor: '#995eff',
      inactiveTintColor: 'black',
      marginTop: 15,
      marginLeft: -10,
    }}>
    <Drawer.Screen
      name="Products"
      component={ProductsOverview}
      options={({navigation}) => ({
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="reorder-three-outline"
            size={size}
            color={focused ? '#995eff' : '#ccc'}
          />
        ),
        headerShown: true,
        headerTitle: 'All Products',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#995eff',
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
            style={{marginRight: 10}}>
            <Ionicons name="cart-outline" size={23} color={'white'} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={{marginLeft: 10}}>
            <Ionicons name="reorder-three-outline" size={27} color={'white'} />
          </TouchableOpacity>
        ),
      })}
    />
    <Drawer.Screen
      name="Order"
      component={OrderScreen}
      options={({navigation}) => ({
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="cart-outline"
            size={size}
            color={focused ? '#995eff' : '#ccc'}
          />
        ),
        headerShown: true,
        headerTitle: 'Orders',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#995eff',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={{marginLeft: 10}}>
            <Ionicons name="reorder-three-outline" size={27} color={'white'} />
          </TouchableOpacity>
        ),
      })}
    />
    <Drawer.Screen
      name="Admin"
      component={UserProduct}
      options={({navigation}) => ({
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="create-outline"
            size={22}
            color={focused ? '#995eff' : '#ccc'}
          />
        ),
        headerShown: true,
        headerTitle: 'Your Product',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#995eff',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={{marginLeft: 10}}>
            <Ionicons name="reorder-three-outline" size={27} color={'white'} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateProduct');
            }}
            style={{marginRight: 10}}>
            <Ionicons name="create-outline" size={27} color={'white'} />
          </TouchableOpacity>
        ),
      })}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    marginTop: 3,
    fontSize: 16,
    marginLeft: -4,
  },
});

export default AppNavigator;
