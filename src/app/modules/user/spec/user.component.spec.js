(function() {
  'use strict';

  describe('User Component', function() {
    var $scope,
      store,
      $auth,
      $state;

    beforeEach(module('user', 'satellizer'));

    beforeEach(inject(function($componentController, $rootScope, $q, _store_, _$state_, _$auth_) {
      $scope = $rootScope.$new();
      store = _store_;
      $auth = _$auth_;
      $state = _$state_;

      spyOn($auth, 'getToken').and.callFake(function (key) {
        return store[key];
      });

      spyOn($state, 'go');

      $componentController('user', {
        $scope: $scope,
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
