import angular from 'angular';

import GithubInfoService from './githubInfo/githubInfo.service';

var module = angular.module('app.services', []);

module.service('GithubInfoService', GithubInfoService);

export default module;