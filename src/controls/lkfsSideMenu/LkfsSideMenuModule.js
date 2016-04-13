import LkfsSideMenuController from './LkfsSideMenuController';
import LkfsSideMenuDirective from './LkfsSideMenuDirective';


var lkfsSideMenu = angular.module('lkfsSideMenu', [])
    .controller('LkfsSideMenuController', LkfsSideMenuController)
    .directive('lkfsSideMenu', () => new LkfsSideMenuDirective());

export default lkfsSideMenu;
