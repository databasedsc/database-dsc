(function() {
  'use strict';

  angular
    .module('searchResults')
    .controller('SearchResultsController', function() {
    })
    .component('searchResults', {
      bindings: {
        currentPage: '=',
        perPage: '=',
        totalItems: '<',
        collection: '<',
        type: '@',
        searchFn: '&'
      },
      templateUrl: 'app/modules/shared/search_results/search_results.html',
      controller: 'SearchResultsController'
    });

})();
