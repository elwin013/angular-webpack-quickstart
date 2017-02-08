class GithubInfoService {
    constructor($http) {
        this.$http = $http;
        this.api = "https://api.github.com/repos/elwin013/angular-webpack-quickstart";
    }

    getDescription() {
        return this.$http.get(this.api).then(result => result.data.description);
    }

    getAllCommits() {
        return this.$http.get(this.api + "/commits").then(result => result.data);
    }
}

GithubInfoService.$inject = ['$http'];

export default GithubInfoService;

