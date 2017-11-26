const angular = require('angular');
const axios = require('axios');
const cheerio = require('cheerio');

angular.module('demoApp')
    .factory('ScraperService', function () {
        return {
            getMediumArticlesByCategory
        };

        function __getMeduimCategoryURI(category) {
            return `https://medium.com/topic/${category}`;
        }

        function getMediumArticlesByCategory() {
            return axios.get(__getMeduimCategoryURI('technology'));
        }
    });