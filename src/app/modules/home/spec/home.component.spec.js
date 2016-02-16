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

    it('set\'s a message on load', function () {
      expect($ctrl.message).toEqual('DSC Initial message');
    });
  });
})();
