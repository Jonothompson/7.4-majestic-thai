export default Backbone.View.extend ({
	template: JST.menuItem,
	
	initialize: function(){
		this.render();	
	},
	
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
	}
});
