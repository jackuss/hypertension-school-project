/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import HomeController from './controllers/HomeController';
import {UpperFilter, LowerFilter} from './filters/textFilters';
import exampleDirective from './directives/exampleDirective';

angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.filter('upper', UpperFilter)
	.filter('lower', LowerFilter)
	.directive('exampleDirective', () => new exampleDirective());