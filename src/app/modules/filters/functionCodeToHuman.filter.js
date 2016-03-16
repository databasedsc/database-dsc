(function() {
  'use strict';

  angular
    .module('dscFe')
    .filter('functionCodeToHuman', function() {
      var functions = {
        S: 'Sales',
        CS: 'Customer Service',
        F: 'Finance',
        L: 'Legal',
        SI: 'Server Infrastructure',
        E: 'Engineering',
        M: 'Marketing',
        RD: 'Research and Development',
        MF: 'Manufacturing',
        O: 'Operations',
        PD: 'Product Development'
      };

      return function(functionCode) {
        return functions[functionCode] || '';
      }

    })
})();
