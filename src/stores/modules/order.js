const state = {
  orderList: [
    
  ]
};

const mutations = {
  UPDATE_ORDER_LIST(state, orderList) {
    state.orderList = orderList;
  }
};

const actions = {};

const getters = {
  orders: state => {
    return state.orderList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
