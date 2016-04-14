Todos = new Mongo.Collection('todos');

if(Meteor.isClient) {
	//Template helpers
	Template.main.helpers({
		todos: function() {
			return Todos.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.main.events({
		"submit .new-todo": function(event) {
			var text = event.target.text.value;
			Todos.insert({
				text: text,
				createdAt: new Date()
			});

			// Clear form
			event.target.text.value = '';

			// Prevent submit
			return false;
		},
		"click .toggle-checked": function(event) {
			Todos.update(this._id, {$set:{checked: !this.checked}});
		},
		"click .delete-todo": function(event) {
			if(confirm('Are you sure?') {
				Todos.remove(this._id);	
			}
		}

	});
}