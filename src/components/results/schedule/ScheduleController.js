export default class ScheduleController {
    /*@ngInject*/
    constructor (ResultsService, ModalService) {
        this.resultsService = ResultsService;
        this.modalService = ModalService;
        this.data = [];

        this.getSchedule();
    }

    getSchedule() {
        this.resultsService.getScheduleData().then(data => {
            this.data = data;
            console.log(data);
        });
    }

    showDetails(data) {
        this.modalService.setData(data);
        this.modalService.openModal('/components/results/schedule/scheduleDetailsModal/scheduleDetailsModalTemplate.html', 'ScheduleDetailsModalController', 'lg', 'lkfs-modal-schedule');
    }
}

export default ScheduleController;

{[{level: 'novice', fee: 5},{level: 'amator', fee: 10},{level: 'semi-pro', fee: 20},{level: 'pro', fee: 30},{level: 'master', fee: 40}]}