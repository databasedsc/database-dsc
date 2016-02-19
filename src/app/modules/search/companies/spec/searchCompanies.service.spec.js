(function () {
  'use strict';

  describe('searchCompaniesService', function () {
    var $httpBackend,
      searchCompaniesService;

    beforeEach(module('searchCompanies'));

    beforeEach(module('searchCompanies', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _searchCompaniesService_) {
      $httpBackend = _$httpBackend_;
      searchCompaniesService = _searchCompaniesService_;
    }));

    describe('#getCompanies', function() {
      it('calls the server to get the companies', function () {
        var companies = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/companies').respond(companies);

        searchCompaniesService.getCompanies().then(function (response) {
          expect(response).toEqual(companies);
        });

        $httpBackend.flush();
      });

      it('calls the server with a text search query to get the companies', function () {
        var companies = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/companies?searchText=mustard').respond(companies);

        searchCompaniesService.getCompanies({searchText: "mustard"}).then(function (response) {
          expect(response).toEqual(companies);
        });

        $httpBackend.flush();
      });

    });

  });
})();
