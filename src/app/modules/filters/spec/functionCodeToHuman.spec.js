describe('functionCodeToHuman', function () {
  'use strict';

  var $filter;

  beforeEach(function () {
    module('dscFe');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should convert L code to Legal string', function () {
    var europe = $filter('functionCodeToHuman')('L', 'functionCodeToHuman');
    expect(europe).toEqual('Legal');
  });

  it('should convert RD code to Research and Development string', function () {
    var global = $filter('functionCodeToHuman')('RD', 'functionCodeToHuman');
    expect(global).toEqual('Research and Development');
  });

  it('should return empty string for unknown code', function () {
    var unknown = $filter('functionCodeToHuman')('XDF', 'functionCodeToHuman');
    expect(unknown).toEqual('');
  });
});
