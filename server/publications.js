/**
 * Created by ReynaflorSentillas on 4/22/2016.
 */
Meteor.publish('todos', function(){
    return ToDos.find({});
})