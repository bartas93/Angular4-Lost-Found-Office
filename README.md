Learning app - Angular4 

Task was:

System is intended to 'Lost and Found Items' organization. Only admin role exists
Consists of 3 pages: 'Items Lost', 'Items Found' and 'Wishlists'.
Each item has its own info page with basic info (weight, color, photos, category etc.
All listings can be sorted (date added, alphatebically...) and filtered (category, etc.).
Admin is able to add a lost item to the system.
Admin is able to return the item from listing to its owner.
Admin can add users to item's wishlist. If the owner does not collect the stuff in 1 month, then the person who first reserved the item is able to collect it.
User can reserve up to 3 items. Each item has reservation queue with users waiting for collection (FIFO) only when the owner does not collect it.
Admin confirms or declines the user's collection: by owner or according to queue. (History of item needs to be tracked)
During item collection, user may also rate the item with 5-star system.
Every user needs to have a profile in the system (created by admin) with personal data.
Use Bootstrap CSS/controls and remember to keep it user friendly!
Use HTTP communication, modal windows and date picker for choosing date.

# ItemOfficeWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
