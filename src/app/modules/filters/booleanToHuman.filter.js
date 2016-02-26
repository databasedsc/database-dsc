(function() {
  'use strict';

  angular
    .module('dscFe')
    .filter('booleanToHuman', function() {
      return function(boolean) {
        if (boolean) {
          return "Yes";
        } else {
          return "No";
        }
      }
    })
})();

