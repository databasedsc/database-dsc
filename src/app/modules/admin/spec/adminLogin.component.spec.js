(function() {
  'use strict';

  describe('AdminLogin', function() {
    var $ctrl,
      $scope,
      $auth,
      resultsDeferred,
      store,
      $state;

    beforeEach(module('login', 'admin', 'satellizer'));

    beforeEach(inject(function($componentController, $rootScope, $q, loginService, _store_, _$state_, _$auth_) {
      $scope = $rootScope.$new();
      $auth = _$auth_;
      store = _store_;
      $state = _$state_;

      resultsDeferred = $q.defer();
      spyOn(loginService, 'authenticate').and.callFake(function() {
        return resultsDeferred.promise
      });

      spyOn($auth, 'setToken').and.callFake(function (key, value) {
        return store[key] = value + '';
      });

      spyOn($state, 'go');

      $ctrl = $componentController('adminLogin', {
        $scope: $scope,
        $auth: $auth,
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
      expect($auth.setToken.calls.count()).toEqual(1);
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
