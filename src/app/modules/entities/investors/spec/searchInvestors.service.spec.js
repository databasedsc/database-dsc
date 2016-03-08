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
          expect(response.data).toEqual(investors);
        });

        $httpBackend.flush();
      });

      it('calls the server with a text search query to get the investors', function () {
        var investors = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/investors?searchText=facebook').respond(investors);

        searchInvestorsService.get({searchText: "facebook"}).then(function (response) {
          expect(response.data).toEqual(investors);
        });

        $httpBackend.flush();
      });

      it("should call the server with filtered query", function() {
        var investors = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET("http://test.example.com/investors?fundingType=Seed&investmentSize=1000000-2000000").respond(investors);

        searchInvestorsService.get({searchText: ''}, {investmentSize: '1000000-2000000', fundingType: 'Seed'}).then(function(response){
          expect(response.data).toEqual(investors);
        });

        $httpBackend.flush();

      });

      it("should call the server with pagination", function() {
        var investors = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET("http://test.example.com/investors?page=4&per_page=10").respond(investors);

        searchInvestorsService.get({}, {}, {currentPage: 4, perPage: 10}).then(function(response){
          expect(response.data).toEqual(investors);
        });

        $httpBackend.flush();

      });


    });

  });
})();
