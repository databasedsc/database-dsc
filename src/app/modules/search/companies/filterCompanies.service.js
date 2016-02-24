(function() {
  'use strict';

  angular
    .module('searchCompanies')
    .service('filterCompaniesService', function() {

      this.filtersData = function() {
        return this.data;
      };

      this.data = {
        employees: {
          selectedValue: '',
          values: ['', '1-5', '6-10', '11-25', '26-50', '50-100', '101-250', '250-500', '>500']
        },
        fundingStage: {
          selectedValue: '',
          values: ['', 'Bootstrapped', 'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series C+', 'Acquired', 'PublicStage']
        },
        fundingAmount: {
          selectedValue: '',
          values: ['', '0-50k', '51k-500k', '501k-1m', '1m-5m', '5m-10m', '10m-25m', '25m-50m', '50m-100m', '>100m']
        },
        productStage: {
          selectedValue: '',
          values: ['', 'Development', 'Complete']
        },
        geographicalMarkets: {
          selectedValue: '',
          values: [
            { label: 'Ireland', code: 'IE'},
            { label: 'United Kingdom', code: 'UK' },
            { label: 'Europe', code: 'EU' },
            { label: 'North America', code: 'NA' },
            { label: 'Asia', code: 'AS'},
            { label: 'Africa', code: 'AF' },
            { label: 'South America', code: 'SA' },
            { label: 'Global', code: 'G' }]
        },
        businessModel: {
          selectedValue: '',
          values: ['', 'B2B', 'B2C']
        },
        companyStage: {
          selectedValue: '',
          values: ['', 'Early-stage', 'Growth', 'Late-stage', 'Public', 'Acquired']
        },
        operationalStatus: {
          selectedValue: '',
          values: ['', 'Active', 'Inactive']
        }
      };
    })
})();
