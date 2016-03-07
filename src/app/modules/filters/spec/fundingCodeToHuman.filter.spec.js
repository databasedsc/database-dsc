describe('fundingCodeToHuman', function() {
  "use strict";

  var $filter;

  beforeEach(function() {
    module('dscFe')
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it("should convert PS to Pre-seed string", function() {
    var preSeed = $filter('fundingCodeToHuman')('PS', 'fundingCodeToHuman');
    expect(preSeed).toEqual('Pre-seed')
  });

  it("should convert SA to Series A string", function() {
    var seriesA = $filter('fundingCodeToHuman')('SA', 'fundingCodeToHuman');
    expect(seriesA).toEqual('Series A')
  });

  it("should convert SC+ to Series C+ string", function() {
    var seriesCplus = $filter('fundingCodeToHuman')('SC+', 'fundingCodeToHuman');
    expect(seriesCplus).toEqual('Series C+')
  });

  it("should convert ['SB', 'SC'] to 'Series B, Series C' string", function() {
    var array = $filter('fundingCodeToHuman')(['SB','SC'], 'array', 'fundingCodeToHuman');
    expect(array).toEqual('Series B, Series C');
  });


})
