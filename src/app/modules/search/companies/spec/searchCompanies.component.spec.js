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
      spyOn(searchCompaniesService, 'getCompanies').and.callFake(function(query) {
        return resultsDeferred.promise
      });


      $ctrl = $componentController('searchCompanies', {
        $scope: $scope,
        searchCompaniesService: searchCompaniesService
      })
    }));

    it('should do the load initial', function() {
      resultsDeferred.resolve(
        [{
          "name": "Mustard",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
          "shortDesc": "The on demand staffing network"
        }]);

      $scope.$apply();

      expect($ctrl.searchCompaniesService.getCompanies.calls.count()).toEqual(1);
      expect($ctrl.results.length).toEqual(1);
    });

    it('should do the search', function() {
      resultsDeferred.resolve(
        [{
          "name": "Mustard",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
          "shortDesc": "The on demand staffing network"
        }]
      );

      $ctrl.query = 'mustard';
      $ctrl.search();
      $scope.$apply();

      //expect($ctrl.searchCompaniesService.getCompanies.calls.count()).toEqual(1); //TODO: enable this test once we deal with the controller initialization
      expect($ctrl.searchCompaniesService.getCompanies).toHaveBeenCalledWith({searchText: 'mustard'}, { employees: '', fundingStage: '', fundingAmount: '', productStage: '', geographicalMarkets: '', businessModel: '', companyStage: '', operationalStatus: '' });
      expect($ctrl.results.length).toEqual(1);
    });

  });
})();
