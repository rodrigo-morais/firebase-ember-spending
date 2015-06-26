import Ember from 'ember';

let processData = function(spending){
    return spending.map((spent) => {
                let date = new Date(spent.get('date').split('-')[0],spent.get('date').split('-')[1],1);
                return {
                    date: moment(date).format('MMMM'),
                    value: spent.get('value')
                };
            }).reduce(function(memo, spent){
                if(memo.length === 0){
                    memo.push(spent);
                }
                else{
                    let _spentMemo =    memo.filter(function(_spent){
                                            return _spent.date === spent.date;
                                        });
                    if(_spentMemo.length === 0){
                        memo.push(spent);
                    }
                    else{
                        _spentMemo[0].value = parseFloat(_spentMemo[0].value) + parseFloat(spent.value);
                    }
                }

                return memo;
            }, []);
};

export default Ember.Route.extend({
    model: function(){
        let actualDate = new Date(),
            startDate = moment(new Date(actualDate.getFullYear(), 0, 1)).format('YYYY-MM-DD'),
            endDate = moment(new Date(actualDate.getFullYear(), 12, 0)).format('YYYY-MM-DD');
        
        this.store
            .find('spent',
                {
                    orderBy: 'date',
                    startAt: startDate,
                    endAt: endDate
                }
            ).then((data) => {
                let spending = data.get('content'),
                    monthlySpending = processData(spending);

                this.get('controller')
                    .set(   'total', 
                            monthlySpending.reduce(function(previous, next){
                                return previous + parseFloat(next.value);
                            }, 0)
                    );

                this
                    .get('controller')
                    .set(
                        'content',
                        monthlySpending
                    );
            });
    },
    actions: {
        filter: function(){
            let startDate = moment(new Date(this.get('controller').get('filter').year, 0, 1)).format('YYYY-MM-DD'),
                endDate = moment(new Date(this.get('controller').get('filter').year, 12, 0)).format('YYYY-MM-DD'),
                _this = this;

            this.store
                .find('spent',
                    {
                        orderBy: 'date',
                        startAt: startDate,
                        endAt: endDate
                    }
                ).then(function(data){
                    let spending = data.get('content'),
                        monthlySpending = processData(spending);

                    _this
                        .get('controller')
                        .set(   'total', 
                                monthlySpending.reduce(function(previous, next){
                                    return previous + parseFloat(next.value);
                            }, 0)
                        );

                    _this
                        .get('controller')
                        .set(
                            'content',
                            monthlySpending
                        );
                });
        }
    }
});