(function () {
  'use strict';

  describe('getHubService', function() {
    var $httpBackend,
      getHubService;

    beforeEach(module('hubProfile'));

    beforeEach(module('hubProfile', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _getHubService_) {
      $httpBackend = _$httpBackend_;
      getHubService = _getHubService_;
    }));

    describe('#find by id', function() {
      it('calls the server to get the hub by id', function() {
        var hub = {
          id: 1,
          name: 'hub',
          logo: "somelogo.png",
          shortDesc: "short description"
        };

        $httpBackend.expectGET('http://test.example.com/hubs/1').respond(hub);

        getHubService.find(1).then(function(response) {
          expect(response).toEqual(hub);
        });

        $httpBackend.flush();
      });
    });
  });
})();
