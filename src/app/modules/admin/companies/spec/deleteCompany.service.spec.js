(function () {
  'use strict';

  describe('deleteCompany', function () {
    var $httpBackend,
      deleteCompanyService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _deleteCompanyService_) {
      $httpBackend = _$httpBackend_;
      deleteCompanyService = _deleteCompanyService_;
    }));

    describe('#delete', function() {
      it('calls the server to delete companies', function () {
        var id = 1;
        $httpBackend.expectDELETE('http://test.example.com/admin/companies/' + id).respond({});

        deleteCompanyService.delete(id).then(function (response) {
          expect(response.status).toEqual(200);
        });

        $httpBackend.flush();
      });

    });

  });
})();
