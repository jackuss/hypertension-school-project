class LkfsGalleryModalController {
    /*@ngInject*/
    constructor (ModalService) {
        this.modalService = ModalService;
        this.data = this.modalService.getData();
    }

    close() {
        this.modalService.modalInstance.close();
    }

}

export default LkfsGalleryModalController;