import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return {date: '', item: '', value: 0};
    },
    actions: {
        save: function(model){
            var _route = this,
                _spent = this.store.createRecord('spent', {
                    date: model.date,
                    item: model.item,
                    value: model.value
                });

            _spent.save().then(function(){
                _route.refresh();
            });
        }
    }
});