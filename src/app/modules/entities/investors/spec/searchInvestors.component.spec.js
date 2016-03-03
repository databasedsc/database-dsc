(function() {
  'use strict';

  describe('Search Investors', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('searchInvestors'));

    beforeEach(inject(function($componentController, $rootScope, $q, searchInvestorsService) {
      $scope = $rootScope.$new();
      resultsDeferred = $q.defer();

      spyOn(searchInvestorsService, 'get').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('searchInvestors', {
        $scope: $scope,
        searchInvestorsService: searchInvestorsService
      })
    }));

    it('should do the initial load of investors', function() {
      resultsDeferred.resolve(
        [{
          "name": "Frontline Ventures",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397179018/863daa91a3ecb96fed179502587ff7a3.png",
          "shortDesc": "We are a pioneering early-stage venture capital firm, believing in ideas and investing in passion.",
          "entityType": "investors"
        }]);

      $scope.$apply();

      expect($ctrl.searchInvestorsService.get.calls.count()).toEqual(1);
      expect($ctrl.results.length).toEqual(1);
    });


    it("should search for specific investors", function() {
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

      expect($ctrl.searchInvestorsService.get).toHaveBeenCalledWith({searchText: 'microsoft'}, {fundingType: '', investmentSize: '', dealStructure: '' });
      expect($ctrl.results.length).toEqual(1);
    });


  });
})();
