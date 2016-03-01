(function() {
  'use strict';

  describe('Search Multinationals', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('searchMultinationals'));

    beforeEach(inject(function($componentController, $rootScope, $q, searchMultinationalsService) {
      $scope = $rootScope.$new();
      resultsDeferred = $q.defer();

      spyOn(searchMultinationalsService, 'get').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('searchMultinationals', {
        $scope: $scope,
        searchMultinationalsService: searchMultinationalsService
      })
    }));

    it('should do the initial load of multinationals', function() {
      resultsDeferred.resolve(
        [{
          "name": "Microsoft",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1408491700/ypqf483smhnqo0rh6mff.png",
          "shortDesc": "Microsoft, a software corporation, develops licensed and support products and services ranging from personal use to enterprise application.",
          "entityType": "multinational"
        }]);

      $scope.$apply();

      expect($ctrl.searchMultinationalsService.get.calls.count()).toEqual(1);
      expect($ctrl.results.length).toEqual(1);
    });


    it("should search for specific multinationals", function() {
      resultsDeferred.resolve(
        [{
          "name": "Microsoft",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1408491700/ypqf483smhnqo0rh6mff.png",
          "shortDesc": "Microsoft, a software corporation, develops licensed and support products and services ranging from personal use to enterprise application.",
          "entityType": "multinational"
        }]);

      $ctrl.query = 'microsoft';
      $ctrl.search();
      $scope.$apply();

      expect($ctrl.searchMultinationalsService.get).toHaveBeenCalledWith({searchText: 'microsoft'});
      expect($ctrl.results.length).toEqual(1);
    });


  });
})();