(function() {
  'use strict';

  angular
    .module('dscFe')
    .filter('regionCodeToHuman', function() {
      var regions = {
        G: 'Global',
        EU: 'Europe',
        IE: 'Ireland',
        UK: 'United Kingdom',
        NA: 'North America',
        SA: 'South America',
        AS: 'Asia',
        AF: 'Africa'
      }

      return function(regionCode) {
        return regions[regionCode] || '';
      }

    })
})();
