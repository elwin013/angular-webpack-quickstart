import angular from 'angular';

import commitDirective from './commit/commit.directive'

var module = angular.module('app.components', []);

module.directive('commit', commitDirective);

export default module;
