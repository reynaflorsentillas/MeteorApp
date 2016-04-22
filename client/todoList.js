/**
 * Created by ReynaflorSentillas on 4/22/2016.
 */
Router.route('/todoList');

Template.todoList.helpers({
    todos: function() {
        return ToDos.find();
    }
});