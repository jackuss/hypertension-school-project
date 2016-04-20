/*@ngInject*/
function ResultsRoutes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/results', '/results/schedule');

    $stateProvider
        .state('results.schedule', {
            url: '/schedule',
            templateUrl: './components/results/schedule/scheduleTemplate.html',
            controller: 'ScheduleController',
            controllerAs: 'schedule'
        })
        .state('results.resultsTable', {
            url: '/resultsTable',
            templateUrl: "./components/results/resultsTable/resultsTableTemplate.html",
            controller: 'ResultsTableController',
            controllerAs: 'resultsTable'
        });

}

ResultsRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default ResultsRoutes;