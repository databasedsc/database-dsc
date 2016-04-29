(function() {
  "use strict";

  describe('Show hub profiles', function() {
    var $ctrl,
        $scope,
        resultsDeferred,
        companiesResultsDeferred;

    beforeEach(module('hubProfile'));
    beforeEach(module('searchCompanies'));

    beforeEach(inject(function($componentController, $rootScope, $stateParams, $q, getHubService, searchCompaniesService) {
      $scope = $rootScope.$new();

      resultsDeferred = $q.defer();
      companiesResultsDeferred = $q.defer();

      spyOn(getHubService, 'find').and.callFake(function() {
        return resultsDeferred.promise
      });

      spyOn(searchCompaniesService, 'getCompaniesWithIDs').and.callFake(function() {
        return companiesResultsDeferred.promise;
      });

      $ctrl = $componentController('hubProfile', {
        $scope: $scope,
        getHubService: getHubService,
        searchCompaniesService: searchCompaniesService
      })
    }));

    it("should get a hub object", function () {

      resultsDeferred.resolve(
        {
          id: 1,
          name: 'Dogpatch Labs',
          contact: 'Patrick Walsh',
          hub_type: 'Co-Working',
          alumni: [{id: 1, name: 'Mustard'}],
          logo: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397188849/56ce6584c4d9ad5db3127a6906857e0e.png'
        }
      );

      companiesResultsDeferred.resolve(
        [
          {
            id: 1,
            name: 'Mustard'
          },
          {
            id: 2,
            name: 'Pointy'
          }
        ]
      );

      $scope.$apply();

      expect($ctrl.getHubService.find.calls.count()).toEqual(1);
      expect($ctrl.hub.name).toEqual('Dogpatch Labs');
      expect($ctrl.hub.contact).toEqual('Patrick Walsh');
      expect($ctrl.hub.hub_type).toEqual('Co-Working');
      expect($ctrl.hub.logo).toEqual('https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397188849/56ce6584c4d9ad5db3127a6906857e0e.png')
    });
  });
})();
