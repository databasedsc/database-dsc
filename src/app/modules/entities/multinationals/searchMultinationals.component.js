(function() {
  'use strict';

  angular
    .module('searchMultinationals')
    .component('searchMultinationals', {
      templateUrl: 'app/modules/entities/multinationals/index.html',
      controller: 'SearchMultinationalsController'
    })
    .controller('SearchMultinationalsController', function($scope, searchMultinationalsService) {
      var controller = this;
      this.searchMultinationalsService = searchMultinationalsService;
      //this.filterCompaniesService = filterCompaniesService;
      //
      //this.filters = filterCompaniesService.filtersData();
      //
      //function getSelectedFilter() {
      //  var obj = {};
      //  Object.keys(controller.filters).map(function(filterName) {
      //    obj[filterName] = controller.filters[filterName].selectedValue;
      //  })
      //  return obj;
      //}
      //
      searchMultinationalsService.get().then(function(multinationals) {
        controller.results = multinationals;
      });

      this.search = function() {
        searchMultinationalsService.get({searchText: this.query}).then(function(multinationals) {
          controller.results = multinationals;
        });
      };
    });
})();
