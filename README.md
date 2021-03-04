# Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0-next.0.

## Running the application locally

Run `npm install` after cloning the solution. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Note: If there are errors encountered related to ngrx dependencies, run `npm install @ngrx/store@10.1.2 --save` for ngrx store, `npm install @ngrx/effects@10.1.2 --save`for ngrx effects, `npm install @ngrx/store-devtools@10.1.2 --save` for ngrx devtools, and `npm install @ngrx/schematics@10.1.2 --save-dev` for ngrx schematics.

## Running unit tests locally

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Files that has unit test are the following:
- home component
- login component
- login reducer
- login selector 
- login effect

## What to improve

A validation that will set the button to be disabled when the user inputs an invalid username and/or an invalid password. A checker that will navigate the user to the login page if the user directly accesses the home page without updating the state.
