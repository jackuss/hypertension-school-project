export default class ScheduleController {
    /*@ngInject*/
    constructor (ResultsService) {
        this.resultsService = ResultsService;
        this.data = [];

        this.getSchedule();
    }

    getSchedule() {
        this.resultsService.getScheduleData().then(data => {
            this.data = data;
            console.log(data);
        });
    }
}

export default ScheduleController;