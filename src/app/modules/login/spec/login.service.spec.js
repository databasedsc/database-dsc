(function () {
  'use strict';

  describe('loginService', function () {
    var $httpBackend,
      loginService;

    beforeEach(module('login'));

    beforeEach(module('login', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _loginService_) {
      $httpBackend = _$httpBackend_;
      loginService = _loginService_;
    }));

    describe('#authenticate', function() {
      it('calls the server to get the companies', function () {
        var credentials = {email: 'test@example.com', password: 'secret'};
        var jwt = { "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" }

        $httpBackend.expectPOST('http://test.example.com/knock/auth_token').respond(jwt);

        loginService.authenticate(credentials).then(function (response) {
          expect(response).toEqual(jwt);
        });

        $httpBackend.flush();
      });

    });

  });
})();
