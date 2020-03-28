# Self angular notes:
1. node --version
2. npm install -g @angular@cli
3. ng serve    ****OR****    ng serve --open
4. ng --version
5. ng new hello-world
6. npm install -g typescript
7. tsc --verison (Typescript compiler)
8. tsc main.ts | node main.js : First half of the command will compile main.ts and generate main.js and second half of the command will execute generated main.js and produce the output.

NOTE1 : D/B "let" and "var" key word to declare a variable in Angular. : Where-ever we have to declare variable use "let" keyword because it is restricted to within scope of the nearest function.

NOTE2 : Even if there is compilation error, tsc will create .js file.

9. tsc main.ts && node main.js    ****OR****    tsc *.ts && node main.js
10. tsc --target ES6 "main_6.ts" | node main_6.js    ****OR****    tsc -t es5 main_refactor_classandconstructor.ts
11. Generating Component: 
	ng g c recipes --specs false    ****OR****    ng g c recipes --skipTests true    ****OR****    ng g c recipes/recipe-list --specs false
12. Generating Service: ng g s email
13. Generating Directive: ng g d input-format

----------------------------------------------------------------------------

Components: 
> Create a component.
> Register it is a module.
> Add an element in an HTML markup.

----------------------------------------------------------------------------

^ -> in package.json we have ^ ahead of version : Mean we are going to use most react major verion 
		like 4.4, 4.5, but not 5.* or 6.*
EG: "bootstrap": "^4.4.1",
	"library_name": "^MajorNumber.MinorNumber.PatchNumber"
	
> npm install : This will auto install the dependencies from package.json

----------------------------------------------------------------------------

>To enable bootstrap@3 OR bootstrap@4 (ie: bootstrap@version) OR bootstrap@latest :
1. npm install --save bootstrap@3
2. npm install --save bootstrap jquery
3. npm install popper.js
4. Modify angular.json
"styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/popper.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
5. Modify index.html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
