export default class GithubInfoController {
    constructor(GithubInfoService) {
        this.githubUrl = "https://github.com/elwin013/angular-webpack-quickstart";
        this.service = GithubInfoService;

        this.service.getAllCommits().then(data => {
            this.commits = data;
        });
        this.service.getDescription().then(data => {
            this.description = data;
        })
    }
}

GithubInfoController.$inject = ["GithubInfoService"];
