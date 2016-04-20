export default class ResultsController {
    /*@ngInject*/
    constructor () {
        this.tabs = [
            {name: "Terminarz", view: "results.schedule"},
            {name: "Wyniki", view: "results.resultsTable"}
        ]
    }
}

export default ResultsController;