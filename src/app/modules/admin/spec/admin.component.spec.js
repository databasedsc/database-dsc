(function() {
  'use strict';

  describe('Admin Component', function() {
    var $scope,
      store,
      $auth,
      $state;

    beforeEach(module('admin', 'satellizer'));

    beforeEach(inject(function($componentController, $rootScope, $q, _store_, _$state_, _$auth_) {
      $scope = $rootScope.$new();
      store = _store_;
      $state = _$state_;
      $auth = _$auth_;

      spyOn($auth, 'getToken').and.callFake(function (key) {
        return store[key];
      });

      spyOn($state, 'go');

      $componentController('admin', {
        $scope: $scope,
        $auth: $auth,
        $state: $state
      })
    }));

    it('should set the jwt token to local storage', function() {
      $scope.$apply();

      expect($auth.getToken.calls.count()).toEqual(1)
      expect($state.go.calls.count()).toEqual(1)
    });

  });
})();
