/**
 * Created by ReynaflorSentillas on 4/22/2016.
 */
Template.todoList.helpers({
    todos: function() {
        return ToDos.find();
    }
});