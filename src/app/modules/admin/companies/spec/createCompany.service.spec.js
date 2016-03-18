(function () {
  'use strict';

  describe('createCompanyService', function () {
    var $httpBackend,
      createCompanyService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _createCompanyService_) {
      $httpBackend = _$httpBackend_;
      createCompanyService = _createCompanyService_;
    }));

    describe('#create', function() {
      it('calls the server to create companies', function () {
        var company = { name: 'Company', short_description: 'Very short desc.'}

        $httpBackend.expectPOST('http://test.example.com/admin/companies').respond(company);

        createCompanyService.create(company).then(function (response) {
          expect(response.data).toEqual(company);
        });

        $httpBackend.flush();
      });

    });

  });
})();
