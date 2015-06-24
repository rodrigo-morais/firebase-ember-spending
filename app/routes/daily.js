import Ember from 'ember';

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