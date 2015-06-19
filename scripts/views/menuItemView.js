export default Backbone.View.extend ({
	template: JST.menuItem,
	
	events: {
		'click .checkoutButton' : 'show'
	},
	
	show: function(e) {
		e.preventDefault();
		console.log(this);	
	},
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
	}
});
