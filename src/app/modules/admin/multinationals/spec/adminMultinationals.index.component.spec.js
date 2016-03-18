(function() {
  'use strict';

  describe('Admin Multinationals Index Component', function() {
    var $ctrl,
      $scope;

    beforeEach(module('admin'));

    beforeEach(inject(function($componentController, $rootScope, $q, listMultinationalsService, Notification) {
      $scope = $rootScope.$new();

      spyOn(listMultinationalsService, 'getAll').and.returnValue([{label: "1-5", value: 1}]);

      $ctrl = $componentController('adminMultinationalsIndex', {
        $scope: $scope,
        listMultinationalsService: listMultinationalsService,
        Notification: Notification
      })
    }));

    xit('should get list of multinationals from service and set in company variable', function() {
      $scope.$apply();

      expect($ctrl.listMultinationalsService.getAll).toHaveBeenCalled();
      expect($ctrl.multinationals.length).toEqual(2);
    });

  });
})();
