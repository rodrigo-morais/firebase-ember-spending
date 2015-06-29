import Ember from 'ember';

export default Ember.ArrayController.extend({
    total: 0,
    average: 0,
    filter: {
        years: function(){
            let years = [],
                actualYear = new Date().getFullYear();
            for(let counter = actualYear - 10; counter <= actualYear + 10; counter = counter + 1){
                let selected = counter === actualYear ? 'selected' : '';
                years.push({ year: counter, selected: selected });
            }
            return years;
        }(),
        year: 2015
    },
    actions: {
        selectYear: function(){
            this.filter.year = parseInt(Ember.$('select').val());
        }
    }
});