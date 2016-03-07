(function() {
  "use strict";

  describe('Show hub profiles', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('hubProfile'));

    beforeEach(inject(function($componentController, $rootScope, $stateParams, $q, getHubService) {
      $scope = $rootScope.$new();
      resultsDeferred = $q.defer();

      spyOn(getHubService, 'find').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('hubProfile', {
        $scope: $scope,
        getHubService: getHubService
      })
    }));

    it("should get a hub object", function() {
      resultsDeferred.resolve(
        {
          name: 'Dogpatch Labs',
          contact: 'Patrick Walsh',
          hub_type: 'Co-Working',
          logo: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1397188849/56ce6584c4d9ad5db3127a6906857e0e.png'
        }
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
