import {ADD_ORDER} from '../actions/Order';
import Order from '../../Models/Order';

const initialState = {
  order: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date(),
      );
      return {
        ...state,
        order: state.order.concat(newOrder),
      };
  }

  return state;
};
