export default Backbone.View.extend ({
	template: JST.menu,
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.append(this.template());
	}
});
		