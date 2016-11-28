import angular from 'angular';

import helloWorldDirective from './helloWorld/helloWorld.directive'

var module = angular.module('app.components', []);

module.directive('helloWorld', helloWorldDirective);

export default module;
