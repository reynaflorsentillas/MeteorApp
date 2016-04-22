/**
 * Created by ReynaflorSentillas on 4/22/2016.
 */
//New Collection
ToDos = new Meteor.Collection("todos");

//Insert new To Do Method
Meteor.methods({
    addTodo: function(todoData) {
        var todoID = ToDos.insert(todoData);
        return todoID;
    }
})
