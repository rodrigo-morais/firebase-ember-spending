import Ember from 'ember';

export default Ember.ArrayController.extend({
    total: 0,
    filter: {
        date: moment(new Date()).format('YYYY-MM-DD')
    }    
});