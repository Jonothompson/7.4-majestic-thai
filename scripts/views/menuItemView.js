export default Backbone.View.extend ({
	template: JST.menuItem,
	
	events: {
		'click .checkoutButton' : 'show'
	},
	
	show: function(e) {
		e.preventDefault();
		this.model.set({'selected': 1 + (this.model.get('selected') || 0)});
		console.log(this.model.attributes);	
	},
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
	}
});
