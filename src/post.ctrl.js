const axios = require('axios');
const angular = require('angular');
require('./scraper.service');
angular.module('demoApp')
    .controller('PostCtrl', [function () {
        const vm = this;
        vm.title = 'Application blog';
    }]);