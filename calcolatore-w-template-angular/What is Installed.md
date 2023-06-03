# Angular version 
npm install -g @angular/cli@14.0.0

---
Create a new Feature
do new module --> '"name-of-feature" --routing'
---

# Angular project
ng new template-angular --version=14.0.0

# List of all libraries

npm i bootstrap@4.6.0 (adding path in angular.json)
npm i mdb-angular-ui-kit@3.0.1
npm i animate.css (adding path in angular.json)

npm i --save-dev @types/aos 
    (adding path in angular.json, 
    in component import * as AOS from 'aos';AOS.init();)
- https://github.com/michalsnik/aos

# Jquery add this in index.html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
# MDBootsrap template in index.html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css" rel="stylesheet"/>


### How to Use

1. Modify Project name in angular.json file (Replace all occurrences of the old name in angular.json)

2. Rename Project folder name.

3. Delete node_modules folder from your project directory.

4. Run npm install command.

5. Finally, run ng serve command.
