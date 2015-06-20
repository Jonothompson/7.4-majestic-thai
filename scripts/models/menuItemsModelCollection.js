import {MenuCollection} from './menuCollection';

var Project = Backbone.Model.extend({
  idAttribute: 'objectId',

  defaults: {
    name: ""
  },

  initialize: function(){
    // Create a task collection to keep track of our tasks
    this.tasks = new MenuCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.tasks, 'all', this.trigger.bind(this));
  },

  // Proxy the add method to the underlying task collection
  add: function(models, options){
    return this.tasks.add(models, options);
  },

  // Proxy the remove method to the underlying task collection
  remove: function(models, options){
    return this.tasks.remove(models, options);
  },

  toJSON: function(){
    return _.extend({}, this.attributes, {
      tasks: this.tasks.map(function(task){
          return {
            "__type": "Pointer",
            "className": "Task",
            "objectId": task.id
          };
      })
    });
  }

});

var MenuCollection = Backbone.Collection.extend({
  model: menuCollections,
  url: "https://api.parse.com/1/classes/menuCollections"
});

export default {MenuItemModel, MenuItemModelCollection};