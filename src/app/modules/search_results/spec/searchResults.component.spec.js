(function() {
  'use strict';

  describe('Search results', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('searchResults'));

    beforeEach(inject(function($componentController, $rootScope, $q, companiesSearchService) {
      $scope = $rootScope.$new();

      resultsDeferred = $q.defer();
      spyOn(companiesSearchService, 'getCompanies').and.returnValue(resultsDeferred.promise);

      $ctrl = $componentController('searchResults', {
        $scope: $scope,
        companiesSearchService: companiesSearchService
      })
    }));

    it('should have search results', function() {
      resultsDeferred.resolve(
        [{
          "name": "Mustard",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
          "shortDesc": "The on demand staffing network"
        }]);

      $scope.$apply();

      expect($ctrl.results.length).toEqual(1);
    });

  });
})();
