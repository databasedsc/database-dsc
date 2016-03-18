(function () {
  'use strict';

  describe('restoreCompany', function () {
    var $httpBackend,
      restoreCompanyService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _restoreCompanyService_) {
      $httpBackend = _$httpBackend_;
      restoreCompanyService = _restoreCompanyService_;
    }));

    describe('#restore', function() {
      it('calls the server to restore companies', function () {
        var id = 1;

        $httpBackend.expectPUT('http://test.example.com/admin/companies/1/restore').respond({});

        restoreCompanyService.restore(id).then(function (response) {
          expect(response.status).toEqual(200);
        });

        $httpBackend.flush();
      });

    });

  });
})();
