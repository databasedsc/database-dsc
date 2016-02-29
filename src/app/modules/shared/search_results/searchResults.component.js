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
      templateUrl: 'app/modules/shared/search/search_results.html',
      controller: 'SearchResultsController'
    });

})();
