import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {"menus": 
            [
                {
                    "text": "Spent",
                    "link": "spent",
                    "selected": true
                },
                {
                    "text": "Daily",
                    "link": "daily",
                    "selected": false
                },
                {
                    "text": "Monthly",
                    "link": "monthly",
                    "selected": false
                }
            ]
        };
    }
});