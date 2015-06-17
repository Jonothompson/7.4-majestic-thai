import IndexMenuView from './views/indexMenuView';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
	},
	
	initialize: function(){
		
	},
	
	index: function() {
		var menuView = new IndexMenuView();
	    $('#appContainer').html(JST.menu());
		$('#appContainer').append(JST.checkoutbox());
	}	
});

var router = new Router();

export default router;