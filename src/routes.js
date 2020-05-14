import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Orders from './components/Orders.vue';

export const routes = [
	{path: '/', component: Store, name: 'mainpage'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/yourorder', component: Orders, name: 'orders'},
	{path: '*', redirect: '/' }
];
