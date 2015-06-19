import DS from "ember-data";

export default DS.Model.extend({
  date: DS.attr('string'),
  item: DS.attr('string'),
  value: DS.attr('string')
});