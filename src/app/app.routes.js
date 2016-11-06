import angular from 'angular';
import router from 'angular-ui-router';

import rootTemplate from 'app.template.html';

import HomeModule from 'home/home.module';

var Routes = angular.module('routes', [router, HomeModule.name]);

Routes.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state({
        name: 'app',
        abstract: true,
        template: rootTemplate
    });

    $urlRouterProvider.otherwise('/home');
})

export default Routes;
