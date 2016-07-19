/*@ngInject*/
function Routes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.when('/', '/members');
    //$urlRouterProvider.ot('/', '/members');

    $httpProvider.interceptors.push('httpService');
    $urlRouterProvider.otherwise('/members');

    $stateProvider
        .state('home', {
            url:'/app',
            templateUrl: "./components/home/homeTemplate.html",
            controller: 'HomeController',
            controllerAs: 'home'
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
        })
        .state('results', {
            url:'/results',
            templateUrl: "./components/results/resultsTemplate.html",
            controller: 'ResultsController',
            controllerAs: 'results'
            /*resolve: {
             secure: /!*@ngInject*!/function(MainService) {
             return MainService.authenticate('user');
             }
             }*/
        })
        .state('contact', {
            url:'/contact',
            templateUrl: "./components/contact/contactTemplate.html",
            controller: 'ContactController',
            controllerAs: 'contact'
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