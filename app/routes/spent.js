import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return {date: '', item: '', value: 0};
    },
    actions: {
        save: function(model){
            alert('save');
        }
    }
});