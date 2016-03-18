(function () {
  'use strict';

  describe('updateMultinationalService', function () {
    var $httpBackend,
      updateMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _updateMultinationalService_) {
      $httpBackend = _$httpBackend_;
      updateMultinationalService = _updateMultinationalService_;
    }));

    describe('#update', function() {
      it('calls the server to update multinationals', function () {
        var multinationals = { id: 1, name: 'Multinational', short_description: 'Very short desc.'}

        $httpBackend.expectPUT('http://test.example.com/admin/multinationals/' + multinationals.id).respond(multinationals);

        updateMultinationalService.update(multinationals).then(function (response) {
          expect(response).toEqual(multinationals);
        });

        $httpBackend.flush();
      });

    });

  });
})();
