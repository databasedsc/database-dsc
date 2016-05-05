(function() {
  'use strict';

  angular
    .module('dscFe')
    .filter('hubTypeCodeToHuman', function() {
      var regions = {
        I: 'Incubator',
        A: 'Accelerator',
        CW: 'Co-working',
        E: 'Education',
        G: 'Government',
        C: 'Community'
      }

      return function(regionCode) {
        return regions[regionCode] || '';
      }

    })
})();
