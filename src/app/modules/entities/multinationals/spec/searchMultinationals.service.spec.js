(function () {
  'use strict';

  describe('searchMultinationalsService', function () {
    var $httpBackend,
      searchMultinationalsService;

    beforeEach(module('searchMultinationals'));

    beforeEach(module('searchMultinationals', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _searchMultinationalsService_) {
      $httpBackend = _$httpBackend_;
      searchMultinationalsService = _searchMultinationalsService_;
    }));

    describe('#getMultinationals', function() {
      it('calls the server to get the multinationals', function () {
        var multinationals = {name: 'Multinational', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/multinationals').respond(multinationals);

        searchMultinationalsService.get().then(function (response) {
          expect(response.data).toEqual(multinationals);
        });

        $httpBackend.flush();
      });

      it('calls the server with a text search query to get the multinationals', function () {
        var multinationals = {name: 'Multinational', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/multinationals?searchText=facebook').respond(multinationals);

        searchMultinationalsService.get({searchText: "facebook"}).then(function (response) {
          expect(response.data).toEqual(multinationals);
        });

        $httpBackend.flush();
      });

      it("should call the server with filtered query", function() {
        var multinationals = {name: 'Multinational', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET("http://test.example.com/multinationals?emeaHq=Yes&employees=101-250&page=5&per_page=9").respond(multinationals);

        searchMultinationalsService.get({searchText: ''}, {employees: '101-250', emeaHq: 'Yes'}, {currentPage: 5, perPage: 9}).then(function(response){
          expect(response.data).toEqual(multinationals);
        });

        $httpBackend.flush();

      });


    });

  });
})();
