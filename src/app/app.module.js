import "bootstrap/dist/css/bootstrap.min.css";
import "app.style.css";

import Routes from "app.routes";
import GithubInfoService from "services/githubInfo/githubInfo.module";

export default angular.module('app', [Routes.name, GithubInfoService.name]);
