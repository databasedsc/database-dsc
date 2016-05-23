(function() {
  'use strict';

  describe('adminListCompaniesService', function() {
    var $httpBackend,
      adminListCompaniesService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _adminListCompaniesService_) {
      $httpBackend = _$httpBackend_;
      adminListCompaniesService = _adminListCompaniesService_;
    }));

    describe('#find', function() {
      it('calls the server to list companies', function() {
        var companies = [
          {name: 'Companies', short_description: 'Very short desc.'},
          {name: 'Companies', short_description: 'Very short desc.'},
          {name: 'Companies', short_description: 'Very short desc.'}
        ];

        $httpBackend.expectGET('http://test.example.com/admin/companies').respond(companies);

        adminListCompaniesService.getAll().then(function(response) {
          expect(response).toEqual(companies);
        });

        $httpBackend.flush();
      });

    });

  });
})();
