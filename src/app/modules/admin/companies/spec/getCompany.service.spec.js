(function () {
  'use strict';

  describe('getCompanyService', function () {
    var $httpBackend,
      getCompanyService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _getCompanyService_) {
      $httpBackend = _$httpBackend_;
      getCompanyService = _getCompanyService_;
    }));

    describe('#find', function() {
      it('calls the server to get companies', function () {
        var company = { name: 'Company', short_description: 'Very short desc.'}

        $httpBackend.expectGET('http://test.example.com/admin/companies/1').respond(company);

        getCompanyService.find(1).then(function (response) {
          expect(response).toEqual(company);
        });

        $httpBackend.flush();
      });

    });

  });
})();
