(function() {
  'use strict';

  describe('Filters', function () {
    var $ctrl,
      $scope;

    beforeEach(module('searchCompanies'));

    beforeEach(inject(function($componentController, $rootScope, filterCompaniesService) {
      $scope = $rootScope.$new();

      spyOn(filterCompaniesService, 'filtersData').and.returnValue([{label: "1-5", value: 1}]);

      $ctrl = $componentController('searchCompanies', {
        $scope: $scope,
        filterCompaniesService: filterCompaniesService
      })
    }));

    it('should load the employees number filters data', function () {
      expect($ctrl.filterCompaniesService.filtersData).toHaveBeenCalled();
    });

  });

  describe('Search Companies', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('searchCompanies'));

    beforeEach(inject(function($componentController, $rootScope, $q, searchCompaniesService) {
      $scope = $rootScope.$new();

      resultsDeferred = $q.defer();
      spyOn(searchCompaniesService, 'getCompanies').and.callFake(function() {
        return resultsDeferred.promise
      });


      $ctrl = $componentController('searchCompanies', {
        $scope: $scope,
        searchCompaniesService: searchCompaniesService
      })
    }));

    it('should do the load initial', function() {
      resultsDeferred.resolve(
        {
          data: [{
            "name": "Mustard",
            "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
            "shortDesc": "The on demand staffing network"
          }],
          headers: function() {
            return '10'
          }
        }
      );

      $scope.$apply();

      expect($ctrl.searchCompaniesService.getCompanies.calls.count()).toEqual(1);
      expect($ctrl.results.length).toEqual(1);
    });

    it('should do the search', function() {
      resultsDeferred.resolve(
        {
          data: [{
            "name": "Mustard",
            "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
            "shortDesc": "The on demand staffing network"
          }],
          headers: function() {
            return '10'
          }
        }
      );

      $scope.currentPage = 1;
      $scope.perPage = 5;

      $ctrl.query = 'mustard';
      $ctrl.search();
      $scope.$apply();

      //expect($ctrl.searchCompaniesService.getCompanies.calls.count()).toEqual(1); //TODO: enable this test once we deal with the controller initialization
      expect($ctrl.searchCompaniesService.getCompanies).toHaveBeenCalledWith({searchText: 'mustard'}, { employees: '', fundingStage: '', fundingAmount: '', productStage: '', targetMarkets: '', businessModel: '', companyStage: '', operationalStatus: '' }, { currentPage: 1, perPage: 5});
      expect($ctrl.results.length).toEqual(1);
    });

  });
})();
