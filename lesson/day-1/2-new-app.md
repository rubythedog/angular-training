# Creating a new Angular Application
Using the `@angular/cli` we can create an angular application very easily.

### 0. Open windows powershell

### 1. Create a project directory
```
mkdir ~/src
cd ~/src
```

### 2. Install `@angular/cli` globally
```
yarn global add @angular/cli
yarn global list
ng new hello-world
```
* `? Would you like to add Angular routing? (y/N)` no (for now)
* `> CSS` select CSS and press enter
* open the project in VS Code `code hello-world`

Review the general layout of the folder structure
* `dist` - short for **distribution**, will appear after we build
* `e2e` - End to End testing (Protractor)
* `node_modules` - third party node libraires
* `src` - source code
* `.editorconfig` - code editor formats, linters, etc...
* `angular.json` - Angular application configuration file for building, testing, linting, and application config
* `browserslist` - specify the target supported browsers (will automatically transpile code to proper versions)
* `karma.conf.js` - for unit testing (Karma is a framework used in conjunction with jasmine)
* `package.json` - the highest level config file for thie entire node project
* `README.md` - markdown file providing information to developers or maintainers
* `tsconfig.json` - typescript settings
* `tsconfig.*.json` - specific typescript settings for the app vs for tests. e.g. tests use a mocked `HttpService`
* `tslint.json` - use for code style and formatting
* `yarn.lock` - locks the dependency versions so developers and production doesn't have the "Worked on my machine" issue.

### 3. Angular file types
* modules
* components
* services
* tests (unit | e2e)

### 4. Hello-world
* Run unit tests
  * `yarn test`
  * `npm test`
* Run locally
  * `yarn start`
  * `npm start`
* Build for production
  * `yarn build --prod`
  * `npm run build -- --prod`
* Check browserlist support (IE11)
  * `yarn browserslist`
  * Note: you must have appropriate polyfills if you want to support all features.
* Add alert OnInit
  * `ngOnInit() {}`