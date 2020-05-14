import { ref } from '../config/firebaseConfig';

export const updateCart = ({ commit }, { item, quantity, isAdd }) => {
  commit('UPDATE_CART', { item, quantity, isAdd });
};

export const removeItemInCart = ({ commit }, { item }) => {
  commit('REMOVE_CART_ITEM', { item });
};

export function productList({ commit }) {
  return ref.child('products').on('value', products => {
    commit('UPDATE_PRODUCT_LIST', products.val());
  });
}

export function saveToOrder(_, { cartItemList }) {
	return ref.child('orders/').push(cartItemList);
}

export function orderList({ commit }) {
  return ref.child('orders').on('value', orders => {
    commit('UPDATE_ORDER_LIST', orders.val());
  });
}
