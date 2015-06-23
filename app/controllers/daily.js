import Ember from 'ember';

export default Ember.ArrayController.extend({
    total: 1000,
    filter: {
        date: moment(new Date()).format('YYYY-MM-DD')
    }    
});