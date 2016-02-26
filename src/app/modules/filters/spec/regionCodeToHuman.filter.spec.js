describe('regionCodeToHuman', function () {
  'use strict';

  var $filter;

  beforeEach(function () {
    module('dscFe');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should convert EU code to Europe string', function () {
    var europe = $filter('regionCodeToHuman')('EU', 'regionCodeToHuman');
    expect(europe).toEqual('Europe');
  });

  it('should convert EU code to Europe string', function () {
    var global = $filter('regionCodeToHuman')('G', 'regionCodeToHuman');
    expect(global).toEqual('Global');
  });

  it('should return empty string for unknown code', function () {
    var unknown = $filter('regionCodeToHuman')('XDF', 'regionCodeToHuman');
    expect(unknown).toEqual('');
  });
});
