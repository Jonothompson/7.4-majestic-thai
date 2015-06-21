import IndexMenuView from './views/indexMenuView';
import IndexCheckoutView from './views/indexCheckoutView';
import {MenuCollection} from './models/menuCollection';
import ajaxConfig from '/ajax-config';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	
	index: function(){
		var menuCollection = new MenuCollection();
		menuCollection.fetch().then(function() {
			console.log(this);
			var menuView = new IndexMenuView({collection: menuCollection});
			$('#menu').html(menuView.el);	
				
			var checkoutView = new IndexCheckoutView();
			$('#checkoutBoxContainer').append(checkoutView.el);
	});
	
	},
	
});

var router = new Router();

export default router;