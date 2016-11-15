# angular-webpack-quickstart
Simple starter for AngularJS and Bootstrap using Webpack. Created for
'Web applications' course at [Military University of Technology](http://www.wat.edu.pl/),
as a start point for students to learn about modern web development tools and creating web applications.

Starter contains AngularJS (1.x), Bootstrap (3.x) and is built (and served for development) by Webpack.

### Quick start
```bash
# Clone repository
git clone https://github.com/elwin013/angular-webpack-quickstart.git webapp
# change directory to webapp
cd webapp
# install dependencies
npm install
# start webpack server
npm start
```
Now you can open [localhost:8080](http://locahost:8080) in you browser.

At [localhost:8080/#/exampleService](http://localhost:8080/#/exampleService) you can access example page which loads data from GitHub API. 

### Dependencies
> For version look into package.json!

To build:
* npm as a package manager,
* webpack with loaders (babel, css, file, html, style, url) and plugins (copy-webpack-plugin),
* webpack-dev-server,
* babel (babel-core, babel-preset-es2015),
* rimraf.

Running app:
* Angular, AngularUI Router,
* Bootstrap,
* jQuery.

### Running the app
After installing all dependencies (with `npm install`) you can run app:
```bash
npm start
```
It will run webpack server - build in memory, changes are watched, and app will
reload after change.

### Build deploy version
After installing all dependencies (with `npm install`) you can run build app:
```bash
npm run build
```
It will build application and store all data in `dist/ ` directory. Files are uglified and minified.

### Contribution
You're interested in contributing? Awesome! Fork, make change, commit and create
pull request. I'll do my best to merge changes!

### License
[MIT](/LICENSE)
