(function () {
  'use strict';

  describe('getCompaniesService', function() {
    var $httpBackend,
        getCompanyService;

    beforeEach(module('companyProfile'));

    beforeEach(module('companyProfile', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _getCompanyService_) {
      $httpBackend = _$httpBackend_;
      getCompanyService = _getCompanyService_;
    }));

    describe('#find by id', function() {
      it('calls the server to get the company by id', function() {
        var company = {
          id: 1,
          name: 'Company',
          logo: "somelogo.png",
          shortDesc: "short description"
        };

        $httpBackend.expectGET('http://test.example.com/companies/1').respond(company);

        getCompanyService.find(1).then(function(response) {
          expect(response).toEqual(company);
        });

        $httpBackend.flush();
      });
    });
  });
})();
