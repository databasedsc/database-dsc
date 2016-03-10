(function() {
  'use strict';

  describe('Admin Component', function() {
    var $ctrl,
      $scope,
      store,
      $state;

    beforeEach(module('admin'));

    beforeEach(inject(function($componentController, $rootScope, $q, _store_, _$state_) {
      $scope = $rootScope.$new();
      store = _store_;
      $state = _$state_;

      spyOn(store, 'get').and.callFake(function (key) {
        return store[key];
      });

      spyOn($state, 'go');

      $ctrl = $componentController('admin', {
        $scope: $scope,
        $state: $state
      })
    }));

    it('should set the jwt token to local storage', function() {
      $scope.$apply();

      expect(store.get.calls.count()).toEqual(1)
      expect($state.go.calls.count()).toEqual(1)
    });

  });
})();
