export default Backbone.View.extend ({
	template: JST.checkoutbox,
	
	initialize: function(){
		this.listenTo(cart, 'all', function() {
			this.render();	
		});
		this.render();	

	},
	
	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}
});
