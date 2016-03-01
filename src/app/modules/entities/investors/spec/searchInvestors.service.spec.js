(function () {
  'use strict';

  describe('searchInvestorsService', function () {
    var $httpBackend,
      searchInvestorsService;

    beforeEach(module('searchInvestors'));

    beforeEach(module('searchInvestors', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _searchInvestorsService_) {
      $httpBackend = _$httpBackend_;
      searchInvestorsService = _searchInvestorsService_;
    }));

    describe('#getInvestors', function() {
      it('calls the server to get the investors', function () {
        var investors = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/investors').respond(investors);

        searchInvestorsService.get().then(function (response) {
          expect(response).toEqual(investors);
        });

        $httpBackend.flush();
      });

      it('calls the server with a text search query to get the investors', function () {
        var investors = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/investors?searchText=facebook').respond(investors);

        searchInvestorsService.get({searchText: "facebook"}).then(function (response) {
          expect(response).toEqual(investors);
        });

        $httpBackend.flush();
      });

    });

  });
})();
