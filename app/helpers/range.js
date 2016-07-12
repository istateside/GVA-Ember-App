/**
  @module ember-shared
 */
import Ember from 'ember';

/**
  An Ember helper designed for use in subexpressions
  that returns a sequence of numbers that start from the
  first value and end at the second value.

  Ranges are inclusive by default. They can be made exclusive
  by passing a flag `exclusive=true` to the helper.

  The following example will render an ordered list that contains
  the values 1 through 5.

  ```handlebars
  <ol>
    {{#each (range 1 5) as |number|}}
      <li>{{number}}</li>
    {{/each}}
  </ol>
  ```

  @public
  @method range
  @param {Number} start The start of the range
  @param {Number} end The end of the range
  @return {Number[]} An array of values from the start to end
  @for Helpers
 */
export default Ember.Helper.helper(function ([start, finish], options={}) {
  let series = [];
  if (!options.exclusive) {
    finish++;
  }

  for (let i = start; i < finish; i++) {
    series.push(start++);
  }
  return series;
});
