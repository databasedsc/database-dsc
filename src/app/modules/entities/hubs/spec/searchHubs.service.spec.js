(function () {
  'use strict';

  describe('searchHubsService', function () {
    var $httpBackend,
      searchHubsService;

    beforeEach(module('searchHubs'));

    beforeEach(module('searchHubs', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _searchHubsService_) {
      $httpBackend = _$httpBackend_;
      searchHubsService = _searchHubsService_;
    }));

    describe('#getHubs', function() {
      it('calls the server to get the hubs', function() {
        var hubs = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/hubs').respond(hubs);

        searchHubsService.get().then(function(response) {
          expect(response).toEqual(hubs);
        });

        $httpBackend.flush();
      });

      it("should search hubs by keywords", function() {

        var hubs = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/hubs?searchText=ndrc').respond(hubs);

        searchHubsService.get({searchText: "ndrc"}).then(function (response) {
          expect(response).toEqual(hubs);
        });

        $httpBackend.flush();
      });

    });

  });
})();
