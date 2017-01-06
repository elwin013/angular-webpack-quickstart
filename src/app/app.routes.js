/*
 * app.routes.js
 * Router configuration of app.
 * In this file we're importing controller submodules.
 */
import angular from 'angular';
import router from 'angular-ui-router';

import rootTemplate from 'app.template.html';

import HomeModule from 'controllers/home/home.module';
import GithubInfoModule from 'controllers/githubInfo/githubInfo.module';

var Routes = angular.module('app.routes',
    [router, HomeModule.name, GithubInfoModule.name]);

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'app',
        abstract: true,
        template: rootTemplate
    });

    $urlRouterProvider.otherwise('/home');
}

Routes.config(routeConfig);

export default Routes;
