/**
 * Created by ReynaflorSentillas on 4/22/2016.
 */
Template.todoNew.events({
    "submit #add-todo": function(event){
        event.preventDefault(); //this prevent built-in form submission
        Meteor.call('addTodo', {description: event.target.description.value, status: event.target.status.value})
        //Meteor.call('addTodo', {description: "Meteor Code", status: "Open"});
    }
});