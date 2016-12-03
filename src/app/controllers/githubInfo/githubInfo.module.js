import angular from "angular";
import template from './githubInfo.template.html';
import controller from './githubInfo.ctrl';
import './githubInfo.template.css';

var module = angular.module('app.info', []);

routeConfig.$inject = ["$stateProvider"];

function routeConfig($stateProvider) {
    $stateProvider.state({
        name: 'app.info',
        url: '/githubInfo',
        template,
        controller,
        controllerAs: 'infoCtrl'
    });
}

module.config(routeConfig);

export default module;
