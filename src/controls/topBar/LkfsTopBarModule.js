import LkfsTopBarController from './LkfsTopBarController';
import LkfsTopBarDirective from './LkfsTopBarDirective';


var topBarModule = angular.module('topBar', [])
    .controller('LkfsTopBarController', LkfsTopBarController)
    .directive('topBar', () => new LkfsTopBarDirective());

export default topBarModule;
