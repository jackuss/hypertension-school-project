import HomeController from './controllers/HomeController';
import {UpperFilter, LowerFilter} from './filters/textFilters';
import exampleDirective from './directives/exampleDirective';
import Routes from './config/config';

import loginModule from './components/loginPage/LoginPageModule';

angular.module('myApp', ['ui.router', 'loginPage'])
    .controller('HomeController', HomeController)
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .directive('exampleDirective', () => new exampleDirective())
    .config(Routes);