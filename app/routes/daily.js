import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        let date = moment(new Date()).format('YYYY-MM-DD');

        this
            .store
            .find(
                    'spent',
                    {
                        orderBy: 'date',
                        equalTo: date
                    }
            )
            .then((data) => {
                this
                    .get('controller')
                    .set('content', data);
                this
                    .get('controller')
                    .set(
                        'total',
                        data.reduce(function(previous, next){
                            return previous + parseFloat(next.get('value'));
                        }, 0)
                    );
            });
    },
    actions: {
        filter: function(date){
            this.store.find('spent',
                    {
                        orderBy: 'date',
                        equalTo: date
                    }).then((data) => {
                        this
                            .get('controller')
                            .set('content', data);

                        this.get('controller')
                            .set(
                                'total',
                                data.reduce(function(previous, next){
                                    return previous + parseFloat(next.get('value'));
                                }, 0)
                            );
                    });
            }
    }
});