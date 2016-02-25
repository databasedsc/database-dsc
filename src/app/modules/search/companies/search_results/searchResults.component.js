(function() {
  'use strict';

  angular
    .module('searchResults')
    .controller('SearchResultsController', function() {

    })
    .component('searchResults', {
      bindings: {
        companies: '='
      },
      templateUrl: 'app/modules/search/companies/search_results/search_results.html',
      controller: 'SearchResultsController'
    });

})();
