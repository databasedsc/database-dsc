(function() {
  'use strict';

  describe('listCompaniesService', function() {
    var $httpBackend,
      listCompaniesService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _listCompaniesService_) {
      $httpBackend = _$httpBackend_;
      listCompaniesService = _listCompaniesService_;
    }));

    describe('#find', function() {
      it('calls the server to list companies', function() {
        var companies = [
          {name: 'Companies', short_description: 'Very short desc.'},
          {name: 'Companies', short_description: 'Very short desc.'},
          {name: 'Companies', short_description: 'Very short desc.'}
        ];

        $httpBackend.expectGET('http://test.example.com/admin/companies').respond(companies);

        listCompaniesService.getAll().then(function(response) {
          expect(response).toEqual(companies);
        });

        $httpBackend.flush();
      });

    });

  });
})();
