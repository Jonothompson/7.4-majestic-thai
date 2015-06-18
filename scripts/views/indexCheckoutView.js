export default Backbone.View.extend ({
	template: JST.checkoutbox,
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.append(this.template());
	}
});
