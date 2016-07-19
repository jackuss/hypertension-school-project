export default class LkfsGalleryController {
    /*@ngInject*/
    constructor (ModalService) {
        this.modalService = ModalService;
        this.test = "dupa bardzo blada"
    }

    showFullSizeImage(data) {
        this.modalService.setData(data);
        this.modalService.openModal('/controls/lkfsGallery/modals/lkfsGalleryModalTemplate.html', 'LkfsGalleryModalController', 'sm', 'lkfs-gallery-modal');
    }

}

export default LkfsGalleryController;