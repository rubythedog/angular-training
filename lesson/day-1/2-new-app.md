# Creating a new Angular Application
Using the `@angular/cli` we can create an angular application very easily.

### 0. Open windows powershell

### 1. Create a project directory
```
mkdir ~/src
cd ~/src
```

### 2. Install `@angular/cli` locally
```
yarn add @angular/cli
yarn ng new hello-world
```
* no routing (for now)
* select > CSS

Now we can delete the `package.json` and `yarn.lock` in the `src` directory
because those were only used for creating the application.

### 3. Angular file types
* modules
* components
* services
* tests (unit | e2e)

### 4. Hello-world
* Run unit tests
* Run locally
* Build for production
* Add alert OnInit