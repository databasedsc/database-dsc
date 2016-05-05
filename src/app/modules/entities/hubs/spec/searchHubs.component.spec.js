(function() {
  'use strict';

  describe('Search Hubs', function() {
    var $ctrl,
      $scope,
      $stateParams,
      resultsDeferred;

    beforeEach(module('searchHubs'));

    beforeEach(inject(function($componentController, $rootScope, $q, searchHubsService) {
      $scope = $rootScope.$new();
      $stateParams = {};

      resultsDeferred = $q.defer();

      spyOn(searchHubsService, 'get').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('searchHubs', {
        $scope: $scope,
        $stateParams: $stateParams,
        searchHubsService: searchHubsService
      })
    }));

    it('should do the initial load of hubs', function() {
      resultsDeferred.resolve(
        {
          data: [{
            "name": "NDRC",
            "logo": "http://static.wixstatic.com/media/41176a_ffd50f75062644a897fa34f6e0483b5c.jpg/v1/fill/w_390,h_222,al_c,q_80,usm_0.66_1.00_0.01/41176a_ffd50f75062644a897fa34f6e0483b5c.jpg",
            "shortDesc": "Making Ventures Happen"
          }],
          headers: function() {
            return '1'
          }
        });

      $scope.$apply();

      expect($ctrl.searchHubsService.get.calls.count()).toEqual(1);
      expect($ctrl.results.length).toEqual(1);
    });

    it("should search for text query", function() {
      resultsDeferred.resolve(
        {
          data: [{
            "name": "NDRC",
            "logo": "http://static.wixstatic.com/media/41176a_ffd50f75062644a897fa34f6e0483b5c.jpg/v1/fill/w_390,h_222,al_c,q_80,usm_0.66_1.00_0.01/41176a_ffd50f75062644a897fa34f6e0483b5c.jpg",
            "shortDesc": "Making Ventures Happen"
          }],
          headers: function() {
            return '5'
          }
        });

      $ctrl.query = 'NDRC';
      $scope.currentPage = 5;
      $scope.perPage = 20;

      $ctrl.search();
      $scope.$apply();

      expect($ctrl.searchHubsService.get).toHaveBeenCalledWith({searchText: 'NDRC'}, {
        hubType: '',
        fundingProvided: '',
        applicationDeadlines: ''
      }, {currentPage: 5, perPage: 20});
      expect($ctrl.results.length).toEqual(1);
    });


  });
})();
