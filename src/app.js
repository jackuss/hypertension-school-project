import HomeController from './controllers/HomeController';
import {UpperFilter, LowerFilter} from './filters/textFilters';
import exampleDirective from './directives/exampleDirective';
import MainService from './MainService';
import HttpService from'./services/HttpService';
import Routes from './config/config';

import loginModule from './components/loginPage/LoginPageModule';
import userModule from './components/userPage/UserPageModule';

angular.module('myApp', ['ui.router', 'loginPage', 'userPage', 'ngCookies'])
    .controller('HomeController', HomeController)
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .service('MainService', MainService)
    .factory('httpService', HttpService)
    .directive('exampleDirective', () => new exampleDirective())
    .constant('LOCALHOTST_URL', {url: 'http://localhost:3000'})
    .config(Routes)
    .config($httpProvider => {
        $httpProvider.interceptors.push('httpService');
    })
