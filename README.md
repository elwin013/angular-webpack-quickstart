# angular-webpack-quickstart
Simple starter for AngularJS (1.x) and Bootstrap using Webpack. Created for
'Web applications' course at [Military University of Technology](http://www.wat.edu.pl/),
as a start point for learning about modern web development tools and creating web applications.

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

### Dependencies
* node and npm

### Running the app
After installing all dependencies (with `npm install`) you can run app:
```bash
npm start
```
It will run webpack server - build in memory, changes are watched, and app will
reload after change.

### Build deploy version
> WARNING: In this version build code is not production ready!

After installing all dependencies (with `npm install`) you can run build app:
```bash
npm run build
```
It will build application and store all data in `dist/ ` directory.

### Contribution
You're interested in contributing? Awesome! Fork, make change, commit and create
pull request. I'll do my best to merge changes!

### License
[MIT](/LICENSE)
