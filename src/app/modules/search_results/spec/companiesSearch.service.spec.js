(function () {
  'use strict';

  describe('companiesSearchService', function () {
    var $httpBackend,
      companiesSearchService;

    beforeEach(module('searchResults'));

    beforeEach(module('searchResults', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _companiesSearchService_) {
      $httpBackend = _$httpBackend_;
      companiesSearchService = _companiesSearchService_;
    }));

    describe('#getCompanies', function() {
      it('calls the server to get the companies', function () {
        var companies = {name: 'Company', logo: "somelogo.png", shortDesc: "short description"};

        $httpBackend.expectGET('http://test.example.com/companies')
          .respond(companies);

        companiesSearchService.getCompanies().then(function (response) {
          expect(response).toEqual(companies);
        });

        $httpBackend.flush();
      });
    });

  });
})();
