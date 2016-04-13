class ModalService {

    /*@ngInject;*/
    constructor($uibModal) {
        this.uibModal = $uibModal;
        this.modalInstance = {};
        this.data = {};
    }

    openModal(template, controller, size, windowClass) {
        this.modalInstance = this.uibModal.open({
            templateUrl: template,
            controller: controller,
            controllerAs: 'modal',
            windowClass: windowClass,
            size: size
        });
    }

    setData(data) {
        this.data = angular.copy(data);
    }

    getData() {
        return this.data;
    }

}

export default ModalService;