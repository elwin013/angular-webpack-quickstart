/*
 * components.module.js
 * Single components module - we're adding all directives there. It will be imported
 * in app.module.js.
 */
import angular from 'angular';

import commitDirective from './commit/commit.directive'

var module = angular.module('app.components', []);

module.directive('commit', commitDirective);

export default module;
