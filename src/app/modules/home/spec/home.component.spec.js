(function () {
  'use strict';

  describe('home', function () {
    var $ctrl,
        $scope;

    beforeEach(module('home'));

    beforeEach(inject(function ($componentController, $rootScope) {
      $scope = $rootScope.$new();

      $ctrl = $componentController('home', {
        $scope: $scope
      })
    }));

  });
})();
