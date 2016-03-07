(function() {
  'use strict';

  describe('Show investor profiles', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('investorProfile'));

    beforeEach(inject(function($componentController, $rootScope, $stateParams, $q, getInvestorService) {
      $scope = $rootScope.$new();

      resultsDeferred = $q.defer();
      spyOn(getInvestorService, 'find').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('investorProfile', {
        $scope: $scope,
        $stateParams: $stateParams,
        getInvestorService: getInvestorService
      })
    }));

    it('should ask for the investor details', function() {
      resultsDeferred.resolve(
        {
          "name": "Frontline Ventures",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_250/v1397179018/863daa91a3ecb96fed179502587ff7a3.png",
          "short_description": "We are a pioneering early-stage venture capital firm, believing in ideas and investing in passion.",
          "headquarters": "London",
          "founders": [
            {
              "name": "Shay Garvey",
              "linkedin": "shaygarvey"
            }
          ],
          "local_office": "26-28 Lombard Street East, First Floor, Dublin 2",
          "office_locations": [],
          "tags": ["Big Data", "Cloud Services", "Internet", "Mobile"],
          "funding_types": ["PS", "S", "SA", "SB"]
        }
      );

      $scope.$apply();

      expect($ctrl.getInvestorService.find.calls.count()).toEqual(1);
      expect($ctrl.investor.name).toEqual('Frontline Ventures');
      expect($ctrl.investor.headquarters).toEqual('London');
      expect($ctrl.investor.founders[0].name).toEqual('Shay Garvey');
      expect($ctrl.investor.funding_types).toEqual(["PS", "S", "SA", "SB"]);
    });
  });
})();
