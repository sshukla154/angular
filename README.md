# angular
> node --version
> npm install -g @angular@cli
> ng serve
****OR****
  ng serve --open
> ng --version
> ng new hello-world
> npm install -g typescript
> tsc --verison (Typescript compiler)
> tsc main.ts | node main.js : First halft of the command will compile main.ts and generate main.js and second half of the command will execute generated main.js and produce the output.
> D/B "let" and "var" key word to declare a variable in Angular. : Where-ever we have to declare variable use "let" keyword because it is restricted to within scope of the nearest function.
	. Also even if there is compilation error, tsc will create .js file.
> tsc main.ts && node main.js
	OR tsc *.ts && node main.js
> tsc --target ES6 "main_6.ts" | node main_6.js
	OR tsc -t es5 main_refactor_classandconstructor.ts
> Generating Component: ng g c recipes --specs false
****OR****
  ng g c recipes --skipTests true
> ng g c recipes/recipe-list --specs false
> Generating Service: ng g s email
> Generating Directive: ng g d input-format

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
	
> npm install

----------------------------------------------------------------------------

>To enable bootstrap@3:
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


----------------------------------------------------------------------------

Not sure if anyone faced the same issue or not but, I tried installing bootstrap@3 in my three of the project while learning Angular till now using below command:> npm install --save bootstrap@3

Now modifying, angular.json, but still obersved that bootstrap styles is not working as expected. So did some googling and found that, I need to install JQuery as well as popper.js along with bootstrap@3. Is it so ?But did some more googleing and found that if we add below three lines in index.html bootstarp is working as expected.

----------------------------------------------------------------------------
