

export default Backbone.View.extend ({
	template: JST.menuItem,
	
	events: {
		'click .checkoutButton' : 'show'
	},
	
	show: function(e) {
		this.model.set({'selected': 1 + (this.model.get('selected') || 0)});
		cart.add(this.model.collection.filter(function(item) {
			return(item.get('selected') || false);
		}));
		this.render();
		console.log(cart);
	},
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});
