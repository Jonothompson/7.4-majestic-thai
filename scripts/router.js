import IndexMenuView from './views/indexMenuView';
import IndexCheckoutView from './views/indexCheckoutView';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
	},
	
	initialize: function(){
		this.indexMenuView();
		this.indexCheckoutView();
	},	

	indexMenuView: function () {
		this.menuView = new IndexMenuView();
		$('#appContainer').html(this.menuView.el);	
	},

	indexCheckoutView: function () {
		this.checkoutView = new IndexCheckoutView();
		$('#appContainer').append(this.checkoutView.el);
	},
});

var router = new Router();

export default router;