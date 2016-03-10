(function() {
  'use strict';

  describe('Login', function() {
    var $ctrl,
      $scope,
      resultsDeferred,
      store,
      $state;

    beforeEach(module('login'));

    beforeEach(inject(function($componentController, $rootScope, $q, loginService, _store_, _$state_) {
      $scope = $rootScope.$new();
      store = _store_;
      $state = _$state_;

      resultsDeferred = $q.defer();
      spyOn(loginService, 'authenticate').and.callFake(function() {
        return resultsDeferred.promise
      });

      spyOn(store, 'set').and.callFake(function (key, value) {
        return store[key] = value + '';
      });

      spyOn($state, 'go');

      $ctrl = $componentController('login', {
        $scope: $scope,
        loginService: loginService
      })
    }));

    it('should set the jwt token to local storage', function() {
      resultsDeferred.resolve(
        {
          jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
        }
      );

      $ctrl.login();
      $scope.$apply();

      expect($ctrl.loginService.authenticate.calls.count()).toEqual(1);
      expect(store.set.calls.count()).toEqual(1);
      expect($state.go.calls.count()).toEqual(1);
    });

    it('should set loginFail true if server returns error', function() {
      resultsDeferred.reject();

      $ctrl.login();
      $scope.$apply();

      expect($ctrl.loginFail).toEqual(true);
    });

  });
})();
