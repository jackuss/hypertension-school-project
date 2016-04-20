import {UpperFilter, LowerFilter} from './filters/textFilters';
import MainService from './MainService';
import HttpService from'./services/HttpService';
import Routes from './config/config';

import loginModule from './components/loginPage/LoginPageModule';
import userModule from './components/userPage/UserPageModule';
import galeryModule from './components/galery/GaleryModule';
import membersModule from './components/members/MembersModule'
import topBarModule from './controls/topBar/LkfsTopBarModule';
import lkfsSliderModule from './controls/lkfsSlider/LkfsSliderModule';
import lkfsSideMenu from './controls/lkfsSideMenu/LkfsSideMenuModule';
import resultsModule from './components/results/resultsModule';
import ModalService from './api/ModalService';

angular.module('myApp', ['ui.router', 'loginPage', 'galery', 'members', 'userPage', 'ngCookies', 'ui.bootstrap', 'topBar', 'lkfsSlider', 'results', 'lkfsSideMenu', 'jkuri.gallery'])
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .service('MainService', MainService)
    .factory('httpService', HttpService)
    .service('ModalService', ModalService)
    .directive('exampleDirective', () => new exampleDirective())
    .constant('LOCALHOTST_URL', {url: 'http://localhost:3000'})
    .config(Routes);
