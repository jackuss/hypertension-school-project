/*@ngInject*/
function Routes($stateProvider, $urlRouterProvider, $locationProvider, MainService) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('loginPage', {
            url: '/',
            templateUrl: './components/loginPage/loginPageTemplate.html',
            controller: 'LoginPageController',
            controllerAs: 'logPage',
            resolve: {
                secure: /*@ngInject*/function(MainService) {
                    return MainService.authenticate('guest');
                }
            }
        })
        .state('userPage', {
            url:'/app',
            templateUrl: "./components/userPage/userPageTemplate.html",
            controller: 'UserPageController',
            controllerAs: 'userPage',
            resolve: {
                secure: /*@ngInject*/function(MainService) {
                    return MainService.authenticate('user');
                }
            }
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}

Routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default Routes;