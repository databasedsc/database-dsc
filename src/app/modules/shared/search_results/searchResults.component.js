(function() {
  'use strict';

  angular
    .module('searchResults')
    .controller('SearchResultsController', function() {
    })
    .component('searchResults', {
      bindings: {
        collection: '='
      },
      templateUrl: 'app/modules/shared/search_results/search_results.html',
      controller: 'SearchResultsController'
    });

})();
