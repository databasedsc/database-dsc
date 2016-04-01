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
          type: 'dropdown',
          id: 'employees',
          label: 'No. of Employees',
          selectedValue: '',
          noSelectionString: 'Any number',
          values: ['1-5', '6-10', '11-25', '26-50', '50-100', '101-250', '250-500', '>500']
        },
        fundingStage: {
          type: 'dropdown',
          id: 'funding-stage',
          label: 'Funding Stage',
          selectedValue: '',
          noSelectionString: 'Any stage',
          values: ['Bootstrapped', 'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series C+', 'Acquired', 'PublicStage']
        },
        fundingAmount: {
          type: 'dropdown',
          id: 'funding-amount',
          label: 'Funding Amount',
          selectedValue: '',
          noSelectionString: 'Any amount',
          values: ['0-50k', '51k-500k', '501k-1m', '1m-5m', '5m-10m', '10m-25m', '25m-50m', '50m-100m', '>100m']
        },
        productStage: {
          type: 'dropdown',
          id: 'product-stage',
          label: 'Product Stage',
          selectedValue: '',
          noSelectionString: 'Any stage',
          values: ['Development', 'Complete']
        },
        geographicalMarkets: {
          type: 'checklist',
          id: 'geographical-markets',
          label: 'Geographical Markets',
          selectedValue: '',
          selectedString: 'Any market',
          noSelectionString: 'Any market',
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
          type: 'dropdown',
          id: 'business-model',
          label: 'Business Model',
          selectedValue: '',
          noSelectionString: 'Any model',
          values: ['B2B', 'B2C', 'B2B2C']
        },
        companyStage: {
          type: 'dropdown',
          id: 'company-stage',
          label: 'Company Stage',
          selectedValue: '',
          noSelectionString: 'Any stage',
          values: ['Early-stage', 'Growth', 'Late-stage', 'Public', 'Acquired']
        },
        operationalStatus: {
          type: 'dropdown',
          id: 'operational-status',
          label: 'Status',
          selectedValue: '',
          noSelectionString: 'Any status',
          values: ['Active', 'Inactive']
        }
      };
    })
})();
