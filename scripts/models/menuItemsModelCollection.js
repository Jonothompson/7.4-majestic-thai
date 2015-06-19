import {MenuCollection} from './task';

var Project = Backbone.Model.extend({
  idAttribute: 'menuItemId',

  defaults: {
    name: ""
  },

  initialize: function(){
    // Create a task collection to keep track of our tasks
    this.menuItems = new MenuCollection();

    // Trigger all tasks events on myself
    this.listenTo(this.menuItems, 'all', this.trigger.bind(this));
  },

  // Proxy the add method to the underlying task collection
  add: function(models, options){
    return this.menuItems.add(models, options);
  },

  // Proxy the remove method to the underlying task collection
  remove: function(models, options){
    return this.tasks.remove(models, options);
  },

  toJSON: function(){
    return _.extend({}, this.attributes, {
      tasks: this.menuItems.map(function(task){
          return {
            "__type": "Pointer",
            "className": "Task",
            "objectId": task.id
          };
      })
    });
  }

});

var ProjectCollection = Backbone.Collection.extend({
  model: Project,
//  url: "https://api.parse.com/1/classes/Project"
});

export default {Project, ProjectCollection};