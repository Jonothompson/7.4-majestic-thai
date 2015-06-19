import IndexMenuView from './views/indexMenuView';
import IndexCheckoutView from './views/indexCheckoutView';
import {MenuCollection} from './models/menuCollection';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
	},
	
	initialize: function(){
		this.indexMenuView();
		this.indexCheckoutView();
	},	

	indexMenuView: function () {

		this.menuCollection = new MenuCollection();
		this.menuCollection.fetch().then(function() {
			console.log(this);
			this.menuView = new IndexMenuView({collection: this.menuCollection});
			$('#appContainer').html(this.menuView.el);	

			
		}.bind(this));
	},

	indexCheckoutView: function () {
		this.checkoutView = new IndexCheckoutView();
		$('#checkoutBoxContainer').append(this.checkoutView.el);
	},
	
	
	
});

var router = new Router();

export default router;