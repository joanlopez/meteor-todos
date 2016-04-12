Todos = new Mongo.Collection('todos');

if(Meteor.isClient) {
	//Template helpers
	Template.main.helpers({
		todos: function() {
			return Todos.find();
		}
	});
}

if(Meteor.isServer) {

}