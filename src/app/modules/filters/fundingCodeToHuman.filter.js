(function() {
  "use strict";

  angular
    .module('dscFe')
    .filter('fundingCodeToHuman', function() {
      var fundingTypes = {
        PS: 'Pre-seed',
        S: 'Seed',
        SA: 'Series A',
        SB: 'Series B',
        SC: 'Series C',
        'SC+': 'Series C+'
      };

      return function(input, type) {
        if (type == 'array') {
          var codes = [];
          for (var i in input) {
            if (fundingTypes[input[i]]) {
              codes.push(fundingTypes[input[i]])
            }
          }
          return codes.join(', ');
        } else {
          return fundingTypes[input] || '';
        }
      }
    })
})();
