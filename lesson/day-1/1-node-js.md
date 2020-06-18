# Node JS
JavaScript runtime built on Chrome's V8 JavaScript engine.

## package.json
Contains application metadata, dependencies and scripts.
* metadata - name, description, license, authors, etc...
* dependencies - external node libraries stored in `node_modules` folder
* scripts - commands that can be executed through command line (cmd | powershell)

## Package managers
Package managers are responsible for adding, removing and updating `node_modules`.
They are also used to run scripts defined in the `package.json` file.

We will be using yarn because it is used in both **SFS** and **Scholarship**.
A `lock` file is created after restoring dependencies to allow consistent versioning.

* npm - default package manager when installing node js
* yarn - built by Facebook to fix some issues that npm has
  * simplifies running commands: `yarn build` vs `npm run build`
  * caches modules in local cache to reduce duplication
  * fetches modules asynchronously