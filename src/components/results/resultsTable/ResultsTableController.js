export default class ResultsTableController {
    /*@ngInject*/
    constructor (ResultsService) {
        this.resultService = ResultsService;
        this.data = {};
        this.details = {};

        this.init();
    }

    init() {
        this.resultService.getResultsData().then((response) => {
            this.data = response;
        });
    }

    getDetails() {
        this.resultService.getResultsDetailsData().then((response) => {
            this.details = response;
        });
    }
}

export default ResultsTableController;