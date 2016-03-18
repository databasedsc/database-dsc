(function () {
  'use strict';

  describe('updateCompanyService', function () {
    var $httpBackend,
      updateCompanyService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _updateCompanyService_) {
      $httpBackend = _$httpBackend_;
      updateCompanyService = _updateCompanyService_;
    }));

    describe('#update', function() {
      it('calls the server to update companies', function () {
        var company = { id: 1, name: 'Company', short_description: 'Very short desc.'}

        $httpBackend.expectPUT('http://test.example.com/admin/companies/' + company.id).respond(company);

        updateCompanyService.update(company).then(function (response) {
          expect(response).toEqual(company);
        });

        $httpBackend.flush();
      });

    });

  });
})();
