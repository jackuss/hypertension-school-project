/*@ngInject*/
function Routes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.when('/', '/members');
    //$urlRouterProvider.ot('/', '/members');

    $httpProvider.interceptors.push('httpService');
    $urlRouterProvider.otherwise('/members');

    $stateProvider
        .state('loginPage', {
            url: '/',
            templateUrl: './components/loginPage/loginPageTemplate.html',
            controller: 'LoginPageController',
            controllerAs: 'logPage',
            /*resolve: {
                secure: /!*@ngInject*!/function(MainService) {
                    return MainService.authenticate('guest');
                }
            }*/
        })
        .state('userPage', {
            url:'/app',
            templateUrl: "./components/userPage/userPageTemplate.html",
            controller: 'UserPageController',
            controllerAs: 'userPage',
            /*resolve: {
                secure: /!*@ngInject*!/function(MainService) {
                    return MainService.authenticate('user');
                }
            }*/
        })
        .state('galery', {
            url:'/galery',
            templateUrl: "./components/galery/galeryTemplate.html",
            controller: 'GaleryController',
            controllerAs: 'galery'
            /*resolve: {
             secure: /!*@ngInject*!/function(MainService) {
             return MainService.authenticate('user');
             }
             }*/
        })
        .state('members', {
            url:'/members',
            templateUrl: "./components/members/membersTemplate.html",
            controller: 'MembersController',
            controllerAs: 'members'
            /*resolve: {
             secure: /!*@ngInject*!/function(MainService) {
             return MainService.authenticate('user');
             }
             }*/
        });

    $/*locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/

}

Routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default Routes;