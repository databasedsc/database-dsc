describe('booleanToHuman', function () {
  'use strict';

  var $filter;

  beforeEach(function () {
    module('dscFe');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should convert boolean to Yes/No', function () {
    var yes = $filter('booleanToHuman')(true, 'booleanToHuman');
    var no = $filter('booleanToHuman')(false, 'booleanToHuman');

    expect(yes).toEqual('Yes');
    expect(no).toEqual('No');
  });
});
