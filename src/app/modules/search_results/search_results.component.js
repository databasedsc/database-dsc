(function () {
  'use strict';

  angular.module('searchResults')
    .component('searchResults', {
      templateUrl: 'app/modules/search_results/search_results.html',
      controller: 'SearchResultsController'
    })
    .controller('SearchResultsController', function () {
      this.results = [];
    });
})();
