import ResultsController from './ResultsController';
import ResultsTableController from'./resultsTable/ResultsTableController';
import ScheduleController from'./schedule/ScheduleController';
import ResultsService from './ResultsService';
import ResultsRoutes from './ResultsRoutes';

var resultsModule = angular.module('results', [])
    .controller('ResultsController', ResultsController)
    .controller('ResultsTableController', ResultsTableController)
    .controller('ScheduleController', ScheduleController)
    .service('ResultsService', ResultsService)
    .config(ResultsRoutes);

export default resultsModule;