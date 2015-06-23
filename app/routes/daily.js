import Ember from 'ember';

Ember.Inflector.inflector.irregular('spent', 'spending');

export default Ember.Route.extend({
    model: function(){
        let date = moment(new Date()).format('YYYY-MM-DD');
        return this.store.find('spent',
                    {
                        orderBy: 'date',
                        equalTo: date
                    });
    },
    actions: {
        filter: function(date){
            this
                .get('controller')
                .set(
                    'content',
                    this.store.find('spent',
                    {
                        orderBy: 'date',
                        equalTo: date
                    })
                );
        }
    }
});