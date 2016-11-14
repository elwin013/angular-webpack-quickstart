import "bootstrap/dist/css/bootstrap.min.css";
import "app.style.css";

import Routes from "app.routes";
import Services from "services/services.module";

export default angular.module('app', [Routes.name, Services.name]);
