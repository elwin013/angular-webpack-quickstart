/*
 * services.module.js
 * Services module - we're adding all services there. It will be imported
 * in app.module.js.
 */
import angular from 'angular';

import GithubInfoService from './githubInfo/githubInfo.service';

var module = angular.module('app.services', []);

module.service('GithubInfoService', GithubInfoService);

export default module;
