class ScheduleDetailsModalController {
    /*@ngInject*/
    constructor(ModalService, ResultsService) {
        this.modalService = ModalService;
        this.resultService = ResultsService;
        this.data = this.modalService.getData();
        this.modalData = {};

        this.getModalData();
    }

    close() {
        this.modalService.modalInstance.close();
    }

    getModalData() {
        this.resultService.getModalScheduleData(this.data.schedule_id).then(data => {
            this.modalData = data;
            for(var i = 0; i < this.modalData.length; i++) {
                this.modalData[i].fees = JSON.parse(this.modalData[i].fees);
            }
        })
    }
}

export default ScheduleDetailsModalController;