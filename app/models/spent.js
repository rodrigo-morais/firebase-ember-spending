import Ember from 'ember';
import DS from "ember-data";

Ember.Inflector.inflector.irregular('spent', 'spending');

export default DS.Model.extend({
  date: DS.attr('string'),
  item: DS.attr('string'),
  value: DS.attr('string')
});