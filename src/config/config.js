function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('loginPage', {
            url: '/',
            templateUrl: './components/loginPage/loginPageTemplate.html',
            controller: 'LoginPageController',
            controllerAs: 'logPage'
        });
}

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Routes;