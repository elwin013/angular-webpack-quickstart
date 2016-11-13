import angular from "angular";
import template from './home.template.html';
import controller from './home.ctrl';

var module = angular.module('app.home', []);

routeConfig.$inject = ["$stateProvider"];

function routeConfig($stateProvider) {
    $stateProvider.state({
        name: 'app.home',
        url: '/home',
        template,
        controller,
        controllerAs: 'homeCtrl'
    });
}

module.config(routeConfig);

export default module;
